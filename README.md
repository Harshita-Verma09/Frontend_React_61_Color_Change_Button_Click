 ## ChangeColor_Click

This React component demonstrates how to change the background color of a `div` element by clicking on different color buttons.

## Overview

The component renders a white `div` with the text "Background" inside it. Below this `div`, there are three buttons: "Red", "Green", and "Yellow". Clicking each button updates the `backgroundColor` of the `div` accordingly.

## Usage

To use this component in your React application:

1.  Import the `ChangeColor_Click` component:

    ```javascript
    import ChangeColor_Click from './path/to/ChangeColor_Click';
    ```

2.  Render the component within your desired parent component:

    ```jsx
    function App() {
      return (
        <div>
          <ChangeColor_Click />
        </div>
      );
    }

    export default App;
    ```

## Functionality

-   Uses the `useState` hook to manage the `color` state, initialized to "white".
-   The `div`'s `backgroundColor` style is dynamically set based on the `color` state.
-   Each button has an `onClick` handler that calls the `setColor` function to update the `color` state with the respective color value ("red", "green", or "yellow").
-   Basic styling using Tailwind CSS classes is applied for layout and appearance.

## Dependencies

-   React

## Installation

No specific installation is required for this component itself, assuming you have a React project set up.

## Example

```jsx
import React from 'react';
import ChangeColor_Click from './ChangeColor_Click';

function Example() {
  return (
    <ChangeColor_Click />
  );
}

export default Example;

```
 ## Traffic_Light
This React component simulates a simple traffic light that automatically cycles through red, yellow, and green colors.

## Overview

The component displays three circular indicators representing the red, yellow, and green lights of a traffic signal. The active light changes every 2 seconds in a continuous loop.

## Usage

To use this component in your React application:

1.  Import the `TrafficLight` component:

    ```javascript
    import TrafficLight from './path/to/TrafficLight';
    ```

2.  Render the component within your desired parent component:

    ```jsx
    function App() {
      return (
        <div>
          <TrafficLight />
        </div>
      );
    }

    export default App;
    ```

## Functionality

-   Uses the `useState` hook to manage the `color` state, initialized to "red". This state determines which light is currently active.
-   Employs the `useEffect` hook to set up an interval that changes the `color` state every 2000 milliseconds (2 seconds).
-   The `colors` array holds the sequence of colors: "red", "green", and "yellow".
-   The `index` variable keeps track of the current color in the `colors` array, cycling back to 0 using the modulo operator (`%`).
-   Conditional class names are applied to each light indicator based on the `color` state. If the `color` state matches the light's color, a vibrant background color (e.g., `bg-red-500`) is applied; otherwise, a gray background (`bg-gray-700`) is used.
-   The `useEffect` hook includes a cleanup function (`return () => clearInterval(interval);`) to clear the interval when the component unmounts, preventing memory leaks.
-   Basic styling using Tailwind CSS classes is applied for layout and appearance.

## Dependencies

-   React

## Installation

No specific installation is required for this component itself, assuming you have a React project set up.

## Example

```jsx
import React from 'react';
import TrafficLight from './TrafficLight';

function Example() {
  return (
    <TrafficLight />
  );
}

export default Example;
