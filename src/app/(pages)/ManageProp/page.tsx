"use client";
import Link from "next/link";
// Your client-side code here
import React, { useState, useEffect } from "react";
import Search from "./components/search";
import PropList from "./components/propList";
import axios from "axios";
import Navbar from "@/components/Navbar";

export default function PropertyPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [dataProperties, setDataProperties] = useState<any>([]);

  const filteredProperties = dataProperties.filter((property: any) =>
    property.nama_properti.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://159.223.92.164:8080/api/v1/properti"
      );
      setDataProperties(response.data.propertiGetAllProperti);
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
    }
  };

  return (
    <div className="bg-[#EFF2FA] relative overflow-hidden w-full h-full min-h-[100vh]">
      <div>
        <Navbar />
      </div>
      <div className="Search">
        <h2 className="text-[#000] text-center text-poppins font-semibold text-[28px] mt-[70px] lg:text-[60px] lg:mt-[140px] lg:mb-4">
          Properties List
        </h2>
      </div>

      <div className="ml-[5vw] lg:ml-[15.46vw] mt-[20px]">
        <div className="flex rounded-[9.046px] lg:rounded-[15px] hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] bg-[#2E3362] justify-center w-[119px] mb-[11px] px-[18px] py-[6px] lg:mb-[16px] lg:w-[10.26vw] lg:p-[10px]">
          <Link href={`/ManageProp/addProp`} className="">
            <h6 className="text-poppins font-semibold text-[10.856px] lg:text-[14px] text-white">
              Add Properties
            </h6>
          </Link>
        </div>

        <Search onSearch={setSearchTerm} />

        <div className="max-h-[600px] overflow-y-auto no-scrollbar">
          <PropList
            data={filteredProperties}
            header={[
              "Property ID",
              "Price",
              "Multiplier",
              "Listrik (KWH)",
              "Edit",
            ]}
          />
          {/* <Pagination current={handlePageChange} totalPages={totalPages} /> */}
        </div>
      </div>
    </div>
  );
}
