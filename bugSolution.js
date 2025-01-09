Several solutions exist, depending on your framework and personal preference:

**1. Using `useEffect` Hook (React):**

If working with React, the `useEffect` hook can force a re-render when the relevant state changes:

```javascript
import React, { useState, useEffect } from 'react';

function MyComponent({ initialShowButton }) {
  const [showButton, setShowButton] = useState(initialShowButton);

  useEffect(() => {
    // Simulate a state change after the initial render
    setTimeout(() => setShowButton(!showButton), 2000);
  }, []);

  return (
    <div>
      {showButton && <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Click me
      </button>}
    </div>
  );
}

export default MyComponent;
```

**2. Using Refs:**

Another approach involves using refs to directly manipulate the DOM element and update its classes:

```javascript
import React, { useState, useRef, useEffect } from 'react';

function MyComponent({ initialShowButton }) {
  const [showButton, setShowButton] = useState(initialShowButton);
  const buttonRef = useRef(null);

  useEffect(() => {
    if (buttonRef.current) {
      if (showButton) {
        buttonRef.current.classList.add('bg-blue-500', 'hover:bg-blue-700', 'text-white', 'font-bold', 'py-2', 'px-4', 'rounded');
      } else {
        buttonRef.current.classList.remove('bg-blue-500', 'hover:bg-blue-700', 'text-white', 'font-bold', 'py-2', 'px-4', 'rounded');
      }
    }
  }, [showButton]);

  return (
    <div>
      <button ref={buttonRef}>
        Click me
      </button>
    </div>
  );
}

export default MyComponent;
```

Choose the method best suited to your framework and project structure.  Remember to handle potential edge cases and ensure efficient DOM manipulation.