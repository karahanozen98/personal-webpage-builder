import React from "react";
import MailIcon from "@material-ui/icons/Mail";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedinIcon from "@material-ui/icons/LinkedIn";

function ContactCard({ user }) {
  return (
    <div className="profile-card">
      <div className="profile-card-header">
        <h1>Contact Details</h1>
      </div>
      <ul className="profile-card-contacts">
        <li>
          <MailIcon fontSize="large"  />
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
          <GitHubIcon fontSize="large" />
          {"GitHub: "}
          <a rel="noreferrer" target="_blank" href={user.contact.github}>
            {user.contact.github}
          </a>
        </li>
        <li>
          <LinkedinIcon fontSize="large" />
          {"LinkedIn: "}
          <a rel="noreferrer" target="_blank" href={user.contact.linkedin}>
            {user.contact.linkedin}
          </a>
        </li>
        <li>
          <FacebookIcon fontSize="large" />
          {"Facebook: "}
          <a rel="noreferrer" target="_blank" href={user.contact.github}>
            {user.contact.facebook}
          </a>
        </li>
        <li>
          <TwitterIcon fontSize="large" />
          {"Twitter: "}
          <a rel="noreferrer" target="_blank" href={user.contact.github}>
            {user.contact.twitter}
          </a>
        </li>
      </ul>
    </div>
  );
}

export default ContactCard;
