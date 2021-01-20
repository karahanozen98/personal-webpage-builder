import React from 'react'
import ProfileCard from "../../components/profile-card/ProfileCard";
import ContactCard from "../../components/contact-card/ContactCard";
import "./Profile.css"

function Profile() {
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
        skills: [
          { name: "javascript", rating: 100 },
          { name: "HTML", rating: 100 },
          { name: "CSS", rating: 100 },
        ],
      };

    return (
        <div className="profile">
            <h1 className="profile-header">
                Hi, I am {user.name}
            </h1>
            <div className="profile-introduction">
                <div className="profile-contact">
                    <ContactCard user={user}></ContactCard>
                </div>
                <div className="profile-details">
                    <ProfileCard user={user}></ProfileCard>
                </div>
            </div>
        </div>
    )
}

export default Profile
