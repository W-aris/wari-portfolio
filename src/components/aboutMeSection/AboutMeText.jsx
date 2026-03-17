import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
       I am a Computer Science and Engineering undergraduate at NIT Rourkela, with a strong academic background and hands-on experience in software development. My expertise spans data structures, algorithms, databases, and full-stack web technologies like React.js, Node.js, and MongoDB. I have built impactful projects such as QuickConnect, a real-time messaging and video calling platform, and LeetCode Tracker, a tool for DSA progress monitoring used by thousands. Certified in SQL and experienced in database management, I am also an active member of the GTA Club, contributing to web-based games and UI/UX design, and have managed logistics for INNOVISION 2023, a major technical fest with over 500 participants. I am passionate about leveraging technology to solve real-world problems and eager to collaborate on innovative projects
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
