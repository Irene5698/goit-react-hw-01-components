import user from 'data/user.json';
import Profile from './Profile/Profile';
import friends from 'data/friends.json';
import FriendList from './FriendList/FriendList';
import Statistics from './Statistics/Statistics';
import data from 'data/data.json';
import TransactionHistory from './TransactionHistory/TransactionHistory'
import transactions from 'data/transactions.json'

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
     { <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      /> }

<FriendList friends={friends} />
<Statistics title="Upload stats" stats={data} />
<TransactionHistory items={transactions} />;
    </div>
    
  );
};


