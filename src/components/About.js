import React from "react";
import Links from "./Links"

function isEmpty(val) {
  return (val === undefined || val == null || val.length <= 0) ? true : false;
}

function NonEmptyBio(props) {
  if (!isEmpty(props.bio)) {
    return <DisplayBio bio={props.bio} />;
  }
  return null;
}

function DisplayBio(props) {
  return <p>{props.bio}</p>;
}

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {<NonEmptyBio bio={props.bio} />}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {<Links github={props.github} linkedin={props.linkedin} />}
    </div>
  );
}

export default About;
