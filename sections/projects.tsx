"use client"
import { ProjectCard } from "@/components/ui/projectCard";
import { useEffect, useState } from "react";

const projectsData = [
  {
    title: "Halo Landing Page",
    technologies: "Next + Tailwind CSS",
    image: "/images/halo-landing.png",
    link: "https://halo-landing-iara-fryc.vercel.app/"
  },
  {
    title: "Company Landing Page",
    technologies: "React + Vite + Material UI",
    image: "/images/company-landing.png",
    link: "https://company-landing-iara-fryc.vercel.app/"
  },
];

export default function Projects() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMouseEnter = (index: number) => {
    if (!isMobile) {
      setActiveIndex(index);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setActiveIndex(null);
    }
  };

  return (
    <div className="flex flex-col items-center gap-15 w-screen h-auto p-25 bg-background">
      <h1 className="text-white">Projects</h1>
      <div className="flex flex-wrap justify-center items-center gap-4">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            index={index}
            title={project.title}
            technologies={project.technologies}
            image={project.image}
            link={project.link}
            isActive={isMobile ? true : activeIndex === index}
            isMobile={isMobile}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        ))}
      </div>
    </div>
  );
}