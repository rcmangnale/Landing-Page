import React from "react";

export default function LandingPage() {
  return (
    <div>
      <div className="lg:grid lg:grid-cols-2 lg:gap-8">
        <div className="mx-auto max-w-md px-4 sm:max-w-2xl  sm:px-6 sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
          <div className="lg:py-24">
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
              <span className="block">Get your next</span>
              <span className="block  pt-5 pb-3  sm:pb-5">Landing Page</span>
            </h1>
            <p className="text-base  text-gray-300 sm:text-xl lg:text-lg xl:text-xl">
              Create custom landing pages with Omega that convert more visitors
              than any website. With lots of unique blocks, you can easily build
              a page without coding.
            </p>
            <div className="mt-10 font-Circular sm:mt-12">
              <form action="#" className="sm:mx-auto sm:max-w-xl lg:mx-0">
                <a
                  href="#"
                  className="inline-flex items-center rounded-md border border-transparent  bg-red-500 px-4 py-3 text-lg font-medium text-white "
                >
                  Start 14 Days free trial
                </a>
                <p className="mt-3 text-sm text-gray-300 sm:mt-4">
                  <a href="#" className="font-medium text-white">
                    No credit card required
                  </a>
                  .
                </p>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-12 -mb-16 sm:-mb-48 lg:relative lg:m-0">
          <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
            <img
              className="w-full lg:absolute lg:inset-y-0 lg:right-24 lg:top-10 lg:h-full lg:w-auto lg:max-w-none"
              src="./tablet.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
