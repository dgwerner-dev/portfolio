import cvPdf from "@/assets/files/cv_pdf/Daniel_Werner_CV.pdf";
import profileImg from "@/assets/profile/profile.png";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { useLang } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";
import { Briefcase, Code2, Globe, Languages } from "lucide-react";
import { Link } from "react-router-dom";

const achievementIcons = [
  <Code2 key="code" className="w-6 h-6" />,
  <Briefcase key="briefcase" className="w-6 h-6" />,
  <Languages key="languages" className="w-6 h-6" />,
];

const About = () => {
  const { t } = useLang();

  return (
    <div className="min-h-screen pt-20 px-4 max-w-4xl mx-auto pb-20">
      <ScrollAnimation>
        <motion.h2 className="text-4xl font-bold mb-8 gradient-text">
          {t.about.title}
        </motion.h2>
      </ScrollAnimation>

      <div className="grid md:grid-cols-2 gap-8">
        <ScrollAnimation>
          <div className="aspect-square overflow-hidden rounded-2xl">
            <img
              src={profileImg}
              alt={t.about.photoAlt}
              width={600}
              height={600}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </ScrollAnimation>

        <ScrollAnimation className="space-y-6">
          <div className="space-y-4">
            {t.about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-gray-300 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="pt-4">
            <h3 className="text-2xl font-semibold mb-4 gradient-text">
              {t.about.quickFactsTitle}
            </h3>
            <ul className="list-none space-y-3">
              {t.about.quickFacts.map((fact) => (
                <motion.li
                  key={fact}
                  className="flex items-center space-x-2 text-gray-300"
                >
                  <span className="w-2 h-2 bg-white rounded-full" />
                  <span>{fact}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap justify-start gap-4">
            <a
              href={cvPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-colors"
            >
              {t.about.downloadCv}
            </a>
            <Link
              to="/skills"
              className="px-6 py-3 bg-white/10 text-white rounded-full font-medium hover:bg-white/20 transition-colors"
            >
              {t.about.mySkills}
            </Link>
          </div>
        </ScrollAnimation>
      </div>

      <ScrollAnimation>
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-8 gradient-text">
            {t.about.achievementsTitle}
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {t.about.achievements.map((achievement, index) => (
              <div
                key={achievement.title}
                className="bg-white/5 p-6 rounded-xl backdrop-blur-sm"
              >
                <div className="text-white mb-4">
                  {achievementIcons[index]}
                </div>
                <h4 className="text-xl font-semibold mb-2">
                  {achievement.title}
                </h4>
                <p className="text-gray-400">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollAnimation>

      <ScrollAnimation>
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-8 gradient-text">
            {t.about.interestsTitle}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {t.about.interests.map((interest) => (
              <div
                key={interest}
                className="bg-white/5 p-4 rounded-xl backdrop-blur-sm flex items-center gap-3"
              >
                <Globe className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300">{interest}</span>
              </div>
            ))}
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default About;
