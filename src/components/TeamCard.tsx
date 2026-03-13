import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

interface TeamCardProps {
  name: string;
  position: string;
  image?: string;
  linkedin?: string;
  github?: string;
  index: number;
}

const TeamCard = ({ name, position, image, linkedin, github, index }: TeamCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group glass-hover rounded-xl p-6 text-center"
    >
      <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center overflow-hidden border-2 border-border/50 group-hover:border-primary/50 transition-colors duration-300">
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover" />
        ) : (
          <span className="font-display font-bold text-2xl text-primary">
            {name.split(" ").map((n) => n[0]).join("")}
          </span>
        )}
      </div>
      <h3 className="font-display font-semibold text-foreground">{name}</h3>
      <p className="text-primary text-sm mt-1">{position}</p>
      <div className="flex items-center justify-center gap-3 mt-4">
        {linkedin && (
          <a href={linkedin} className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin size={16} />
          </a>
        )}
        {github && (
          <a href={github} className="text-muted-foreground hover:text-primary transition-colors">
            <Github size={16} />
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default TeamCard;
