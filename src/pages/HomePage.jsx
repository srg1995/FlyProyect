import React from "react";
import { Link } from "react-router-dom";
export default function HomePage() {
  return (
    <div>
      <div className="bg-black">
        <div className="transparent hover:block hover:bg-slate-200 ">
          MOSCASs
        </div>
      </div>
      <div class="grid grid-flow-col grid-rows-2 grid-cols-3 gap-8">
        <div className="bg-red-300">
          <img
            src="/assets/img/oxido.jpeg"
            className="object-cover"
            alt=""
            loading="lazy"
          />
        </div>
        <div class="col-start-3 bg-red-300">
          <img
            src="/assets/img/oxido.jpeg"
            alt=""
            className="object-cover"
            loading="lazy"
          />
        </div>
        <div className="bg-blue-300">
          <img
            src="./assets/img/oxido.jpeg"
            className="object-cover"
            alt=""
            loading="lazy"
          />
        </div>
        <div className="bg-lime-300">
          <img
            src="./assets/img/oxido.jpeg"
            className="object-cover"
            alt=""
            loading="lazy"
          />
        </div>
        <div className="row-start-1 col-start-2 col-span-2 bg-amber-300">
          <img
            className="object-cover"
            src="./assets/img/oxido.jpeg"
            alt=""
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
