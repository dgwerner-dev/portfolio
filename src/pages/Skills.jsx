import { ScrollAnimation } from "@/components/ScrollAnimation";
import {
  AWSLogo,
  BashLogo,
  GitLogo,
  JavaScriptLogo,
  JWTLogo,
  LinuxLogo,
  MongoDBLogo,
  NextjsLogo,
  NodeLogo,
  PythonLogo,
  ReactLogo,
  ReduxLogo,
  TailwindLogo,
  TypeScriptLogo,
} from "@/components/TechLogos";
import { useLang } from "@/i18n/LanguageContext";
import {
  Bot,
  Boxes,
  Brain,
  Cloud,
  Code2,
  Coffee,
  Container,
  Cpu,
  Database,
  FlaskConical,
  GitBranch,
  Layers,
  Layout,
  MessageSquare,
  Network,
  Server,
  Sparkles,
  Terminal,
  Users,
  Workflow,
  Wrench,
} from "lucide-react";

const sm = "w-4 h-4";
const item = (name, icon) => ({ name, icon });

const groupIcons = {
  languages: <Code2 className="w-6 h-6" />,
  frontend: <Layout className="w-6 h-6" />,
  backend: <Server className="w-6 h-6" />,
  data: <Database className="w-6 h-6" />,
  cloud: <Cloud className="w-6 h-6" />,
  architecture: <Layers className="w-6 h-6" />,
  ai: <Brain className="w-6 h-6" />,
  practices: <Wrench className="w-6 h-6" />,
};

const buildGroups = (t) => [
  {
    id: "languages",
    items: [
      item("TypeScript", <TypeScriptLogo />),
      item("JavaScript", <JavaScriptLogo />),
      item("Python", <PythonLogo />),
      item("Java", <Coffee className={sm} />),
      item("Kotlin", <Code2 className={sm} />),
      item("PHP", <Code2 className={sm} />),
      item("Perl", <Terminal className={sm} />),
      item("Bash", <BashLogo />),
    ],
  },
  {
    id: "frontend",
    items: [
      item("React", <ReactLogo />),
      item("Next.js", <NextjsLogo />),
      item("Vue.js", <Layout className={sm} />),
      item("Redux", <ReduxLogo />),
      item("Tailwind", <TailwindLogo />),
    ],
  },
  {
    id: "backend",
    items: [
      item("Node.js", <NodeLogo />),
      item("FastAPI", <Server className={sm} />),
      item("REST", <Network className={sm} />),
      item("GraphQL", <Network className={sm} />),
      item("JWT", <JWTLogo />),
    ],
  },
  {
    id: "data",
    items: [
      item("PostgreSQL", <Database className={sm} />),
      item("SQL Server", <Database className={sm} />),
      item("MySQL", <Database className={sm} />),
      item("MongoDB", <MongoDBLogo />),
      item("DynamoDB", <Database className={sm} />),
      item("Kafka", <Workflow className={sm} />),
      item("RabbitMQ", <Workflow className={sm} />),
      item("Pub/Sub", <Workflow className={sm} />),
    ],
  },
  {
    id: "cloud",
    items: [
      item("AWS", <AWSLogo />),
      item("GCP", <Cloud className={sm} />),
      item("Azure", <Cloud className={sm} />),
      item("Docker", <Container className={sm} />),
      item("GitHub Actions", <GitBranch className={sm} />),
      item("CI/CD", <Cpu className={sm} />),
      item("Linux", <LinuxLogo />),
    ],
  },
  {
    id: "architecture",
    items: [
      item("Microservices", <Boxes className={sm} />),
      item("DDD", <Layers className={sm} />),
      item("EDA", <Workflow className={sm} />),
      item("Clean Architecture", <Layers className={sm} />),
      item("SOLID", <Layers className={sm} />),
    ],
  },
  {
    id: "ai",
    items: [
      item("Claude", <Sparkles className={sm} />),
      item("GitHub Copilot", <Bot className={sm} />),
      item("Cursor", <Bot className={sm} />),
      item(t.skills.softItems.prompt, <MessageSquare className={sm} />),
      item(t.skills.softItems.context, <Brain className={sm} />),
    ],
  },
  {
    id: "practices",
    items: [
      item("Git", <GitLogo />),
      item(t.skills.softItems.tests, <FlaskConical className={sm} />),
      item(t.skills.softItems.agile, <Users className={sm} />),
      item(t.skills.softItems.mentoring, <Users className={sm} />),
      item(t.skills.softItems.leadership, <Users className={sm} />),
    ],
  },
];

const Skills = () => {
  const { t } = useLang();
  const groups = buildGroups(t);

  return (
    <div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
      <ScrollAnimation>
        <h2 className="text-4xl font-bold mb-4 gradient-text">
          {t.skills.title}
        </h2>
      </ScrollAnimation>

      <ScrollAnimation>
        <p className="text-gray-400 mb-12 max-w-2xl">{t.skills.subtitle}</p>
      </ScrollAnimation>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {groups.map((group) => (
          <ScrollAnimation key={group.id}>
            <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition-all border border-white/5 h-full">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-white/10 rounded-lg">
                  {groupIcons[group.id]}
                </div>
                <h3 className="text-lg font-semibold">
                  {t.skills.groups[group.id]}
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {group.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="bg-gray-700/50 px-3 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-white/10 transition-all group"
                  >
                    <div className="text-gray-400 group-hover:text-white transition-colors flex-shrink-0">
                      {skill.icon}
                    </div>
                    <span className="text-gray-400 group-hover:text-white transition-colors text-sm text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Skills;
