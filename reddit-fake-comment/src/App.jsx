import { useState } from "react";
import UpperPart from "./UpperPart";
import html2canvas from "html2canvas";
import BottomPart from "./BottomPart";

export default function App() {
  const [comment, setComment] = useState("");
  const [like, setLike] = useState("1.5");

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-screen bg-orange-200">
        <div className="flex flex-col items-center p-2 bg-blue-300 border border-black rounded min-w-fit min-h-80">
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
              value={comment}
            ></textarea>
            <div className="flex flex-col gap-2">
              <input
                className="w-full p-1 border border-black rounded"
                onChange={(e) => {
                  setLike(e.target.value);
                }}
                type="text"
                value={like}
              />
              <button
                className="h-8 p-1 bg-white border border-black rounded"
                onClick={() => {
                  html2canvas(document.querySelector("#capture")).then(
                    (canvas) => {
                      let link = document.createElement("a");
                      link.download = `reddit-yorum.png`;
                      link.href = canvas
                        .toDataURL("image/png")
                        .replace("image/png", "image/octet-stream");
                      link.click();
                    }
                  );
                  setLike(
                    Math.ceil(Math.random() * 8) +
                      "." +
                      Math.ceil(Math.random() * 9)
                  );
                }}
              >
                Generate
              </button>
            </div>
          </div>
          <div
            id="capture"
            className="mt-2 text-[#d7dadc] font-opensans bg-[#1a1a1b] flex flex-col gap-1 min-w-[350px] max-w-[500px]"
          >
            {/* <img src="/aaa.png" /> */}
            <div className="text-[#999a9f]">
              <UpperPart />
            </div>
            <p className="mb-1 ml-4 -mt-2 ">{comment}</p>
            <div className="flex justify-end w-full">
              <div className="relative text-[#8C8C8C] text-[1.05rem]">
                <BottomPart like={like} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
