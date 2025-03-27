
import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
  delay?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  category,
  description,
  image,
  link,
  delay = 0,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

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

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={cardRef}
      className="group relative overflow-hidden rounded-xl opacity-0"
    >
      <div className="aspect-video w-full overflow-hidden rounded-xl">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <span className="inline-block bg-primary/20 text-primary-foreground text-xs font-medium px-2.5 py-1 rounded mb-2">
            {category}
          </span>
          <h3 className="text-xl font-display font-bold text-white mb-2">
            {title}
          </h3>
          <p className="text-white/90 mb-4 line-clamp-2">
            {description}
          </p>
          <Link
            to={link}
            className="inline-flex items-center font-medium text-sm text-white bg-primary/80 hover:bg-primary px-4 py-2 rounded-md transition-colors"
          >
            View Project <ExternalLink size={14} className="ml-1.5" />
          </Link>
        </div>
      </div>
      <div className="p-4">
        <span className="text-sm font-medium text-primary">{category}</span>
        <h3 className="text-lg font-display font-semibold mt-1">{title}</h3>
      </div>
    </div>
  );
};

export default ProjectCard;
