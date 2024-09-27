import React from "react";
import { FiArrowRight } from "react-icons/fi";
import BasicLink from "../Button/BasicLink";
export default function Fly({ type }) {
  return (
    <div className="max-w-xs w-full rounded overflow-hidden shadow-lg dark:bg-lime-50 bg-lime-900 m-2 flex flex-col justify-between">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-white dark:text-amber-900 text-center">
          {type.name}
        </div>
        <img
          className="w-50 h-50 rounded-full mx-auto my-6"
          src={type.image}
          alt="Sunset in the mountains"
        />
        <p className=" text-white dark:text-amber-800 text-base">
          {type.description.substr(0, 70)}...
        </p>
      </div>

      <div className="px-6 pt-4 pb-2 mb-3">
        <BasicLink
          text="Ver mas"
          redirect={`/flies/${type.id}`}
          icon={<FiArrowRight />}
          position="right"
          styles="transition ease-in-out hover:scale-110 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-amber-200 bg-lime-600 rounded-lg hover:bg-amber-400  dark:bg-lime-800 dark:hover:bg-lime-600"
        />
      </div>
    </div>
  );
}
