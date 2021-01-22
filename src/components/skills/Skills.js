import React from "react";
import { CircularProgress } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from "@material-ui/core/styles";
import "./Skills.css";

// Inspired by the former Facebook spinners.
const useStylesCircularProgress = makeStyles((theme) => ({
  root: {
    position: "relative",
  },
  bottom: {
    color: theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
  },
  top: {
    color: "#1a90ff",
    animationDuration: "550ms",
    position: "absolute",
    left: 0,
  },
  circle: {
    strokeLinecap: "round",
  },
}));

function SkillProgress(props) {
  const classes = useStylesCircularProgress();

  return (
    <div className={classes.root}>
    <Box>
    <CircularProgress
        variant="determinate"
        className={classes.bottom}
        size={150}
        thickness={10}
        {...props}
        value={props.value}
      />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="caption" component="div" color="white">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
    </div>
  );
}

const SkillCard = ({ skill }) => {
  let r = Math.random()*155
  let g = Math.random()*155
  let b = Math.random()*155
  const color = `rgb(${r},${g},${b})`;
  return (
    <div className="skill-card" style={{background:color}}>
      <div>
        <h1>{skill.name}</h1>
        <h5>{"Experience " + skill.years + " years"}</h5>
      </div>
      <div>
        <SkillProgress x={<h1>Selam</h1>} value={skill.level} />
      </div>
    </div>
  );
};

function Skills({ user }) {
  return (
    <div>
      <h1>My Skills</h1>
      <div className="skills">
        {user.skills.map((skill) => {
          return <SkillCard skill={skill}></SkillCard>;
        })}
      </div>
    </div>
  );
}

export default Skills;
