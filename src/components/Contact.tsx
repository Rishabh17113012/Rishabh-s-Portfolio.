import { useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, LinkedinIcon, GithubIcon, Instagram } from "lucide-react";
import { BackgroundBeams } from "./ui/background-beams";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(false);
  
    const form = e.currentTarget;
    const formData = new FormData(form);
    const userEmail = formData.get("email") as string;
  
    // Get environment variables
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const autoReplyTemplateId = import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Debug: Log environment variables
    console.log("EmailJS Configuration Check:");
    console.log("Service ID:", serviceId || "❌ MISSING");
    console.log("Template ID:", templateId || "❌ MISSING");
    console.log("AutoReply Template ID:", autoReplyTemplateId || "⚠️ Optional");
    console.log("Public Key:", publicKey ? "✅ Present" : "❌ MISSING");
    console.log("User Email:", userEmail);
  
    // Validate environment variables
    if (!serviceId || !templateId || !publicKey) {
      console.error("❌ EmailJS configuration is incomplete!");
      console.error("Missing variables:");
      if (!serviceId) console.error("  - VITE_EMAILJS_SERVICE_ID");
      if (!templateId) console.error("  - VITE_EMAILJS_TEMPLATE_ID");
      if (!publicKey) console.error("  - VITE_EMAILJS_PUBLIC_KEY");
      console.error("\nMake sure your .env file contains all required variables and restart your dev server.");
      
      alert("Email configuration error. Please check the console for details.");
      setError(true);
      setIsSubmitting(false);
      return;
    }

    // Validate email
    if (!userEmail || userEmail.trim() === "") {
      console.error("User email is missing or invalid!");
      setError(true);
      setIsSubmitting(false);
      return;
    }
  
    try {
      console.log("📤 Sending user message...");
      
      // Send user message
      await emailjs.sendForm(
        serviceId,
        templateId,
        form,
        publicKey
      );
      
      console.log("✅ User message sent successfully!");
  
      // Send auto-reply (only if template ID exists)
      if (autoReplyTemplateId) {
        console.log("📤 Sending auto-reply...");
        await emailjs.send(
          serviceId,
          autoReplyTemplateId,
          {
            to_email: userEmail,
          },
          publicKey
        );
        console.log("✅ Auto-reply sent successfully!");
      } else {
        console.log("⚠️ Auto-reply skipped (no template ID configured)");
      }
  
      setSubmitted(true);
      form.reset();
    } catch (error) {
      console.error("❌ Error sending email:", error);
      setError(true);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="contact" className="relative py-20 bg-gray-50">
      <BackgroundBeams className="absolute inset-0 z-[-10] opacity-40 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Have a question or want to work together?
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-purple-600" />
                <a
                  href="mailto:workwebdevtripathi736@gmail.com"
                  className="text-gray-600 hover:text-purple-600"
                >
                  workwebdevtripathi736@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-purple-600" />
                <a
                  href="tel:+919559440334"
                  className="text-gray-600 hover:text-purple-600"
                >
                  +91 9559440334
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-purple-600" />
                <span className="text-gray-600">Pune, Maharashtra</span>
              </div>
              <div className="flex items-center space-x-3">
                <LinkedinIcon className="w-5 h-5 text-purple-600" />
                <a
                  href="https://www.linkedin.com/in/rishabh-dev-mani-tripathi-92a8b724a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-purple-600"
                >
                  LinkedIn Profile
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <GithubIcon className="w-5 h-5 text-purple-600" />
                <a
                  href="https://github.com/Rishabh17113012"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-purple-600"
                >
                  GitHub Profile
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Instagram className="w-5 h-5 text-purple-600" />
                <a
                  href="https://www.instagram.com/rishabhtripathiii_?igsh=YnNxdmF1Z3VveTFs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-purple-600"
                >
                  Instagram Profile
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {submitted ? (
              <div className="text-center p-8 bg-white rounded-lg shadow-lg">
                <Mail className="mx-auto h-12 w-12 text-purple-600" />
                <h3 className="mt-4 text-xl font-medium text-gray-900">
                  Thank you for your message!
                </h3>
                <p className="mt-2 text-gray-500">
                  I'll get back to you as soon as possible.
                  {import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID && 
                    " Thank You"}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-purple-600 hover:text-purple-700 font-medium"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-lg shadow-lg p-8 space-y-6"
              >
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                    <p className="font-medium">Failed to send message</p>
                    <p className="text-sm">Please check the console for details or try again later.</p>
                  </div>
                )}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 text-white bg-purple-600 hover:bg-purple-700 rounded-md font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;