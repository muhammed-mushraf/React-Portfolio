import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a dedicated full-stack developer with expertise in crafting efficient and user-centric web applications. My technical toolkit includes front-end technologies like React and back-end frameworks like Django, complemented by robust database management skills in PostgreSQL and MySQL. Over the years, I have successfully delivered projects ranging from CRM reporting tools in Odoo to social media and e-commerce applications using Django. My goal is to continue building innovative solutions that not only meet but exceed user and business expectations.
`;

export const EXPERIENCES = [
  {
    year: "02/2023 - 05/2023",
    role: "Odoo Developer - Intern",
    company: "Foxiom Leads Pvt Ltd Kakkanchery, Kerala.",
    description: `Gained practical experience in developing and customizing Odoo modules under the guidance of experienced mentors.`,
    technologies: ["Python", "JavaScript", "Xml", "Postgresql", "CSS"],
  },
  {
    year: "08/2023 - 12/2023",
    role: "Odoo Developer - Apprenticeship",
    company: "Digitz Technologies Kozhikode, Kerala.",
    description: `Spearheaded the implementation of four customized Odoo modules, resulting in a 40% increase in client satisfaction scores, as feedback indicated improved user experience and responsiveness of the system.`,
    technologies: ["Python", "JavaScript", "Xml", "Postgresql", "CSS"],
  },

  {
    year: "07/2024 - 12/2024",
    role: "Python Web Developer - Trainee",
    company: "Luminar Technolab, Kochi.",
    description: `Completed an intensive Python Web Development program, focusing on Django, REST APIs, and database integration. Developed projects such as a Tweet App and an E-commerce platform to enhance web development skills.`,
    technologies: [
      "Python",
      "JavaScript",
      "Django",
      "Reactjs",
      "HTML",
      "CSS",
      "Postgresql",
    ],
  },
];

export const PROJECTS = [
  {
    title: "CRM Leads Report | Odoo-ERP",
    image: project1,
    description:
      "Generate comprehensive reports on sales leads.Produces both PDF and Excel reports detailing the total number of won and lost leads for each user.",
    technologies: ["XML", "CSS", "Python", "JavaScript", "Postgresql"],
  },
  {
    title: "Assigned Leads Notification | Odoo-ERP",
    image: project2,
    description:
      "Developed a feature to display and notify users of their assigned leads count directly in the navbar,and navaigates to the specific leads",
    technologies: ["XML", "CSS", "Python", "JavaScript", "Postgresql"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "Tailwind CSS", "React", "Framer Motion"],
  },
  {
    title: "Tweet App | Django",
    image: project4,
    description:
      "Developed a social media web application allowing users to share updates (similar to tweets) and comment on any tweets.",
    technologies: ["HTML", "CSS", "Python", "JavaScript", "Django", "mySQL"],
  },
];

export const CONTACT = {
  address: "Kannur,Kerala ",
  phoneNo: "+91 9539840277 ",
  email: "mushrafalitm@gmail.com",
};
