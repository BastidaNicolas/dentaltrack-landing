"use client";
import { useMutation } from "@tanstack/react-query";
import OnViewPopIn from "./animation/onViewPopIn";
import { useState } from "react";

export default function Form() {

  const [email, setEmail] = useState<string>('')
  const [formError, setFormError] = useState<string>('')

  const postEmail = useMutation({
    mutationFn: (data: any) => {
      return fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (!response.ok) {
            return response.json().then((data) => {
              throw new Error(data.message);
            });
          }
          return response.json();
        })
        .then((data) => {
          return data;
        });
    },
  });

  const handleSubmit = (e:any) => {
    e.preventDefault()
    handleClientValidation();
  };

  const handleClientValidation = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!email){
      setFormError('Please enter your email.');
      return;
    }
    if (!emailRegex.test(email)) {
      setFormError('Email has incorrect formating.');
      return;
    }
    postEmail.mutate({ email: email });
    setFormError('');
    return;
  }

  const handleMessageReset = () => {
    postEmail.reset();
    setFormError('');
    return;
  }

  return (
    <div
      id="form"
      className="px-3 lg:px-0 mb-24 pt-24 md:pt-48"
      onClick={handleMessageReset}
    >
      <OnViewPopIn>
        <div className=" max-w-5xl m-auto bg-blue-500 border-black border-2 rounded-2xl text-white p-5 sm:py-8">
          <div className="font-bold text-3xl mb-4 sm:mb-8 sm:text-center">
            Stay up-to-date on DenalTrack’s launch!
          </div>
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="relative flex flex-col sm:flex-row md:justify-center mb-14 md:mb-11"
          >
            <label
              htmlFor="emailInput"
              className="absolute -left-full w-1 h-1 overflow-hidden top-auto"
            >
              email
            </label>
            <input
              type="text"
              name="emailInput"
              id="emailInput"
              placeholder="thisismyemail@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-3 py-2 sm:py-3 border-black border-2 rounded-lg text-black mb-3 sm:mb-0 w-full max-w-xl mr-4"
              // required
            />
            <div className="relative group w-fit">
              <button
                type="submit"
                className="z-10 min-w-[130.33px] absolute top-0 left-0 group-active:translate-x-0 group-active:translate-y-0 -translate-x-1 -translate-y-1 duration-75 bg-white font-bold text-base capitalize border-2 border-black rounded-lg py-2 px-5 text-black w-fit h-full truncate"
              >
                {postEmail.isLoading ? "Loading..." : "Get Notified"}
              </button>
              <div className="z-0 bg-black min-w-[130.33px] font-bold text-base capitalize border-2 border-black rounded-lg py-2 px-5 text-black w-fit h-full truncate">
                {postEmail.isLoading ? "Loading..." : "Get Notified"}
              </div>
            </div>
            {postEmail.isSuccess ? (
              <div
                className={`absolute md:left-[13%] lg:left-[13%] -bottom-[50%] sm:-bottom-[100%] text-base font-bold border-2 border-black rounded-lg px-2 py-1 m-auto mb-3 ${
                  postEmail.isSuccess
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-10 opacity-0"
                } duration-200 bg-green-600 w-fit`}
              >
                {postEmail.data.message}
              </div>
            ) : (
              <div
                className={`absolute md:left-[13%] lg:left-[13%] -bottom-[50%] sm:-bottom-[100%] text-base font-bold border-2 border-black rounded-lg px-2 py-1 m-auto mb-3 ${
                  postEmail.error
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-10 opacity-0"
                } duration-200 bg-red-600 w-fit`}
              >
                {(postEmail.error as any)?.message}
              </div>
            )}
            {/* {formError && ( */}
              <div
                className={`absolute md:left-[13%] lg:left-[13%] -bottom-[50%] sm:-bottom-[100%] text-base font-bold border-2 border-black rounded-lg px-2 py-1 m-auto mb-3 ${
                  formError
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-10 opacity-0"
                } duration-200 bg-red-600 w-fit`}
              >
                {formError}
              </div>
            {/* )} */}
          </form>

          <div className="text-xs text-center capitalize">
            E-mail Will Only Be used to notify updates & launch date
          </div>
        </div>
      </OnViewPopIn>
    </div>
  );
}
