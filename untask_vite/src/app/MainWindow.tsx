import logo from "../assets/untask.svg";
import Task from "./Task";
export default function MainWindow() {
  return (
    <>
      <nav className="flex items-center p-5">
        <div className="flex items-center justify-center ">
          <div className="h-10 w-10 items-center justify-center cursor-pointer ">
            <svg
              className="h-8 w-8 text-white  items-center justify-center"
              focusable="false"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
              />
            </svg>
          </div>
          <div className="w-10 h-10 mr-2 ml-2 cursor-pointer">
            <img
              className="w-full h-full object-contain"
              src={logo}
              style={{ transform: "rotate(90deg)" }}
            />
          </div>
          <span className="text-xl font-medium cursor-pointer">Untask</span>
        </div>
      </nav>
      <div className="flex p-1">
        <div className="">
          <button
            type="button"
            className=" flex items-center rounded-2xl bg-[#37393b] p-4 m-4 shadow-2xl/30"
          >
            <svg
              className="h-8 w-10 "
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
            </svg>
            <span>Create</span>
          </button>
          <div className="flex-col pl-8 pt-2">
            <div className="flex items-center gap-4 pt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M80,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H88A8,8,0,0,1,80,64Zm136,56H88a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm0,64H88a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16ZM44,52A12,12,0,1,0,56,64,12,12,0,0,0,44,52Zm0,64a12,12,0,1,0,12,12A12,12,0,0,0,44,116Zm0,64a12,12,0,1,0,12,12A12,12,0,0,0,44,180Z"></path>
              </svg>
              <span>All tasks</span>
            </div>
            <div className="flex items-center gap-4 pt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M239.2,97.29a16,16,0,0,0-13.81-11L166,81.17,142.72,25.81h0a15.95,15.95,0,0,0-29.44,0L90.07,81.17,30.61,86.32a16,16,0,0,0-9.11,28.06L66.61,153.8,53.09,212.34a16,16,0,0,0,23.84,17.34l51-31,51.11,31a16,16,0,0,0,23.84-17.34l-13.51-58.6,45.1-39.36A16,16,0,0,0,239.2,97.29Zm-15.22,5-45.1,39.36a16,16,0,0,0-5.08,15.71L187.35,216v0l-51.07-31a15.9,15.9,0,0,0-16.54,0l-51,31h0L82.2,157.4a16,16,0,0,0-5.08-15.71L32,102.35a.37.37,0,0,1,0-.09l59.44-5.14a16,16,0,0,0,13.35-9.75L128,32.08l23.2,55.29a16,16,0,0,0,13.35,9.75L224,102.26S224,102.32,224,102.33Z"></path>
              </svg>
              <span>Starred</span>
            </div>
          </div>
        </div>
        <div>
          <Task />
        </div>
      </div>
    </>
  );
}
