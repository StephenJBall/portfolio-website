import React from "react";

function reddit() {
  return (
    <div className="project-description-container">
      <h2>Reddit Clone</h2>
      <p>
        This is a simple Reddit Clone project built using React, Typescript,
        Tailwind, SQL, and GraphQL.
      </p>
      <p>
        Users need to sign in through their own Reddit accounts to gain full
        functionality to the application.
      </p>
      <p>
        Once signed in users can; create posts, comment on posts, upvote,
        downvote, visit subreddits, and create new subreddits.
      </p>
      <h2>Want to have a look at the code?</h2>
      <a href="https://github.com/StephenJBall/reddit-clone" target="_blank">
        <p>Git Hub Repository</p>
      </a>
    </div>
  );
}

export default reddit;
