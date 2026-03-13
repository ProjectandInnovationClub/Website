import { Link } from "react-router-dom";
import { Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-10">

        {/* Top Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {/* Brand — full width on mobile */}
          <div className="col-span-2 md:col-span-1 space-y-3">
            <div className="flex items-center gap-3">
              <img
                src="/Logo.png"
                alt="Project & Innovation Club"
                className="w-14 h-14 md:w-20 md:h-20 object-contain flex-shrink-0"
              />
              <span className="font-display font-semibold text-foreground text-sm md:text-base leading-snug">
                Project & Innovation Club
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Where curiosity sparks creation. Building the future through innovation and technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-3 text-sm md:text-base">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2">
              {["Home", "About", "Team", "Activities", "Contact"].map((l) => (
                <Link
                  key={l}
                  to={l === "Home" ? "/" : `/${l.toLowerCase()}`}
                  className="text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  {l}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-3 text-sm md:text-base">
              Contact
            </h4>
            <div className="space-y-2 text-muted-foreground text-sm">
              <p className="break-all">piccomp@pccoer.in</p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-3 text-sm md:text-base">
              Follow Us
            </h4>
            <div className="flex gap-3">
              {[
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/project-and-innovation-club-a372203b7",
                  label: "LinkedIn",
                },
                {
                  icon: Instagram,
                  href: "https://www.instagram.com/pic.pccoer_?igsh=MXFlb2hlbmsza3VwaA==",
                  label: "Instagram",
                },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-lg glass-hover flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-border/30 text-center text-muted-foreground text-xs md:text-sm">
          © 2026 Project & Innovation Club. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;