import React, { useState } from 'react';

const HookCounter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Hook Count One {count}
      </button>
    </div>
  );
};

export default HookCounter;
