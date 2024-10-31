import React from "react";

const FAQ = () => {
  return (
    <div className="FAQ" id="faq">
      <div className="faq-container py-[22vw] md:py-[0vw] md:pt-[0] pt-[5vw] pb-[10vw] bg-transparent text-white">
        <div className="heading1">
          <h1 className="heading text-center">
            Frequently <span className="text-[#CBACF9]">Asked Questions</span>
          </h1>
        </div>

        <div className=" pt-[50px] sm:flex-wrap flex-wrap">
          {/* _____________________ */}
          <div className="left">
            <div className="space-y-6">
              <details className="group lg:w-[40vw] w-[90vw] mx-auto border-b-2 border-[#1e416e] rounded-xl">
                <summary className="font-semibold flex cursor-pointer list-none items-center justify-between p-6 text-lg text-secondary-900">
                  What is SolTok?
                  <div className="text-secondary-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="block h-5 w-5 transition-all duration-300 group-open:-rotate-90"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>
                </summary>
                <div className="px-6 pb-6 text-secondary-500 font-Poppins text-gray-300">
                  SolTok is a social platform built for the Solana community. It
                  allows users to connect, share insights, and manage their
                  Solana assets—all in one app.
                </div>
              </details>

              <details className="group lg:w-[40vw] w-[90vw] mx-auto border-b-2 border-[#1e416e] rounded-xl">
                <summary className="font-semibold flex cursor-pointer list-none items-center justify-between p-6 text-lg text-secondary-900">
                  Can I manage my Solana tokens in SolTok?
                  <div className="text-secondary-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="block h-5 w-5 transition-all duration-300 group-open:-rotate-90"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>
                </summary>
                <div className="px-6 pb-6 text-secondary-500 font-Poppins text-gray-300">
                  Yes, SolTok has an integrated wallet feature that lets you
                  swap, send, and store Solana tokens directly in the app.
                </div>
              </details>

              <details className="group lg:w-[40vw] w-[90vw] mx-auto border-b-2 border-[#1e416e] rounded-xl">
                <summary className="font-semibold flex cursor-pointer list-none items-center justify-between p-6 text-lg text-secondary-900">
                  How can I join discussions in community hubs?
                  <div className="text-secondary-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="block h-5 w-5 transition-all duration-300 group-open:-rotate-90"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>
                </summary>
                <div className="px-6 pb-6 text-secondary-500 font-Poppins text-gray-300">
                  Community hubs are open to all users interested in connecting
                  with others in the Solana community. Simply join a hub or
                  group chat that interests you to participate in conversations,
                  DAOs, and collaborations with like-minded individuals.
                </div>
              </details>

              <details className="hidden group sm:w-[40vw] w-[90vw] mx-auto border-b-2 border-[#1e416e] rounded-xl">
                <summary className="font-semibold flex cursor-pointer list-none items-center justify-between p-6 text-lg text-secondary-900">
                  How can I join discussions in community hubs?
                  <div className="text-secondary-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="block h-5 w-5 transition-all duration-300 group-open:-rotate-90"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>
                </summary>
                <div className="px-6 pb-6 text-secondary-500 font-Poppins text-gray-300">
                  Community hubs are open to all users interested in connecting
                  with others in the Solana community. Simply join a hub or
                  group chat that interests you to participate in conversations,
                  DAOs, and collaborations with like-minded individuals.
                </div>
              </details>
            </div>
          </div>

          {/* __________________________________ */}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
