import { useState } from "react";
import { motion } from "framer-motion";

interface Member {
  name: string;
  position: string;
  image: string;
}

const wrap = (name: string, position: string, image: string = ""): Member => ({
  name,
  position,
  image,
});

const sections = [
  {
    title: "Faculty Coordinators",
    members: [
      wrap("Mrs. Rachana Mudholkar", "Faculty Coordinator", "/ms-rachana-mudholkar.jpg"),
      wrap("Mrs. Deepa Mahajan", "Faculty Coordinator", "/deepa.png"),
    ],
  },
  {
    title: "Club Leadership",
    members: [
      wrap("Soham Pachpute", "Lead", "/images/sohampachpute.jpg"),
      wrap("Jeevan Patil", "Co-Lead", "/images/jeevanpatil.jpg"),
    ],
  },
  {
    title: "Executive Team",
    members: [
      wrap("Vaishnavi Deshmukh", "Head", "/images/vaishnavideshmukh.jpg"),
      wrap("Tanvi Homkar", "Co-Head", "/images/tanvihomkar.jpg"),
      wrap("Krishna Kamurti", "Member", "/images/krishnakamurti.jpg"),
      wrap("Neha Shingi", "Member", "/images/nehashingi.jpg"),
      wrap("Kushagra Brijwasi", "Member", "/images/kushagrabrijwasi.jpg"),
    ],
  },
  {
    title: "Marketing Team",
    members: [
      wrap("Shruti Sonalkar", "Head", "/images/shrutisonalkar.jpg"),
      wrap("Mansi Shinde", "Co-Head", "/images/mansishinde.jpg"),
      wrap("Pragati Patil", "Member", "/images/pragatipatil.jpg"),
      wrap("Srushti Pawar", "Member", "/images/srushtipawar.jpg"),
      wrap("Pranav Vanjari", "Member", "/images/pranavvanjari.jpg"),
      wrap("Sneha Mankar", "Member", "/images/snehamankar.jpg"),
    ],
  },
  {
    title: "Editorial Team",
    members: [
      wrap("Jayesh Korake", "Head", "/images/jayeshkorake.jpg"),
      wrap("Rugved Bairagi", "Member", "/images/rugvedbairagi.jpg"),
    ],
  },
  {
    title: "Technical Team",
    members: [
      wrap("Kaivalya Agarkar", "Head", "/images/kaivalyaagarkar.jpg"),
      wrap("Jayesh Korake", "Co-Head", "/images/jayeshkorake.jpg"),
      wrap("Sakshi Jadhav", "Member", "/images/sakshijadhav.jpg"),
      wrap("Snehal Anuse", "Member", "/images/snehalanuse.jpg"),
    ],
  },
  {
    title: "Web Dev Team",
    members: [
      wrap("Hemashree Jawdekar", "Head", "/images/hemashreejawdekar.jpg"),
      wrap("Omkar Patil", "Co-Head", "/images/omkarpatil.jpg"),
      wrap("Anup Padwalkar", "Member", "/images/anuppadwalkar.jpg"),
      wrap("Siya Bhosale", "Member", "/images/siyabhosale.jpg"),
    ],
  },
  {
    title: "Social Media Team",
    members: [
      wrap("Harshada Jagadale", "Head", "/images/harshadajagadale.jpg"),
      wrap("Suyash Shinde", "Member", "/images/suyashshinde.jpg"),
      wrap("Shreeya Takalkar", "Member", "/images/shreeyatakalkar.jpg"),
      wrap("Yash Tolwani", "Member", "/images/yashtolwani.jpg"),
    ],
  },
  {
    title: "Design Team",
    members: [
      wrap("Disha Musale", "Head", "/images/dishamusale.jpg"),
      wrap("Sujal Kunte", "Member", "/images/sujalkunte.jpg"),
      wrap("Raviraj Bhapkar", "Member", "/images/ravirajbhapkar.jpg"),
      wrap("Soham Patil", "Member", "/images/sohampatil.jpg"),
    ],
  },
];

const positionColors: Record<string, { badge: string; ring: string }> = {
  Lead: { badge: "bg-primary/10 text-primary border-primary/20", ring: "ring-primary/40" },
  "Co-Lead": { badge: "bg-secondary/10 text-secondary border-secondary/20", ring: "ring-secondary/40" },
  "Faculty Coordinator": { badge: "bg-accent/10 text-accent border-accent/20", ring: "ring-accent/40" },
  Member: { badge: "bg-muted text-muted-foreground border-border", ring: "ring-border" },
};

const avatarGradients = [
  "from-primary/30 to-accent/30 text-primary",
  "from-secondary/30 to-primary/30 text-secondary",
  "from-accent/30 to-secondary/30 text-accent",
];

const getInitials = (name: string) =>
  name
    .replace(/^(Mrs\.|Mr\.|Dr\.)\s*/i, "")
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

const getGridClass = (count: number) => {
  if (count === 1) return "grid-cols-1 max-w-xs mx-auto";
  if (count === 2) return "grid-cols-1 sm:grid-cols-2 max-w-xl mx-auto";
  if (count === 3) return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-3xl mx-auto";
  return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";
};

// ── TeamCard ──────────────────────────────────────────────────────────────────
const TeamCard = ({ member, index }: { member: Member; index: number }) => {
  const [imgError, setImgError] = useState(false);
  const colors = positionColors[member.position] ?? positionColors["Member"];
  const gradient = avatarGradients[index % avatarGradients.length];
  const showImage = member.image && !imgError;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="group bg-card/80 backdrop-blur border border-border/50 rounded-2xl p-6 text-center
                 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
    >
      {/* Avatar */}
      <div
        className={`mx-auto mb-4 w-24 h-24 rounded-full overflow-hidden ring-2 ${colors.ring}
                    group-hover:ring-4 transition-all duration-300`}
      >
        {showImage ? (
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover object-top"
            onError={() => setImgError(true)}
          />
        ) : (
          <div
            className={`w-full h-full flex items-center justify-center
                        bg-gradient-to-br ${gradient} text-2xl font-bold`}
          >
            {getInitials(member.name)}
          </div>
        )}
      </div>

      {/* Name */}
      <h3 className="font-bold text-base text-foreground mb-2 leading-snug">
        {member.name}
      </h3>

      {/* Badge */}
      <span
        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${colors.badge}`}
      >
        {member.position}
      </span>
    </motion.div>
  );
};

// ── SectionHeading ────────────────────────────────────────────────────────────
const SectionHeading = ({ title }: { title: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
    className="text-center mb-10"
  >
    <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-3">
      {title}
    </h2>
    <div className="mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-primary via-secondary to-accent" />
  </motion.div>
);

// ── Team Page ─────────────────────────────────────────────────────────────────
const Team = () => (
  <div className="relative z-10 pt-24">
    {/* Hero */}
    <section className="py-16 px-4">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Meet The <span className="gradient-text">Team</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            The passionate minds behind our innovation journey.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Sections */}
    {sections.map((section, si) => (
      <section key={si} className="pb-20 px-4 md:px-8">
        <div className="container mx-auto">
          <SectionHeading title={section.title} />
          <div className={`grid gap-6 ${getGridClass(section.members.length)}`}>
            {section.members.map((m, i) => (
              <TeamCard key={`${si}-${i}`} member={m} index={i} />
            ))}
          </div>
        </div>
      </section>
    ))}
  </div>
);

export default Team;