import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const socialLinks = [
  {
    icon: <FaGithub />,
    label: 'GitHub',
    url: 'https://github.com/yourusername',
  },
  {
    icon: <FaLinkedin />,
    label: 'LinkedIn',
    url: 'https://linkedin.com/in/yourusername',
  },
  {
    icon: <FaTwitter />,
    label: 'Twitter',
    url: 'https://twitter.com/yourusername',
  },
  {
    icon: <FaEnvelope />,
    label: 'Email',
    url: 'mailto:your@email.com',
  },
];

const SocialLinks: React.FC = () => (
  <div className="flex justify-center space-x-6 mt-4">
    {socialLinks.map((link) => (
      <a
        key={link.label}
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 text-2xl transition-colors"
        aria-label={link.label}
      >
        {link.icon}
      </a>
    ))}
  </div>
);

export default SocialLinks;