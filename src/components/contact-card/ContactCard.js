import React from "react";
import "./ContactCard.css";
import MailIcon from "@material-ui/icons/Mail";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";

function ContactCard({ user }) {
  return (
    <div className="contact-card">
        <div className="contact-card-header">
            <h1>Contact Details</h1>
        </div>
      <p>
        <MailIcon/>Email: <a rel="noreferrer" target="_blank" href="Mailto:karahanozen98@gMail.com">{user.contact.email}</a>
      </p>
      <p>
        <GitHubIcon />GitHub:
        <a rel="noreferrer" target="_blank" href={user.contact.github}>{user.contact.github}</a>
      </p>
      <p>
        <TwitterIcon />Twitter:
        <a rel="noreferrer" target="_blank" href={user.contact.github}>{user.contact.github}</a>
      </p>
      <p>
        <FacebookIcon />Facebook:
        <a rel="noreferrer" target="_blank" href={user.contact.github}>{user.contact.github}</a>
      </p>
    </div>
  );
}

export default ContactCard;
