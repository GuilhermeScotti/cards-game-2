import React from 'react';

interface Props {
  onSubmit: () => void;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void; // Add onChange handler to Props interface
  buttonState: string;
}

const GuessInput: React.FC<Props> = ({ onSubmit, onInputChange, buttonState }) => {
  // Add your component logic here

  return (
    // Add your JSX code here
    <div className="section">
      Guess here:
      <input type="text" onChange={onInputChange} id={buttonState}/>
      <button onClick={onSubmit}>
        Submit Guess
      </button>
    </div>
  );
};

export default GuessInput;