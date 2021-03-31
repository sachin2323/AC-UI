import React from "react";
import { modes, intensity } from "../data";

const Menu = (props) => {
  return props.isOn ? (
    <section className="container">
      <div className="temperature box">
        <p>Temperature</p>
        <div className="field">{props.temperature}°C</div>
        <button name="+1" onClick={props.temperatureHandler}>
          +
        </button>{" "}
        <button name="-1" onClick={props.temperatureHandler}>
          -
        </button>
      </div>
      <div className="mode box">
        <p>Mode</p>
        <p className="field">{modes[props.mode]}</p>
        <button name="mode" value={props.mode} onClick={props.counterHandler}>
          Change
        </button>
      </div>
      <div className="intensity box">
        <p>INTENSITY</p>
        <p className="field">{intensity[props.intensity]}</p>
        <button
          name="intensity"
          value={props.intensity}
          onClick={props.counterHandler}
        >
          Change
        </button>
      </div>
      <div className="swing box">
        <p>Swing Movement</p>
        <p className="field">{props.swing ? "ON" : "OFF"}</p>
        <button onClick={props.swingHandler}>Change</button>
      </div>
      <div className="timer box">
        <p>Timer</p>
        <p className="field">
          {props.hours}:{props.minutes}
        </p>
        <button onClick={props.timerHandler}>
          {props.timerOn ? "Pause" : "Start"}
        </button>
        <br />
        <button onClick={props.timeChanger} name="+5">
          +
        </button>{" "}
        <button onClick={props.timeChanger} name="-5">
          -
        </button>
      </div>
    </section>
  ) : null;
};

export default Menu;
