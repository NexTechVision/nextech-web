
import React, { useState } from "react";
import { toast } from "sonner";
import { Paperclip } from "lucide-react";

const CareerForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    message: "",
  });
  const [fileName, setFileName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success("Application submitted successfully! We'll review your application and get back to you soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        position: "",
        experience: "",
        message: "",
      });
      setFileName("");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-foreground mb-1"
          >
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-foreground mb-1"
          >
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
            placeholder="john@example.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-foreground mb-1"
          >
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
            placeholder="+1 (123) 456-7890"
          />
        </div>
        <div>
          <label
            htmlFor="position"
            className="block text-sm font-medium text-foreground mb-1"
          >
            Position Applying For <span className="text-red-500">*</span>
          </label>
          <select
            id="position"
            name="position"
            required
            value={formData.position}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
          >
            <option value="">Select Position</option>
            <option value="Web Developer">Web Developer</option>
            <option value="Mobile Developer">Mobile Developer</option>
            <option value="UI/UX Designer">UI/UX Designer</option>
            <option value="Software Engineer">Software Engineer</option>
            <option value="Project Manager">Project Manager</option>
            <option value="DevOps Engineer">DevOps Engineer</option>
            <option value="QA Engineer">QA Engineer</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="experience"
          className="block text-sm font-medium text-foreground mb-1"
        >
          Years of Experience <span className="text-red-500">*</span>
        </label>
        <select
          id="experience"
          name="experience"
          required
          value={formData.experience}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
        >
          <option value="">Select Experience</option>
          <option value="0-1">0-1 years</option>
          <option value="1-3">1-3 years</option>
          <option value="3-5">3-5 years</option>
          <option value="5-10">5-10 years</option>
          <option value="10+">10+ years</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-foreground mb-1"
        >
          Cover Letter / Additional Information
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
          placeholder="Tell us a bit about yourself and why you're interested in this position..."
        ></textarea>
      </div>

      <div>
        <label
          htmlFor="resume"
          className="block text-sm font-medium text-foreground mb-1"
        >
          Upload Resume (PDF, DOCX) <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <input
            type="file"
            id="resume"
            name="resume"
            required
            accept=".pdf,.docx,.doc"
            onChange={handleFileChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          <div className="w-full px-4 py-3 rounded-md border border-dashed border-input bg-background flex items-center justify-between">
            <span className="text-muted-foreground text-sm">
              {fileName || "Browse file..."}
            </span>
            <Paperclip size={16} className="text-muted-foreground" />
          </div>
        </div>
      </div>

      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-md font-medium transition-all hover:bg-primary/90 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Submitting..." : "Submit Application"}
        </button>
      </div>
    </form>
  );
};

export default CareerForm;
