import React, { useState } from 'react';

type Props = {
  text: string;
  color: string;
};

export function ToggleButton({ text, color }: Props) {
  const [isClicked, setIsClicked] = useState(false);

  console.log('Value returned by useState:', isClicked);

  const handleClick = () => {
    console.log('Value before calling the setter:', isClicked);

    setIsClicked(!isClicked);

    console.log('Value after calling the setter:', isClicked);
  };

  const buttonStyle = {
    backgroundColor: isClicked ? color : 'white',
    color: isClicked ? 'white' : 'black',
  };

  return (
    <button style={buttonStyle} onClick={handleClick}>
      {text}
    </button>
  );
}
