
type Project = {
  title: string;
  description: string;
  link: string;
  image?: string;
};

const projects: Project[] = [
  {
    title: 'Project One',
    description: 'A brief description of your first project goes here.',
    link: 'https://github.com/yourusername/project-one',
    image: 'https://via.placeholder.com/400x200?text=Project+One',
  },
  {
    title: 'Project Two',
    description: 'A brief description of your second project goes here.',
    link: 'https://github.com/yourusername/project-two',
    image: 'https://via.placeholder.com/400x200?text=Project+Two',
  },
  // Add more projects as needed
];

function Projects() {
  return (
    <section id="projects" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          My Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col hover:shadow-2xl transition-shadow"
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover" />
              )}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-4 flex-1">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-block px-5 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;