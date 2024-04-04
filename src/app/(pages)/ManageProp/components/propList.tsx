"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Property, properties } from "./properties";

function PropList({ data, header }: { data: any[]; header: any[] }) {
  const [selectedProperty, setSelectedProperty] = useState<number | null>(null);

  const handleClick = (property: Property) => {
    setSelectedProperty(property.id_properti);
  };

  return (
    <div className="w-[290px] mt-[23.54px] lg:mt-[30px] lg:w-[70vw]">
      <table className="w-full">
        <thead className="border-b-[1px] border-black">
          <tr>
            {header.map((item, idx) => {
              return (
                <th
                  key={idx}
                  className="w-auto h-auto font-poppins text-black text-left pb-[8px] text-[10px] lg:text-[20px]"
                >
                  {item}
                </th>
              );
            })}
          </tr>
        </thead>

        <tbody>
          {data.map((item) => {
            return (
              <tr
                key={item.id_properti}
                className="border-b-[1px] border-black border-opacity-30"
              >
                <td className="overflow-hidden w-auto h-auto py-[18.5px] text-[10px] lg:text-[20px]">
                  <div>1</div>
                </td>
                <td className="overflow-hidden w-auto h-auto py-[18.5px] text-[10px] lg:text-[20px]">
                  <div>10000</div>
                </td>
                <td className="overflow-hidden w-auto h-auto py-[18.5px] text-[10px] lg:text-[20px]">
                  <div>1.2</div>
                </td>
                <td className="overflow-hidden w-auto h-auto py-[18.5px] text-[10px] lg:text-[20px]">
                  <div>10 KWH</div>
                </td>
                <td className="w-auto h-auto py-[18.5px]">
                  <Link
                    onClick={() => handleClick(item)}
                    href={`/ManageProp/${item.id_properti}`}
                    className="hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] flex rounded-[7.145px] w-[12.77vw] px-[14.29px] py-[4.76px] lg:w-[04.94vw] lg:px-[1px] lg:py-[5px] lg:rounded-[15px] justify-center border-[#6C88CD] border-[3px]"
                  >
                    <h6 className="text-[#6C88CD] text-poppins text-[8.574px] lg:text-[18px]">
                      Edit
                    </h6>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default PropList;
