import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import emailjs from '@emailjs/browser';

// Social media links
const GITHUB_URL = "https://github.com/Kish533";
const LINKEDIN_URL = "https://www.linkedin.com/in/kishore-rayudu-qa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        to_email: process.env.NEXT_PUBLIC_TO_EMAIL,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Kishore',
      };

      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams
      );

      if (response.status === 200) {
        alert('Message sent successfully! I will get back to you soon.');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send message. Please try again or email me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Let's Connect</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to discuss automation opportunities or have questions about QA best practices?
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="glass border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Get In Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-tech-blue/20 rounded-lg">
                    <Mail className="w-5 h-5 text-tech-blue" />
                  </div>
                  <div>
                    <div className="text-gray-300">Email</div>
                    <div className="text-white">kishorerayuduqa@gmail.com</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-tech-teal/20 rounded-lg">
                    <Phone className="w-5 h-5 text-tech-teal" />
                  </div>
                  <div>
                    <div className="text-gray-300">Phone</div>
                    <div className="text-white">+1 (555) 123-4567</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-tech-purple/20 rounded-lg">
                    <MapPin className="w-5 h-5 text-tech-purple" />
                  </div>
                  <div>
                    <div className="text-gray-300">Location</div>
                    <div className="text-white">McKinney, TX</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Social Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  variant="ghost"
                  className="w-full justify-start text-gray-300 hover:text-tech-blue"
                  onClick={() => window.open(GITHUB_URL, '_blank')}
                >
                  <Github className="mr-3" size={20} />
                  GitHub Portfolio
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-gray-300 hover:text-tech-teal"
                  onClick={() => window.open(LINKEDIN_URL, '_blank')}
                >
                  <Linkedin className="mr-3" size={20} />
                  LinkedIn Profile
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="glass border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-gray-300 block mb-2">Name</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="bg-gray-800 border-gray-600 text-white focus:border-tech-blue"
                        placeholder="Your Name"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <label className="text-gray-300 block mb-2">Email</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-gray-800 border-gray-600 text-white focus:border-tech-blue"
                        placeholder="your.email@example.com"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-gray-300 block mb-2">Subject</label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="bg-gray-800 border-gray-600 text-white focus:border-tech-blue"
                      placeholder="What's this about?"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div>
                    <label className="text-gray-300 block mb-2">Message</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="bg-gray-800 border-gray-600 text-white focus:border-tech-blue min-h-[120px]"
                      placeholder="Tell me about your project or ask any questions..."
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-tech-blue hover:bg-blue-600 text-white py-3 animate-glow"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <>
                        <Send className="mr-2" size={20} />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center mt-16 pt-8 border-t border-gray-700">
          <p className="text-gray-400">
            © {new Date().getFullYear()} QA Automation Wizard. Crafted with precision and passion for quality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;