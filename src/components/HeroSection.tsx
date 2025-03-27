
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const childElements = heroRef.current?.querySelectorAll(".animate-on-scroll");
    childElements?.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      childElements?.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="relative overflow-hidden pt-20" ref={heroRef}>
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50 rounded-bl-full opacity-70"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-50 rounded-tr-full opacity-70"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-28 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <span className="animate-on-scroll opacity-0 inline-block bg-blue-50 text-primary px-4 py-1.5 rounded-full text-sm font-medium">
              Innovate. Build. Transform.
            </span>
            <h1 className="animate-on-scroll opacity-0 font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              We Build <span className="text-gradient">Digital Solutions</span> That Transform Businesses
            </h1>
            <p className="animate-on-scroll opacity-0 text-lg text-muted-foreground leading-relaxed">
              NexTechVision is a premium software development agency that delivers 
              cutting-edge digital solutions to help businesses thrive in the digital age.
            </p>
            <div className="animate-on-scroll opacity-0 flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium transition-all hover:bg-primary/90"
              >
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center justify-center bg-secondary text-foreground px-6 py-3 rounded-md font-medium transition-all hover:bg-secondary/80"
              >
                View Our Work
              </Link>
            </div>
          </div>
          <div className="animate-on-scroll opacity-0 relative">
            <div className="glass-card rounded-2xl p-1 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1581472723648-909f4851d4ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Digital Solutions"
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-50 rounded-2xl -z-10"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-100 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
