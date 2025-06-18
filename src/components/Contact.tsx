import React from 'react';
import SocialLinks from './SocialLinks';

function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Contact Me
        </h2>
        <p className="text-gray-700 mb-8">
          Interested in working together or have any questions? Feel free to reach out!
        </p>
        <a
          href="mailto:your@email.com"
          className="inline-block px-8 py-3 bg-blue-600 text-white rounded-full font-semibold shadow hover:bg-blue-700 transition-colors mb-6"
        >
          Email Me
        </a>
        <SocialLinks />
      </div>
    </section>
  );
}

export default Contact;