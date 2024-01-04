import pythonLogo from "./logo/Python-logo.png";
import javaLogo from "./logo/Java-logo.png";
import cLogo from "./logo/C-Logo.png";
import jsLogo from "./logo/JavaScript-logo.png";
import reactLogo from "./logo/React-logo.png";
import htmlLogo from "./logo/HTML-logo.png";
import cssLogo from "./logo/CSS-logo.png";
import sqlLogo from "./logo/SQL-logo.svg";

export const biop1 = `Hello! My name is Michael Claude and I am currently a Third Year at the University of Massachuetts Boston. I am currently majoring in Computer Science with a Minor in English. Outside of academics, I went through the Hack.Diversity program and am an Alumni of their Fellowship. I also interened at AWS for the Summer of 2023 and will be returning as an intern for the Summer of 2024.

I have a varied interest in all fields of Computer Science and Software Development aand enjoy learning new areas of the field.

Outside of Computer Science, I enjoy reading and writing stories. I like to share ideas and works with other writers in order to further my growth as both a writer and reader.`;

// interface info {
//   skillName: string;
//   info: {
//     experience: string;
//     strength: string;
//     projects: string;
//   };
// }

export interface info {
  [key: string]: { experience: string; projects: string; img: string };
}

export const info_card: info = {
  Python: {
    experience:
      "Python was the first language I learned and was used during my Intro to Computing course. My Tutoring Assistant bot as well as my 2023 AWS internship project both mainly used Python. This is my most used language",
    projects: `\u2022 Intro to Computing Projects
    \u2022 Tutoring Assistant Bot 
    \u2022 2023 AWS Internship Project`,
    img: pythonLogo,
  },
  Java: {
    experience:
      "Java was the language where I learned and practiced many key Data Structures and Algorithms. I used it during my Intermediate Computing and Data Structures & Algorithms courses.",
    projects: `\u2022 Intermediate Computing Projects
      \u2022 Data Structre & Algorithms Projects`,
    img: javaLogo,
  },
  C: {
    experience:
      "I have used C in three courses. Introduction to C, Computer Structure & Organization which utilized Assembly x86 in conjuction with C, and Operating Systems.",
    projects: `\u2022 Introduction to C Projects
      \u2022 Computer Structure & Organization Projects 
      \u2022 Operating Systems Projects`,
    img: cLogo,
  },
  JavaScript: {
    experience:
      "I initially learned JavaScript alongside React for the Hack.Diversity Tech.Dive Project. I have used JavaScript mainly for Front End Web Development with React.",
    projects: `\u2022 Hack.Diversty MedBay Project - Admin Page 
      \u2022 My Personal Website`,
    img: jsLogo,
  },
  React: {
    experience:
      "Similar to my JavaScript experience, I learned React for the Tech.Dive group project inside of the Hack.Diversity program.",
    projects: `\u2022 Hack.Diversty MedBay Project - Admin Page
    \u2022 My Personal Website`,
    img: reactLogo,
  },
  HTML: {
    experience:
      "I initally learned the basics of HTML to write JSX Elements. I have also done side projects to practice HTML.",
    projects: `\u2022 Hack.Diversity MedBay Project - Admin Page 
    \u2022 YouTube Home Page Mockup
    \u2022 My Personal Website`,
    img: htmlLogo,
  },
  CSS: {
    experience:
      "Most of my CSS experience has been through my own personal projects such as this website.",
    projects: `\u2022 YouTube Home Page Mockup
    \u2022 My Personal Website`,
    img: cssLogo,
  },
  SQL: {
    experience:
      "As apart of my 2023 AWS Internship Project, I had to utilize Amazon Redshift (an AWS SQL database) to run queries and analyze data.",
    projects: `\u2022 2023 AWS Internship project`,
    img: sqlLogo,
  },
};
