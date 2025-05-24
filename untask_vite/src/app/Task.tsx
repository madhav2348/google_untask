export default function Task() {
  return (
    <div className="flex-col">
      <div className="flex">
        <span className="block">Name of Task List</span>

        <div>
          <svg
            className=" items-center hover:rounded-2xl hover:cursor-pointer hover:bg-[#37393b]"
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            viewBox="0 0 16 16"
            fill="currentColor"
          >
            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
          </svg>
        </div>
      </div>
      <div className="flex">
        <div className="flex ">
          <div className="">
            <svg focusable="false" viewBox="0 0 24 24">
              <path d="M 100 100 a 50 50 0 1 0 0 0 " />
            </svg>
          </div>
          <div className="flex-col">
            <span className="font-medium block"> Name of Task</span>
            <span className="font-extralight block"> Sub name of Task</span>
          </div>
          <div className="flex">
            <div className="p-1 block">
              <svg
                className=" items-center hover:rounded-2xl hover:cursor-pointer hover:bg-[#37393b]"
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
              </svg>
            </div>
            <div className="p-1 block">
              <svg
                className=" hover:rounded-2xl hover:cursor-pointer hover:bg-[#37393b]"
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M239.2,97.29a16,16,0,0,0-13.81-11L166,81.17,142.72,25.81h0a15.95,15.95,0,0,0-29.44,0L90.07,81.17,30.61,86.32a16,16,0,0,0-9.11,28.06L66.61,153.8,53.09,212.34a16,16,0,0,0,23.84,17.34l51-31,51.11,31a16,16,0,0,0,23.84-17.34l-13.51-58.6,45.1-39.36A16,16,0,0,0,239.2,97.29Zm-15.22,5-45.1,39.36a16,16,0,0,0-5.08,15.71L187.35,216v0l-51.07-31a15.9,15.9,0,0,0-16.54,0l-51,31h0L82.2,157.4a16,16,0,0,0-5.08-15.71L32,102.35a.37.37,0,0,1,0-.09l59.44-5.14a16,16,0,0,0,13.35-9.75L128,32.08l23.2,55.29a16,16,0,0,0,13.35,9.75L224,102.26S224,102.32,224,102.33Z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
