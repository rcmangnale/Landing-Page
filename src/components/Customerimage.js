import React from "react";

export default function CustomerImage() {
  return (
    <>
      <div className="grid grid-cols-2">
        <div>
          <img src="./images/men.png"></img>
        </div>
        <div className="flex justify-center items-center font-bold  pr-16">
            <div className="grid grid-rows-2">
          <p>
            OMG! I cannot believe that I have got a brand new landing page after
            getting Omega. It was super easy to edit and publish.
          </p>
          <div className="pt-5 font-light">
            <p className="font-bold">Jonathan Taylor</p>
            <p>CEO at Creativex</p>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
