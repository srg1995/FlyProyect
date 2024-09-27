import { useContext, useRef } from "react";

import FliesContext from "../../context/FliesContext";
import { MdOutlineCleaningServices } from "react-icons/md";
import { getFlies } from "../../services/getFlies";
export default function Filter() {
  const { flies, setFlies } = useContext(FliesContext);

  const formFilters = useRef();

  const handleFilterType = (e) => {
    let type = flies?.filter((element) => element.type === e.target.value);
    e.target.disabled = true;
    setFlies(type);
  };
  const handleFilterMonth = (e) => {
    let month = flies?.filter((element) =>
      element.months.some((month) => month === e.target.value)
    );
    e.target.disabled = true;
    setFlies(month);
  };
  const handleFilterSize = (e) => {
    let size = flies?.filter((element) =>
      element.size.some((size) => size === e.target.value)
    );
    setFlies(size);
    e.target.disabled = true;
  };

  const handlerClean = (e) => {
    e.preventDefault();

    formFilters.current.reset();
    formFilters.current.disabled = false;
    formFilters.current.elements[0].disabled = false;

    for (let index = 0; index < formFilters.current.elements.length; index++) {
      formFilters.current.elements[index].disabled = false;
    }
    setFlies(getFlies());
  };

  return (
    <>
      <form
        ref={formFilters}
        className="flex justify-center items-center flex-wrap gap-4"
      >
        <div className="flex flex-col w-32 mb-6">
          <label className="block mb-2 text-sm font-medium text-lime-700 dark:text-amber-200">
            Tipo
          </label>
          <select
            className="text-sm rounded-lg block w-full p-2.5 bg-transparent border-lime-700 border-2 dark:hover:border-lime-200 dark:bg-lime-900 dark:border-lime-400 placeholder-gray-400 text-slate-800 dark:text-amber-200 focus:border-lime-500 hover:border-lime-500"
            onChange={handleFilterType}
          >
            <option value="Selecciona">Selecciona</option>
            <option value="Efemera">Efemera</option>
            <option value="Tricoptero">Tricoptero</option>
            <option value="Atractora">Atractora</option>
          </select>
        </div>
        <div className="flex flex-col w-32 mb-6">
          <label className="block mb-2 text-sm font-medium text-lime-700 dark:text-amber-200">
            Mes
          </label>
          <select
            className="text-sm rounded-lg block w-full p-2.5 bg-transparent border-lime-700 border-2 dark:hover:border-lime-200 dark:bg-lime-900 dark:border-lime-400 placeholder-gray-400 text-slate-800 dark:text-amber-200 focus:border-lime-500 hover:border-lime-500"
            onChange={handleFilterMonth}
          >
            <option value="Selecciona">Selecciona</option>
            <option value="Enero">Enero</option>
            <option value="Febrero">Febrero</option>
            <option value="Marzo">Marzo</option>
            <option value="Abril">Abril</option>
            <option value="Mayo">Mayo</option>
            <option value="Junio">Junio</option>
            <option value="Julio">Julio</option>
            <option value="Agosto">Agosto</option>
            <option value="Septiembre">Septiembre</option>
            <option value="Octubre">Octubre</option>
            <option value="Noviembre">Noviembre</option>
            <option value="Diciembre">Diciembre</option>
          </select>
        </div>
        <div className="flex flex-col w-32 mb-6">
          <label className="block mb-2 text-sm font-medium text-lime-700 dark:text-amber-200">
            Tamaño
          </label>
          <select
            className=" text-sm rounded-lg block w-full p-2.5 border-lime-700 border-2 dark:hover:border-lime-200 dark:bg-lime-900 dark:border-lime-400 placeholder-lime-400 text-slate-800 dark:text-amber-200 bg-dark focus:border-lime-500 hover:border-lime-500"
            onChange={handleFilterSize}
          >
            <option value="Selecciona">Selecciona</option>
            <option value="12">12</option>
            <option value="14">14</option>
            <option value="16">16</option>
            <option value="18">18</option>
            <option value="20">20</option>
            <option value="22">22</option>
          </select>
        </div>
        <button
          className="text-sm flex gap-2 items-center p-3 rounded-xl text-lime-900 border-lime-700 dark:border-lime-400 border-2 bg-transparent placeholder-gray-400   dark:text-amber-200 dark:hover:text-lime-900  dark:hover:bg-lime-400  hover:bg-lime-100 "
          onClick={handlerClean}
        >
          limpiar filtro
          <MdOutlineCleaningServices />
        </button>
      </form>
    </>
  );
}
