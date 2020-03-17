import React from 'react';
import Portfolio from './Portfolio';
import Nav from './Nav';
import Mast from './Mast';
//import S1 from './S1';
import S2 from './S2';
import S3 from './S3';
import S4 from './S4';
// import S5 from './S5';
import Foot from './Foot';
import relationships from './Images/services/relationships.jpg';
import stress from './Images/services/stress.jpg';
import confidence from './Images/services/confidence.jpg';
import workStress from './Images/services/workStress.jpg';
import careerGuidance from './Images/services/careerGuidance.jpg';
import generalWellness from './Images/services/generalWellness.jpg';



import '../App.css';
function App() {
  const portfolioLinks = [
    {
      title: 'Relationships',
      caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.',
      photo: relationships
    },
    {
      title: 'Stress, Anxiety and Depression',
      caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.',
      photo: stress    
    },
    {
      title: 'Confidence',
      caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.',
      photo: confidence

    },
    {
      title: 'Work Stress',
      caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.',
      photo: workStress

    },
    {
      title: 'Career Guidance',
      caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.',
      photo: careerGuidance

    },
    {
      title: 'General Wellness',
      caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.',
      photo: generalWellness

    }
  ]

  return (
    

  <>
  <Nav />
  <Mast />
  {/* <S1 /> */}
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
