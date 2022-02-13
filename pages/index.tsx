import React from 'react';

import Header from '../components/Header';
import ServiceFeedback from '../components/ServiceFeedback';
import Main from '../components/Main';
import BackgroundElement from '../components/BackgroundElement';
import Footer from '../components/Footer';
import Title from '../components/Title';
import Form from '../components/Form/';
import PoweredBy from '../components/PoweredBy';


const Home = () => {
  return (
    <div>
      <Header />
      <ServiceFeedback />
      <Main>
        <Title />
        <Form btnName="Search" />
        <PoweredBy />
      </Main>
      <BackgroundElement />
      <Footer />
    </div>
  );
};

export default Home;
