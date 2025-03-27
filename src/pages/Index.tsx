
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import TestimonialSection from "../components/TestimonialSection";
import ServiceCard from "../components/ServiceCard";
import ProjectCard from "../components/ProjectCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowRight, Monitor, Smartphone, Terminal, Server, Search, Award } from "lucide-react";

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: <Smartphone size={24} />,
      title: "Mobile App Development",
      description: "Customized Android & iOS applications built to drive engagement and deliver seamless user experiences.",
    },
    {
      icon: <Monitor size={24} />,
      title: "Web Development",
      description: "Responsive, interactive websites and web applications optimized for performance and user experience.",
    },
    {
      icon: <Terminal size={24} />,
      title: "AI & ML Solutions",
      description: "Intelligent applications powered by advanced machine learning algorithms and artificial intelligence.",
    },
    {
      icon: <Server size={24} />,
      title: "POS Software",
      description: "Robust point-of-sale systems designed to streamline operations and enhance customer service.",
    },
    {
      icon: <Server size={24} />,
      title: "Cloud Deployments",
      description: "Secure, scalable cloud solutions for your applications, ensuring reliability and performance.",
    },
    {
      icon: <Search size={24} />,
      title: "SEO Optimization",
      description: "Strategic optimization to improve your digital visibility, driving organic traffic and growth.",
    },
  ];

  const featuredProjects = [
    {
      title: "EcoTrack Mobile App",
      category: "Mobile Development",
      description: "A comprehensive sustainability tracking application for environmentally conscious consumers.",
      image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
      link: "/projects",
    },
    {
      title: "HealthConnect Platform",
      category: "Web Development",
      description: "A telehealth platform connecting patients with healthcare providers for virtual consultations.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
      link: "/projects",
    },
    {
      title: "SmartRetail POS",
      category: "POS System",
      description: "A modern point-of-sale system with inventory management and customer relationship features.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
      link: "/projects",
    },
  ];

  // Stats data
  const stats = [
    { value: "150+", label: "Projects Completed" },
    { value: "50+", label: "Happy Clients" },
    { value: "10+", label: "Years Experience" },
    { value: "25+", label: "Team Members" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl font-display font-bold tracking-tight mb-4">
              Our Services
            </h2>
            <p className="text-muted-foreground">
              We offer a comprehensive range of digital services to help your business grow and thrive in the digital landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index * 100}
              />
            ))}
          </div>

          <div className="text-center mt-10 md:mt-12">
            <Link
              to="/services"
              className="inline-flex items-center bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium transition-all hover:bg-primary/90"
            >
              View All Services <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-14 md:py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat) => (
              <div 
                key={stat.label} 
                className="text-center"
              >
                <div className="relative mb-2 inline-block">
                  <Award className="h-8 w-8 text-primary/20 absolute -top-2 -right-2" />
                  <p className="text-3xl md:text-4xl font-display font-bold text-foreground">
                    {stat.value}
                  </p>
                </div>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl font-display font-bold tracking-tight mb-4">
              Featured Projects
            </h2>
            <p className="text-muted-foreground">
              Explore some of our recent work that demonstrates our expertise and commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                category={project.category}
                description={project.description}
                image={project.image}
                link={project.link}
                delay={index * 100}
              />
            ))}
          </div>

          <div className="text-center mt-10 md:mt-12">
            <Link
              to="/projects"
              className="inline-flex items-center bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium transition-all hover:bg-primary/90"
            >
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSection />

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold tracking-tight mb-4">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto mb-8">
            Let's discuss how NexTechVision can help you achieve your business goals with custom software solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium transition-all hover:bg-primary/90"
            >
              Get in Touch
            </Link>
            <Link
              to="/services"
              className="bg-secondary text-foreground px-6 py-3 rounded-md font-medium transition-all hover:bg-secondary/80"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
