import React, { useState } from 'react';
import { Button } from '@material-tailwind/react';
import Modal from './ui/Modal';
import { Mail, Phone, MapPin, CheckCircle, XCircle } from 'lucide-react';

const ContactFormModal = ({ isOpen, onClose }) => {
  const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submissionStatus, setSubmissionStatus] = useState(null); // 'success', 'error', or null

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the default browser page reload
    if (!formspreeEndpoint) {
      console.error("Formspree endpoint is not defined. Please set VITE_FORMSPREE_ENDPOINT.");
      setSubmissionStatus('error');
      return;
    }
    setSubmissionStatus('submitting'); // Show loading state

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmissionStatus('success');
        setFormData({ name: '', email: '', message: '' }); // Reset form fields
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Submission Error:', error);
      setSubmissionStatus('error');
    }
  }

  const handleClose = () => {
    setSubmissionStatus(null);
    onClose();
  };

  // Conditionally render the form or the success/error message
  const renderContent = () => {
    if (submissionStatus === 'success') {
      return (
        <div className="text-center py-10">
          <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
          <h3 className="mt-4 text-2xl font-bold text-neutral-800">Message Sent!</h3>
          <p className="mt-2 text-neutral-600">Thank you for reaching out. We'll get back to you soon.</p>
          <Button color="orange" fullWidth onClick={handleClose} className="mt-6">
            Close
          </Button>
        </div>
      );
    }

    if (submissionStatus === 'error') {
      return (
        <div className="text-center py-10">
          <XCircle className="mx-auto h-16 w-16 text-red-500" />
          <h3 className="mt-4 text-2xl font-bold text-neutral-800">Something Went Wrong</h3>
          <p className="mt-2 text-neutral-600">Please try submitting the form again.</p>
          <Button color="orange" fullWidth onClick={() => setSubmissionStatus(null)} className="mt-6">
            Try Again
          </Button>
        </div>
      );
    }

  return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <input
              id="name"
              name="name"
              placeholder="John Doe"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <div>
            <input
              id="email"
              name="email"
              placeholder="john.doe@example.com"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <div>
            <textarea
              id="message"
              name="message"
              placeholder="How can we help?"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={4}
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm h-36 resize-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <Button
            type="submit"
            color="orange"
            fullWidth
            className="mt-1"
            disabled={submissionStatus === 'submitting'}
          >
            {submissionStatus === 'submitting' ? 'Sending...' : 'Send Message'}
          </Button>
        </form>


        {/* Contact Info + Map */}
        <div className="space-y-8 ">
          <div className="flex items-start space-x-3">
            <Mail className="text-primary-600 w-6 h-6 mt-1 flex-shrink-0" />
            <div>
              <a href="mailto:info@ndithinifoundation.org" className="text-gray-600 hover:text-primary-600">info@ndithinifoundation.org</a>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Phone className="text-primary-600 w-6 h-6 mt-1 flex-shrink-0" />
            <div>
              <a href="tel:+27123456789" className="text-gray-600 hover:text-primary-600">+27 12 345 6789</a>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-full">
              <div className="w-full h-60 rounded-md overflow-hidden border border-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.915329589768!2d18.4240556!3d-33.9248682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc676a0a46e45b%3A0x6c63a8a5897b0ecb!2sCape%20Town%2C%20South%20Africa!5e0!3m2!1sen!2sza!4v1715867865400"
                  className="w-full h-full border-0"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ndithini Foundation Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
return (
    <Modal isOpen={isOpen} onClose={handleClose} title="Contact Us">
      {renderContent()}
    </Modal>
  );
};

export default ContactFormModal;