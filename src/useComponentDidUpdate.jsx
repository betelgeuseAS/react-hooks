/*
Just consider a situation where you wanted to change the state of a variable not on the first render of the component
but on every next render (on update).
*/

// In the case below the alert gets popped on the first render as well:

import { useEffect } from "react"

const App = () => {
  useEffect(() => {
    alert("Hello");
  });

  return (<></>);
}

// You can implement the componentDidUpdate using hooks as follows:

import React, { useRef, useEffect } from "react";

export const useComponentDidUpdate = (effect, dependencies) => {
  const hasMounted = useRef(false);

  useEffect(
    () => {
      if (!hasMounted.current) {
        hasMounted.current = true;
        return;
      }

      effect();
    }, dependencies);
};

/*
In the above code the didMountRef acts as stateless boolean variable storing the information if the component is being
mounted for the first time or being rendered again.
*/
