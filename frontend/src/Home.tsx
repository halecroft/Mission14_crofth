import React from 'react';
import './App.css';

function Home() {
  return (
    <div className="Home margined">
      <div className="col align-self-center text-start">
        <h1>The Joel Hilton Movie Collection</h1>
      </div>
      <div>
        <img src="./JoelHiltonHeadshot.jpg" alt="Joel himself" />
      </div>
    </div>
  );
}

export default Home;
