



"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";
import educationData from "@/data/education.json";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 16 },
  },
};

export default function Education() {
  return (
    <section id="education" className="py-20 relative">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.div
          // variants={container}
          initial="hidden"
          // whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Section heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="text-primary">Education</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500 mx-auto rounded-full" />
          </div>

          {/* Education Timeline */}
          <div className="max-w-4xl mx-auto space-y-6">
            {educationData.map((edu) => (
              <motion.div
                key={edu.id}
                // variants={item}
                className="glass p-6 rounded-xl hover:glass-strong transition-smooth"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-primary">{edu.degree}</h3>
                        <p className="text-lg font-semibold">{edu.institution}</p>
                        <p className="text-muted-foreground">{edu.field}</p>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground mt-2 md:mt-0">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.duration}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">{edu.description}</p>

                    {/* Achievements */}
                    <div className="space-y-2">
                      {edu?.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <span className="text-primary">*</span>
                          <p className="text-sm text-muted-foreground">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}