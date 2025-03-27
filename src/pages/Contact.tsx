
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import { Mail, Phone, MapPin, Clock, Linkedin, Facebook, Twitter, Instagram, Github } from "lucide-react";

const Contact = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5 text-primary" />,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
    },
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      title: "Email",
      details: ["info@nextechvision.com", "support@nextechvision.com"],
    },
    {
      icon: <MapPin className="h-5 w-5 text-primary" />,
      title: "Location",
      details: ["1234 Tech Park Lane", "Silicon Valley, CA 94043", "United States"],
    },
    {
      icon: <Clock className="h-5 w-5 text-primary" />,
      title: "Hours",
      details: ["Monday - Friday: 9AM - 6PM", "Saturday - Sunday: Closed"],
    },
  ];

  const socialLinks = [
    { icon: <Linkedin className="h-5 w-5" />, url: "#", label: "LinkedIn" },
    { icon: <Facebook className="h-5 w-5" />, url: "#", label: "Facebook" },
    { icon: <Twitter className="h-5 w-5" />, url: "#", label: "Twitter" },
    { icon: <Instagram className="h-5 w-5" />, url: "#", label: "Instagram" },
    { icon: <Github className="h-5 w-5" />, url: "#", label: "GitHub" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block bg-blue-50 text-primary px-4 py-1.5 rounded-full text-sm font-medium animate-fade-in">
              Get in Touch
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight mt-4 mb-6 animate-fade-in">
              Let's Discuss Your Project
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 animate-fade-in">
              Reach out to us to discuss how NexTechVision can help you transform your ideas into reality.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-10">
              <div className="space-y-6">
                <h2 className="font-display text-3xl font-bold tracking-tight">
                  Contact Information
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Fill out the form or contact us directly using the information below. Our team will get back to you as soon as possible.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-blue-50 p-3 rounded-lg mr-4">{item.icon}</div>
                    <div>
                      <h3 className="font-medium mb-1">{item.title}</h3>
                      <div className="space-y-1">
                        {item.details.map((detail, i) => (
                          <p key={i} className="text-muted-foreground text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">Connect With Us</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      className="bg-secondary text-foreground p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label={link.label}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Map */}
              <div className="rounded-xl overflow-hidden shadow-md h-64 md:h-80">
                <iframe
                  title="Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d226.33773258148514!2d73.80933660593604!3d18.483778882820733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfd9b13c1ea1%3A0x634bdea9529d2c27!2sWarje%20Jakat%20Naka%2C%20Warje%2C%20Pune%2C%20Maharashtra!5e1!3m2!1sen!2sin!4v1743068638171!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-card rounded-xl p-8 shadow-md">
              <h2 className="font-display text-2xl font-semibold mb-6">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-display font-bold tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Find answers to common questions about working with NexTechVision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card rounded-xl p-8 hover:shadow-md transition-all-ease">
              <h3 className="font-display text-xl font-semibold mb-3">
                What is your typical project process?
              </h3>
              <p className="text-muted-foreground">
                Our process typically includes discovery, planning, design, development, testing, and deployment phases. We work collaboratively with clients throughout the process to ensure the final product meets their requirements.
              </p>
            </div>
            <div className="glass-card rounded-xl p-8 hover:shadow-md transition-all-ease">
              <h3 className="font-display text-xl font-semibold mb-3">
                How long does a typical project take?
              </h3>
              <p className="text-muted-foreground">
                Project timelines vary depending on complexity and scope. A simple website might take 4-6 weeks, while a complex mobile app could take 3-6 months. We provide detailed timelines during the planning phase.
              </p>
            </div>
            <div className="glass-card rounded-xl p-8 hover:shadow-md transition-all-ease">
              <h3 className="font-display text-xl font-semibold mb-3">
                Do you provide ongoing support?
              </h3>
              <p className="text-muted-foreground">
                Yes, we offer various support and maintenance plans to ensure your solution continues to function optimally after launch. This includes regular updates, bug fixes, and feature enhancements.
              </p>
            </div>
            <div className="glass-card rounded-xl p-8 hover:shadow-md transition-all-ease">
              <h3 className="font-display text-xl font-semibold mb-3">
                What information do you need to provide a quote?
              </h3>
              <p className="text-muted-foreground">
                To provide an accurate quote, we need details about your project goals, required features, timeline, and any existing design or technical specifications. The more information you provide, the more precise our estimate will be.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
