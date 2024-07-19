import { syberChat } from "../assets";
// import { notificationImages } from "../constants";

const Notification = ({ className, title }) => {
  return (
    <div
      className={`${
        className || ""
      } flex items-center p-4 pr-6 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-5`}
    >
      <div className="relative mx-auto">
        <div className="group relative flex cursor-pointer after:shadow-lg after:shadow-black">
          <div className="relative -left-16 top-0 z-10 w-96 rounded-xl bg-[#3d348b] px-5 py-3 text-base font-semibold leading-7 transition-all duration-700 group-hover:-left-14">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
               <img src={syberChat} alt="syberChat" className="w-8"/>
                <div className="flex items-center gap-1 rounded-full bg-green-400/45 py-0.5 pl-1 pr-2">
                  <p className="-rotate-90 leading-tight text-green-500">&rarr;</p>
                  <p className="text-xs leading-tight text-white">10%</p>
                </div>
                <p className="text-white opacity-0 delay-200 duration-700 ease-in-out group-hover:opacity-100">
                  1,300 Goals
                </p>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M3.7644 13.3726V11.0849C3.7644 6.53663 7.45154 2.84949 11.9999 2.84949V2.84949C16.5482 2.84949 20.2353 6.53663 20.2353 11.0849V13.9856"
                    stroke="#DF1463"
                    stroke-width="1.69904"
                  />
                  <path
                    d="M2.84937 17.4903V16.1566C2.84937 14.1351 4.4881 12.4964 6.50957 12.4964C7.5203 12.4964 8.33967 13.3158 8.33967 14.3265V19.3204C8.33967 20.3311 7.5203 21.1505 6.50957 21.1505C4.4881 21.1505 2.84937 19.5118 2.84937 17.4903Z"
                    stroke="white"
                    stroke-width="1.69904"
                  />
                  <path
                    d="M21.1504 17.4903V16.1566C21.1504 14.1351 19.5117 12.4964 17.4902 12.4964C16.4795 12.4964 15.6601 13.3158 15.6601 14.3265V19.3204C15.6601 20.3311 16.4795 21.1505 17.4902 21.1505C19.5117 21.1505 21.1504 19.5118 21.1504 17.4903Z"
                    stroke="white"
                    stroke-width="1.69904"
                  />
                </svg>
                <div className="flex items-center gap-1 rounded-full bg-green-400/45 py-0.5 pl-1 pr-2">
                  <p className="-rotate-90 leading-tight text-green-500">&rarr;</p>
                  <p className="text-xs leading-tight text-white">30%</p>
                </div>
                <p className="text-white opacity-0 delay-200 duration-700 ease-in-out group-hover:opacity-100">
                  30 Records
                </p>
              </div>
              <p>
                <a
                  href="https://tailwindcss.com/docs"
                  className="text-sky-500 opacity-0 hover:text-sky-600"
                >
                  &rarr;
                </a>
              </p>
            </div>
          </div>
          <div className="absolute -right-16 top-0 z-20 flex w-96 flex-col gap-4 self-end rounded-xl rounded-l-2xl border-none bg-[#7678ed] px-5 py-3 text-base font-semibold leading-7 transition-all duration-700 group-hover:-right-14 group-hover:w-64 group-hover:rounded-l-lg">
            <p className="text-[#fff]">Achivements unlocked</p>
            <p className="text-[#fff]">Records sold</p>
            <p>
              <a href="https://tailwindcss.com/docs" className="text-white/50">
                Learn more &rarr;
              </a>
            </p>
          </div>
          <div className="h-16 bg-[#3d348b] w-[28rem] -left-10 shadow-2xl shadow-[#3d348b] absolute bottom-0"></div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
