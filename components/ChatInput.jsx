import React from "react";

const ChatInput = () => {
  return (
    <div className="flex ml-28 mb-4 mr-28 p-4 bg-[#212121] border-t border-[#212121]">
      <form className="flex w-full flex-col gap-1.5 rounded-[26px] p-1.5 transition-colors bg-[#2F2F2F]">
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                fill-rule="evenodd"
                d="M9 7a5 5 0 0 1 10 0v8a7 7 0 1 1-14 0V9a1 1 0 0 1 2 0v6a5 5 0 0 0 10 0V7a3 3 0 1 0-6 0v8a1 1 0 1 0 2 0V9a1 1 0 1 1 2 0v6a3 3 0 1 1-6 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="search"
            className="block w-[99%] ml-2 p-4 ps-10 text-[17px] text-white rounded-lg bg-[#2F2F2F] dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white focus:outline-none"
            placeholder="Message ChatGPT"
            required
            style={{ caretColor: "white" }} // Ensures the cursor is white
          />
          <button
            type="submit"
            className="text-white rounded-full absolute end-2.5 bottom-2.5 bg-[#676767] hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="none"
              viewBox="0 0 32 32"
              class="icon-2xl"
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M15.192 8.906a1.143 1.143 0 0 1 1.616 0l5.143 5.143a1.143 1.143 0 0 1-1.616 1.616l-3.192-3.192v9.813a1.143 1.143 0 0 1-2.286 0v-9.813l-3.192 3.192a1.143 1.143 0 1 1-1.616-1.616z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </form>
    </div>

  );
};

export default ChatInput;
