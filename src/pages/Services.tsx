
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, Smartphone, Monitor, Terminal, Server, Search, Database, Code, Layout, Briefcase } from "lucide-react";

const Services = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const serviceCategories = [
    {
      id: "mobile",
      title: "Mobile App Development",
      icon: <Smartphone size={24} />,
      description:
        "Our mobile development team creates custom applications that engage users and drive results. We build native and cross-platform apps that are intuitive, performant, and visually appealing.",
      services: [
        "Native Android Development",
        "iOS App Development",
        "Cross-Platform Solutions",
        "App Maintenance & Support",
        "Mobile UX/UI Design",
        "App Performance Optimization",
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Java"],
      image: "https://images.unsplash.com/photo-1575998389535-ff159e7e079d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "web",
      title: "Web Development",
      icon: <Monitor size={24} />,
      description:
        "We build responsive, user-friendly websites and web applications that deliver exceptional experiences across all devices. Our focus is on creating web solutions that are fast, secure, and scalable.",
      services: [
        "Custom Web Applications",
        "E-commerce Solutions",
        "Progressive Web Apps",
        "Content Management Systems",
        "API Development & Integration",
        "Web Security & Performance",
      ],
      technologies: ["React", "Node.js", "Angular", "Vue.js", "PHP", "ASP.NET", "Python"],
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "ai",
      title: "AI & ML Solutions",
      icon: <Terminal size={24} />,
      description:
        "Leverage the power of artificial intelligence and machine learning to gain insights, automate processes, and create intelligent applications that drive business growth.",
      services: [
        "Predictive Analytics",
        "Computer Vision Solutions",
        "Natural Language Processing",
        "Chatbots & Virtual Assistants",
        "Recommendation Systems",
        "Custom AI/ML Models",
      ],
      technologies: ["TensorFlow", "PyTorch", "OpenAI", "Python", "R", "Computer Vision", "NLP"],
      image: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "pos",
      title: "POS Software",
      icon: <Database size={24} />,
      description:
        "Our point-of-sale solutions help businesses streamline operations, manage inventory, and enhance customer experiences with intuitive, feature-rich software.",
      services: [
        "Retail POS Systems",
        "Restaurant Management Software",
        "Inventory Management",
        "Customer Relationship Management",
        "Payment Processing Integration",
        "Sales Analytics & Reporting",
      ],
      technologies: ["Java", "C#", ".NET", "React", "SQL", "Cloud Databases"],
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "cloud",
      title: "Cloud Deployments",
      icon: <Server size={24} />,
      description:
        "Take advantage of the cloud's scalability, reliability, and security with our cloud deployment services. We help businesses migrate to the cloud and build cloud-native applications.",
      services: [
        "Cloud Migration",
        "Cloud-Native Development",
        "Serverless Architecture",
        "DevOps Automation",
        "Containerization",
        "Cloud Security & Compliance",
      ],
      technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform"],
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "seo",
      title: "SEO Optimization",
      icon: <Search size={24} />,
      description:
        "Improve your digital visibility and drive organic traffic with our comprehensive SEO strategies. We help businesses rank higher in search results and connect with their target audience.",
      services: [
        "SEO Audits & Strategy",
        "On-Page Optimization",
        "Content Strategy",
        "Technical SEO",
        "Local SEO",
        "SEO Analytics & Reporting",
      ],
      technologies: ["Google Analytics", "SEMrush", "Ahrefs", "Schema Markup", "Google Search Console"],
      image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Planning",
      description:
        "We start by understanding your business objectives, target audience, and project requirements to create a comprehensive plan.",
      icon: <Briefcase size={24} />,
    },
    {
      number: "02",
      title: "UX/UI Design",
      description:
        "Our designers create intuitive, user-friendly interfaces that align with your brand and deliver exceptional user experiences.",
      icon: <Layout size={24} />,
    },
    {
      number: "03",
      title: "Development",
      description:
        "Our experienced developers bring designs to life, writing clean, efficient code that follows best practices and industry standards.",
      icon: <Code size={24} />,
    },
    {
      number: "04",
      title: "Testing & Launch",
      description:
        "We thoroughly test all aspects of your solution to ensure quality, then deploy it to your preferred environment.",
      icon: <Server size={24} />,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <span className="inline-block bg-blue-50 text-primary px-4 py-1.5 rounded-full text-sm font-medium">
                Our Services
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
                Comprehensive Digital Solutions for Your Business
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From mobile apps to AI solutions, we offer a full range of software development
                services to help your business thrive in the digital age.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium transition-all hover:bg-primary/90"
              >
                Discuss Your Project <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="relative animate-fade-in">
              <div className="glass-card rounded-2xl p-1 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Our Services"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-100 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-display font-bold tracking-tight mb-4">
              Our Expertise
            </h2>
            <p className="text-muted-foreground">
              We offer end-to-end software development services tailored to your specific needs.
            </p>
          </div>

          <div className="space-y-24">
            {serviceCategories.map((service, index) => (
              <div 
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}>
                  <div className="bg-blue-50 text-primary p-3 rounded-lg inline-block">
                    {service.icon}
                  </div>
                  <h3 className="font-display text-2xl font-semibold">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-4">
                    <h4 className="font-semibold">What We Offer:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {service.services.map((item) => (
                        <li key={item} className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-primary mr-2"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-secondary px-3 py-1 rounded-full text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className={`relative ${index % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="glass-card rounded-2xl p-1 shadow-md overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-auto rounded-2xl"
                    />
                  </div>
                  {index % 2 === 0 ? (
                    <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-50 rounded-2xl -z-10"></div>
                  ) : (
                    <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-50 rounded-2xl -z-10"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-display font-bold tracking-tight mb-4">
              Our Development Process
            </h2>
            <p className="text-muted-foreground">
              We follow a proven methodology to deliver high-quality software solutions that meet your business objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <div 
                key={step.number}
                className="glass-card rounded-xl p-8 hover:shadow-md transition-all-ease"
              >
                <div className="bg-blue-50 text-primary p-3 rounded-lg inline-block mb-4">
                  {step.icon}
                </div>
                <h3 className="font-display text-5xl font-bold text-primary/20 mb-2">
                  {step.number}
                </h3>
                <h4 className="font-display text-xl font-semibold mb-3">
                  {step.title}
                </h4>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold tracking-tight mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto mb-8">
            Contact us today to discuss your project requirements and how NexTechVision can help you achieve your business goals.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium transition-all hover:bg-primary/90"
          >
            Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
