import { useEffect, useRef, useState } from "react";

export default function Timer({
  timerMode,
  setTimerMode,
  changeFocus,
}: {
  timerMode: string;
  setTimerMode: Function;
  changeFocus: Function;
}) {
  const [remainingTime, setRemainingTime] = useState(1500);
  const [isOn, setIsOn] = useState(false);
  const intervalRef = useRef(0);
  const alarmAudio = new Audio("/audios/bell-ring.mp3");

  const remainingTimeString =
    Math.floor(remainingTime / 60)
      .toString()
      .padStart(2, "0") +
    ":" +
    (remainingTime % 60).toString().padStart(2, "0");

  useEffect(() => {
    pauseTimer();

    switch (timerMode) {
      case "pomodoro":
        setRemainingTime(1500);
        break;
      case "break":
        setRemainingTime(300);
        break;
    }
  }, [timerMode]);

  useEffect(() => {
    if (remainingTime === 0) {
      pauseTimer();
      triggerAlarm();
      changeFocus(false);

      document.addEventListener(
        "click",
        (e) => {
          e.preventDefault();
          pauseAlarm();

          if (timerMode === "pomodoro") setTimerMode("break");
          else setTimerMode("pomodoro");
        },
        { once: true }
      );
    }
  }, [remainingTime]);

  function toggleTimer() {
    if (intervalRef.current) {
      pauseTimer();
    } else {
      startTimer();
    }
  }

  function triggerAlarm() {
    alarmAudio.currentTime = 0;
    alarmAudio.play();
  }

  function pauseAlarm() {
    alarmAudio.pause();
  }

  function startTimer() {
    intervalRef.current = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 1);
    }, 1000);
    changeFocus(true);
    setIsOn(true);
  }

  function pauseTimer() {
    clearInterval(intervalRef.current);
    intervalRef.current = 0;
    changeFocus(false);
    setIsOn(false);
  }

  return (
    <div className="z-10 flex flex-col items-center w-full p-4 mx-2 mt-4 rounded-lg sm:mx-0 sm:w-2/6 backdrop-brightness-125 bg-opacity-30">
      <ul className="flex gap-4 cursor-pointer">
        <li
          className={timerMode === "pomodoro" ? "" : "brightness-[80%]"}
          onClick={() => setTimerMode("pomodoro")}
        >
          Pomodoro
        </li>
        <li
          className={timerMode === "break" ? "" : "brightness-[80%]"}
          onClick={() => setTimerMode("break")}
        >
          Break
        </li>
      </ul>
      <div className="flex items-center h-40">
        <p className="text-8xl">{remainingTimeString}</p>
      </div>
      <button
        onClick={toggleTimer}
        className="w-40 px-6 py-2 text-3xl font-semibold border border-white rounded shadow-sm shadow-black"
      >
        {isOn ? "PAUSE" : "START"}
      </button>
    </div>
  );
}
