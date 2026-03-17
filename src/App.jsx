import AboutMeMain from "./components/aboutMeSection/AboutMeMain";
import ContactMeMain from "./components/contactMeSection/ContactMeMain";
import ExperienceMain from "./components/experienceSection/ExperienceMain";
import FooterMain from "./components/footer/FooterMain";
import HeroGradient from "./components/heroSection/HeroGradient";
import HeroMain from "./components/heroSection/HeroMain";
import NavbarMain from "./components/navbar/NavbarMain";
import ProjectsMain from "./components/projectsSection/ProjectsMain";
import SkillsMain from "./components/skillsSection/SkillsMain";
import SubSkills from "./components/skillsSection/SubSkills";
import SubHeroMain from "./components/subHeroSection/SubHeroMain";

function App() {
  return (
    <main className="font-body text-white relative overflow-hidden">
      <NavbarMain />
      <HeroMain />
      <HeroGradient />
      <SubHeroMain />
      <AboutMeMain />
      <SkillsMain />
      <SubSkills />
      <ExperienceMain />
      <ProjectsMain />
      <ContactMeMain />
      <FooterMain />
    </main>
  );
}

export default App;
// import React, { useState } from 'react';
// import AboutMeMain from "./components/aboutMeSection/AboutMeMain";
// import ContactMeMain from "./components/contactMeSection/ContactMeMain";
// import ExperienceMain from "./components/experienceSection/ExperienceMain";
// import FooterMain from "./components/footer/FooterMain";
// import HeroGradient from "./components/heroSection/HeroGradient";
// import HeroMain from "./components/heroSection/HeroMain";
// import NavbarMain from "./components/navbar/NavbarMain";
// import ProjectsMain from "./components/projectsSection/ProjectsMain";
// import SkillsMain from "./components/skillsSection/SkillsMain";
// import SubSkills from "./components/skillsSection/SubSkills";
// import SubHeroMain from "./components/subHeroSection/SubHeroMain";

// function App() {
//   const [darkMode, setDarkMode] = useState(true); // Default: dark mode

//   const toggleDarkMode = () => setDarkMode(!darkMode);

//   return (
//     <main className={`font-body relative overflow-hidden ${darkMode ? 'text-white bg-black' : 'text-black bg-white'}`}>
//       <button
//         onClick={toggleDarkMode}
//         className="absolute top-4 right-4 p-2 bg-gray-800 text-white rounded"
//       >
//         {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
//       </button>
//       <NavbarMain />
//       <HeroMain />
//       <HeroGradient />
//       <SubHeroMain />
//       <AboutMeMain />
//       <SkillsMain />
//       <SubSkills />
//       {/* <ExperienceMain /> */}
//       <ProjectsMain />
//       <ContactMeMain />
//       <FooterMain />
//     </main>
//   );
// }

// export default App;
