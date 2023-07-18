import React from 'react';
import Intro from './introduce/intro';
import Testimonials from './testimonials/testimonials';


const Home = () => {
  return (
    <div id="templatemo_middle">
      <div id="templatemo_content_wrapper">
        <div id="content_wo_sb">
          <Intro />
          <Testimonials />
          <div className="cleaner"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
