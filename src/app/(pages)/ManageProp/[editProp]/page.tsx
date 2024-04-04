"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import EditFormComponent from "./components/editForm";
import { usePathname, useSearchParams } from "next/navigation";

export default function PropertyPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const pathname = usePathname();
  const searchParams = useSearchParams;

  useEffect(() => {
    const url = `${pathname}?${searchParams}`;
    console.log(url);
  }, [pathname, searchParams]);

  return (
    <div className="bg-[#EFF2FA] relative overflow-hidden w-full h-content flex-col flex items-center justify-center">
      <div className="title">
        <h2 className="text-poppins mb-[24px] lg:mb-[32px] mt-[70px] text-[28px] lg:text-[60px] text-[#000] text-center font-bold">
          CRUD
        </h2>
      </div>
      <div className="Box">
        <EditFormComponent />
      </div>
    </div>
  );
}
