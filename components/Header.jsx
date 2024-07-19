import React from "react";

const Header = () => {
  return (
    <header className="bg-[#212121] text-white p-4 flex items-center justify-between">
      <div
        type="button"
        id="radix-:rgd:"
        aria-haspopup="menu"
        aria-expanded="false"
        data-state="closed"
        class="group flex cursor-pointer items-center gap-1 rounded-lg py-1.5 px-3 text-lg font-semibold hover:bg-token-main-surface-secondary radix-state-open:bg-token-main-surface-secondary text-token-text-secondary overflow-hidden whitespace-nowrap bg-[#212121] hover:bg-[#2F2F2F] focus:ring-4 focus:outline-none focus:ring-blue-300  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <div class="text-token-text-secondary">
          ChatGPT <span class="text-token-text-secondary"></span>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
          class="icon-md text-token-text-tertiary"
        >
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M5.293 9.293a1 1 0 0 1 1.414 0L12 14.586l5.293-5.293a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414"
            clip-rule="evenodd"
          ></path>
        </svg>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li>Conversations</li>
          <li>Settings</li>
          <li>Help</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
