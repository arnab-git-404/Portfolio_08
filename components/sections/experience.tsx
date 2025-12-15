// "use client";

// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { Briefcase, Calendar, MapPin, ExternalLink, Globe,TrendingUp } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import experienceData from "@/data/experience.json";
// import Image from "next/image";

// export default function Experience() {
//     const [ref, inView] = useInView({
//         triggerOnce: true,
//         threshold: 0.1,
//     });

//     const internships = experienceData.filter((exp) => exp.type === "internship");
//     const clientWork = experienceData.filter((exp) => exp.type === "client");

//     return (
//         <section id="experience" className="py-20 relative overflow-hidden">
//             {/* Background decoration */}
//             <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
            
//             <div className="container max-w-5xl mx-auto px-4 relative z-10">
//                 <motion.div
//                     ref={ref}
//                     initial={{ opacity: 0, y: 50 }}
//                     animate={inView ? { opacity: 1, y: 0 } : {}}
//                     transition={{ duration: 0.6 }}
//                 >
//                     {/* Section heading */}
//                     <div className="text-center mb-16">
//                         <motion.div
//                             initial={{ opacity: 0, scale: 0.5 }}
//                             animate={inView ? { opacity: 1, scale: 1 } : {}}
//                             transition={{ duration: 0.5 }}
//                             className="inline-block mb-4"
//                         >
//                             <span className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium">
//                                 Professional Journey
//                             </span>
//                         </motion.div>
//                         <h2 className="text-4xl md:text-5xl font-bold mb-4">
//                             Work <span className="text-primary">Experience</span>
//                         </h2>
//                         <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-6">
//                             My professional journey through internships and client projects
//                         </p>
//                         <div className="w-20 h-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500 mx-auto rounded-full" />
//                     </div>

//                     {/* Internships - Timeline Design */}
//                     <div className="mb-20">
//                         <motion.div
//                             initial={{ opacity: 0, x: -20 }}
//                             animate={inView ? { opacity: 1, x: 0 } : {}}
//                             transition={{ duration: 0.5, delay: 0.2 }}
//                             className="flex items-center gap-3 mb-10"
//                         >
//                             <div className="p-3 bg-primary/10 rounded-xl">
//                                 <Briefcase className="w-6 h-6 text-primary" />
//                             </div>
//                             <div>
//                                 <h3 className="text-3xl font-bold">Internships</h3>
//                                 <p className="text-muted-foreground">Professional training and development</p>
//                             </div>
//                         </motion.div>

//                         <div className="relative">
//                             {/* Timeline line */}
//                             <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-purple-500 to-pink-500 hidden md:block" />

//                             <div className="space-y-8">
//                                 {internships.map((exp, index) => (
//                                     <motion.div
//                                         key={exp.id}
//                                         initial={{ opacity: 0, x: -50 }}
//                                         animate={inView ? { opacity: 1, x: 0 } : {}}
//                                         transition={{ duration: 0.6, delay: index * 0.15 }}
//                                         className="relative"
//                                     >
//                                         {/* Timeline dot */}
//                                         <div className="absolute left-8 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background z-10 hidden md:block transform -translate-x-1.5" />

//                                         <div className="md:ml-20">
//                                             <div className="glass p-6 rounded-2xl hover:glass-strong transition-all duration-300 hover:scale-[1.02] group">
//                                                 <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
//                                                     <div className="flex-1">
                                                        
//                                                          <div className="flex items-center gap-3 flex-wrap mb-2">
//                                                                                                                     <h4 className="text-2xl font-bold text-primary group-hover:text-primary/80 transition-colors">
//                                                                                                                         {exp.role}
//                                                                                                                     </h4>
//                                                                                                                     {/* Promotion Badge */}
//                                                                                                                     {exp.promotion && (
//                                                                                                                         <motion.div
//                                                                                                                             initial={{ scale: 0, opacity: 0 }}
//                                                                                                                             animate={inView ? { scale: 1, opacity: 1 } : {}}
//                                                                                                                             transition={{ delay: index * 0.15 + 0.3, type: "spring", bounce: 0.5 }}
//                                                                                                                             className="flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full"
//                                                                                                                         >
//                                                                                                                             <TrendingUp className="w-3.5 h-3.5 text-green-500" />
//                                                                                                                             <span className="text-xs font-semibold text-green-500">Promoted</span>
//                                                                                                                         </motion.div>
//                                                                                                                     )}
//                                                                                                                 </div>



//                                                         <p className="text-xl font-semibold mb-2">{exp.company}</p>
//                                                         {exp.location && (
//                                                             <div className="flex items-center gap-2 text-muted-foreground">
//                                                                 <MapPin className="w-4 h-4" />
//                                                                 <span className="text-sm">{exp.location}</span>
//                                                             </div>
//                                                         )}
//                                                     </div>
//                                                     <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary shrink-0">
//                                                         <Calendar className="w-4 h-4" />
//                                                         <span className="text-sm font-medium">{exp.duration}</span>
//                                                     </div>
//                                                 </div>

//                                                 <p className="text-muted-foreground mb-6 leading-relaxed">
//                                                     {exp.description}
//                                                 </p>

//                                                 {/* Technologies */}
//                                                 <div className="flex flex-wrap gap-2 mb-6">
//                                                     {exp.technologies.map((tech, i) => (
//                                                         <motion.span
//                                                             key={i}
//                                                             initial={{ opacity: 0, scale: 0.8 }}
//                                                             animate={inView ? { opacity: 1, scale: 1 } : {}}
//                                                             transition={{ delay: index * 0.1 + i * 0.05 }}
//                                                             className="px-3 py-1.5 text-xs font-medium bg-primary/10 border border-primary/30 rounded-lg text-primary hover:bg-primary/20 transition-colors"
//                                                         >
//                                                             {tech}
//                                                         </motion.span>
//                                                     ))}
//                                                 </div>

//                                                 {/* Achievements */}
//                                                 {exp.achievements && exp.achievements.length > 0 && (
//                                                     <div className="space-y-3 border-t border-border/50 pt-4">
//                                                         <p className="text-sm font-semibold text-foreground/80 mb-2">Key Achievements:</p>
//                                                         {exp.achievements.map((achievement, i) => (
//                                                             <div key={i} className="flex items-start gap-3">
//                                                                 <div className="mt-1 p-1 bg-primary/20 rounded-full shrink-0">
//                                                                     <div className="w-1.5 h-1.5 bg-primary rounded-full" />
//                                                                 </div>
//                                                                 <p className="text-sm text-muted-foreground leading-relaxed">
//                                                                     {achievement}
//                                                                 </p>
//                                                             </div>
//                                                         ))}
//                                                     </div>
//                                                 )}

//                                                 {/* Projects worked on */}
//                                                 {exp.projects && exp.projects.length > 0 && (
//                                                     <div className="mt-6 pt-6 border-t border-border/50">
//                                                         <p className="text-sm font-semibold text-foreground/80 mb-4">
//                                                             Projects Worked On ({exp.projects.length}):
//                                                         </p>
//                                                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                                                             {exp.projects.map((project, i) => (
//                                                                 <div
//                                                                     key={i}
//                                                                     className="p-3 bg-muted/30 border border-border/50 rounded-lg hover:border-primary/50 transition-all group/project"
//                                                                 >
//                                                                     <div className="flex items-start justify-between gap-2 mb-2">
//                                                                         <h5 className="font-semibold text-sm group-hover/project:text-primary transition-colors">
//                                                                             {project.name}
//                                                                         </h5>
//                                                                         {project.url && (
//                                                                             <a
//                                                                                 href={project.url}
//                                                                                 target="_blank"
//                                                                                 rel="noopener noreferrer"
//                                                                                 className="text-primary hover:text-primary/80 transition-colors"
//                                                                             >
//                                                                                 <ExternalLink className="w-3.5 h-3.5" />
//                                                                             </a>
//                                                                         )}
//                                                                     </div>
//                                                                     <p className="text-xs text-muted-foreground line-clamp-2">
//                                                                         {project.description}
//                                                                     </p>
//                                                                 </div>
//                                                             ))}
//                                                         </div>
//                                                     </div>
//                                                 )}
//                                             </div>
//                                         </div>
//                                     </motion.div>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>

//                     {/* Client Work - Card Grid */}
//                     {/* {clientWork.length > 0 && (
//                         <div>
//                             <motion.div
//                                 initial={{ opacity: 0, x: -20 }}
//                                 animate={inView ? { opacity: 1, x: 0 } : {}}
//                                 transition={{ duration: 0.5, delay: 0.4 }}
//                                 className="flex items-center gap-3 mb-10"
//                             >
//                                 <div className="p-3 bg-primary/10 rounded-xl">
//                                     <Globe className="w-6 h-6 text-primary" />
//                                 </div>
//                                 <div>
//                                     <h3 className="text-3xl font-bold">Client Projects</h3>
//                                     <p className="text-muted-foreground">Freelance and contract work</p>
//                                 </div>
//                             </motion.div>

//                             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//                                 {clientWork.map((exp, index) => (
//                                     <motion.div
//                                         key={exp.id}
//                                         initial={{ opacity: 0, y: 30 }}
//                                         animate={inView ? { opacity: 1, y: 0 } : {}}
//                                         transition={{ duration: 0.6, delay: index * 0.15 }}
//                                         className="glass p-6 rounded-2xl hover:glass-strong transition-all duration-300 hover:scale-[1.02] group h-full"
//                                     >
//                                         <div className="flex items-start justify-between mb-4">
//                                             <div className="flex-1">
//                                                 <h4 className="text-xl font-bold text-primary mb-1 group-hover:text-primary/80 transition-colors">
//                                                     {exp.role}
//                                                 </h4>
//                                                 <p className="text-lg font-semibold">{exp.company}</p>
//                                             </div>
//                                             <div className="flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs shrink-0">
//                                                 <Calendar className="w-3.5 h-3.5" />
//                                                 <span className="font-medium">{exp.duration}</span>
//                                             </div>
//                                         </div>

//                                         <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
//                                             {exp.description}
//                                         </p>

//                                         // Technologies 
//                                         <div className="flex flex-wrap gap-2 mb-4">
//                                             {exp.technologies.map((tech, i) => (
//                                                 <span
//                                                     key={i}
//                                                     className="px-2.5 py-1 text-xs font-medium bg-primary/10 border border-primary/30 rounded-md text-primary"
//                                                 >
//                                                     {tech}
//                                                 </span>
//                                             ))}
//                                         </div>

//                                         // Achievements 
//                                         {exp.achievements && exp.achievements.length > 0 && (
//                                             <div className="space-y-2 pt-4 border-t border-border/50">
//                                                 {exp.achievements.map((achievement, i) => (
//                                                     <div key={i} className="flex items-start gap-2">
//                                                         <div className="mt-1 p-1 bg-primary/20 rounded-full shrink-0">
//                                                             <div className="w-1.5 h-1.5 bg-primary rounded-full" />
//                                                         </div>
//                                                         <p className="text-xs text-muted-foreground">{achievement}</p>
//                                                     </div>
//                                                 ))}
//                                             </div>
//                                         )}
//                                     </motion.div>
//                                 ))}
//                             </div>
//                         </div>
//                     )} */}
//                 </motion.div>
//             </div>
//         </section>
//     );
// }






"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, Calendar, MapPin, ExternalLink, Globe, TrendingUp, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import experienceData from "@/data/experience.json";
import Image from "next/image";

export default function Experience() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const internships = experienceData.filter((exp) => exp.type === "internship");
    const clientWork = experienceData.filter((exp) => exp.type === "client");

    return (
        <section id="experience" className="py-20 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
            
            <div className="container max-w-5xl mx-auto px-4 relative z-10">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    {/* Section heading */}
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.5 }}
                            className="inline-block mb-4"
                        >
                            <span className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium">
                                Professional Journey
                            </span>
                        </motion.div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Work <span className="text-primary">Experience</span>
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-6">
                            My professional journey through internships and client projects
                        </p>
                        <div className="w-20 h-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500 mx-auto rounded-full" />
                    </div>

                    {/* Internships - Timeline Design */}
                    <div className="mb-20">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="flex items-center gap-3 mb-10"
                        >
                            <div className="p-3 bg-primary/10 rounded-xl">
                                <Briefcase className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold">Internships</h3>
                                <p className="text-muted-foreground">Professional training and development</p>
                            </div>
                        </motion.div>

                        <div className="relative">
                            {/* Timeline line */}
                            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-purple-500 to-pink-500 hidden md:block" />

                            <div className="space-y-8">
                                {internships.map((exp, index) => (
                                    <motion.div
                                        key={exp.id}
                                        initial={{ opacity: 0, x: -50 }}
                                        animate={inView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ duration: 0.6, delay: index * 0.15 }}
                                        className="relative"
                                    >
                                        {/* Timeline dot */}
                                        <div className="absolute left-8 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background z-10 hidden md:block transform -translate-x-1.5" />

                                        <div className="md:ml-20">
                                            <div className="glass p-6 rounded-2xl hover:glass-strong transition-all duration-300 hover:scale-[1.02] group">
                                                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                                                    <div className="flex-1">
                                                        <div className="flex items-center gap-3 flex-wrap mb-2">
                                                            <h4 className="text-2xl font-bold text-primary group-hover:text-primary/80 transition-colors">
                                                                {exp.role}
                                                            </h4>
                                                            {/* Promotion Badge */}
                                                            {exp?.promotions && exp.promotions.length > 0 && (
                                                                <motion.div
                                                                    initial={{ scale: 0, opacity: 0 }}
                                                                    animate={inView ? { scale: 1, opacity: 1 } : {}}
                                                                    transition={{ delay: index * 0.15 + 0.3, type: "spring", bounce: 0.5 }}
                                                                    className="flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full"
                                                                >
                                                                    <TrendingUp className="w-3.5 h-3.5 text-green-500" />
                                                                    <span className="text-xs font-semibold text-green-500">Promoted</span>
                                                                </motion.div>
                                                            )}
                                                        </div>
                                                        <p className="text-xl font-semibold mb-2"> <Building2 className="inline w-5 h-5 mr-2" /> {exp.company}</p>
                                                        {exp.location && (
                                                            <div className="flex items-center gap-2 text-muted-foreground">
                                                                <MapPin className="w-5 h-5" />
                                                                <span className="text-sm">{exp.location}</span>
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary shrink-0">
                                                        <Calendar className="w-4 h-4" />
                                                        <span className="text-sm font-medium">{exp.duration}</span>
                                                    </div>
                                                </div>

                                                {/* Promotion Details */}
                                                {exp.promotions && exp.promotions.map((promo, index) => (
                                                    <motion.div
                                                        initial={{ opacity: 0, y: -10 }}
                                                        animate={inView ? { opacity: 1, y: 0 } : {}}
                                                        transition={{ delay: index * 0.15 + 0.4 }}
                                                        className="mb-4 p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl"
                                                    >
                                                        <div className="flex items-start gap-3">
                                                            <div className="p-2 bg-green-500/20 rounded-lg shrink-0">
                                                                <TrendingUp className="w-4 h-4 text-green-500" />
                                                            </div>
                                                            <div className="flex-1">
                                                                <p className="text-sm font-semibold text-green-500 mb-1">Career Growth</p>
                                                                <p className="text-sm text-muted-foreground">
                                                                    Promoted from <span className="font-semibold text-foreground">{promo.from}</span> to{" "}
                                                                    <span className="font-semibold text-foreground">{promo.to}</span>
                                                                    {promo.date && (
                                                                        <span className="text-xs ml-2 text-muted-foreground/80">
                                                                            ({promo.date})
                                                                        </span>
                                                                    )}
                                                                </p>
                                                                {/* {promo.reason && (
                                                                    <p className="text-xs text-muted-foreground mt-2 italic">
                                                                        "{promo.reason}"
                                                                    </p>
                                                                )} */}
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                ))}

                                                <p className="text-muted-foreground mb-6 leading-relaxed">
                                                    {exp.description}
                                                </p>

                                                {/* Technologies */}
                                                <div className="flex flex-wrap gap-2 mb-6">
                                                    {exp.technologies.map((tech, i) => (
                                                        <motion.span
                                                            key={i}
                                                            initial={{ opacity: 0, scale: 0.8 }}
                                                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                                                            transition={{ delay: index * 0.1 + i * 0.05 }}
                                                            className="px-3 py-1.5 text-xs font-medium bg-primary/10 border border-primary/30 rounded-lg text-primary hover:bg-primary/20 transition-colors"
                                                        >
                                                            {tech}
                                                        </motion.span>
                                                    ))}
                                                </div>

                                                {/* Achievements */}
                                                {exp.achievements && exp.achievements.length > 0 && (
                                                    <div className="space-y-3 border-t border-border/50 pt-4">
                                                        <p className="text-sm font-semibold text-foreground/80 mb-2">Key Achievements:</p>
                                                        {exp.achievements.map((achievement, i) => (
                                                            <div key={i} className="flex items-start gap-3">
                                                                <div className="mt-1 p-1 bg-primary/20 rounded-full shrink-0">
                                                                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                                                                </div>
                                                                <p className="text-sm text-muted-foreground leading-relaxed">
                                                                    {achievement}
                                                                </p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}

                                                {/* Projects worked on */}
                                                {/* {exp.projects && exp.projects.length > 0 && (
                                                    <div className="mt-6 pt-6 border-t border-border/50">
                                                        <p className="text-sm font-semibold text-foreground/80 mb-4">
                                                            Projects Worked On ({exp.projects.length}):
                                                        </p>
                                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                            {exp.projects.map((project, i) => (
                                                                <div
                                                                    key={i}
                                                                    className="p-3 bg-muted/30 border border-border/50 rounded-lg hover:border-primary/50 transition-all group/project"
                                                                >
                                                                    <div className="flex items-start justify-between gap-2 mb-2">
                                                                        <h5 className="font-semibold text-sm group-hover/project:text-primary transition-colors">
                                                                            {project.name}
                                                                        </h5>
                                                                        {project.url && (
                                                                            <a
                                                                                href={project.url}
                                                                                target="_blank"
                                                                                rel="noopener noreferrer"
                                                                                className="text-primary hover:text-primary/80 transition-colors"
                                                                            >
                                                                                <ExternalLink className="w-3.5 h-3.5" />
                                                                            </a>
                                                                        )}
                                                                    </div>
                                                                    <p className="text-xs text-muted-foreground line-clamp-2">
                                                                        {project.description}
                                                                    </p>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )} */}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}