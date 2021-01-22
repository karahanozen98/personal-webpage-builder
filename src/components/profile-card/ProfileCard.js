import React from "react";
import "./ProfileCard.css";
import avatar from "../../static/assets/index.png"
import defaultAvatar from "../../static/assets/default-avatar.png"

function ProfileCard({ user }) {
  return (
    <div className="profile-card">
      <img src={user.photo ? avatar : defaultAvatar } alt="avatar"></img>
     <div className="profile-card-container">
     <h1>{user.name}</h1>
      <p>{user.bio}</p>
     </div>
    </div>
  );
}
export default ProfileCard;
