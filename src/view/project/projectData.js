import {
  CALCULATOR_IMG,
  CONSULTANCY_IMG,
  CRUD_IMG,
  GYM_IMG,
  TODO_IMG,
  WEATHER_IMG,
} from "../../assets/img";

export const projectData = [
  {
    img: CONSULTANCY_IMG,
    name: "Consultant site",
    project: {
      details:
        "This is a basically a IT consultant website, clients can gives query regarding hes/her requirement on contact page. This site consists which technology use for project requirement, clients testimonial, previous project and lots of more information.",
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
        "This is an user management app. User can add, edit, block/unblock and delete user and also see details of the users. This app have filter and search export data to excel functionality also, with the auth flow and cache the old data, it helps to increase performance 50-60% ",
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
        "This is an advance weather app. This app gives location wise weather data, forecast weather data, current location map and currency exchange data. This app have auth flow.",
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
        "This is a health and fitness business website, customers can gives query regarding training or other query on contact page. This site consists which service provide for customers, trainer details, customers can directly contact to trainer for his.her query and lots of more information.",
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
        "This is a scientific calculator app, users can solve his/her dally mathematics calculative problem.",
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
