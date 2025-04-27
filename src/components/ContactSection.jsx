import { useState } from "react";
import { LuGithub, LuLinkedin, LuMail } from "react-icons/lu";
import { FiPhone, FiInstagram, FiSend } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  //   const handleChange = (
  //     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  //   ) => {
  //     const { name, value } = e.target;
  //     setFormData((prev) => ({ ...prev, [name]: value }));
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // In a real app, you'd send this data to a server
    alert(
      "Thanks for your message! This is a demo, so no message was actually sent."
    );
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto xl:px-20 px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get in{" "}
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-6"></div>
          <p className="text-gray-600">
            Have a question or want to work together? Feel free to contact me!
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="md:col-span-2 space-y-6">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-purple-100 text-purple-500 mt-1">
                <LuMail size={20} />
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Email</h4>
                <a
                  href="mailto:your.email@example.com"
                  className="text-gray-600 hover:text-tech-purple transition-colors"
                >
                  surajsingh877028@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-blue-100 text-blue-500 mt-1">
                <FiPhone size={20} />
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Phone</h4>
                <a
                  href="tel:+1234567890"
                  className="text-gray-600 hover:text-tech-blue transition-colors"
                >
                  +91 7009369901
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-indigo-100 text-indigo-500 mt-1">
                <IoLocationOutline size={20} />
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Location</h4>
                <p className="text-gray-600">Agra, India</p>
              </div>
            </div>

            <div className="pt-6">
              <h4 className="font-medium text-gray-900 mb-4">Follow Me</h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="p-3 rounded-full bg-gray-100 text-gray-600 hover:bg-purple-400 hover:text-white transition-colors"
                >
                  <LuGithub size={20} />
                </a>
                <a
                  href="#"
                  className="p-3 rounded-full bg-gray-100 text-gray-600 hover:bg-blue-400 hover:text-white transition-colors"
                >
                  <LuLinkedin size={20} />
                </a>
                <a
                  href="#"
                  className="p-3 rounded-full bg-gray-100 text-gray-600 hover:bg-pink-400 hover:text-white transition-colors"
                >
                  <FiInstagram size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-3 bg-white rounded-lg shadow-2xs p-6">
            <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={formData.name}
                    // onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full bg-gray-100 p-2 rounded-md border border-gray-200"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    // onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="w-full bg-gray-100 p-2 rounded-md border border-gray-200"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  //   onChange={handleChange}
                  placeholder="What is this regarding?"
                  required
                  className="w-full  bg-gray-100 p-2 rounded-md border border-gray-200"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  //   onChange={handleChange}
                  placeholder="Your message here..."
                  required
                  className="w-full min-h-[150px] bg-gray-100 p-2 rounded-md border border-gray-200"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center p-2 rounded-md bg-gradient-to-r from-purple-500 to-sky-500 text-white hover:shadow-lg transition-all"
              >
                <FiSend size={18} className="mr-2" />
                <p>Send Message</p>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
