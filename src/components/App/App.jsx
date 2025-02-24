import css from '../App/App.module.css';


import userData from '../../userData.json';
import friends from '../../friends.json';
import transactions from '../../transactions.json';
import Profile from '../Profile/Profile';
import FriendList from '../FriendList/FriendList';
import TransactionHistory from '../TransactionHistory/TransactionHistory';

export default function App() {
  return (
     <div className={css.card}>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
      </div>
  );
};


