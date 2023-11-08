import React, { useState } from 'react';

const Speech = (textData) => {
  const [text, setText] = useState('');
  const speech = new SpeechSynthesisUtterance();
  speech.lang = 'bn-IN';

  const handleSpeak = () => {
    console.log("speak")
    speech.text = text;
    var voices = window.speechSynthesis.getVoices();
    var bengaliVoice = voices.find(voice => voice.lang === 'bn-IN');
    speech.voice = bengaliVoice;
    window.speechSynthesis.speak(speech);
    console.log(speech.text)
    console.log("dfds")
  };

  return (
    <div>
      <h1>Text-to-Speech Example</h1>
      <textarea
        placeholder="Enter text to speak"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleSpeak}>Speak</button>
    </div>
  );
};

export default Speech;
