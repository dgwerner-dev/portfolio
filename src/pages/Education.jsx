import { ScrollAnimation } from "@/components/ScrollAnimation";
import unisinosImg from "@/assets/education/unisinos.jpg";
import { useLang } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";
import {
  BookOpen,
  Calendar,
  FileText,
  GraduationCap,
  Languages,
  MapPin,
} from "lucide-react";

const Education = () => {
  const { t } = useLang();

  return (
    <div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
      <ScrollAnimation>
        <motion.div
          className="flex items-center gap-3 mb-12"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <GraduationCap className="w-8 h-8" />
          <h2 className="text-4xl font-bold gradient-text">
            {t.education.title}
          </h2>
        </motion.div>
      </ScrollAnimation>

      <div className="space-y-12">
        {t.education.items.map((edu) => (
          <ScrollAnimation key={edu.id}>
            <div className="relative bg-gray-800/50 rounded-xl overflow-hidden backdrop-blur-sm hover:bg-gray-800/70 transition-all">
              <div className="absolute top-0 right-0 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-bl-xl flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gray-300" />
                <span className="text-gray-300">{edu.duration}</span>
              </div>

              <div className="grid md:grid-cols-[350px,1fr]">
                <div className="relative h-96 md:h-full min-h-64">
                  <img
                    src={unisinosImg}
                    alt={edu.school}
                    loading="lazy"
                    width={350}
                    height={400}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{edu.school}</h3>
                      <div className="flex items-center gap-2 text-gray-300">
                        <MapPin className="w-4 h-4" />
                        <span>{edu.location}</span>
                      </div>
                      {edu.photoCredit && (
                        <a
                          href={edu.photoCredit.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-3 inline-block text-xs text-gray-400 hover:text-white transition-colors"
                        >
                          {edu.photoCredit.text}
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-14 md:pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen className="w-5 h-5 text-gray-400" />
                    <h4 className="text-lg font-semibold">{edu.degree}</h4>
                  </div>

                  <div className="flex items-start gap-2 text-gray-300">
                    <FileText className="w-5 h-5 mt-1 flex-shrink-0" />
                    <p className="text-sm leading-relaxed">{edu.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        ))}

        <ScrollAnimation>
          <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6">
              <Languages className="w-6 h-6" />
              <h3 className="text-2xl font-semibold">
                {t.education.languagesTitle}
              </h3>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {t.education.languages.map((language) => (
                <div
                  key={language.name}
                  className="bg-white/5 rounded-lg p-4"
                >
                  <p className="font-semibold">{language.name}</p>
                  <p className="text-sm text-gray-400">{language.level}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default Education;
