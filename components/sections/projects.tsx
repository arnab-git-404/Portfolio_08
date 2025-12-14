// "use client";

// import { useState, useMemo } from "react";
// import {
//   ExternalLink,
//   Github,
//   ChevronLeft,
//   ChevronRight,
//   Search,
//   X,
// } from "lucide-react";
// import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import projectsData from "@/data/projects.json";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import Image from "next/image";

// const PROJECTS_PER_PAGE = 6;

// export default function Projects() {
//    const [ref, inView] = useInView({
//       triggerOnce: true,
//       threshold: 0.1,
//     });

//   const [filter, setFilter] = useState("all");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedTech, setSelectedTech] = useState<string | null>(null);

//   // Categories
//   const categories = useMemo(() => {
//     const cats = new Set(projectsData.map((p) => p.category));
//     return ["all", ...Array.from(cats)];
//   }, []);

//   // Technologies
//   const technologies = useMemo(() => {
//     const techs = new Set(projectsData.flatMap((p) => p.technologies));
//     return Array.from(techs).sort();
//   }, []);

//   // Filter projects
//   const filteredProjects = useMemo(() => {
//     let filtered = projectsData;

//     if (filter !== "all") {
//       filtered = filtered.filter((p) => p.category === filter);
//     }

//     if (selectedTech) {
//       filtered = filtered.filter((p) => p.technologies.includes(selectedTech));
//     }

//     if (searchQuery.trim()) {
//       const query = searchQuery.toLowerCase();
//       filtered = filtered.filter(
//         (p) =>
//           p.title.toLowerCase().includes(query) ||
//           p.description.toLowerCase().includes(query) ||
//           p.technologies.some((t) => t.toLowerCase().includes(query))
//       );
//     }

//     return filtered;
//   }, [filter, selectedTech, searchQuery]);

//   // Pagination
//   const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);
//   const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
//   const currentProjects = filteredProjects.slice(
//     startIndex,
//     startIndex + PROJECTS_PER_PAGE
//   );

//   const clearFilters = () => {
//     setFilter("all");
//     setSelectedTech(null);
//     setSearchQuery("");
//     setCurrentPage(1);
//   };

//   // return (
//   //   <section id="projects" className="py-20 relative overflow-hidden">
//   //     <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

//   //     <div className="container max-w-5xl mx-auto px-4 relative z-10">
//   //       {/* Heading */}
//   //       <div className="text-center mb-12">
//   //         <span className="inline-block mb-4 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium">
//   //           Portfolio
//   //         </span>
//   //         <h2 className="text-4xl md:text-5xl font-bold mb-4">
//   //           My <span className="text-primary">Projects</span>
//   //         </h2>
//   //         <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-6">
//   //           A collection of projects showcasing my skills and passion for web
//   //           development
//   //         </p>
//   //         <div className="w-20 h-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500 mx-auto rounded-full" />
//   //       </div>

//   //       {/* Filters */}
//   //       <div className="mb-8 space-y-6">
//   //         {/* Search */}
//   //         <div className="max-w-2xl mx-auto relative">
//   //           <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
//   //           <Input
//   //             placeholder="Search projects by name, description, or technology..."
//   //             value={searchQuery}
//   //             onChange={(e) => {
//   //               setSearchQuery(e.target.value);
//   //               setCurrentPage(1);
//   //             }}
//   //             className="pl-12 pr-12 py-6 glass-strong rounded-xl"
//   //           />
//   //           {searchQuery && (
//   //             <button
//   //               onClick={() => setSearchQuery("")}
//   //               className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
//   //             >
//   //               <X className="w-5 h-5" />
//   //             </button>
//   //           )}
//   //         </div>

//   //         {/* Categories */}
//   //         <div className="flex flex-wrap justify-center gap-3">
//   //           {categories.map((category) => (
//   //             <Button
//   //               key={category}
//   //               size="sm"
//   //               variant={filter === category ? "default" : "outline"}
//   //               className="capitalize rounded-full"
//   //               onClick={() => {
//   //                 setFilter(category);
//   //                 setCurrentPage(1);
//   //               }}
//   //             >
//   //               {category}
//   //             </Button>
//   //           ))}
//   //         </div>

//   //         {/* Technologies */}
//   //         <div>
//   //           <p className="text-sm text-muted-foreground text-center mb-3">
//   //             Filter by Technology
//   //           </p>
//   //           <div className="flex flex-wrap justify-center gap-2">
//   //             {technologies.map((tech) => (
//   //               <button
//   //                 key={tech}
//   //                 onClick={() => {
//   //                   setSelectedTech(selectedTech === tech ? null : tech);
//   //                   setCurrentPage(1);
//   //                 }}
//   //                 className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors ${
//   //                   selectedTech === tech
//   //                     ? "bg-primary text-primary-foreground border-primary"
//   //                     : "bg-primary/10 border-primary/30 text-primary"
//   //                 }`}
//   //               >
//   //                 {tech}
//   //               </button>
//   //             ))}
//   //           </div>
//   //         </div>

//   //         {/* Active filters */}
//   //         {(filter !== "all" || selectedTech || searchQuery) && (
//   //           <div className="flex flex-wrap items-center justify-center gap-3">
//   //             <span className="text-sm text-muted-foreground">Active filters:</span>
//   //             {filter !== "all" && (
//   //               <span className="px-3 py-1 text-xs rounded-full bg-primary/10 border border-primary/30 text-primary">
//   //                 Category: {filter}
//   //               </span>
//   //             )}
//   //             {selectedTech && (
//   //               <span className="px-3 py-1 text-xs rounded-full bg-primary/10 border border-primary/30 text-primary">
//   //                 Tech: {selectedTech}
//   //               </span>
//   //             )}
//   //             {searchQuery && (
//   //               <span className="px-3 py-1 text-xs rounded-full bg-primary/10 border border-primary/30 text-primary">
//   //                 Search: "{searchQuery}"
//   //               </span>
//   //             )}
//   //             <Button variant="ghost" size="sm" onClick={clearFilters}>
//   //               Clear All
//   //             </Button>
//   //           </div>
//   //         )}

//   //         <p className="text-center text-sm text-muted-foreground">
//   //           Showing {currentProjects.length} of {filteredProjects.length} projects
//   //         </p>
//   //       </div>

//   //       {/* Grid */}
//   //       {currentProjects.length > 0 ? (
//   //         <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
//   //           {currentProjects.map((project) => (
//   //             <Card
//   //               key={project.id}
//   //               className="glass overflow-hidden group transition-colors duration-300 h-full flex flex-col hover:border-primary/50"

//   //             >
//   //               <div className="relative h-48 bg-gradient-to-br from-primary/20 via-purple-500/20 to-pink-500/20">
//   //                 {project.image ? (
//   //                   <Image
//   //                     src={project.image}
//   //                     alt={project.title}
//   //                     fill
//   //                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//   //                     className="object-cover group-hover:scale-110 transition-transform duration-500"
//   //                   />
//   //                 ) : (
//   //                   <div className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-primary/20">
//   //                     {project.title.charAt(0)}
//   //                   </div>
//   //                 )}
//   //                 {project.featured && (
//   //                   <div className="absolute top-4 right-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
//   //                     Featured
//   //                   </div>
//   //                 )}
//   //               </div>

//   //               <div className="p-6 flex-1 flex flex-col">
//   //                 <div className="flex justify-between items-start mb-2">
//   //                   <h3 className="text-xl font-bold line-clamp-1">
//   //                     {project.title}
//   //                   </h3>
//   //                   <span className="px-2 py-1 text-xs rounded bg-muted/50 border capitalize text-muted-foreground">
//   //                     {project.category}
//   //                   </span>
//   //                 </div>

//   //                 <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-1">
//   //                   {project.description}
//   //                 </p>

//   //                 <div className="flex flex-wrap gap-2 mb-4">
//   //                   {project.technologies.slice(0, 4).map((tech, i) => (
//   //                     <span
//   //                       key={i}
//   //                       className="px-2 py-1 text-xs rounded bg-primary/10 border border-primary/30 text-primary"
//   //                     >
//   //                       {tech}
//   //                     </span>
//   //                   ))}
//   //                   {project.technologies.length > 4 && (
//   //                     <span className="text-xs text-muted-foreground">
//   //                       +{project.technologies.length - 4} more
//   //                     </span>
//   //                   )}
//   //                 </div>

//   //                 <div className="flex gap-3 pt-4 border-t">
//   //                   {project.github && (
//   //                     <a
//   //                       href={project.github}
//   //                       target="_blank"
//   //                       className="flex items-center gap-2 text-sm text-foreground/70 hover:text-primary"
//   //                     >
//   //                       <Github className="w-4 h-4" /> Code
//   //                     </a>
//   //                   )}
//   //                   {project.live && (
//   //                     <a
//   //                       href={project.live}
//   //                       target="_blank"
//   //                       className="flex items-center gap-2 text-sm text-foreground/70 hover:text-primary"
//   //                     >
//   //                       <ExternalLink className="w-4 h-4" /> Live Demo
//   //                     </a>
//   //                   )}
//   //                 </div>
//   //               </div>
//   //             </Card>
//   //           ))}
//   //         </div>
//   //       ) : (
//   //         <div className="text-center py-20">
//   //           <div className="inline-block p-6 bg-muted/30 rounded-2xl mb-4">
//   //             <Search className="w-12 h-12 text-muted-foreground" />
//   //           </div>
//   //           <h3 className="text-2xl font-bold mb-2">No projects found</h3>
//   //           <p className="text-muted-foreground mb-6">
//   //             Try adjusting your filters or search query
//   //           </p>
//   //           <Button variant="outline" onClick={clearFilters}>
//   //             Clear Filters
//   //           </Button>
//   //         </div>
//   //       )}

//   //       {/* Pagination */}
//   //       {totalPages > 1 && (
//   //         <div className="flex justify-center items-center gap-2">
//   //           <Button
//   //             variant="outline"
//   //             size="icon"
//   //             disabled={currentPage === 1}
//   //             onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
//   //           >
//   //             <ChevronLeft className="w-4 h-4" />
//   //           </Button>

//   //           {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
//   //             <Button
//   //               key={page}
//   //               size="icon"
//   //               variant={page === currentPage ? "default" : "outline"}
//   //               onClick={() => setCurrentPage(page)}
//   //             >
//   //               {page}
//   //             </Button>
//   //           ))}

//   //           <Button
//   //             variant="outline"
//   //             size="icon"
//   //             disabled={currentPage === totalPages}
//   //             onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
//   //           >
//   //             <ChevronRight className="w-4 h-4" />
//   //           </Button>
//   //         </div>
//   //       )}
//   //     </div>
//   //   </section>
//   // );


//   return (
//     <section id="projects" className="py-20 relative overflow-hidden">
//       <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

//       <div className="container max-w-5xl mx-auto px-4 relative z-10">
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 50 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//         >
//           {/* Heading */}
//           <div className="text-center mb-12">
//             <motion.span
//               initial={{ opacity: 0, scale: 0.5 }}
//               animate={inView ? { opacity: 1, scale: 1 } : {}}
//               transition={{ duration: 0.5 }}
//               className="inline-block mb-4 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium"
//             >
//               Portfolio
//             </motion.span>
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">
//               My <span className="text-primary">Projects</span>
//             </h2>
//             <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-6">
//               A collection of projects showcasing my skills and passion for web
//               development
//             </p>
//             <div className="w-20 h-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500 mx-auto rounded-full" />
//           </div>

//           {/* Filters */}
//           <div className="mb-8 space-y-6">
//             {/* Search */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={inView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.5, delay: 0.2 }}
//               className="max-w-2xl mx-auto relative"
//             >
//               <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
//               <Input
//                 placeholder="Search projects by name, description, or technology..."
//                 value={searchQuery}
//                 onChange={(e) => {
//                   setSearchQuery(e.target.value);
//                   setCurrentPage(1);
//                 }}
//                 className="pl-12 pr-12 py-6 glass-strong rounded-xl"
//               />
//               {searchQuery && (
//                 <button
//                   onClick={() => setSearchQuery("")}
//                   className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
//                 >
//                   <X className="w-5 h-5" />
//                 </button>
//               )}
//             </motion.div>

//             {/* Categories */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={inView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.5, delay: 0.3 }}
//               className="flex flex-wrap justify-center gap-3"
//             >
//               {categories.map((category) => (
//                 <Button
//                   key={category}
//                   size="sm"
//                   variant={filter === category ? "default" : "outline"}
//                   className="capitalize rounded-full"
//                   onClick={() => {
//                     setFilter(category);
//                     setCurrentPage(1);
//                   }}
//                 >
//                   {category}
//                 </Button>
//               ))}
//             </motion.div>

//             {/* Technologies */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={inView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.5, delay: 0.4 }}
//             >
//               <p className="text-sm text-muted-foreground text-center mb-3">
//                 Filter by Technology
//               </p>
//               <div className="flex flex-wrap justify-center gap-2">
//                 {technologies.map((tech) => (
//                   <button
//                     key={tech}
//                     onClick={() => {
//                       setSelectedTech(selectedTech === tech ? null : tech);
//                       setCurrentPage(1);
//                     }}
//                     className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors ${
//                       selectedTech === tech
//                         ? "bg-primary text-primary-foreground border-primary"
//                         : "bg-primary/10 border-primary/30 text-primary"
//                     }`}
//                   >
//                     {tech}
//                   </button>
//                 ))}
//               </div>
//             </motion.div>

//             {/* Active filters */}
//             {(filter !== "all" || selectedTech || searchQuery) && (
//               <div className="flex flex-wrap items-center justify-center gap-3">
//                 <span className="text-sm text-muted-foreground">Active filters:</span>
//                 {filter !== "all" && (
//                   <span className="px-3 py-1 text-xs rounded-full bg-primary/10 border border-primary/30 text-primary">
//                     Category: {filter}
//                   </span>
//                 )}
//                 {selectedTech && (
//                   <span className="px-3 py-1 text-xs rounded-full bg-primary/10 border border-primary/30 text-primary">
//                     Tech: {selectedTech}
//                   </span>
//                 )}
//                 {searchQuery && (
//                   <span className="px-3 py-1 text-xs rounded-full bg-primary/10 border border-primary/30 text-primary">
//                     Search: "{searchQuery}"
//                   </span>
//                 )}
//                 <Button variant="ghost" size="sm" onClick={clearFilters}>
//                   Clear All
//                 </Button>
//               </div>
//             )}

//             <p className="text-center text-sm text-muted-foreground">
//               Showing {currentProjects.length} of {filteredProjects.length} projects
//             </p>
//           </div>

//           {/* Grid - Remove AnimatePresence and motion from grid */}
//           {currentProjects.length > 0 ? (
//             <div className="grid md:grid-cols-2 gap-6 mb-12">
//               {currentProjects.map((project) => (
//                 <Card
//                   key={project.id}
//                   className="overflow-hidden h-full flex flex-col hover:glass-strong transition-all duration-300"
//                 >
//                   <div className="relative h-48">
//                     {project.image ? (
//                       <Image
//                         src={project.image}
//                         alt={project.title}
//                         height={500}
//                         width={800}
//                         className="object-cover"
//                       />
//                     ) : (
//                       <div className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-primary/20">
//                         {project.title.charAt(0)}
//                       </div>
//                     )}
//                     {project.featured && (
//                       <div className="absolute top-4 right-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
//                         Featured
//                       </div>
//                     )}
//                   </div>

//                   <div className="p-6 flex-1 flex flex-col">
//                     <div className="flex justify-between items-start mb-2">
//                       <h3 className="text-xl font-bold line-clamp-1">
//                         {project.title}
//                       </h3>
//                       <span className="px-2 py-1 text-xs rounded bg-muted/50 border capitalize text-muted-foreground">
//                         {project.category}
//                       </span>
//                     </div>

//                     <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-1">
//                       {project.description}
//                     </p>

//                     <div className="flex flex-wrap gap-2 mb-4">
//                       {project.technologies.slice(0, 4).map((tech, i) => (
//                         <span
//                           key={i}
//                           className="px-2 py-1 text-xs rounded bg-primary/10 border border-primary/30 text-primary"
//                         >
//                           {tech}
//                         </span>
//                       ))}
//                       {project.technologies.length > 4 && (
//                         <span className="text-xs text-muted-foreground">
//                           +{project.technologies.length - 4} more
//                         </span>
//                       )}
//                     </div>

//                     <div className="flex gap-3 pt-4 border-t">
//                       {project.github && (
//                         <a
//                           href={project.github}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="flex items-center gap-2 text-sm text-foreground/70 hover:text-primary"
//                         >
//                           <Github className="w-4 h-4" /> Code
//                         </a>
//                       )}
//                       {project.live && (
//                         <a
//                           href={project.live}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="flex items-center gap-2 text-sm text-foreground/70 hover:text-primary"
//                         >
//                           <ExternalLink className="w-4 h-4" /> Live Demo
//                         </a>
//                       )}
//                     </div>
//                   </div>
//                 </Card>
//               ))}
//             </div>
//           ) : (
//             <div className="text-center py-20">
//               <div className="inline-block p-6 bg-muted/30 rounded-2xl mb-4">
//                 <Search className="w-12 h-12 text-muted-foreground" />
//               </div>
//               <h3 className="text-2xl font-bold mb-2">No projects found</h3>
//               <p className="text-muted-foreground mb-6">
//                 Try adjusting your filters or search query
//               </p>
//               <Button variant="outline" onClick={clearFilters}>
//                 Clear Filters
//               </Button>
//             </div>
//           )}

//           {/* Pagination */}
//           {totalPages > 1 && (
//             <div className="flex justify-center items-center gap-2">
//               <Button
//                 variant="outline"
//                 size="icon"
//                 disabled={currentPage === 1}
//                 onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
//               >
//                 <ChevronLeft className="w-4 h-4" />
//               </Button>

//               {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
//                 <Button
//                   key={page}
//                   size="icon"
//                   variant={page === currentPage ? "default" : "outline"}
//                   onClick={() => setCurrentPage(page)}
//                 >
//                   {page}
//                 </Button>
//               ))}

//               <Button
//                 variant="outline"
//                 size="icon"
//                 disabled={currentPage === totalPages}
//                 onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
//               >
//                 <ChevronRight className="w-4 h-4" />
//               </Button>
//             </div>
//           )}
//         </motion.div>
//       </div>
//     </section>
//   );

// }





"use client";

import { useState, useMemo, useEffect } from "react";
import {
  ExternalLink,
  Github,
  ChevronLeft,
  ChevronRight,
  Search,
  X,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import projectsData from "@/data/projects.json";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const PROJECTS_PER_PAGE = 6;

// Image Modal Component
function ImageModal({
  images,
  currentIndex,
  onClose,
  onNavigate,
}: {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (direction: "prev" | "next") => void;
}) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
    >
      <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        >
          <X className="w-6 h-6 text-white" />
        </button>

        {/* Image */}
        <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
          <Image
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            fill
            className="object-contain"
          />
        </div>

        {/* Navigation */}
        {images.length > 1 && (
          <>
            <button
              onClick={() => onNavigate("prev")}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/50 hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-black" />
            </button>
            <button
              onClick={() => onNavigate("next")}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/50 hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-black" />
            </button>
          </>
        )}

        {/* Indicators */}
        {images.length > 1 && (
          <div className="flex justify-center gap-2 mt-4">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => onNavigate(idx as any)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  idx === currentIndex ? "bg-primary" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

// Project Card Component
function ProjectCard({ project }: { project: any }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const images = project.images || [project.image];

  // Auto-rotate images
  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleNavigate = (direction: "prev" | "next" | number) => {
    if (typeof direction === "number") {
      setCurrentImageIndex(direction);
    } else if (direction === "prev") {
      setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    } else {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }
  };

  return (
    <>
      <Card className="overflow-hidden h-full flex flex-col hover:glass-strong transition-all duration-300">
        <div
          className="relative h-56 cursor-pointer group"
          onClick={() => setShowModal(true)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              {images[currentImageIndex] ? (
                <Image
                  src={images[currentImageIndex]}
                  alt={project.title}
                  height={400}
                  width={800}
                  className="object-cover h-56"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-primary/20 bg-gradient-to-br from-primary/20 via-purple-500/20 to-pink-500/20">
                  {project.title.charAt(0)}
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="text-white font-medium">Click to view</span>
          </div>

          {project.featured && (
            <div className="absolute text-black top-4 right-4 px-3 py-1 bg-yellow-200  text-xs font-semibold rounded-full z-10">
              Featured
            </div>
          )}

          {/* Image indicators */}
          {images.length > 1 && (
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
              {images.map((img:any, idx:any) => (
                <div
                  key={idx}
                  className={`w-1.5 h-1.5 rounded-full transition-colors ${
                    idx === currentImageIndex ? "bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        <div className="p-6 flex-1 flex flex-col">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold line-clamp-1">{project.title}</h3>
            <span className="px-2 py-1 text-xs rounded bg-muted/50 border capitalize text-muted-foreground">
              {project.category}
            </span>
          </div>

          <p className="text-sm text-muted-foreground mb-4 line-clamp- flex-1">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 4).map((tech: string, i: number) => (
              <span
                key={i}
                className="px-2 py-1 text-xs rounded bg-primary/10 border border-primary/30 text-primary"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="text-xs text-muted-foreground">
                +{project.technologies.length - 4} more
              </span>
            )}
          </div>

          <div className="flex gap-3 pt-4 border-t">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-foreground/70 hover:text-primary"
              >
                <Github className="w-4 h-4" /> Code
              </a>
            )}
            {(project.live || project.production) && (
              <a
                href={project.live || project.production}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-foreground/70 hover:text-primary"
              >
                <ExternalLink className="w-4 h-4" /> { project.production ? "Production" : "Live Demo"}
              </a>
            )}
          </div>
        </div>
      </Card>

      {/* Image Modal */}
      <AnimatePresence>
        {showModal && (
          <ImageModal
            images={images}
            currentIndex={currentImageIndex}
            onClose={() => setShowModal(false)}
            onNavigate={handleNavigate}
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default function Projects() {
  // ...existing code...
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [filter, setFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  const categories = useMemo(() => {
    const cats = new Set(projectsData.map((p) => p.category));
    return ["all", ...Array.from(cats)];
  }, []);

  const technologies = useMemo(() => {
    const techs = new Set(projectsData.flatMap((p) => p.technologies));
    return Array.from(techs).sort();
  }, []);

  const filteredProjects = useMemo(() => {
    let filtered = projectsData;

    if (filter !== "all") {
      filtered = filtered.filter((p) => p.category === filter);
    }

    if (selectedTech) {
      filtered = filtered.filter((p) => p.technologies.includes(selectedTech));
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.technologies.some((t) => t.toLowerCase().includes(query))
      );
    }

    return filtered;
  }, [filter, selectedTech, searchQuery]);

  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const currentProjects = filteredProjects.slice(
    startIndex,
    startIndex + PROJECTS_PER_PAGE
  );

  const clearFilters = () => {
    setFilter("all");
    setSelectedTech(null);
    setSearchQuery("");
    setCurrentPage(1);
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* ...existing code... */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="container max-w-5xl mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* ...existing heading and filters... */}
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium"
            >
              Portfolio
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="text-primary">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-6">
              A collection of projects showcasing my skills and passion for web
              development
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500 mx-auto rounded-full" />
          </div>

          <div className="mb-8 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-2xl mx-auto relative"
            >
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search projects by name, description, or technology..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="pl-12 pr-12 py-6 glass-strong rounded-xl"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-3"
            >
              {categories.map((category) => (
                <Button
                  key={category}
                  size="sm"
                  variant={filter === category ? "default" : "outline"}
                  className="capitalize rounded-full"
                  onClick={() => {
                    setFilter(category);
                    setCurrentPage(1);
                  }}
                >
                  {category}
                </Button>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <p className="text-sm text-muted-foreground text-center mb-3">
                Filter by Technology
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {technologies.map((tech) => (
                  <button
                    key={tech}
                    onClick={() => {
                      setSelectedTech(selectedTech === tech ? null : tech);
                      setCurrentPage(1);
                    }}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors ${
                      selectedTech === tech
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-primary/10 border-primary/30 text-primary"
                    }`}
                  >
                    {tech}
                  </button>
                ))}
              </div>
            </motion.div>

            {(filter !== "all" || selectedTech || searchQuery) && (
              <div className="flex flex-wrap items-center justify-center gap-3">
                <span className="text-sm text-muted-foreground">Active filters:</span>
                {filter !== "all" && (
                  <span className="px-3 py-1 text-xs rounded-full bg-primary/10 border border-primary/30 text-primary">
                    Category: {filter}
                  </span>
                )}
                {selectedTech && (
                  <span className="px-3 py-1 text-xs rounded-full bg-primary/10 border border-primary/30 text-primary">
                    Tech: {selectedTech}
                  </span>
                )}
                {searchQuery && (
                  <span className="px-3 py-1 text-xs rounded-full bg-primary/10 border border-primary/30 text-primary">
                    Search: "{searchQuery}"
                  </span>
                )}
                <Button variant="ghost" size="sm" onClick={clearFilters}>
                  Clear All
                </Button>
              </div>
            )}

            <p className="text-center text-sm text-muted-foreground">
              Showing {currentProjects.length} of {filteredProjects.length} projects
            </p>
          </div>

          {currentProjects.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {currentProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="inline-block p-6 bg-muted/30 rounded-2xl mb-4">
                <Search className="w-12 h-12 text-muted-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-2">No projects found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your filters or search query
              </p>
              <Button variant="outline" onClick={clearFilters}>
                Clear Filters
              </Button>
            </div>
          )}

          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  size="icon"
                  variant={page === currentPage ? "default" : "outline"}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </Button>
              ))}

              <Button
                variant="outline"
                size="icon"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}