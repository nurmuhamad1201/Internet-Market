import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkSide from "../hooks/useDarkSide";

export default function Switcher() {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(false );
  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
    };
    const defaultProperties = {
      dark: {
        circle: {
          r: 7,
        },
        mask: {
          cx: "50%",
          cy: "83%",
        },
        svg: {
          transform: "rotate(80deg)",
        },
        lines: {
          opacity: 0,
        },
      },
      light: {
        circle: {
          r: 5,
        },
        mask: {
          cx: "100%",
          cy: "30%",
        },
        svg: {
          transform: "rotate(90deg)",
        },
        lines: {
          opacity: 1,
        },
      },
      springConfig: { mass: 4, tension: 250, friction: 35 },
    };

  return (
    <>
      <div>
        <DarkModeSwitch
                  sunColor="orange"
                  moonColor="blue"
          animationProperties={defaultProperties}
          checked={darkSide}
          onChange={toggleDarkMode}
          size={56}
        />
 
      </div>
    </>
  );
}
