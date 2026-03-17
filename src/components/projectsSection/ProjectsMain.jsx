import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Library Management System",
    year: "Mar2024",
    align: "right",
    image: "/images/website-img-1.jpg",

    link: "https://github.com/W-aris/Library-Manage",
  },
  {
    name: "MediConnect ",
    year: "Sept2024",
    align: "left",
    image: "/images/website-img-2.jpg",
    link: "https://github.com/W-aris/MediConnect",
  },
  {
    name: "Wikipidea-search",
    year: "Nov2024",
    align: "right",
    image: "/images/website-img-3.jpg",
    link: "https://github.com/W-aris/Wikipidea-search",
  },
  {
    name: "Leetcode-tracker ",
    year: "Feb2025",
    align: "left",
    image: "/images/website-img-4.jpg",
    link: "https://leetcode-tracker-alpha.vercel.app/",
  },
  {
    name: "Quick Connect",
    year: "April2025",
    align: "right",
    image: "/images/i.jpg",
    link: "https://quickconnect-by-waris.onrender.com/",
  },
  {
  name: "NextHire AI",
  year: "March 2026",
  align: "left",
  image: "/images/NextHire.png",
  link: "https://next-hire-ai-5ipx.vercel.app/",
}
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link} // <-- Add this line
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
