import classNames from "classnames";
import { useState } from "react";
import down from "../assets/down.svg";
import up from "../assets/up.svg";

const SimpleAccordion = (props) => {
  const [open, setOpen] = useState(false);


  return (
    <div className="w-[288px]  border-b-2">
      <input
        id="expandCollapse"
        type="checkbox"
        checked={open}
        className="peer sr-only"
      />
      <label
        htmlFor="expandCollapse"
        className={classNames(
          "w-full flex justify-between font-medium text-4 leading-6 text-[#161C24] py-4 items-center "
        )}
        onClick={() => setOpen(!open)}
      >
        {props.name}
        <img src={open ? up : down} alt="" />
      </label>
      <div
        className={classNames(
          "overflow-hidden h-0 bg-white",
          "peer-checked:h-[76px]  ",
        )}
      >
        <div>
          <div className={`${props.price == true ? "flex": "hidden"} items-center gap-2`}>
            <input className="w-[116px] pl-[26px] pr-[35px] py-[10px] border border-[#EAEAEA] focus:outline-[#4295E4]" placeholder="Исходный" type="number" />
            <input className="w-[116px] pl-[26px] pr-[35px] py-[10px] border border-[#EAEAEA] focus:outline-[#4295E4]" placeholder="Последний" type="number" />
          </div> 
           <div className={`${props.material == true ? "flex items-center justify-between" : "hidden"}`}>
            <button className="px-6 py-2 border rounded-lg transition duration-300 text-[#161C24] hover:bg-black hover:text-white">Железо</button>
            <button className="px-6 py-2 border rounded-lg transition duration-300 text-[#161C24] hover:bg-black hover:text-white">Алюминий</button>
          </div> 
           <div className={`${props.color == true ? "flex flex-wrap justify-center  gap-5" : "hidden"}`}>
            <span className="w-6 h-6 block rounded-full bg-white border"></span>
            <span className="w-6 h-6 block rounded-full bg-red-600"></span>
            <span className="w-6 h-6 block rounded-full bg-blue-600"></span>
            <span className="w-6 h-6 block rounded-full bg-yellow-400"></span>
            <span className="w-6 h-6 block rounded-full bg-black"></span>
          </div> 
           <div className={`w-full h-[70px] ${props.size == true ? "flex" : "hidden"} flex-col gap-2 overflow-y-scroll border rounded-lg`}>
            <h3 className="rounded-lg pl-4 py-1 text-[#161C24] hover:bg-zinc-300">50 x 80 x 210 мм</h3>
            <h3 className="rounded-lg pl-4 py-1 text-[#161C24] hover:bg-zinc-300">50 x 80 x 210 мм</h3>
            <h3 className="rounded-lg pl-4 py-1 text-[#161C24] hover:bg-zinc-300">50 x 80 x 210 мм</h3>
            <h3 className="rounded-lg pl-4 py-1 text-[#161C24] hover:bg-zinc-300">50 x 80 x 210 мм</h3>
          </div> 
        </div>
      </div>
    </div>
  );
};


export { SimpleAccordion };

