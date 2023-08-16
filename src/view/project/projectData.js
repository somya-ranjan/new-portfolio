import {
  CALCULATOR_IMG,
  CONSULTANCY_IMG,
  GYM_IMG,
  TODO_IMG,
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
    img: TODO_IMG,
    name: "React todo app",
    project: {
      details:
        "This is a normal todo app, users can manege her/his dally/weekly/monthly task. User can add and delete list.",
      techStack: "React Js, Javascript, Html5, Css3",
    },
    notCompatibleFor: { mobile: true },
    liveLink: "https://somya-ranjan.github.io/React-ToDoList",
    gitLink: "https://github.com/somya-ranjan/React-ToDoList",
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
];
