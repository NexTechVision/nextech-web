
import React, { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  content: string;
  author: string;
  position: string;
  company: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    content:
      "NexTechVision transformed our business with their cutting-edge web application. Their team understood our needs perfectly and delivered a solution that exceeded our expectations.",
    author: "Sarah Johnson",
    position: "CEO",
    company: "InnovateTech",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80",
  },
  {
    id: 2,
    content:
      "The mobile app developed by NexTechVision has significantly increased our customer engagement and streamlined our operations. Their development process was transparent and efficient.",
    author: "Michael Chen",
    position: "CTO",
    company: "FutureSoft",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80",
  },
  {
    id: 3,
    content:
      "Working with NexTechVision on our AI solution was a game-changer. Their expertise in machine learning and commitment to our project goals resulted in a powerful tool that gives us a competitive edge.",
    author: "Emily Rodriguez",
    position: "Director of Innovation",
    company: "TechForward",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80",
  },
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [currentIndex]);

  return (
    <section className="bg-secondary/50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-display font-bold tracking-tight mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground">
            Don't just take our word for it. Hear from some of our satisfied clients
            about their experience working with NexTechVision.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div 
            className="glass-card rounded-2xl p-10 md:p-14"
            style={{ minHeight: '26rem' }}
          >
            <Quote 
              className="text-primary/20 mb-6" 
              size={48} 
            />
            <div 
              className="transition-all duration-500 ease-in-out"
              key={currentIndex}
            >
              <p className="text-lg md:text-xl leading-relaxed mb-8 animate-fade-in">
                {testimonials[currentIndex].content}
              </p>
              <div className="flex items-center animate-fade-in">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].author}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-display font-semibold">
                    {testimonials[currentIndex].author}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[currentIndex].position}, {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
            <button
              onClick={handlePrev}
              className="bg-white shadow-md rounded-full p-3 text-foreground hover:text-primary transition-all"
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className="bg-white shadow-md rounded-full p-3 text-foreground hover:text-primary transition-all"
              aria-label="Next testimonial"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (isAnimating) return;
                setIsAnimating(true);
                setCurrentIndex(index);
              }}
              className={`w-2.5 h-2.5 rounded-full mx-1 transition-all ${
                index === currentIndex ? "bg-primary scale-125" : "bg-gray-300"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
