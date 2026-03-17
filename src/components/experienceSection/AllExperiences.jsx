import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Full Stack Developer Intern ",
    company: "Technocolabs Softwares Inc. ",
    date: "May 2025 - July 2025",
    responsibilities: [
  "Building full-stack web applications.",
  "Adding authentication and user roles.",
  "Creating course and progress features.",
  "Improving UI and user experience.",
],
  },
 {
  job: "Machine Learning Researcher",
  company: "Academic Project",
  date: "2025",
  responsibilities: [
    "Working on disease prediction using machine learning.",
    "Analyzing symptoms data to build prediction models.",
    "Improving accuracy of predictions with different algorithms.",
    // "Testing and evaluating model performance.",
  ],
}
  // {
  //   job: "Course Instructor",
  //   company: "Sprints",
  //   date: "2024 - Present",
  //   responsibilities: [
  //     "Teaching JavaScript, React and TailwindCSS.",
  //     "Participating in preparing course materials.",
  //     "Helping students through their way in learning web development technologies.",
  //   ],
  // },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 1 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
