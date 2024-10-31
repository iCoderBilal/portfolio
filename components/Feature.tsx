import React from "react";
import { Button } from "./ui/MovingBorders";

const Feature = () => {
  return (
    <div>
      <div className="features" id="features">
        <div className="features-container flex justify-between md:flex-nowrap flex-wrap">
          <div className="features-left md:basis-[43%] basis-[100%] min-h-[400px] bg-transparent">
            <img
              src="/vibleImg.png"
              className="md:w-[80%] lg:w-[55%] w-[85%] mx-auto"
            />
          </div>
          <div className="features-right md:basis-[52%] basis-[100%] min-h-[400px] bg-transparent text-left flex items-center">
            <Button
              //   random duration will be fun , I think , may be not
              duration={Math.floor(Math.random() * 10000) + 10000}
              borderRadius="1.75rem"
              style={{
                //   add these two
                //   you can generate the color from here https://cssgradient.io/
                background: "rgb(4,7,29)",
                backgroundColor:
                  "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                // add this border radius to make it more rounded so that the moving border is more realistic
                borderRadius: `calc(1.75rem* 0.96)`,
              }}
              // remove bg-white dark:bg-slate-900
              className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              <div className="flex lg:flex-col flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                <div>
                  <p className="uppercase tracking-widest text-md text-blue-100 text-left mb-4">
                    CORE FEATURE
                  </p>
                  <h1 className="heading text-left">
                    Solana Centric Video Feed
                  </h1>

                  <p className="text-left md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl mt-4 text-gray-400">
                    Stay up to date with short-form videos on Solana projects,
                    market trends, and educational content, all curated to keep
                    you informed.
                  </p>
                </div>
              </div>
            </Button>
          </div>
        </div>
      </div>

      {/* ________________________________________________________________________________________________ */}

      <div className="features md:mt-36 mt-16">
        <div className="features-container flex justify-between md:flex-nowrap flex-wrap">
          <div className="features-left md:basis-[43%] basis-[100%] min-h-[400px] bg-transparent lg:order-2">
            <img
              src="/vibleImg.png"
              className="md:w-[80%] lg:w-[55%] w-[85%] mx-auto"
            />
          </div>
          <div className="features-right md:basis-[52%] basis-[100%] min-h-[400px] bg-transparent text-left flex items-center lg:order-1">
            <Button
              //   random duration will be fun , I think , may be not
              duration={Math.floor(Math.random() * 10000) + 10000}
              borderRadius="1.75rem"
              style={{
                //   add these two
                //   you can generate the color from here https://cssgradient.io/
                background: "rgb(4,7,29)",
                backgroundColor:
                  "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                // add this border radius to make it more rounded so that the moving border is more realistic
                borderRadius: `calc(1.75rem* 0.96)`,
              }}
              // remove bg-white dark:bg-slate-900
              className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              <div className="flex lg:flex-col flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                <div>
                  <p className="uppercase tracking-widest text-md text-blue-100 text-left mb-4">
                    CORE FEATURE
                  </p>
                  <h1 className="heading text-left">Integrated Wallet</h1>

                  <p className="text-left md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl mt-4 text-gray-400">
                    Effortlessly swap, send, and manage Solana tokens within the
                    app, giving you full control of your assets without leaving
                    the platform.
                  </p>
                </div>
              </div>
            </Button>
          </div>
        </div>
      </div>

      {/* ________________________________________________________________________________________________ */}

      <div className="features md:mt-36 mt-16">
        <div className="features-container flex justify-between md:flex-nowrap flex-wrap">
          <div className="features-left md:basis-[43%] basis-[100%] min-h-[400px] bg-transparent">
            <img
              src="/vibleImg.png"
              className="md:w-[80%] lg:w-[55%] w-[85%] mx-auto"
            />
          </div>
          <div className="features-right md:basis-[52%] basis-[100%] min-h-[400px] bg-transparent text-left flex items-center">
            <Button
              //   random duration will be fun , I think , may be not
              duration={Math.floor(Math.random() * 10000) + 10000}
              borderRadius="1.75rem"
              style={{
                //   add these two
                //   you can generate the color from here https://cssgradient.io/
                background: "rgb(4,7,29)",
                backgroundColor:
                  "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                // add this border radius to make it more rounded so that the moving border is more realistic
                borderRadius: `calc(1.75rem* 0.96)`,
              }}
              // remove bg-white dark:bg-slate-900
              className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              <div className="flex lg:flex-col flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                <div>
                  <p className="uppercase tracking-widest text-md text-blue-100 text-left mb-4">
                    CORE FEATURE
                  </p>
                  <h1 className="heading text-left">
                    Community Hubs & Group Chats
                  </h1>

                  <p className="text-left md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl mt-4 text-gray-400">
                    Join niche discussions, connect in DAOs, and collaborate
                    with others on the latest Solana projects through vibrant
                    community hubs.
                  </p>
                </div>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
