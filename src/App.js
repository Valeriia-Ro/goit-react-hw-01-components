import React from "react";
import user from "../src/database/user.json";
import Profile from "./components/user-card";
import statisticalData from '../src/database/statistical-data.json';
import Statistics from '../src/components/statistics-section';
import FriendList from '../src/components/friend-list';
import friends from '../src/database/friends.json';
import transactions from '../src/database/transactions.json';
import TransactionHistory from '../src/components/transaction-history';

const App = () => (
  <div className="main">
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={statisticalData} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </div>
)

export default App;