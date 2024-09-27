import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFly } from "../../services/getFlies";
import { FiArrowLeft } from "react-icons/fi";
import Subtitle from "../Title/Subtitle";
import Title from "../Title/Title";
import BasicLink from "../Button/BasicLink";
export default function FlyDetail() {
  let { flyid } = useParams();
  const [fly, setFly] = useState({});

  useEffect(() => {
    setFly(getFly(flyid));
    console.log(fly);
  }, []);
  return (
    <>
      <Subtitle
        text={fly?.name}
        color="text-lime-800 text-center dark:text-amber-200"
      />
      <BasicLink
        text="Volver"
        redirect="/flies"
        icon={<FiArrowLeft />}
        position="left"
        styles="ml-20 mt-10 transition ease-in-out hover:scale-110 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-amber-200 dark:text-lime-600 bg-lime-900 rounded-lg hover:bg-amber-400 hover:text-lime-900  dark:bg-amber-50 dark:hover:bg-amber-400"
      />

      <div className="mx-20 my-6 p-6 bg-lime-900 dark:bg-amber-50 rounded-lg text-white dark:text-amber-900 text-center flex items-center">
        <div className="p-6">
          <img
            className="w-50 h-50 rounded-full mx-auto my-6"
            src={fly?.image}
            alt="Sunset in the mountains"
          />
        </div>
        <div className="text-left">
          <Title text="ficha tecnica" />
          <div>
            <p>
              <span className="underline font-bold">Nombre:</span>&nbsp;
              {fly?.name}
            </p>
          </div>
          <div>
            <p>
              <span className="underline font-bold">Familia:</span>&nbsp;
              {fly?.type}
            </p>
          </div>
          <div>
            <p>
              <span className="underline font-bold">Descripcion:</span>&nbsp;
              {fly?.description}
            </p>
          </div>
          <div>
            <span className="underline font-bold">Epocas del año:</span>&nbsp;
            <div className="flex">
              {fly?.months?.map((month, index) => {
                return (
                  <p
                    className="bg-lime-600 dark:bg-lime-900 rounded-full px-4 py-2 text-sm font-semibold text-white dark:text-amber-100 mr-2 mb-2"
                    key={index}
                  >
                    {month}
                  </p>
                );
              })}
            </div>
          </div>
          <div>
            <span className="underline font-bold">Tamaños:</span>&nbsp;
            <div className="flex">
              {fly?.size?.map((size, index) => {
                return (
                  <p
                    key={index}
                    className="bg-lime-600 dark:bg-lime-900 rounded-full px-4 py-2 text-sm font-semibold text-white dark:text-amber-100 mr-2 mb-2"
                  >
                    #{size}
                  </p>
                );
              })}
            </div>
          </div>
          <div> {fly?.location} </div>

          <div>
            {fly?.hashtag?.map((hashtag, index) => {
              return (
                <span
                  key={index}
                  className=" bg-lime-600 dark:bg-lime-900 rounded-full px-4 py-2 text-sm font-semibold text-white dark:text-amber-100 mr-2 mb-2"
                >
                  #{hashtag}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
