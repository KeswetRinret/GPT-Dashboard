import React, { useState } from "react";
import "../public/images/profile.jpeg";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="bg-[#212121] text-white p-4 flex items-center justify-between relative">
      <div
        type="button"
        id="radix-:rgd:"
        aria-haspopup="menu"
        aria-expanded="false"
        data-state="closed"
        className="group flex cursor-pointer items-center gap-1 rounded-lg py-1.5 px-3 text-lg font-semibold hover:bg-token-main-surface-secondary radix-state-open:bg-token-main-surface-secondary text-token-text-secondary overflow-hidden whitespace-nowrap bg-[#212121] hover:bg-[#2F2F2F] focus:ring-4 focus:outline-none focus:ring-blue-300  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <div className="text-token-text-secondary">
          ChatGPT <span className="text-token-text-secondary"></span>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
          className="icon-md text-token-text-tertiary"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M5.293 9.293a1 1 0 0 1 1.414 0L12 14.586l5.293-5.293a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 1 1 0-1.414"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>

      <div className="flex items-center">
        <div
          type="button"
          id="radix-:rgd:"
          aria-haspopup="menu"
          aria-expanded="false"
          data-state="closed"
          class="group flex cursor-pointer items-center gap-1 justify-between rounded-lg p-3 text-lg font-semibold hover:bg-token-main-surface-secondary radix-state-open:bg-token-main-surface-secondary  overflow-hidden  hover:bg-[#2F2F2F] mr-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            class="icon-xl-heavy"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M11.293 3.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-1.414 1.414L13 6.414V15a1 1 0 1 1-2 0V6.414L8.707 8.707a1 1 0 0 1-1.414-1.414zM4 14a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3a1 1 0 1 1 2 0v3a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-3a1 1 0 0 1 1-1"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>

        <div className="  relative ">
          <button
            id="dropdownUserAvatarButton"
            data-dropdown-toggle="dropdownAvatar"
            className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            type="button"
            onClick={toggleDropdown}
          >
            <span className="sr-only">Open user menu</span>
            <img
              className="w-8 h-8 rounded-full"
              src="https://media.licdn.com/dms/image/D4D03AQFfWQ12iwScQA/profile-displayphoto-shrink_200_200/0/1718258984500?e=2147483647&v=beta&t=hKnQPaH7vI6oALmelwUPGTrNFueqEetwChU8Y2-smtg"
              alt="user photo"
            />
          </button>

          <div
            id="dropdownAvatar"
            className={`absolute right-0 m-1 p-4 z-10 w-72  ${
              isDropdownOpen ? "block" : "hidden"
            } bg-[#2F2F2F]  border-[0.1px] border-gray-600 rounded-[24px] shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
          >
            <ul
              className="text-sm text-[#F8F8F8] dark:text-gray-200"
              aria-labelledby="dropdownUserAvatarButton"
            >
              <li>
                <div
                  type="button"
                  id="radix-:rgd:"
                  aria-haspopup="menu"
                  aria-expanded="false"
                  data-state="closed"
                  class="group flex cursor-pointer   items-center gap-1   py-3 text-[16px] font-light hover:bg-token-main-surface-secondary radix-state-open:bg-token-main-surface-secondary text-token-text-secondary overflow-hidden whitespace-nowrap  hover:bg-[#424242] focus:ring-4 focus:outline-none focus:ring-blue-300  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                    class="h-5 w-5 shrink-0"
                  >
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M12 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6M7 7a5 5 0 1 1 10 0A5 5 0 0 1 7 7M10.968 14.002a1 1 0 0 1-.719 1.218C7.467 15.937 5.5 18.29 5.5 21a1 1 0 1 1-2 0c0-3.729 2.69-6.8 6.25-7.717a1 1 0 0 1 1.218.72"
                      clip-rule="evenodd"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M17.25 15.625a1.625 1.625 0 1 1-3.25 0 1.625 1.625 0 0 1 3.25 0M21.75 15.625a1.625 1.625 0 1 1-3.25 0 1.625 1.625 0 0 1 3.25 0M21.75 20.125a1.625 1.625 0 1 1-3.25 0 1.625 1.625 0 0 1 3.25 0M17.25 20.125a1.625 1.625 0 1 1-3.25 0 1.625 1.625 0 0 1 3.25 0"
                    ></path>
                  </svg>
                  <div class="text-token-text-secondary  ml-3">
                    My GPTs <span class="text-token-text-secondary"></span>
                  </div>
                </div>
              </li>
              <li>
                <div
                  type="button"
                  id="radix-:rgd:"
                  aria-haspopup="menu"
                  aria-expanded="false"
                  data-state="closed"
                  class="group flex cursor-pointer  items-center gap-1 py-3 text-[16px] font-light hover:bg-token-main-surface-secondary radix-state-open:bg-token-main-surface-secondary text-token-text-secondary overflow-hidden whitespace-nowrap  hover:bg-[#424242] focus:ring-4 focus:outline-none focus:ring-blue-300  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                    class="h-5 w-5 shrink-0"
                  >
                    <path
                      fill="currentColor"
                      d="M10.663 6.387c.152-.096.337.023.337.203V8a1 1 0 1 0 2 0V6.59c0-.18.185-.3.337-.203a2.5 2.5 0 0 1-.357 4.413 1 1 0 0 1 .02.2v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 .02-.2 2.5 2.5 0 0 1-.357-4.413"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M17.975 4.01A8 8 0 0 0 17.4 4H9.8c-.857 0-1.439 0-1.889.038-.438.035-.663.1-.819.18a2 2 0 0 0-.874.874c-.08.156-.145.38-.18.819C6 6.361 6 6.943 6 7.8v8.37c.313-.11.65-.17 1-.17h11V4.6c0-.297 0-.459-.01-.575l-.001-.014zM17.657 18H7a1 1 0 1 0 0 2h10.657a5.5 5.5 0 0 1 0-2M4 19V7.759c0-.805 0-1.47.044-2.01.046-.563.145-1.08.392-1.565a4 4 0 0 1 1.748-1.748c.485-.247 1.002-.346 1.564-.392C8.29 2 8.954 2 9.758 2h7.674c.252 0 .498 0 .706.017.229.019.499.063.77.201a2 2 0 0 1 .874.874c.138.271.182.541.201.77.017.208.017.454.017.706V17a1 1 0 0 1-.078.386c-.476 1.14-.476 2.089 0 3.228A1 1 0 0 1 19 22H7a3 3 0 0 1-3-3"
                    ></path>
                  </svg>
                  <div class="text-token-text-secondary  ml-3">
                    Customize ChatGPT{" "}
                    <span class="text-token-text-secondary"></span>
                  </div>
                </div>
              </li>
              <li>
                <div
                  type="button"
                  id="radix-:rgd:"
                  aria-haspopup="menu"
                  aria-expanded="false"
                  data-state="closed"
                  class="group flex cursor-pointer  items-center gap-1   py-3 text-[16px] font-light hover:bg-token-main-surface-secondary radix-state-open:bg-token-main-surface-secondary text-token-text-secondary overflow-hidden whitespace-nowrap  hover:bg-[#424242] focus:ring-4 focus:outline-none focus:ring-blue-300  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                    class="h-5 w-5 shrink-0"
                  >
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M11.568 3.5a1 1 0 0 0-.863.494l-.811 1.381A3 3 0 0 1 7.33 6.856l-1.596.013a1 1 0 0 0-.858.501l-.44.761a1 1 0 0 0-.003.992l.792 1.4a3 3 0 0 1 0 2.954l-.792 1.4a1 1 0 0 0 .004.992l.439.76a1 1 0 0 0 .858.502l1.596.013a3 3 0 0 1 2.564 1.48l.811 1.382a1 1 0 0 0 .863.494h.87a1 1 0 0 0 .862-.494l.812-1.381a3 3 0 0 1 2.563-1.481l1.596-.013a1 1 0 0 0 .859-.501l.439-.761a1 1 0 0 0 .004-.992l-.793-1.4a3 3 0 0 1 0-2.953l.793-1.401a1 1 0 0 0-.004-.992l-.439-.76a1 1 0 0 0-.859-.502l-1.596-.013a3 3 0 0 1-2.563-1.48L13.3 3.993a1 1 0 0 0-.862-.494zM8.98 2.981A3 3 0 0 1 11.568 1.5h.87a3 3 0 0 1 2.588 1.481l.81 1.382a1 1 0 0 0 .855.494l1.597.013a3 3 0 0 1 2.575 1.502l.44.76a3 3 0 0 1 .011 2.975l-.792 1.4a1 1 0 0 0 0 .985l.792 1.401a3 3 0 0 1-.012 2.974l-.439.761a3 3 0 0 1-2.575 1.503l-1.597.012a1 1 0 0 0-.854.494l-.811 1.382a3 3 0 0 1-2.588 1.481h-.87a3 3 0 0 1-2.588-1.481l-.811-1.382a1 1 0 0 0-.855-.494l-1.596-.012a3 3 0 0 1-2.576-1.503l-.439-.76a3 3 0 0 1-.012-2.975l.793-1.4a1 1 0 0 0 0-.985l-.793-1.4a3 3 0 0 1 .012-2.975l.44-.761A3 3 0 0 1 5.717 4.87l1.596-.013a1 1 0 0 0 .855-.494z"
                      clip-rule="evenodd"
                    ></path>
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M12.003 10.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M8.502 12a3.5 3.5 0 1 1 7 .001 3.5 3.5 0 0 1-7-.001"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <div class="text-token-text-secondary  ml-3">
                    Settings <span class="text-token-text-secondary"></span>
                  </div>
                </div>
              </li>
              <li>
                <div
                  type="button"
                  id="radix-:rgd:"
                  aria-haspopup="menu"
                  aria-expanded="false"
                  data-state="closed"
                  class="group flex cursor-pointer border-t-[1px] border-b-[1px] border-gray-600  items-center gap-1  py-3 text-[16px] font-light hover:bg-token-main-surface-secondary radix-state-open:bg-token-main-surface-secondary text-token-text-secondary overflow-hidden whitespace-nowrap  hover:bg-[#424242] focus:ring-4 focus:outline-none focus:ring-blue-300  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                    class="h-5 w-5 shrink-0"
                  >
                    <path
                      fill="currentColor"
                      d="M6.161 3.5H17.84c.527 0 .982 0 1.356.03.395.033.789.104 1.167.297a3 3 0 0 1 1.311 1.311c.193.378.264.772.296 1.167.031.375.031.83.031 1.356V15.5a1 1 0 0 1 1 1v1a3 3 0 0 1-3 3H3.996a3 3 0 0 1-3-3v-1a1 1 0 0 1 1-1H2V7.661c0-.527 0-.981.03-1.356.033-.395.104-.789.297-1.167a3 3 0 0 1 1.311-1.311c.378-.193.772-.264 1.167-.296.375-.031.83-.031 1.356-.031m-3.16 14zh-.004a1 1 0 0 0 1 1H20a1 1 0 0 0 1-1h-5.764l-.789.394A1 1 0 0 1 14 18h-4a1 1 0 0 1-.447-.106l-.79-.394zM20 15.5V7.7c0-.577 0-.949-.024-1.232-.022-.272-.06-.373-.085-.422a1 1 0 0 0-.437-.437c-.05-.025-.15-.063-.422-.085C18.75 5.5 18.377 5.5 17.8 5.5H6.2c-.577 0-.949 0-1.232.024-.272.022-.373.06-.422.085a1 1 0 0 0-.437.437c-.025.05-.063.15-.085.422C4 6.75 4 7.123 4 7.7v7.8h5a1 1 0 0 1 .447.106l.789.394h3.528l.789-.394A1 1 0 0 1 15 15.5z"
                    ></path>
                  </svg>
                  <div class="text-token-text-secondary  ml-3">
                    Download th macOS app{" "}
                    <span class="text-token-text-secondary"></span>
                  </div>
                </div>
              </li>
            </ul>
            <div className="py-2">
              <div
                type="button"
                id="radix-:rgd:"
                aria-haspopup="menu"
                aria-expanded="false"
                data-state="closed"
                class="group flex cursor-pointer  items-center gap-1 rounded-lg py-1.5 text-[16px] font-light hover:bg-token-main-surface-secondary radix-state-open:bg-token-main-surface-secondary text-token-text-secondary overflow-hidden whitespace-nowrap  hover:bg-[#424242] focus:ring-4 focus:outline-none focus:ring-blue-300  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="h-5 w-5 shrink-0"
                >
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M6 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h4a1 1 0 1 1 0 2H6a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h4a1 1 0 1 1 0 2zm9.293 3.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L17.586 13H11a1 1 0 1 1 0-2h6.586l-2.293-2.293a1 1 0 0 1 0-1.414"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <div class="text-token-text-secondary  ml-3">
                  Log out <span class="text-token-text-secondary"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
