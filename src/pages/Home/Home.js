import React from "react";
import ProfileCard from "../../components/profile-card/ProfileCard";
import ContactCard from "../../components/contact-card/ContactCard";
import backgroundimg from "../../static/assets/hb.jpg";
import backgroundskillsimg from "../../static/assets/homeskills.jpg";

import "./Home.css";

var user = {
  name: "Karahan Özen",
  bio:
    "I am a developer who is interested in web development and building useful products for people's daily lives.",
  photo: "https://www.w3schools.com/howto/img_avatar.png",
  contact: {
    email: "karahanozen98@gmail.com",
    github: "https://github.com/karahanozen98",
    twitter: "",
    facebook: "",
    linkedin: "",
  },
};

function Home() {
  return (
    <div className="app-home">
      <img alt="home-background" src={backgroundimg}></img>
      <div className="app-home-header">
        <h1>Hi I am </h1>
        <h1 style={{ color: "rgb(255, 255, 255)" }}>{"Karahan Özen"}</h1>
      </div>
      <div className="app-home-body">
        <ProfileCard user={user} />
        <ContactCard user={user} />
      </div>
      <div className="app-home-skills">
          <img src={backgroundskillsimg} alt="home-sg-2"></img>
        <h1>HTML</h1>
        <h1>CSS</h1>
        <h1>Javascript</h1>
        <h1>React</h1>
      </div>
    </div>
  );
}

export default Home;
