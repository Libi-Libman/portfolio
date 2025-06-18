import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const socialLinks = [
  {
    icon: <FaGithub />,
    label: 'GitHub',
    url: 'https://github.com/Libi-Libman',
  },
  {
    icon: <FaLinkedin />,
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/libi-libman/',
  },
  {
    icon: <FaEnvelope />,
    label: 'Email',
    url: 'mailto:libi.libman@gmail.com',
  },
];

function SocialLinks() {
  return (
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
}

export default SocialLinks;