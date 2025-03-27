
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CareerForm from "../components/CareerForm";
import { ArrowRight, Check } from "lucide-react";

const Careers = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedPosition, setSelectedPosition] = useState<string | null>(null);

  const openings = [
    {
      title: "Senior Frontend Developer",
      location: "Remote / Silicon Valley",
      type: "Full-time",
      description: "We're looking for an experienced frontend developer with expertise in React.js to join our team. You'll be responsible for building high-performance, responsive web applications for our clients.",
      requirements: [
        "5+ years of experience in frontend development",
        "Expert knowledge of React.js, Redux, and modern JavaScript",
        "Experience with responsive design and CSS frameworks",
        "Strong understanding of web performance optimization",
        "Experience with testing frameworks like Jest and React Testing Library",
      ],
      preferred: [
        "Experience with TypeScript",
        "Familiarity with Next.js or similar frameworks",
        "Understanding of UX/UI design principles",
        "Experience with GraphQL",
      ],
    },
    {
      title: "Mobile Developer (iOS/Android)",
      location: "Remote / Silicon Valley",
      type: "Full-time",
      description: "We're seeking a talented mobile developer to create innovative applications for iOS and Android platforms. You'll work with our team to design, develop, and deploy mobile solutions for our clients.",
      requirements: [
        "3+ years of experience in mobile app development",
        "Experience with React Native or native iOS/Android development",
        "Knowledge of app performance optimization techniques",
        "Understanding of mobile UI/UX principles",
        "Experience with RESTful APIs and data integration",
      ],
      preferred: [
        "Experience with both iOS and Android platforms",
        "Knowledge of app store submission processes",
        "Familiarity with mobile testing frameworks",
        "Experience with offline-first mobile applications",
      ],
    },
    {
      title: "UI/UX Designer",
      location: "Remote / Silicon Valley",
      type: "Full-time",
      description: "We're looking for a creative UI/UX designer to join our team. You'll be responsible for creating beautiful, intuitive user interfaces for web and mobile applications, working closely with our development team to bring designs to life.",
      requirements: [
        "3+ years of experience in UI/UX design",
        "Proficiency with design tools like Figma, Adobe XD, or Sketch",
        "Strong portfolio demonstrating UI/UX projects",
        "Experience with responsive web design",
        "Understanding of accessibility standards",
      ],
      preferred: [
        "Knowledge of HTML/CSS for prototype development",
        "Experience with design systems",
        "Familiarity with user research and testing methodologies",
        "Experience with animation and micro-interactions",
      ],
    },
    {
      title: "Backend Developer",
      location: "Remote / Silicon Valley",
      type: "Full-time",
      description: "We're seeking a skilled backend developer to build robust, scalable server-side applications. You'll work with our team to design and implement APIs, database structures, and server architectures for our clients' projects.",
      requirements: [
        "3+ years of experience in backend development",
        "Proficiency with Node.js, Python, or similar backend technologies",
        "Experience with database design and management (SQL and NoSQL)",
        "Knowledge of RESTful API design principles",
        "Experience with cloud services (AWS, Azure, or GCP)",
      ],
      preferred: [
        "Experience with microservices architecture",
        "Knowledge of serverless computing",
        "Familiarity with Docker and container orchestration",
        "Experience with CI/CD pipelines",
      ],
    },
  ];

  // Benefits
  const benefits = [
    {
      title: "Competitive Salary",
      description: "We offer industry-competitive compensation packages based on experience and skills.",
    },
    {
      title: "Remote Work Flexibility",
      description: "Work from anywhere with our flexible remote work policy.",
    },
    {
      title: "Health Insurance",
      description: "Comprehensive health, dental, and vision insurance for you and your dependents.",
    },
    {
      title: "Professional Development",
      description: "Budget for conferences, courses, and learning resources to support your growth.",
    },
    {
      title: "Paid Time Off",
      description: "Generous vacation policy, plus paid holidays and sick leave.",
    },
    {
      title: "401(k) Matching",
      description: "We match a portion of your retirement contributions to help you save for the future.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block bg-blue-50 text-primary px-4 py-1.5 rounded-full text-sm font-medium animate-fade-in">
              Join Our Team
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight mt-4 mb-6 animate-fade-in">
              Build the Future With Us
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 animate-fade-in">
              We're looking for talented individuals to join our team and help us create innovative digital solutions.
            </p>
          </div>
        </div>
      </section>

      {/* About Working at NexTechVision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-display text-3xl font-bold tracking-tight">
                Why Work With Us?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                At NexTechVision, we believe in creating an environment where innovation thrives
                and talent is nurtured. We're a team of passionate individuals dedicated to solving
                complex problems with elegant solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our culture is built on collaboration, continuous learning, and delivering excellence.
                We value diverse perspectives and believe that the best ideas come from teams with
                different backgrounds and experiences.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Work on diverse, challenging projects across various industries</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Collaborate with a talented team of professionals</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Stay at the forefront of technology with continuous learning opportunities</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Flexible work arrangements to maintain a healthy work-life balance</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="glass-card rounded-2xl p-1 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Team Collaboration"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-100 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-display font-bold tracking-tight mb-4">
              Benefits & Perks
            </h2>
            <p className="text-muted-foreground">
              We offer a range of benefits designed to support your well-being and professional growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={benefit.title}
                className="glass-card rounded-xl p-8 hover:shadow-md transition-all-ease"
              >
                <h3 className="font-display text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-display font-bold tracking-tight mb-4">
              Current Openings
            </h2>
            <p className="text-muted-foreground">
              Browse our current job openings and find the perfect role for your skills and career goals.
            </p>
          </div>

          <div className="space-y-6">
            {openings.map((job, index) => (
              <div
                key={job.title}
                className={`glass-card rounded-xl overflow-hidden transition-all duration-300 ${
                  selectedPosition === job.title ? "shadow-md" : "hover:shadow-sm"
                }`}
              >
                <div 
                  className="px-8 py-6 cursor-pointer"
                  onClick={() => setSelectedPosition(selectedPosition === job.title ? null : job.title)}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div>
                      <h3 className="font-display text-xl font-semibold">{job.title}</h3>
                      <div className="flex flex-wrap items-center mt-2">
                        <span className="text-sm text-muted-foreground mr-4">{job.location}</span>
                        <span className="text-sm bg-blue-50 text-primary px-2 py-0.5 rounded-full">
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <button
                        className={`flex items-center justify-center w-8 h-8 rounded-full bg-secondary transition-transform duration-300 ${
                          selectedPosition === job.title ? "rotate-180" : ""
                        }`}
                      >
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>

                {selectedPosition === job.title && (
                  <div className="px-8 py-6 border-t border-gray-100 animate-fade-in">
                    <p className="text-muted-foreground mb-6">{job.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Requirements:</h4>
                      <ul className="space-y-2">
                        {job.requirements.map((req, i) => (
                          <li key={i} className="flex items-start">
                            <Check className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                            <span className="text-muted-foreground text-sm">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Nice to Have:</h4>
                      <ul className="space-y-2">
                        {job.preferred.map((pref, i) => (
                          <li key={i} className="flex items-start">
                            <Check className="h-4 w-4 text-primary/50 mr-2 mt-1 flex-shrink-0" />
                            <span className="text-muted-foreground text-sm">{pref}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button
                      onClick={() => {
                        document.getElementById("application-form")?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="inline-flex items-center bg-primary text-primary-foreground px-6 py-2 rounded-md font-medium transition-all hover:bg-primary/90 text-sm"
                    >
                      Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="py-20 bg-secondary/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-display font-bold tracking-tight mb-4">
              Apply Now
            </h2>
            <p className="text-muted-foreground">
              Complete the form below to apply for one of our open positions.
            </p>
          </div>

          <div className="glass-card rounded-xl p-8 shadow-md">
            <CareerForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
