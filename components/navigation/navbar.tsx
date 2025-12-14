// "use client";

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X, Code2 } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { ThemeToggle } from "@/components/theme-toggle";

// const navItems = [
//   { name: "Home", href: "home" },
//   { name: "About", href: "about" },
//   { name: "Skills", href: "skills" },
//   { name: "Experience", href: "experience" },
//   { name: "Projects", href: "projects" },
//   { name: "Contact", href: "contact" },
// ];

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("home");
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);

//       const sections = navItems.map((item) => item.href);
//       for (const section of sections) {
//         const element = document.getElementById(section);
//         if (element) {
//           const rect = element.getBoundingClientRect();
//           if (rect.top <= 100 && rect.bottom >= 100) {
//             setActiveSection(section);
//             break;
//           }
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToSection = (id: string) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//     setIsOpen(false);
//   };

//   return (
//     <>
//       {/* Desktop Navbar - Floating and Centered */}
//       <motion.nav
//         initial={{ y: -100, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.5, delay: 0.2 }}
//         className="hidden md:block fixed top-6 left-0 right-0 z-50 px-4"
//       >
//         <div className="max-w-5xl mx-auto">
//           <div
//             className={`
//             flex items-center justify-between gap-1 px-2 py-2
//             glass-strong rounded-full
//             border border-border/50
//             shadow-lg shadow-black/5
//             transition-all duration-300
//             ${scrolled ? "scale-100" : "scale-100"}
//         `}
//           >
//             {/* Logo */}
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => scrollToSection("home")}
//               className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-muted/50 transition-all group"
//             >
//               <div className="relative">
//                 <Code2 className="w-5 h-5 text-primary" />
//               </div>
//             </motion.button>

//             {/* <div className="h-8 w-px bg-border/50" /> */}

//             <div>
//               {/* Nav Items */}
//               {navItems.map((item) => (
//                 <motion.button
//                   key={item.href}
//                   onClick={() => scrollToSection(item.href)}
//                   className={`
//                                 relative px-4 py-2 rounded-full text-sm font-medium
//                                 transition-all duration-200
//                                 ${
//                                   activeSection === item.href
//                                     ? "text-primary-foreground"
//                                     : "text-foreground/60 hover:text-foreground"
//                                 }
//                             `}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   {activeSection === item.href && (
//                     <motion.div
//                       layoutId="activeSection"
//                       className="absolute inset-0 bg-primary rounded-full"
//                       transition={{
//                         type: "spring",
//                         bounce: 0.2,
//                         duration: 0.6,
//                       }}
//                     />
//                   )}
//                   <span className="relative z-10">{item.name}</span>
//                 </motion.button>
//               ))}
//             </div>
//             {/* Divider */}
//             {/* <div className="h-8 w-px bg-border/50" /> */}

//             {/* Theme Toggle */}
//             <div className="px-2">
//               <ThemeToggle />
//             </div>
//           </div>
//         </div>
//       </motion.nav>

//       {/* Mobile Navbar - Top Fixed */}
//       <motion.nav
//         initial={{ y: -100 }}
//         animate={{ y: 0 }}
//         transition={{ duration: 0.3 }}
//         className={`
//                     md:hidden fixed top-0 left-0 right-0 z-50
//                     transition-all duration-300
//                     ${
//                       scrolled
//                         ? "glass-strong shadow-lg backdrop-blur-xl"
//                         : "bg-background/30 backdrop-blur-sm"
//                     }
//                 `}
//       >
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="flex items-center justify-between h-16">
//             {/* Mobile Logo */}
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="flex items-center gap-2 cursor-pointer"
//               onClick={() => scrollToSection("home")}
//             >
//               <Code2 className="w-6 h-6 text-primary" />
//               <span className="text-lg font-bold text-foreground">
//                 Portfolio
//               </span>
//             </motion.div>

//             {/* Mobile Actions */}
//             <div className="flex items-center gap-3">
//               <ThemeToggle />
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 onClick={() => setIsOpen(!isOpen)}
//                 className="relative hover:bg-primary/10"
//               >
//                 <AnimatePresence mode="wait">
//                   {isOpen ? (
//                     <motion.div
//                       key="close"
//                       initial={{ rotate: -90, opacity: 0 }}
//                       animate={{ rotate: 0, opacity: 1 }}
//                       exit={{ rotate: 90, opacity: 0 }}
//                       transition={{ duration: 0.2 }}
//                     >
//                       <X className="w-5 h-5" />
//                     </motion.div>
//                   ) : (
//                     <motion.div
//                       key="menu"
//                       initial={{ rotate: 90, opacity: 0 }}
//                       animate={{ rotate: 0, opacity: 1 }}
//                       exit={{ rotate: -90, opacity: 0 }}
//                       transition={{ duration: 0.2 }}
//                     >
//                       <Menu className="w-5 h-5" />
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </Button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         <AnimatePresence>
//           {isOpen && (
//             <motion.div
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: "auto" }}
//               exit={{ opacity: 0, height: 0 }}
//               transition={{ duration: 0.3 }}
//               className="glass-strong border-t border-border/50 overflow-hidden"
//             >
//               <div className="container max-w-7xl mx-auto px-4 py-6 space-y-1">
//                 {navItems.map((item, index) => (
//                   <motion.button
//                     key={item.href}
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: index * 0.05 }}
//                     onClick={() => scrollToSection(item.href)}
//                     className={`
//                                             relative block w-full text-left px-4 py-3 
//                                             rounded-xl transition-all
//                                             ${
//                                               activeSection === item.href
//                                                 ? "text-primary bg-primary/10 font-medium"
//                                                 : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
//                                             }
//                                         `}
//                   >
//                     <div className="flex items-center gap-3">
//                       {activeSection === item.href && (
//                         <motion.div
//                           layoutId="activeMobile"
//                           className="w-1 h-6 bg-primary rounded-full"
//                           transition={{
//                             type: "spring",
//                             bounce: 0.2,
//                             duration: 0.6,
//                           }}
//                         />
//                       )}
//                       <span>{item.name}</span>
//                     </div>
//                   </motion.button>
//                 ))}
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </motion.nav>
//     </>
//   );
// }




"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2, Home, User, Briefcase, FolderGit2, Mail, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

const navItems = [
  { name: "Home", href: "home", icon: Home },
  { name: "About", href: "about", icon: User },
  { name: "Skills", href: "skills", icon: Wrench },
  { name: "Experience", href: "experience", icon: Briefcase },
  { name: "Projects", href: "projects", icon: FolderGit2 },
  { name: "Contact", href: "contact", icon: Mail },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => item.href);
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) setIsOpen(false);
    };

    if (isOpen) {
      window.addEventListener("scroll", handleScroll);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Navbar - Floating and Centered */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="hidden md:block fixed top-6 left-0 right-0 z-50 px-4"
      >
        <div className="max-w-5xl mx-auto">
          <div
            className={`
              flex items-center justify-between gap-2 px-3 py-2
              glass-strong rounded-full
              border border-border/50
              shadow-lg shadow-black/5
              transition-all duration-300
            `}
          >
            {/* Logo */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("home")}
              className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-primary/10 transition-all group"
            >
              <Code2 className="w-5 h-5 text-primary group-hover:rotate-12 transition-transform" />
              <span className="font-bold text-sm hidden lg:inline-block">Portfolio</span>
            </motion.button>

            {/* Nav Items */}
            <div className="flex items-center gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className={`
                      relative px-4 py-2 rounded-full text-sm font-medium
                      transition-all duration-200 flex items-center gap-2
                      ${
                        activeSection === item.href
                          ? "text-primary-foreground"
                          : "text-foreground/60 hover:text-foreground hover:bg-muted/50"
                      }
                    `}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {activeSection === item.href && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute inset-0 bg-primary rounded-full"
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.6,
                        }}
                      />
                    )}
                    <Icon className="w-4 h-4 relative z-10" />
                    <span className="relative z-10 hidden lg:inline-block">{item.name}</span>
                  </motion.button>
                );
              })}
            </div>

            {/* Theme Toggle */}
            <div className="px-2">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navbar - Top Fixed */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
        className={`
          md:hidden fixed top-0 left-0 right-0 z-50
          transition-all duration-300
          ${
            scrolled
              ? "glass-strong shadow-lg backdrop-blur-xl"
              : "bg-background/80 backdrop-blur-sm"
          }
          border-b border-border/50 rounded-4xl
        `}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Mobile Logo */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2"
              onClick={() => scrollToSection("home")}
            >
              <Code2 className="w-6 h-6 text-primary" />
              <span className="text-lg font-bold text-foreground">Portfolio</span>
            </motion.button>

            {/* Mobile Actions */}
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className="relative hover:bg-primary/10"
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-5 h-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-5 h-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Side Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] z-50 md:hidden glass-strong border-l border-border/50 shadow-2xl"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-border/50">
                  <div className="flex items-center gap-2">
                    <Code2 className="w-5 h-5 text-primary" />
                    <span className="font-bold text-lg">Menu</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    className="hover:bg-destructive/10 hover:text-destructive"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                {/* Navigation Items */}
                <div className="flex-1 overflow-y-auto p-4">
                  <div className="space-y-2">
                    {navItems.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <motion.button
                          key={item.href}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          onClick={() => scrollToSection(item.href)}
                          className={`
                            w-full flex items-center gap-4 px-4 py-3.5
                            rounded-xl transition-all duration-200
                            ${
                              activeSection === item.href
                                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                                : "text-foreground/70 hover:text-foreground hover:bg-muted/50"
                            }
                          `}
                        >
                          <Icon className={`w-5 h-5 ${activeSection === item.href ? "text-primary-foreground" : "text-primary"}`} />
                          <span className="font-medium">{item.name}</span>
                          {activeSection === item.href && (
                            <motion.div
                              layoutId="activeMobileIndicator"
                              className="ml-auto w-2 h-2 rounded-full bg-primary-foreground"
                              transition={{
                                type: "spring",
                                bounce: 0.2,
                                duration: 0.6,
                              }}
                            />
                          )}
                        </motion.button>
                      );
                    })}
                  </div>
                </div>

                {/* Footer */}
                <div className="p-4 border-t border-border/50">
                  <div className="text-xs text-muted-foreground text-center">
                    <p>© 2025 Portfolio</p>
                    <p className="mt-1">Built with Next.js & Tailwind CSS</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}