import React from "react";

function Skills({ user }) {
  return (
    <div>
      {user.skills.map((skill) => {
        return <h1>{skill.name}</h1>;
      })}
    </div>
  );
}

export default Skills;
