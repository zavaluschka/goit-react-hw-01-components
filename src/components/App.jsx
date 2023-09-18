import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { Transaction } from 'components/Transaction/Transaction';
import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        margin: '0 auto',
        display: 'block',
        fontSize: 20,
        color: '#010101',
        backgroundColor: 'grey',
      }}
    >
      <div
        style={{
          width: '300px',
          height: '100%',
          margin: '0 auto',
          display: 'block',
          fontSize: 20,
          color: '#010101',
          paddingTop: '15px',
        }}
      >
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Statistics title="upload stats" stats={data} />
        <FriendList friends={friends} />
        <Transaction items={transactions} />
      </div>
    </div>
  );
};
