import { ScrollAnimation } from "@/components/ScrollAnimation";
import { useLang } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";
import { Award, Calendar } from "lucide-react";

const Certificates = () => {
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
          <Award className="w-8 h-8" />
          <h2 className="text-4xl font-bold gradient-text">
            {t.certificates.title}
          </h2>
        </motion.div>
      </ScrollAnimation>

      <div className="grid md:grid-cols-2 gap-6">
        {t.certificates.items.map((cert) => (
          <ScrollAnimation key={cert.id}>
            <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition-all border border-white/5 h-full flex flex-col">
              <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
              <div className="text-gray-400 space-y-2 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-sm">
                  <span>{cert.issuer}</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {cert.date}
                  </span>
                </div>
                <p className="text-sm flex-grow">{cert.description}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
