import { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import Timer from "./components/Timer";
import Footer from "./components/Footer";

export default function App() {
  const [timerMode, setTimerMode] = useState("pomodoro");
  const bodyElem = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bodyElem.current) {
      if (timerMode === "pomodoro") {
        bodyElem.current.classList.add("pomodoro");
        bodyElem.current.classList.remove("break");
      } else {
        bodyElem.current.classList.remove("pomodoro");
        bodyElem.current.classList.add("break");
      }
    }
  }, [timerMode]);

  function changeFocus(onFocus: boolean) {
    if (bodyElem.current) {
      if (onFocus) bodyElem.current.classList.add("focus");
      else bodyElem.current.classList.remove("focus");
    }
  }

  return (
    <body className="pomodoro">
      <div
        ref={bodyElem}
        className="flex flex-col items-center w-full min-h-screen text-white animation font-Montserrat"
      >
        <Header />
        <Timer
          timerMode={timerMode}
          setTimerMode={setTimerMode}
          changeFocus={changeFocus}
        />
        <Footer />
      </div>
    </body>
  );
}
