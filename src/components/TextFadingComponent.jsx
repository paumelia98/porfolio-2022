import React, { useState } from 'react';


export default function TextFadingComponent() {
  const text = "What's       next?";
  const [revealedChars, setRevealedChars] = useState(Array(text.length).fill(false));
  const [revealedButton, setRevealedButton] = useState(false);

  const handleMouseEnterChar = (index) => {
    setRevealedChars((prevRevealed) => {
      const newRevealed = [...prevRevealed];
      newRevealed[index] = true;
      return newRevealed;
    });
  };

  const handleMouseEnterButton = () => {
    setRevealedButton(true);
  };

  return (
    <div className="text-container">
      <h3 className='text-end text-4xl'>Hover <span className='text-2xl'> ⬇</span></h3>
      <div className="text-line">
        {text.split('').map((char, index) => (
          <span
            key={index}
            className={`text-char ${revealedChars[index] ? 'revealed' : ''}`}
            onMouseEnter={() => handleMouseEnterChar(index)}
          >
            {char}
          </span>
        ))}
      </div>
      <div className='flex justify-end'>
      <button 
  className={`text-button ${revealedButton ? 'revealed' : ''} className='text-[#51cfb6]  border-2 border-[#51cfb6] p-2 rounded px-4 shadow transform transition-transform hover:scale-105 duration-500'`}
  onMouseEnter={handleMouseEnterButton}
>
  <span>Contact</span>
</button>
      </div>
    </div>
  );
}
