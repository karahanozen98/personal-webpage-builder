import React from "react";
import "./ProfileCard.css";

function ProfileCard({ user }) {
  return (
    <div className="profile-card">
      <img src={user.photo} alt="avatar"></img>
     <div className="profile-card-container">
     <h1>{user.name}</h1>
      <p>{user.bio}</p>
     </div>
    </div>
  );
}
export default ProfileCard;
