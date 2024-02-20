import { useState } from "react";
import UserPicture from "./UserPicture";
import html2canvas from "html2canvas";

export default function App() {
  const [comment, setComment] = useState("");

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-screen bg-orange-200">
        <div className="flex flex-col items-center w-2/3 p-2 bg-blue-300 border border-black rounded min-h-80">
          <div
            id="INPUT-SECTION"
            className="flex flex-row items-center w-full gap-1 h-1/2"
          >
            <textarea
              className="w-full p-1 border border-black rounded"
              rows={5}
              placeholder="Comment"
              onChange={(e) => {
                setComment(e.target.value);
              }}
            ></textarea>
            <button
              className="h-8 p-1 bg-white border border-black rounded"
              onClick={() => {
                html2canvas(document.querySelector("#capture")).then(
                  (canvas) => {
                    let link = document.createElement("a");
                    link.download = `reddit-yorum.jpg`;
                    link.href = canvas.toDataURL({
                      format: "jpeg",
                      quality: 1,
                      multiplier: 2,
                    });
                    link.click();
                  }
                );
              }}
            >
              Generate
            </button>
          </div>
          <div
            id="capture"
            className="mt-2 text-[#d7dadc] font-opensans bg-[#1a1a1b] p-3 flex flex-col min-w-60 gap-1 max-w-full pl-[3rem]"
          >
            <div className="flex items-center gap-2 -mb-4 -ml-10">
              <UserPicture />
              <p className="mb-3 text-lg font-semibold">reddit.turk</p>
            </div>
            <p className="mb-4 ml-4 text-lg">{comment}</p>
            <div className="flex ml-3">
              <div className="flex items-center">
                <svg
                  className="w-9 h-9"
                  fill="#ff4500"
                  width="800px"
                  height="800px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.781 2.375c-.381-.475-1.181-.475-1.562 0l-8 10A1.001 1.001 0 0 0 4 14h4v7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7h4a1.001 1.001 0 0 0 .781-1.625l-8-10zM15 12h-1v8h-4v-8H6.081L12 4.601 17.919 12H15z" />
                </svg>
                <p className="ml-1 mb-3  text-[#ff4500] text-xl font-semibold">
                  {Math.ceil(Math.random() * 9) +
                    "." +
                    (Math.floor(Math.random() * 9) + 1) +
                    "k"}
                </p>
                <svg
                  className="ml-1 w-9 h-9"
                  fill="#818384"
                  width="800"
                  height="800"
                  viewBox="0 0 800 800"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M373.967 720.833C386.667 736.667 413.333 736.667 426.033 720.833L692.7 387.5C696.612 382.593 699.061 376.682 699.766 370.446C700.47 364.211 699.402 357.902 696.684 352.246C693.965 346.59 689.707 341.815 684.397 338.47C679.088 335.124 672.942 333.344 666.667 333.333L533.333 333.333L533.333 100C533.333 91.1594 529.821 82.681 523.57 76.4297C517.319 70.1785 508.841 66.6667 500 66.6667L300 66.6666C291.159 66.6666 282.681 70.1785 276.43 76.4297C270.179 82.6809 266.667 91.1594 266.667 100L266.667 333.333L133.333 333.333C127.058 333.344 120.912 335.124 115.603 338.47C110.293 341.815 106.035 346.59 103.317 352.246C100.598 357.902 99.5298 364.21 100.234 370.446C100.939 376.682 103.388 382.593 107.3 387.5L373.967 720.833ZM300 400L333.333 400L333.333 133.333L466.667 133.333L466.667 400L597.3 400L400 646.633L202.7 400L300 400Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
