
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Projects = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      title: "EcoTrack Mobile App",
      category: "Mobile Development",
      description: "A comprehensive sustainability tracking application for environmentally conscious consumers. Features include carbon footprint calculation, eco-friendly product recommendations, and community challenges.",
      image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
      link: "#",
      tags: ["mobile", "android", "ios"],
    },
    {
      title: "HealthConnect Platform",
      category: "Web Development",
      description: "A telehealth platform connecting patients with healthcare providers for virtual consultations. Includes appointment scheduling, secure video chat, and electronic health records integration.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
      link: "#",
      tags: ["web", "healthcare"],
    },
    {
      title: "SmartRetail POS",
      category: "POS System",
      description: "A modern point-of-sale system with inventory management and customer relationship features. Helps retail businesses streamline operations and enhance customer experience.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
      link: "#",
      tags: ["pos", "retail"],
    },
    {
      title: "Fintech Analytics Dashboard",
      category: "Web Development",
      description: "A sophisticated financial analytics platform for investment professionals. Features real-time market data, portfolio management, and advanced visualization tools.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
      link: "#",
      tags: ["web", "finance", "dashboard"],
    },
    {
      title: "FoodDelivery App",
      category: "Mobile Development",
      description: "A food delivery application connecting local restaurants with customers. Features include real-time order tracking, in-app payments, and restaurant management system.",
      image: "https://images.unsplash.com/photo-1593504049359-74330189a345?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
      link: "#",
      tags: ["mobile", "food", "delivery"],
    },
    {
      title: "Smart Home Control System",
      category: "IoT Solution",
      description: "An integrated IoT solution for smart home automation. Controls lighting, temperature, security systems, and appliances through a centralized mobile and web interface.",
      image: "https://images.unsplash.com/photo-1558002038-bb0237f4b24f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
      link: "#",
      tags: ["iot", "mobile", "web"],
    },
    {
      title: "AI-Powered Chatbot",
      category: "AI/ML Solution",
      description: "An intelligent customer service chatbot using natural language processing to understand and address customer inquiries. Integrates with CRM systems and learns from interactions.",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
      link: "#",
      tags: ["ai", "web"],
    },
    {
      title: "E-commerce Platform",
      category: "Web Development",
      description: "A feature-rich e-commerce platform for a fashion retailer. Includes product management, customer accounts, payment processing, and order fulfillment features.",
      image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
      link: "#",
      tags: ["web", "ecommerce"],
    },
    {
      title: "Cloud Migration Service",
      category: "Cloud Solution",
      description: "A comprehensive cloud migration solution for a financial services company. Included infrastructure assessment, data migration, and implementation of cloud-native services.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
      link: "#",
      tags: ["cloud", "finance"],
    },
  ];

  const filters = [
    { name: "All Projects", value: "all" },
    { name: "Mobile", value: "mobile" },
    { name: "Web", value: "web" },
    { name: "AI/ML", value: "ai" },
    { name: "POS", value: "pos" },
    { name: "Cloud", value: "cloud" },
    { name: "IoT", value: "iot" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.tags.includes(activeFilter));

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block bg-blue-50 text-primary px-4 py-1.5 rounded-full text-sm font-medium animate-fade-in">
              Our Portfolio
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight mt-4 mb-6 animate-fade-in">
              Showcasing Our Latest Projects
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 animate-fade-in">
              Explore our diverse portfolio of successful projects across various industries and technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === filter.value
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-foreground hover:bg-secondary/80"
                }`}
              >
                {filter.name}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
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
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="inline-block bg-blue-50 text-primary px-4 py-1.5 rounded-full text-sm font-medium">
                Featured Case Study
              </span>
              <h2 className="font-display text-3xl font-bold tracking-tight">
                HealthConnect Telehealth Platform
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                When a leading healthcare provider needed a secure, HIPAA-compliant telehealth solution, 
                they turned to NexTechVision. We developed a comprehensive platform that enables virtual 
                consultations, secure messaging, and integrated electronic health records.
              </p>
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h4 className="font-medium text-sm mb-1">Client</h4>
                    <p className="text-muted-foreground text-sm">Regional Healthcare Provider</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h4 className="font-medium text-sm mb-1">Timeline</h4>
                    <p className="text-muted-foreground text-sm">6 Months</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h4 className="font-medium text-sm mb-1">Services</h4>
                    <p className="text-muted-foreground text-sm">Web & Mobile Development</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h4 className="font-medium text-sm mb-1">Technologies</h4>
                    <p className="text-muted-foreground text-sm">React, Node.js, AWS, React Native</p>
                  </div>
                </div>
              </div>
              <Link
                to="#"
                className="inline-flex items-center bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium transition-all hover:bg-primary/90"
              >
                View Case Study <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="relative">
              <div className="glass-card rounded-2xl p-1 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="HealthConnect Telehealth Platform"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-100 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Results & Metrics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-display font-bold tracking-tight mb-4">
              Measurable Results
            </h2>
            <p className="text-muted-foreground">
              Our focus on quality and performance delivers tangible outcomes for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass-card rounded-xl p-8 text-center hover:shadow-md transition-all-ease">
              <h3 className="font-display text-4xl font-bold text-primary mb-2">98%</h3>
              <p className="text-foreground font-medium">Client Satisfaction Rate</p>
            </div>
            <div className="glass-card rounded-xl p-8 text-center hover:shadow-md transition-all-ease">
              <h3 className="font-display text-4xl font-bold text-primary mb-2">40%</h3>
              <p className="text-foreground font-medium">Average Increase in User Engagement</p>
            </div>
            <div className="glass-card rounded-xl p-8 text-center hover:shadow-md transition-all-ease">
              <h3 className="font-display text-4xl font-bold text-primary mb-2">35%</h3>
              <p className="text-foreground font-medium">Reduction in Development Time</p>
            </div>
            <div className="glass-card rounded-xl p-8 text-center hover:shadow-md transition-all-ease">
              <h3 className="font-display text-4xl font-bold text-primary mb-2">60%</h3>
              <p className="text-foreground font-medium">of Clients Return for Additional Projects</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold tracking-tight mb-4">
            Have a Project in Mind?
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto mb-8">
            Let's discuss how NexTechVision can help you bring your vision to life.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium transition-all hover:bg-primary/90"
          >
            Start a Conversation <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
