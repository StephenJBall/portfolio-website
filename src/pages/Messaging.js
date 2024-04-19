import React from "react";
import YoutubeEmbed from "../components/YoutubeEmbed";

function Messaging() {
  return (
    <div className="project-description-container">
      <h2>Instant Messaging Application</h2>
      <p>
        A fully-responsive instant-messaging application built using Stream.
      </p>
      <p>
        It offers Direct Messaging, Group Messaging, Channels, emojis,
        reactions, GIF Support, the ablility to edit and delete messages, as
        well as create, edit, moderate, and delete channels for specific groups
        or topics.
      </p>
      <h2>Want to have a look at the code?</h2>
      <a
        href="https://github.com/StephenJBall/instant-messaging-application"
        target="_blank"
      >
        <p>Git Hub Repository</p>
      </a>
      <h2>Video Demo</h2>
      <YoutubeEmbed embedId='AS8HQCSRzeY'/>
    </div>
  );
}

export default Messaging;
