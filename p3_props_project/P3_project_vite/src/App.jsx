import React from "react";
import { Cards } from "./components/cards";

const profiles = [
  {
    name: "Aarav Sharma",
    role: "Frontend Developer",
    about: "Passionate about building modern UI and responsive web apps.",
    img: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    name: "Priya Verma",
    role: "UI/UX Designer",
    about: "Loves designing clean and user-friendly interfaces.",
    img: "https://randomuser.me/api/portraits/women/21.jpg",
  },
  {
    name: "Rohan Mehta",
    role: "Backend Developer",
    about: "Enjoys working with APIs, databases, and server-side logic.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sneha Kapoor",
    role: "Full Stack Developer",
    about: "Works on both frontend and backend with React + Node.",
    img: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    name: "Aditya Singh",
    role: "Software Engineer",
    about: "Interested in problem solving, DSA, and scalable systems.",
    img: "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    name: "Neha Joshi",
    role: "Data Analyst",
    about: "Loves finding insights from data and creating dashboards.",
    img: "https://randomuser.me/api/portraits/women/56.jpg",
  },
  {
    name: "Kunal Patel",
    role: "DevOps Engineer",
    about: "Automates deployments and manages cloud infrastructure.",
    img: "https://randomuser.me/api/portraits/men/67.jpg",
  },
  {
    name: "Isha Roy",
    role: "Machine Learning Engineer",
    about: "Works on AI models and computer vision projects.",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Vikram Nair",
    role: "Cyber Security Specialist",
    about: "Focuses on security testing and protecting web applications.",
    img: "https://randomuser.me/api/portraits/men/72.jpg",
  },
  {
    name: "Ananya Das",
    role: "Mobile App Developer",
    about: "Builds Android apps and loves working with React Native.",
    img: "https://randomuser.me/api/portraits/women/75.jpg",
  },
];

const App = () => {
  return (
    <div>
      <div className="container">
        {profiles.map((profile, index) => (
          <Cards
            key={index}
            name={profile.name}
            role={profile.role}
            about={profile.about}
            img={profile.img}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
