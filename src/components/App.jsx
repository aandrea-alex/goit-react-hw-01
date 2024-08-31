import React from 'react';
import userData from '../data/userData.json';
import friendsData from '../data/friendsData.json';
import { Profile } from './Profile/Profile';
import FriendList from './FriendList/FriendList';

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
      <FriendList friends={friendsData}/>
    </React.Fragment>
  );
}

export default App;
