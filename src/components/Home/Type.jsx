import React from 'react';
import Typewriter from 'typewriter-effect';

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          'Software Engineer',
          'Frontend Developer',
          'React Developer',
          'Freelancer',
          'Tutor',
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
