import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    java,
    python,
    carrent,
    jobit,
    tripguide,
    FetchTable,
    Age,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Blog Writer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "java",
      icon: java,
    },
    {
      name: "python",
      icon: python,
    },
  ];
  
  const projects = [
    {
      name: "Responsive Paragrah Word Counter",
      description:
        "The Responsive Paragraph Word Counter is a ReactJS component that allows users to input text in a responsive text area and automatically counts the number of words in real-time, providing a dynamic word count display. It adjusts to different screen sizes and provides an interactive and user-friendly experience for tracking word count in paragraphs.",
      tags: [
        {
          name: "ReactJS",
          color: "blue-text-gradient",
        },
        {
          name: "Responsive Word Counter",
          color: "green-text-gradient",
        },
        {
          name: "Real-time",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://manojrathinam.github.io/Counter-ReactJS/",
    },
    {
      name: "Caculator",
      description:
        "The Calculator is a ReactJS component that provides a user interface for performing mathematical calculations with basic arithmetic operations. It offers a modern and intuitive design, enabling users to input numbers and perform calculations accurately and efficiently.",
      tags: [
        {
          name: "ReactJS",
          color: "blue-text-gradient",
        },
        {
          name: "Caculator",
          color: "green-text-gradient",
        },
        {
          name: "Efficiency",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://manojrathinam.github.io/Calculator-ReactJS/",
    },
    {
      name: "ColorPicker",
      description:
        "ColorPicker is a ReactJS component that allows users to select colors from a predefined list, providing an interactive and intuitive color selection experience. It enables developers to easily incorporate color picking functionality into their applications.",
      tags: [
        {
          name: "Reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "ColorPicker",
          color: "green-text-gradient",
        },
        {
          name: "Color Selection",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://manojrathinam.github.io/ColorPicker-ReactJS/",
    },
    {
      name: "FetchTable",
      description:
        "The User Records Table is a ReactJS project that fetches user records from an external API (https://dummyjson.com/users) and displays the data in a table format on the client side. It provides a simple and efficient way to retrieve and present user information in a tabular layout.",
      tags: [
        {
          name: "Reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "API Integration",
          color: "green-text-gradient",
        },
        {
          name: "Client-side Rendering",
          color: "pink-text-gradient",
        },
      ],
      image: FetchTable,
      source_code_link: "https://manojrathinam.github.io/FetchTable-ReactJs/",
    },
    {
      name: "AgeCalculator",
      description:
        "The Age Calculator is a ReactJS application that allows users to input their date of birth and calculates their current age based on the provided date. It provides a user-friendly interface for age calculation, making it easy to determine one's age accurately.",
      tags: [
        {
          name: "Reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "AgeCalculator",
          color: "green-text-gradient",
        },
        {
          name: "UserInput",
          color: "pink-text-gradient",
        },
      ],
      image: Age,
      source_code_link: "https://manojrathinam.github.io/AgeCalculator-ReactJS/",
    },

  ];
  
  export { services, technologies, projects };