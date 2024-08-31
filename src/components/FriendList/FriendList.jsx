import Friend from '../Friend/Friend';
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.list}>
      {friends.map(friend => (
        <li key={friend.id}>
          <Friend {...friend} />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;