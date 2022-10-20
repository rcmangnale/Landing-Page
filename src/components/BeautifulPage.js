import React from "react";

export default function BeautifulPage() {
  return (
    <div>
      <div className="lg:grid lg:grid-cols-2 lg:gap-8">
        <div className="mx-auto max-w-md px-4 sm:max-w-2xl  sm:px-6 sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
          <div className="lg:py-24">
            <h1 className="mt-4 text-4xl font-bold  text-black sm:mt-5 sm:text-6xl lg:mt-6 xl:text-4xl">
              <span className="block">Make beautiful </span>
              <span className="block pt-2 pb-3  sm:pb-5">landing pages easily.</span>
            </h1>
            <p className="text-base  sm:text-xl lg:text-lg xl:text-lg">
            Create custom landing pages with Omega that converts <br></br> more visitors than any website. With lots of unique blocks,<br></br> you can easily build a page without coding.
            </p>
            <div className=" font-Circular">
            <ul className="content-list">
                    <li className="font-bold">50+ HTML Elements</li>
                    <li className="font-bold">Bootstrap 4 Framework</li>
                    <li className="font-bold">6 Month Support</li>
                    <li className="font-bold">Lifetime Updates</li>
                </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 -mb-16 sm:-mb-48 lg:relative lg:m-0">
          <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
            <img
              className=" lg:left-24"
              src="./images/bg.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
