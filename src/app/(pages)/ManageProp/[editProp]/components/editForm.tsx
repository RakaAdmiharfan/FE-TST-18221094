"use client";

import { Formik, Form, Field } from "formik";
import React, { useEffect, useState } from "react";
import InputField from "./inputBox";

const EditFormComponent = () => {
  const [PropertyData, setPropertyData] = useState<any>([]);

  // Function to fetch data from the database (you need to implement this)
  const fetchDataFromDatabase = async () => {
    try {
      // Replace with actual fetch logic to get data from your database
      const response = await fetch("your-database-api-endpoint");
      const data = await response.json();
      setPropertyData(data); // Update the state with the fetched data
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Use useEffect to fetch data from the database when the component mounts
  useEffect(() => {
    fetchDataFromDatabase();
  }, []);

  const handleSubmit = (values: typeof PropertyData) => {
    console.log("Form submitted with values:", values);
    // Here, you can send the updated values back to your database
    // using an API call or any other method.
  };

  return (
    <Formik initialValues={""} onSubmit={handleSubmit}>
      <Form>
        <div className="Nama Properti mb-[20px]">
          <h5 className="text-poppins text-[11px] lg:text-[24px] mb-[8px] lg:mb-[20px] font-extrabold">
            {"Nama Properti"}
          </h5>
          <div className="w-[82.22vw] lg:w-[68.75vw] h-[27px] lg:h-[50px]">
            <InputField
              name="namaProperti"
              label="Nama Properti"
              placeholder="Nama Properti"
            />
          </div>
        </div>

        <div className="Alamat mb-[20px]">
          <h5 className="text-poppins text-[11px] lg:text-[24px] font-extrabold  mb-[8px] lg:mb-[20px]">
            Alamat
          </h5>
          <div className="w-[82.22vw] lg:w-[68.75vw] h-[27px] lg:h-[50px]">
            <InputField name="Alamat" label="Alamat" placeholder="Alamat" />
          </div>
        </div>

        <div className="ltlo flex flex-row mb-[20px]">
          <div className="Latitude mr-[04.44vw] lg:mr-[02.29vw]">
            <h5 className="text-poppins text-[11px] lg:text-[24px] font-extrabold mb-[8px] lg:mb-[20px]">
              Latitude
            </h5>
            <div className="w-[38.88vw] lg:w-[33.23vw]">
              <InputField
                name="Latitude"
                label="Latitude"
                placeholder="Latitude"
              />
            </div>
          </div>

          <div className="Longitude">
            <h5 className="text-poppins text-[11px] lg:text-[24px] font-extrabold mb-[8px] lg:mb-[20px]">
              Longitude
            </h5>
            <div className="w-[38.88vw] lg:w-[33.23vw]">
              <InputField
                name="Longitude"
                label="Longitude"
                placeholder="Longitude"
              />
            </div>
          </div>
        </div>

        <div className="cp flex flex-row mb-[20px]">
          <div className="Agent Name mr-[04.44vw] lg:mr-[02.29vw]">
            <h5 className="text-poppins text-[11px] lg:text-[24px] font-extrabold mb-[8px] lg:mb-[20px]">
              Agent Name
            </h5>
            <div className="w-[38.88vw] lg:w-[33.23vw]">
              <InputField
                name="AgentName"
                label="Agent Name"
                placeholder="Agent Name"
              />
            </div>
          </div>

          <div className="No Agent">
            <h5 className="text-poppins text-[11px] lg:text-[24px] font-extrabold mb-[8px] lg:mb-[20px]">
              No Agent
            </h5>
            <div className="w-[38.88vw] lg:w-[33.23vw]">
              <InputField
                name="NoAgent"
                label="No Agent"
                placeholder="No Agent"
              />
            </div>
          </div>
        </div>

        <div className="BPMT flex flex-row mb-[20px]">
          <div className="Base Price mr-[04.44vw] lg:mr-[02.29vw]">
            <h5 className="text-poppins text-[11px] lg:text-[24px] font-extrabold mb-[8px] lg:mb-[20px]">
              Base Price
            </h5>
            <div className="w-[24vw] lg:w-[18.95vw]">
              <InputField
                name="BasePrice"
                label="Base Price"
                placeholder="Base Price"
              />
            </div>
          </div>

          <div className="Multiplier mr-[04.44vw] lg:mr-[02.29vw]">
            <h5 className="text-poppins text-[11px] lg:text-[24px] font-extrabold mb-[8px] lg:mb-[20px]">
              Multiplier
            </h5>
            <div className="w-[11.97vw]">
              <InputField
                name="Multiplier"
                label="Multiplier"
                placeholder="Multiplier"
              />
            </div>
          </div>

          <div className="Tipe">
            <h5 className="text-poppins text-[11px] lg:text-[24px] font-extrabold mb-[8px] lg:mb-[20px]">
              Tipe
            </h5>
            <div className="w-[33.22vw]">
              <InputField name="Tipe" label="Tipe" placeholder="Tipe" />
            </div>
          </div>
        </div>

        <div className="Deskripsi Bisnis mb-[20px]">
          <h5 className="text-poppins text-[11px] lg:text-[24px] font-extrabold  mb-[8px] lg:mb-[20px]">
            Deskripsi Bisnis
          </h5>
          <div className="w-[82.22vw] h-[80px] lg:w-[68.75vw] lg:h-[184px]">
            <InputField
              as="textarea"
              name="DeskripsiBisnis"
              label="Deskripsi Bisnis"
              placeholder="Deskripsi Bisnis"
            />
          </div>
        </div>

        <div className="Deskripsi Pribadi mb-[20px]">
          <h5 className="text-poppins text-[11px] lg:text-[24px] font-extrabold  mb-[8px] lg:mb-[20px]">
            Deskripsi Pribadi
          </h5>
          <div className="w-[82.22vw] h-[80px] lg:w-[68.75vw] lg:h-[184px]">
            <InputField
              as="textarea"
              name="DeskripsiPribadi"
              label="Deskripsi Pribadi"
              placeholder="Deskripsi Pribadi"
            />
          </div>
        </div>

        <div className="mx-[33.2vw] lg:mx-[29vw] lg:mt-[64px] lg:mb-[84px]">
          <button
            type="submit"
            className="bg-[#2E3362] hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] text-white text-[8.264px] lg:text-[18px] rounded-[6.887px] lg:rounded-[15px] items-center justify-center py-[4.591px] px-[13.773px] lg:px-[30px] lg:py-[10px]"
          >
            Save
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default EditFormComponent;
