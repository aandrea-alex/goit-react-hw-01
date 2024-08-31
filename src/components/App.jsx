import React from "react";
import userData from "../data/userData.json";
import { Profile } from "./Profile/Profile";

function App() {
  const { username, tag, location, avatar, stats } = userData;
  return (
    <React.Fragment>

      <Profile
        name={username}
        tag={tag}
        location={location}
        image={avatar}
        stats={stats}
      />
     
    </React.Fragment>
  );
}

export default App;
