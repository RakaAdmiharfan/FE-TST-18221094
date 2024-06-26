"use client";

import { Formik, Field, Form, FormikHelpers } from "formik";

import PasswordInput from "./passwordinput";
import { useRouter } from "next/navigation";

interface Values {
  email: string;
  password: string;
  confirmPassword: string;
}

export default function RegisterForm() {
  const router = useRouter();

  const handleSubmit = async (val: Values) => {
    if (!localStorage) {
      return;
    }

    if (val.password !== val.confirmPassword) {
      // handle password mismatch disini
      return;
    }

    const token = localStorage?.getItem("token");

    try {
      const res = await fetch("http://localhost:8080/api/v1/signup", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ email: val.email, password: val.password }),
      });
      const resJson = await res.json();

      if (resJson.message === "already signed in") {
        router.replace("/");
      } else if (resJson.token) {
        localStorage.setItem("token", resJson.token);

        router.replace("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "", confirmPassword: "" }}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          setTimeout(() => {
            handleSubmit(values);
            setSubmitting(false);
          });
        }}
      >
        <Form>
          <div className="mb-[10px] sm:mb-[15px] md:mb-[20px] xl:mb-[20px] lg:mb-[15px] text-poppins flex flex-col">
            <text className="font-medium text-[11px] sm:text-[15px] md:text-[18px] xl:text-[14px] lg:text-[12px] mb-[10px] sm:mb-[13px] md:mb-[15px] xl:mb-[20px] lg:mb-[15px] text-poppins">
              Username
            </text>
            <Field
              className="form-control w-[82.2vw] lg:w-[39.6vw] h-auto aspect-[296/28] lg:aspect-[760/48] rounded-[5px] lg:rounded-[15px] bg-[#E6EAF4] pl-[2.7vw] lg:pl-[1.25vw] text-[11px] sm:text-[15px] md:text-[18px] xl:text-[13px] lg:text-[11px]"
              id="Username"
              name="Username"
              placeholder="Username"
              aria-describedby="UsernameHelp"
            />
          </div>

          <div className="mb-[10px] sm:mb-[15px] md:mb-[20px] xl:mb-[20px] lg:mb-[15px] text-poppins flex flex-col">
            <text className="font-medium text-[11px] sm:text-[15px] md:text-[18px] xl:text-[14px] lg:text-[12px] mb-[10px] sm:mb-[13px] md:mb-[15px] xl:mb-[20px] lg:mb-[15px] text-poppins">
              Password
            </text>
            <Field
              className="form-control w-[82.2vw] lg:w-[39.6vw] h-auto aspect-[296/28] lg:aspect-[760/48] rounded-[5px] lg:rounded-[15px] bg-[#E6EAF4] pl-[2.7vw] lg:pl-[1.25vw] text-[11px] sm:text-[15px] md:text-[18px] xl:text-[13px] lg:text-[11px]"
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              component={PasswordInput}
            />
          </div>

          <div className="w-[82.2vw] lg:w-[39.4vw] flex justify-center">
            <button
              type="submit"
              className="btn btn-primary hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] w-[17.5vw] lg:w-[5.93vw] h-auto aspect-[63/26] lg:aspect-[114/47] text-[#2E3362] border-[#2E3362] border-[3px] rounded-[8px] lg:rounded-[15px] flex items-center justify-center"
            >
              <text className="text-[#2E3362] font-bold text-[12px] sm:text-[15px] md:text-[18px] xl:text-[12px] lg:text-[10px] text-poppins">
                Sign Up
              </text>
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
