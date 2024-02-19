import { IoIosArrowForward, IoLogoAndroid } from "react-icons/io";
import { FaReact, FaMicrosoft, FaGithub, FaSitemap, FaHotjar } from "react-icons/fa";
import { TbBrandNextjs, TbBrandReactNative, TbBrandTypescript, TbBrandKotlin } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa6";
import { SiChakraui, SiMui, SiTailwindcss, SiStyledcomponents, SiGoogleanalytics, SiGoogletagmanager, SiGithubactions } from "react-icons/si";
import { useState } from "react";
import { RiJavascriptLine } from "react-icons/ri";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { GiBrazilFlag } from "react-icons/gi";
import { SkillsItems } from "./SkillsItems";

export default function Skills() {
  const [openSkills, setSkills] = useState<string[]>([""])

  const programmingLanguages = [
    {
      id: 'javascript',
      name: 'JavaScript.js',
      icon: RiJavascriptLine
    },
    {
      id: 'typescript',
      name: 'Typescript.ts',
      icon: TbBrandTypescript
    },
    {
      id: 'kotlin',
      name: 'Kotlin.kt',
      icon: TbBrandKotlin
    }
  ]

  const frameworks = [
    {
      id: 'react',
      name: 'React.js',
      icon: FaReact
    },
    {
      id: 'next',
      name: 'Next.js',
      icon: TbBrandNextjs
    },
    {
      id: 'node',
      name: 'Node.js',
      icon: FaNodeJs
    },
    {
      id: 'reactNative',
      name: 'ReactNative.js',
      icon: TbBrandReactNative
    },
    {
      id: 'androidStudio',
      name: 'AndroidStudio',
      icon: IoLogoAndroid
    },
  ]

  const designSystems = [
    {
      id: 'chakra',
      name: 'Chakra.ui',
      icon: SiChakraui
    },
    {
      id: 'material',
      name: 'Material.ui',
      icon: SiMui
    },
    {
      id: 'tailWind',
      name: 'TailWind.css',
      icon: SiTailwindcss
    },
    {
      id: 'styledComponents',
      name: 'StyledComponents.js',
      icon: SiStyledcomponents
    },
  ]

  const seoAndMetrics = [
    {
      id: 'siteMap',
      name: 'SiteMap',
      icon: FaSitemap
    },
    {
      id: 'googleAnalytics',
      name: 'GoogleAnalytics',
      icon: SiGoogleanalytics
    },
    {
      id: 'googleTagManager',
      name: 'GoogleTagManager',
      icon: SiGoogletagmanager
    },
    {
      id: 'microsoftClarity',
      name: 'MicrosoftClarity',
      icon: FaMicrosoft
    },
    {
      id: 'hotjar',
      name: 'Hotjar',
      icon: FaHotjar
    },
  ]

  const codeVersioners = [
    {
      id: 'gitHub',
      name: 'GitHub',
      icon: FaGithub
    },
    {
      id: 'gitHubActions',
      name: 'GitHubActions',
      icon: SiGithubactions
    },
  ]

  const language = [
    {
      id: 'portuguese',
      name: 'Portuguese',
      icon: GiBrazilFlag
    },
    {
      id: 'english',
      name: 'English',
      icon: LiaFlagUsaSolid
    },
  ]

  function handleSkills(skill: string) {
    if (openSkills.find(e => e === skill)) {
      const removeSkill = openSkills.filter(e => e !== skill)
      setSkills(removeSkill)
    } else {
      setSkills([...openSkills, skill])
    }
  }

  return <div>
    <h2 className="flex items-center font-bold mb-2">
      <IoIosArrowForward className="mr-2" /> Skills
    </h2>
    <div className="pl-5">
      <button className="flex items-center font-bold mb-2" onClick={() => handleSkills("programmingLanguages")}>
        <IoIosArrowForward className="mr-2" /> ProgrammingLanguages
      </button>
      {openSkills.some(e => e === "programmingLanguages") && (
        <div className="pl-6 flex flex-col mb-2">
          {programmingLanguages.map(e => (
            <SkillsItems key={e.id} name={e.name} IconName={e.icon} />
          ))}
        </div>
      )}
      <button className="flex items-center font-bold mb-2" onClick={() => handleSkills("frameworks")}>
        <IoIosArrowForward className="mr-2" /> Frameworks
      </button>
      {openSkills.some(e => e === "frameworks") && (
        <div className="pl-6 flex flex-col mb-2">
          {frameworks.map(e => (
            <SkillsItems key={e.id} name={e.name} IconName={e.icon} />
          ))}
        </div>
      )}
      <button className="flex items-center font-bold mb-2" onClick={() => handleSkills("designSystems")}>
        <IoIosArrowForward className="mr-2" /> DesignSystems
      </button>
      {openSkills.some(e => e === "designSystems") && (
        <div className="pl-6 flex flex-col mb-2">
          {designSystems.map(e => (
            <SkillsItems key={e.id} name={e.name} IconName={e.icon} />
          ))}
        </div>
      )}
      <button className="flex items-center font-bold mb-2" onClick={() => handleSkills("seo")}>
        <IoIosArrowForward className="mr-2" /> SeoAndMetricsMechanisms
      </button>
      {openSkills.some(e => e === "seo") && (
        <div className="pl-6 flex flex-col mb-2">
          {seoAndMetrics.map(e => (
            <SkillsItems key={e.id} name={e.name} IconName={e.icon} />
          ))}
        </div>
      )}
      <button className="flex items-center font-bold mb-2" onClick={() => handleSkills("codeVersioners")}>
        <IoIosArrowForward className="mr-2" /> CodeVersioners
      </button>
      {openSkills.some(e => e === "codeVersioners") && (
        <div className="pl-6 flex flex-col mb-2">
          {codeVersioners.map(e => (
            <SkillsItems key={e.id} name={e.name} IconName={e.icon} />
          ))}
        </div>
      )}
      <button className="flex items-center font-bold mb-2" onClick={() => handleSkills("language")}>
        <IoIosArrowForward className="mr-2" /> Languages
      </button>
      {openSkills.some(e => e === "language") && (
        <div className="pl-6 flex flex-col mb-2">
          {language.map(e => (
            <SkillsItems key={e.id} name={e.name} IconName={e.icon} />
          ))}
        </div>
      )}
    </div>
  </div>
}
