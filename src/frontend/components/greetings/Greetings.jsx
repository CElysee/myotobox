import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../../features/userSlice";

function Greetings() {
  const greeting = useSelector((state) => state.greeting);
  const authUser = useSelector(selectUser);
  return (
    <div className="flex-grow-1 pb-5">
      <h4 className="fs-16 mb-1">
        {greeting.greeting_time}, {authUser.name}!
      </h4>
      <p className="text-muted mb-0">
        Here's what's happening with MyOtobox today.
      </p>
    </div>
  );
}

export default Greetings;
