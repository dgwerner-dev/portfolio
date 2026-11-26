import { ScrollAnimation } from "@/components/ScrollAnimation";
import { useLang } from "@/i18n/LanguageContext";
import { projectsMeta } from "@/i18n/shared";
import { ExternalLink, FolderGit2, Github, Lock } from "lucide-react";

const gradients = [
  "from-indigo-500/30 to-purple-500/10",
  "from-emerald-500/30 to-teal-500/10",
  "from-sky-500/30 to-blue-500/10",
  "from-rose-500/30 to-orange-500/10",
];

const Projects = () => {
  const { t } = useLang();
  const projects = Object.keys(projectsMeta).map((id, index) => ({
    id,
    ...projectsMeta[id],
    ...t.projects.items[id],
    gradient: gradients[index % gradients.length],
  }));

  return (
    <div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
      <ScrollAnimation>
        <h2 className="text-4xl font-bold mb-12 gradient-text">
          {t.projects.title}
        </h2>
      </ScrollAnimation>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ScrollAnimation key={project.id}>
            <div className="bg-gray-800/50 rounded-lg overflow-hidden backdrop-blur-sm h-full flex flex-col">
              <div
                className={`h-32 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
                aria-hidden="true"
              >
                <FolderGit2 className="w-12 h-12 text-white/70" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-sm bg-purple-500/20 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>{t.projects.code}</span>
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>{t.projects.live}</span>
                    </a>
                  )}
                  {!project.github && !project.live && (
                    <span className="flex items-center space-x-1 text-gray-500">
                      <Lock className="w-4 h-4" />
                      <span>{t.projects.private}</span>
                    </span>
                  )}
                </div>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Projects;
