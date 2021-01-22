import React from 'react'
import ProfileCard from "../../components/profile-card/ProfileCard";
import ContactCard from "../../components/contact-card/ContactCard";
import Skills from "../../components/skills/Skills"
import "./Profile.css"

function Profile() {
    
    var user = {
        name: "Karahan Özen",
        bio:
          "I am a computer engineer who is interested in web development and building useful products for people's daily lives.",
        photo: "https://www.w3schools.com/howto/img_avatar.png",
        contact: {
          email: "karahanozen98@gmail.com",
          github: "https://github.com/karahanozen98",
          twitter: "",
          facebook: "",
          linkedin: "https://www.linkedin.com/in/karahan-%C3%B6zen-7404531a3/",
        },
        skills: [
          { name: "Javascript", years:3, level: 95 },
          { name: "HTML", years:3, level: 80 },
          { name: "CSS", years:2, level: 75 },
          { name: "React.js", years:2, level: 90 },
          { name: "Jquery", years:0, level: 50 },
          { name: "Firebase", years:1, level: 60 },
          { name: "MongoDB", years:0, level: 30 },
        ],
      };

    return (
        <div className="profile">
            <h1 className="profile-header">
                Hi, I am {user.name}
            </h1>
            <section id="profile-introduction" className="profile-introduction">
                <div className="profile-contact">
                    <ContactCard user={user}></ContactCard>
                </div>
                <div className="profile-details">
                    <ProfileCard user={user}></ProfileCard>
                </div>
            </section>
            <section id="profile-skills" className="profile-skills">
                <Skills user={user}></Skills>
            </section>
        </div>
    )
}

export default Profile
