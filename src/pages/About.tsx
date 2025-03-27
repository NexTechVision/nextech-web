
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TeamMember from "../components/TeamMember";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const teamMembers = [
    {
      name: "Alex Chen",
      position: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80",
      bio: "Tech visionary with 15+ years of experience in software development and business leadership.",
      linkedin: "#",
      twitter: "#",
      email: "alex@nextechvision.com",
    },
    {
      name: "Sarah Johnson",
      position: "CTO",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80",
      bio: "Expert in emerging technologies with a background in AI and cloud architecture.",
      linkedin: "#",
      twitter: "#",
      email: "sarah@nextechvision.com",
    },
    {
      name: "Michael Rodriguez",
      position: "Lead Developer",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80",
      bio: "Full-stack developer with expertise in React, Node.js, and cloud technologies.",
      linkedin: "#",
      twitter: "#",
      email: "michael@nextechvision.com",
    },
    {
      name: "Emily Wong",
      position: "UX/UI Designer",
      image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80",
      bio: "Award-winning designer focused on creating intuitive and user-friendly interfaces.",
      linkedin: "#",
      twitter: "#",
      email: "emily@nextechvision.com",
    },
    {
      name: "David Martinez",
      position: "Mobile Development Lead",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80",
      bio: "Android and iOS expert with a passion for creating seamless mobile experiences.",
      linkedin: "#",
      twitter: "#",
      email: "david@nextechvision.com",
    },
    {
      name: "Jennifer Patel",
      position: "Project Manager",
      image: "https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80",
      bio: "Certified PMP with a track record of delivering complex projects on time and within budget.",
      linkedin: "#",
      twitter: "#",
      email: "jennifer@nextechvision.com",
    },
  ];

  // Company values
  const values = [
    {
      title: "Innovation",
      description: "We constantly explore new technologies and approaches to deliver cutting-edge solutions.",
    },
    {
      title: "Excellence",
      description: "We are committed to the highest standards of quality in everything we create.",
    },
    {
      title: "Collaboration",
      description: "We believe in the power of teamwork and partnership with our clients.",
    },
    {
      title: "Integrity",
      description: "We operate with transparency, honesty, and ethical business practices.",
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
                About NexTechVision
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
                Crafting Digital Excellence Since 2013
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                NexTechVision is a premier software development agency dedicated to transforming 
                businesses through innovative technology solutions. Our team of experts combines 
                creative thinking with technical expertise to deliver exceptional results.
              </p>
            </div>
            <div className="relative animate-fade-in">
              <div className="glass-card rounded-2xl p-1 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="NexTechVision Team"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-100 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="glass-card rounded-2xl p-1 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Our Journey"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-50 rounded-2xl -z-10"></div>
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="font-display text-3xl font-bold tracking-tight">
                Our Journey
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Founded in 2013, NexTechVision began with a simple mission: to help businesses navigate 
                the rapidly evolving digital landscape. What started as a small team of passionate 
                developers has grown into a full-service digital agency with a global client base.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Over the years, we've expanded our services and expertise to meet the changing needs 
                of our clients. From web and mobile applications to AI solutions and cloud deployments, 
                we've consistently delivered cutting-edge technology that drives business growth.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we're proud to be a trusted partner for businesses of all sizes, from startups 
                to enterprise organizations. Our commitment to excellence and innovation remains at the 
                core of everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="glass-card rounded-xl p-8 hover:shadow-md transition-all-ease">
              <div className="bg-blue-50 text-primary p-3 rounded-lg inline-block mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-target"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
              </div>
              <h3 className="font-display text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower businesses with innovative technology solutions that drive growth, 
                improve efficiency, and create exceptional digital experiences. We're committed 
                to solving complex problems with elegant, scalable solutions that make a real 
                difference for our clients and their users.
              </p>
            </div>
            <div className="glass-card rounded-xl p-8 hover:shadow-md transition-all-ease">
              <div className="bg-blue-50 text-primary p-3 rounded-lg inline-block mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lightbulb"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
              </div>
              <h3 className="font-display text-2xl font-semibold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the leading software development partner known for technical excellence, 
                innovative solutions, and exceptional client satisfaction. We aspire to shape 
                the future of digital technology by consistently pushing boundaries and setting 
                new standards for what's possible in the digital realm.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-display font-bold tracking-tight mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground">
              The principles that guide everything we do at NexTechVision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="glass-card rounded-xl p-8 hover:shadow-md transition-all-ease"
              >
                <h3 className="font-display text-xl font-semibold mb-3 text-gradient">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-display font-bold tracking-tight mb-4">
              Meet Our Team
            </h2>
            <p className="text-muted-foreground">
              The talented individuals behind NexTechVision who bring innovation and expertise to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={member.name}
                name={member.name}
                position={member.position}
                image={member.image}
                bio={member.bio}
                linkedin={member.linkedin}
                twitter={member.twitter}
                email={member.email}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold tracking-tight mb-4">
            Join Our Team
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto mb-8">
            Interested in working with us? We're always looking for talented individuals to join our team.
          </p>
          <Link
            to="/careers"
            className="inline-flex items-center bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium transition-all hover:bg-primary/90"
          >
            View Open Positions <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
