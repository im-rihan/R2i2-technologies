import React from "react";
import Item from "./Item";
import {
  Chat,
  HourglassEmpty,
  PriorityHigh,
  VideoCall,
} from "@material-ui/icons";
import "./Bottom.css";

function Bottom() {
  return (
    <div className="bottom">
      <h2>Thu</h2>
      <p>jul</p>
      <span>29</span>
      <div className="bottom-items">
        <Item
          time="11.30 am"
          Icon={VideoCall}
          background=" #5390eb"
          desc="Meeting with Bobby Charlie"
        />
        <Item
          time="11.30 am"
          Icon={Chat}
          background="#A259FF"
          desc="Chat about Design Mentorship"
        />
        <Item
          time="11.30 am"
          background="#3FB883"
          Icon={PriorityHigh}
          desc="Critical delay observed in time line adherence"
        />
        <Item
          time="11.30 am"
          Icon={HourglassEmpty}
          background="#F2DF37"
          desc="Finish project documentation for review (1-1 checkin)"
        />
      </div>
    </div>
  );
}

export default Bottom;
