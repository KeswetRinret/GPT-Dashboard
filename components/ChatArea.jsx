import React from "react";

const ChatArea = () => {
  return (
    <div className="flex-1 mr-40 ml-40 p-4 overflow-y-auto bg-[#212121] space-y-4">
      <div className="flex justify-start">
        <div className="p-4  text-white max-w-[86%] rounded-3xl shadow text-justify">
          <p>
            You can also use variant modifiers to target media queries like
            responsive breakpoints, dark mode, prefers-reduced-motion, and more.
            For example, use md:duration-150 to apply the duration-150 utility
            at only medium screen sizes and above.You can also use variant
            modifiers to target media queries like responsive breakpoints, dark
            mode, prefers-reduced-motion, and more. For example, use
            md:duration-150 to apply the duration-150 utility at only medium
            screen sizes and above.
          </p>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="p-4 bg-[#2F2F2F] text-white max-w-[86%] rounded-3xl shadow text-justify">
          <p>
            You can also use variant modifiers to target media queries like
            responsive breakpoints, dark mode, prefers-reduced-motion, and more.
            For example, use md:touch-pan-x to apply the touch-pan-x utility at
            only medium screen sizes and above.
          </p>
        </div>
      </div>
      <div className="flex justify-start">
        <div className="p-4  text-white max-w-[86%] rounded-3xl shadow text-justify">
          <p>
            You can also use variant modifiers to target media queries like
            responsive breakpoints, dark mode, prefers-reduced-motion, and more.
            For example, use md:duration-150 to apply the duration-150 utility
            at only medium screen sizes and above.You can also use variant
            modifiers above.You can also use variant modifiers to target media
            queries like responsive breakpoints, dark mode,
            prefers-reduced-motion, and more. For example, use md:duration-150
            to apply the duration-150 utility at only medium screen sizes and
            above.
          </p>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="p-4 bg-[#2F2F2F] text-white max-w-[86%] rounded-3xl shadow text-justify">
          <p>
            You can also use variant modifiers to target media queries like
            responsive breakpoints, dark mode, prefers-reduced-motion, and more.
            For example, use md:touch-pan-x to apply the touch-pan-x utility at
            only medium screen sizes and above.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatArea;
