import React from 'react';
import Create from './Create/Create';
import Header from './Header/Header';
import Learners from './Learners/Learners';
import Reawards from './Rewards/Reawards';
import Users from './Users/Users';


const Home = () => {
  return (
    <div style={{ backgroundColor: '#303030' }}>
      <Header />
      <Reawards />
      <Users />
      <Create />
      <Learners />
    </div>
  );
};

export default Home;
