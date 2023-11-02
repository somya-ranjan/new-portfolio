import {
  CALCULATOR_IMG,
  CONSULTANCY_IMG,
  CRUD_IMG,
  GYM_IMG,
  TODO_IMG,
  WEATHER_IMG,
  YT_IMG,
} from "../../assets/img";

export const projectData = [
  {
    img: YT_IMG,
    name: "Youtube Clone",
    project: {
      details:
        "This project showcases my skills in front-end development and demonstrates my ability to work with various libraries and APIs. By using modern technologies like Nextjs, React, JavaScript and Tailwind CSS, etc. I've ensured clean, maintainable code for scalability and future enhancements. My YouTube clone is a testament to my commitment to delivering high-quality projects.",
      techStack:
        "Next Js, React Js, Javascript, Tailwind CSS, Html5, CSS3, Sass, Axios, Infinite Scroll",
    },
    notCompatibleFor: { all: false },
    liveLink: "https://somya-youtube-clone.vercel.app/",
    gitLink: "https://github.com/somya-ranjan/youtube-clone",
  },
  {
    img: CONSULTANCY_IMG,
    name: "Consultant site",
    project: {
      details:
        "This website primarily serves as an IT consultancy platform where clients can submit inquiries about their specific requirements through the contact page. The site encompasses a wealth of information, including the technologies utilized for project requirements, client testimonials, details about previous projects, and various other relevant content.",
      techStack: "React Js, Javascript, Bootstrap, Html5, CSS3, jQuery",
    },
    notCompatibleFor: { all: false },
    liveLink: "https://s2solution.netlify.app/",
    gitLink: "https://github.com/somya-ranjan/Consultant-Website",
  },
  {
    img: CRUD_IMG,
    name: "User Management",
    project: {
      details:
        "This is a user management application that empowers users to perform various actions, including adding, editing, blocking/unblocking, and deleting user accounts. Furthermore, users can access detailed information about other users. This application also features filtering and search capabilities, allowing for the export of data to Excel. Additionally, it incorporates authentication processes and data caching, resulting in a remarkable 50-60% boost in performance.",
      techStack:
        "React Js, Vite, Javascript, Material Ui, axios, reduxToolkit, RTKQuery, Formik, Yup, Html5, Css3",
    },
    notCompatibleFor: { all: false },
    liveLink: "https://auth-crud-app.onrender.com",
    gitLink: "https://github.com/somya-ranjan/auth-crud-app",
  },
  {
    img: WEATHER_IMG,
    name: "React weather app",
    project: {
      details:
        "This is an advanced weather application that offers comprehensive features, including location-specific weather data, weather forecasts, a current location map, and real-time currency exchange information. The app is equipped with an authentication flow to enhance user security and access control.",
      techStack:
        "React Js, Vite, Javascript, ReactStrap, Bootstrap, reduxToolkit, reduxSaga, AVForm, Html5, Css3",
    },
    notCompatibleFor: { all: false },
    liveLink: "https://auth-weather.onrender.com",
    gitLink: "https://github.com/somya-ranjan/auth-weather-app",
  },
  {
    img: GYM_IMG,
    name: "Health and fitness site",
    project: {
      details:
        "This website is dedicated to the health and fitness industry, serving as a hub for customers to submit queries about training and other related matters through the contact page. The site provides a comprehensive overview of the services offered to customers, detailed information about the trainers, and facilitates direct communication between customers and trainers for personalized inquiries. Additionally, it offers a wealth of supplementary information related to health and fitness.",
      techStack: "React Js, Javascript, Bootstrap, Html5, CSS3, jQuery",
    },
    notCompatibleFor: { all: false },
    liveLink: "https://s2brute.netlify.app/",
    gitLink: "https://github.com/somya-ranjan/GYM-Website",
  },
  {
    img: CALCULATOR_IMG,
    name: "Scientific calculator app",
    project: {
      details:
        "This is a sophisticated scientific calculator application that has been developed to cater to the mathematical computational needs of users in their day-to-day activities. Whether it's solving complex equations, performing scientific calculations, or tackling various mathematical problems, this app offers a comprehensive toolset to address a wide range of mathematical challenges. With an intuitive and user-friendly interface, users can easily input and solve mathematical equations, making it a valuable addition to their daily routine for handling calculations efficiently and accurately.",
      techStack: "Javascript, Html5, Css3",
    },
    notCompatibleFor: { mobile: true },
    liveLink: "https://somya-ranjan.github.io/JS-Calucator/",
    gitLink: "https://github.com/somya-ranjan/JS-Calucator",
  },
  // {
  //   img: TODO_IMG,
  //   name: "React todo app",
  //   project: {
  //     details:
  //       "This is a normal todo app, users can manege her/his dally/weekly/monthly task. User can add and delete list.",
  //     techStack: "React Js, Javascript, Html5, Css3",
  //   },
  //   notCompatibleFor: { mobile: true },
  //   liveLink: "https://somya-ranjan.github.io/React-ToDoList",
  //   gitLink: "https://github.com/somya-ranjan/React-ToDoList",
  // }
];
