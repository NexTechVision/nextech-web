
import React, { useRef, useEffect } from "react";
import { Linkedin, Twitter, Mail } from "lucide-react";

interface TeamMemberProps {
  name: string;
  position: string;
  image: string;
  bio: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
  delay?: number;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  position,
  image,
  bio,
  linkedin,
  twitter,
  email,
  delay = 0,
}) => {
  const memberRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animate-fade-in");
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (memberRef.current) {
      observer.observe(memberRef.current);
    }

    return () => {
      if (memberRef.current) {
        observer.unobserve(memberRef.current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={memberRef}
      className="glass-card rounded-xl overflow-hidden opacity-0 group transition-all duration-300 hover:shadow-md"
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl font-semibold">{name}</h3>
        <p className="text-primary text-sm font-medium mb-3">{position}</p>
        <p className="text-muted-foreground text-sm mb-4">{bio}</p>
        <div className="flex space-x-3">
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={18} />
              <span className="sr-only">LinkedIn</span>
            </a>
          )}
          {twitter && (
            <a
              href={twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Twitter size={18} />
              <span className="sr-only">Twitter</span>
            </a>
          )}
          {email && (
            <a
              href={`mailto:${email}`}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={18} />
              <span className="sr-only">Email</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
