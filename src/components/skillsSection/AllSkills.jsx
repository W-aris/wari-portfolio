import SingleSkill from "./SingleSkill";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { FaNodeJs, FaGitAlt, FaGithub, FaPython } from "react-icons/fa";
import { SiExpress, SiMongodb, SiPostgresql, SiMysql, SiPrisma, SiFirebase, SiCplusplus, SiTensorflow, SiAuth0, SiRadixui } from "react-icons/si";
import { TbApi } from "react-icons/tb";

// const skills = [
//   {
//     skill: "HTML",
//     icon: FaHtml5,
//   },
//   {
//     skill: "CSS",
//     icon: FaCss3Alt,
//   },
//   {
//     skill: "JavaScript",
//     icon: IoLogoJavascript,
//   },
//   {
//     skill: "TypeScript",
//     icon: SiTypescript,
//   },
//   {
//     skill: "ReactJS",
//     icon: FaReact,
//   },
//   {
//     skill: "Redux",
//     icon: SiRedux,
//   },
//   {
//     skill: "NextJS",
//     icon: SiNextdotjs,
//   },
//   {
//     skill: "TailwindCSS",
//     icon: RiTailwindCssFill,
//   },
  
  
// ];

const skills = [
  { skill: "HTML", icon: FaHtml5 },
  { skill: "CSS", icon: FaCss3Alt },
  { skill: "JavaScript", icon: IoLogoJavascript },
  { skill: "TypeScript", icon: SiTypescript },
  { skill: "ReactJS", icon: FaReact },
  { skill: "Redux", icon: SiRedux },
  { skill: "NextJS", icon: SiNextdotjs },
  { skill: "TailwindCSS", icon: RiTailwindCssFill },

  { skill: "NodeJS", icon: FaNodeJs },
  { skill: "ExpressJS", icon: SiExpress },
  { skill: "MongoDB", icon: SiMongodb },
  { skill: "PostgreSQL", icon: SiPostgresql },
  { skill: "MySQL", icon: SiMysql },
  { skill: "Prisma", icon: SiPrisma },
  { skill: "Firebase", icon: SiFirebase },

  { skill: "REST APIs", icon: TbApi },
  { skill: "Git", icon: FaGitAlt },
  { skill: "GitHub", icon: FaGithub },

  { skill: "C++", icon: SiCplusplus },
  { skill: "Python", icon: FaPython },
  { skill: "Machine Learning", icon: SiTensorflow },

  { skill: "Clerk Auth", icon: SiAuth0 },
  { skill: "Shadcn UI", icon: SiRadixui },
];
const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
            <motion.div
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              key={index}
            >
              <SingleSkill
                key={index}
                text={item.skill}
                imgSvg={<item.icon />}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
