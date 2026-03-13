import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MapPin, Linkedin, Instagram, Github } from "lucide-react";

const contactInfo = [
  { icon: Mail, label: "Email", value: "piccomp@pccoer.in" },
  { icon: Phone, label: "Phone", value: "+91 9373617934" },
  { icon: MapPin, label: "Address", value: "Project & Innovation Club, Lab 625, PCCOER College Ravet" },
];

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/project-and-innovation-club-a372203b7" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/pic.pccoer_?igsh=MXFlb2hlbmsza3VwaA==" },
];

const Contact = () => {
  return (
    <div className="relative z-10 pt-24">
      <section className="section-padding">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Have an idea? Want to join? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Info */}
            <div className="space-y-8">
              <div className="space-y-6">
                {contactInfo.map((c, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <c.icon size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-muted-foreground text-sm">{c.label}</p>
                      <p className="text-foreground font-display">{c.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div>
                <h3 className="font-display font-semibold text-foreground mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  {socials.map((s, i) => (
                    <a
                      key={i}
                      href={s.href}
                      target="_blank"
                      className="w-12 h-12 rounded-xl glass-hover flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                    >
                      <s.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
