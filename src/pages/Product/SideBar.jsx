import React from "react";
import { Link } from "react-router-dom";

const SideBar = ({ cat, setCat }) => {
  const categories = [
    {
      name: "Rocking chair",
      slug: "rocking-chair",
    },
    {
      name: "Side chair",
      slug: "side-chair",
    },
    {
      name: "Lounge chair",
      slug: "lounge-chair",
    },
  ];
  return (
    <div className="  lg:border-r">
      <div className="flex sticky top-24  md:pt-8 pr-10 gap-3 flex-row w-full  items-center lg:flex-col flex-wrap ">
        {categories.map((category, i) => (
          <>
            <button
              key={i}
              onClick={() => setCat(category?.slug)}
              className={`${
                category?.slug?.toLocaleLowerCase() === cat?.toLocaleLowerCase()
                  ? "bg-black !text-white !md:px-10 "
                  : null
              } hover:bg-black text-left duration-300  md:px-8 px-3 md:hover:px-10 text-[#717171]  font-medium hover:text-white rounded-md   w-full py-3 `}
            >
              {category?.name}
            </button>
          </>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
