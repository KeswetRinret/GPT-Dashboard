import React from "react";

const ChatArea = () => {
  return (
    <div className="flex-1 mr-28 ml-28 p-4 overflow-y-auto bg-[#212121]">
      
      <div className="mb-4 p-4 shadow">
        <p className="text-white">
          You can also use variant modifiers to target media queries like
          responsive breakpoints, dark mode, prefers-reduced-motion, and more.
          For example, use md:duration-150 to apply the duration-150 utility at
          only medium screen sizes and above.You can also use variant modifiers
          to target media queries like responsive breakpoints, dark mode,
          prefers-reduced-motion, and more. For example, use md:duration-150 to
          apply the duration-150 utility at only medium screen sizes and above.
        </p>
      </div>
      
      <div className="mb-4 p-4 bg-[#2F2F2F] text-white max-w-[70%] rounded-3xl shadow self-end">
        <p>
          You can also use variant modifiers to target media queries like
          responsive breakpoints, dark mode, prefers-reduced-motion, and more.
          For example, use md:touch-pan-x to apply the touch-pan-x utility at
          only medium screen sizes and above.
        </p>
      </div>

      <div className="p-4  shadow">
        <p className="text-white">
          You can also use variant modifiers to target media queries like
          responsive breakpoints, dark mode, prefers-reduced-motion, and more.
          For example, use md:duration-150 to apply the duration-150 utility at
          only medium screen sizes and above.You can also use variant modifiers
          above.You can also use variant modifiers to target media queries like
          responsive breakpoints, dark mode, prefers-reduced-motion, and more.
          For example, use md:duration-150 to apply the duration-150 utility at
          only medium screen sizes and above.
        </p>
      </div>

      <div className="relative inset-y-0 right-0 mb-4 p-4 bg-[#2F2F2F] text-white max-w-[70%] rounded-3xl shadow self-end">
        <p>
          You can also use variant modifiers to target media queries like
          responsive breakpoints, dark mode, prefers-reduced-motion, and more.
          For example, use md:touch-pan-x to apply the touch-pan-x utility at
          only medium screen sizes and above.
        </p>
      </div>
    </div>
  );
};

export default ChatArea;
