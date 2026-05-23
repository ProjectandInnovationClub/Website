import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RecuritmentRegister = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [roles, setRoles] = useState<string[]>([]);
  const [year, setYear] = useState("");
  const [showExperienceBox, setShowExperienceBox] = useState(false);
  const [experience, setExperience] = useState("");
  const [errors, setErrors] = useState<any>({});

  const navigate = useNavigate();

  const roleOptions = [
    "Event Management Member",
    "Marketing Team Member",
    "Technical Team Member",
    "Design Team Member",
    "Content Team Member",
  ];

  const headRoles = [
    "PIC President",
    "PIC Vice-President",
    "PIC Treasurer",
    "Event Management Head",
    "Marketing Team Head",
    "Technical Team Head",
    "Design Team Head",
  ];

  const handleRoleChange = (role: string) => {
    if (roles.includes(role)) {
      setRoles(roles.filter((r) => r !== role));
    } else {
      setRoles([...roles, role]);
    }
  };

  const isSenior = year === "3rd Year" || year === "Final Year";

  /* ---------------- VALIDATION ---------------- */
  const validate = (form: any) => {
    let newErrors: any = {};

    if (!form.firstName) newErrors.firstName = "Enter your first name";
    if (!form.lastName) newErrors.lastName = "Enter your last name";

    if (!form.email) newErrors.email = "Enter your email";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Enter valid email";

    if (!form.phone) newErrors.phone = "Enter phone number";
    else if (!/^[0-9]{10}$/.test(form.phone))
      newErrors.phone = "Enter valid 10-digit number";

    if (!form.college) newErrors.college = "Enter college name";
    if (!year) newErrors.year = "Select year";

    if (!form.roll) newErrors.roll = "Enter roll number";
    else if (!/^[A-Z]{5}[0-9]{2}$/.test(form.roll))
      newErrors.roll = "Format: TECOC48";

    if (year !== "1st Year") {
      if (roles.length === 0) newErrors.roles = "Select at least one role";
      if (!form.whyJoin) newErrors.whyJoin = "Required";
      if (!form.whySelect) newErrors.whySelect = "Required";

      if (isSenior) {
        if (!experience) newErrors.experience = "Select option";
        if (showExperienceBox && !form.expText)
          newErrors.expText = "Required";
      }
    }

    return newErrors;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const form = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      college: e.target.college.value,
      roll: e.target.roll.value,
      whyJoin: e.target.whyJoin?.value,
      whySelect: e.target.whySelect?.value,
      expText: e.target.expText?.value,
    };

    const validationErrors = validate(form);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    alert("Form Submitted Successfully 🚀");
  };

  return (
    <div className="w-full pt-28 pb-20 px-6 md:px-12 bg-background">

      {/* BACK BUTTON */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 rounded-lg border border-white/20 text-sm
                   hover:border-primary hover:text-primary transition"
      >
        ← Back
      </button>

      {/* TITLE */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold">
          PIC Club <span className="text-primary">Recruitment</span>
        </h1>
      </div>

      <form className="space-y-16" onSubmit={handleSubmit}>

        {/* PERSONAL */}
        <Section title="1. Personal Information">
          <Grid cols="lg:grid-cols-4">
            <Input name="firstName" label="First Name" error={errors.firstName} setErrors={setErrors}/>
            <Input name="lastName" label="Last Name" error={errors.lastName} setErrors={setErrors}/>
            <Input name="email" label="Email ID" error={errors.email} setErrors={setErrors}/>
            <Input name="phone" label="Phone Number" error={errors.phone} setErrors={setErrors}/>
          </Grid>
        </Section>

        {/* COLLEGE */}
        <Section title="2. College Details">
          <Grid cols="lg:grid-cols-3">
            <Input name="college" label="College Name" error={errors.college} setErrors={setErrors}/>

            <Select
              name="year"
              label="Year of Study"
              value={year}
              error={errors.year}
              setErrors={setErrors}
              onChange={(e: any) => setYear(e.target.value)}
              options={["1st Year", "2nd Year", "3rd Year", "Final Year"]}
            />

            <Input name="roll" label="Roll Number" error={errors.roll} setErrors={setErrors}/>
          </Grid>
        </Section>

        {/* SECTION 3 */}
        {year !== "1st Year" && (
          <Section title="3. Post Applying For">

            <RoleSelector
              roles={roles}
              options={isSenior ? headRoles : roleOptions}
              handleRoleChange={handleRoleChange}
              error={errors.roles}
            />

            <p> Why do you want to join the PIC club?</p>
            <Textarea name="whyJoin" label="Write your answer here..." error={errors.whyJoin} setErrors={setErrors}/>

            <p>Why should we select you?</p>
            <Textarea name="whySelect" label="Write your answer here..." error={errors.whySelect} setErrors={setErrors}/>

            {isSenior && (
              <>
                <div>
                  <p> Experience *</p>
                  
                  <div className="flex gap-6">
                    <label>
                      <input
                        type="radio"
                        name="experience"
                        onChange={() => {
                          setExperience("yes");
                          setShowExperienceBox(true);
                          setErrors((prev:any)=>({...prev, experience:""}));
                        }}
                      /> Yes
                    </label>

                    <label>
                      <input
                        type="radio"
                        name="experience"
                        onChange={() => {
                          setExperience("no");
                          setShowExperienceBox(false);
                          setErrors((prev:any)=>({...prev, experience:""}));
                        }}
                      /> No
                    </label>
                  </div>

                  {errors.experience && (
                    <p className="text-red-500 text-sm">{errors.experience}</p>
                  )}
                </div>

                {showExperienceBox && (
                  <Textarea
                    name="expText"
                    label="Elaborate experience"
                    error={errors.expText}
                    setErrors={setErrors}
                  />
                )}
              </>
            )}

          </Section>
        )}

        {/* BUTTONS */}
        <div className="flex justify-center gap-4">
          <button type="reset" className="px-6 py-3 border rounded-xl">
            Reset
          </button>

          <button type="submit" className="px-8 py-3 bg-primary text-white rounded-xl">
            Submit →
          </button>
        </div>

      </form>
    </div>
  );
};

export default RecuritmentRegister;

/* COMPONENTS */

const Section = ({ title, children }: any) => (
  <div className="space-y-8">
    <h2 className="text-xl font-semibold">{title}</h2>
    {children}
  </div>
);

const Grid = ({ children, cols = "" }: any) => (
  <div className={`grid grid-cols-1 md:grid-cols-2 ${cols} gap-6`}>
    {children}
  </div>
);

const Input = ({ label, name, error, setErrors }: any) => (
  <div>
    <input
      name={name}
      placeholder={`Enter ${label.toLowerCase()}`}
      className={`input ${error ? "border-red-500" : ""}`}
      onChange={() =>
        setErrors((prev: any) => ({ ...prev, [name]: "" }))
      }
    />
    {error && <p className="text-red-500 text-sm">{error}</p>}
  </div>
);

const Select = ({ label, name, value, onChange, options, error, setErrors }: any) => (
  <div>
    <select
      name={name}
      value={value}
      onChange={(e) => {
        onChange(e);
        setErrors((prev: any) => ({ ...prev, [name]: "" }));
      }}
      className={`input ${error ? "border-red-500" : ""}`}
    >
      <option value="">Select {label}</option>
      {options.map((o: string, i: number) => (
        <option key={i}>{o}</option>
      ))}
    </select>
    {error && <p className="text-red-500 text-sm">{error}</p>}
  </div>
);

const Textarea = ({ label, name, error, setErrors }: any) => (
  <div>
    <textarea
      name={name}
      rows={4}
      placeholder={label}
      className={`input ${error ? "border-red-500" : ""}`}
      onChange={() =>
        setErrors((prev: any) => ({ ...prev, [name]: "" }))
      }
    />
    {error && <p className="text-red-500 text-sm">{error}</p>}
  </div>
);

const RoleSelector = ({ roles, options, handleRoleChange, error }: any) => (
  <div>
    <div className="flex flex-wrap gap-3">
      {options.map((role: string) => (
        <button
          type="button"
          key={role}
          onClick={() => handleRoleChange(role)}
          className={`px-4 py-2 rounded-full border ${
            roles.includes(role)
              ? "bg-primary text-white"
              : "border-white/20"
          }`}
        >
          {role}
        </button>
      ))}
    </div>
    {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
  </div>
);