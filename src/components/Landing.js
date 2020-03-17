import React from 'react';
import Portfolio from './Portfolio';
import Nav from './Nav';
import Mast from './Mast';
import S1 from './S1';
import S2 from './S2';
import S3 from './S3';
import S4 from './S4';
// import S5 from './S5';
import Foot from './Foot';

import '../App.css';
function App() {
  const portfolioLinks = [
    {
      title: 'Threads',
      caption: 'Illustration'
    },
    {
      title: 'Explore',
      caption: 'Graphic Design'
    },
    {
      title: 'Finish',
      caption: 'Identity'
    },
    {
      title: 'Lines',
      caption: 'Branding'
    },
    {
      title: 'Southwest',
      caption: 'Website Design'
    },
    {
      title: 'Window',
      caption: 'Photography'
    },
    {
      title: 'Pizza',
      caption: 'I love pizza!'
    }
  ]

  return (
    

  <>
  <Nav />
  <Mast />
  <S1 />
  <Portfolio portfolioLinks={portfolioLinks}></Portfolio>
  <S2 />
  <S3 />
  <S4 />
  {/* <S5 /> */}
  <Foot />
    </>
  );
}

export default App;
