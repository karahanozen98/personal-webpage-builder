import React from "react";
import MailIcon from "@material-ui/icons/Mail";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";

function ContactCard({ user }) {
  return (
    <div className="profile-card">
      <div className="profile-card-header">
        <h1>Contact Details</h1>
      </div>
      <ul className="profile-card-contacts">
        <li>
          <MailIcon />
          {"Email: "}
          <a
            rel="noreferrer"
            target="_blank"
            href={`Mailto:${user.contact.email}`}
          >
            {user.contact.email}
          </a>
        </li>
        <li>
          <GitHubIcon />
          {"GitHub: "}
          <a rel="noreferrer" target="_blank" href={user.contact.github}>
            {user.contact.github}
          </a>
        </li>
        <li>
          <TwitterIcon />
          {"Twitter: "}
          <a rel="noreferrer" target="_blank" href={user.contact.github}>
            {user.contact.github}
          </a>
        </li>
        <li>
          <FacebookIcon />
          {"Facebook: "}
          <a rel="noreferrer" target="_blank" href={user.contact.github}>
            {user.contact.github}
          </a>
        </li>
      </ul>
    </div>
  );
}

export default ContactCard;
