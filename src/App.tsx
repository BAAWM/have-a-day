import React from 'react';
import Header from './components/Header';
import TypingText from './components/TypingText';
import './App.css'; // Ensure this is the correct path
import MyForm from './components/Form';

function App() {
  return (
    <>
      <Header 
        title={["Have a", "day!"]}
        subtitle="Let's make today a day to remember forever :)" 
        link="#" 
        dynamicText={["good", "BAD"]}
      />

{/* myForm */}
      
      <b className='main-body'>
      <MyForm />
        <p>This is a short text.</p>
        <p>This is a bit longer text to see how it looks with a little more content.</p>
        <p>This paragraph contains a moderate amount of text to better understand how the layout handles varying lengths. It should give you an idea of how text wrapping and spacing work within the defined container.</p>
        <p>Here is a longer paragraph to really put the layout to the test. This should provide a good indication of how the design manages extensive content. The goal is to ensure that everything remains visually appealing and functional, regardless of the text length. We want to check that the padding, margins, and overall alignment remain consistent and that the user experience is not negatively impacted by the presence of more verbose content. This can help identify any potential issues with text overflow or layout shifting that might need to be addressed.</p>
      </b>
    </>
  );
}

export default App;

