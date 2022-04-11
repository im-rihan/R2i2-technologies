import {
  AddToHomeScreen,
  Check,
  ErrorOutlined,
  SupervisedUserCircleRounded,
  SystemUpdate,
} from "@material-ui/icons";
import React from "react";
import Item from "./Item";
import "./Top.css";
function Top() {
  return (
    <div className="top">
      <h2>Wed</h2>
      <p>jul</p>
      <span>30</span>
      <div className="top-items">
        <Item
          time="11.30 am"
          Icon={SupervisedUserCircleRounded}
          background=" #5390eb"
          desc="New task assigned to you"
        />
        <Item
          time="11.30 am"
          Icon={ErrorOutlined}
          background="#DC395F"
          desc="New feedback recieved for Task Name"
        />
        <Item
          time="11.30 am"
          background="#3FB883"
          Icon={Check}
          desc="Task marked completed by you"
        />
        <Item
          time="11.30 am"
          Icon={SystemUpdate}
          background="#FB8789"
          desc="Task Name updated for journey Journey Name"
        />
        <Item
          time="11.30 am"
          Icon={AddToHomeScreen}
          background="#F2BB27"
          desc="Follow up on feedback for Task Name"
        />
      </div>
    </div>
  );
}

export default Top;
