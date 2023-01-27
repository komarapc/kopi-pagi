"use client";

import {
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

import { APP_NAME } from "config/app";
import Footer from "components/layouts/footer";
import { Fragment } from "react";
import Head from "next/head";
import { HiOutlineMail } from "react-icons/hi";
import Image from "next/image";
import { KOPI } from "mock/kopi";
import Navbar from "components/layouts/navbar";
import { NextPage } from "next";

function Landing() {
  return (
    <Fragment>
      <Head>
        <title>Landing Page</title>
      </Head>
      {/* navbar */}
      <main className="h-screen relative bg-light">
        <Navbar></Navbar>
        {/* content */}
        {/* create fluid jumbotron */}
        <div
          className="container mx-auto h-full flex items-center justify-center"
          id="section-home"
        >
          <div className="flex flex-col gap-4">
            <h1 className="text-5xl lg:text-8xl font-bold text-center">
              <span className="text-orange-500 underline">KOPI</span>
              <span>&nbsp;PAGI</span>
            </h1>
            <p className="text-center text-slate-700 lg:text-2xl font-normal my-5">
              {APP_NAME} adalah sebuah website yang menyediakan berbagai macam
              kopi yang dapat anda pesan secara online. <br />
              Awali hari anda dengan kopi yang enak dan nikmat. <br />
              Buat pagi anda lebih bersemangat.
            </p>
            <div className="flex justify-center gap-2">
              <button className="px-6 py-3 bg-orange-500 text-white hover:bg-white hover:text-orange-700 rounded-md transition-all duration-300 ease-in-out shadow-xl">
                Pesan Sekarang
              </button>
            </div>
          </div>
        </div>
        <div
          className=" bg-slate-900  mx-auto py-20 flex items-center justify-center text-gray-50"
          id="section-product"
        >
          <div className="flex flex-col gap-4 container h-auto">
            <h1 className="text-5xl font-bold text-center">Menu</h1>
            {/* divider */}
            <div className="w-20 h-1 bg-orange-500 mx-auto my-10"></div>
            <div className="flex flex-wrap flex-col md:flex-row gap-10 px-5 mx-auto md:px-0 justify-center">
              {KOPI.map((kopi) => {
                return (
                  <div
                    className="flex flex-col gap-4 md:w-1/5 lg:w-1/4"
                    key={kopi.id}
                  >
                    <Image
                      src={kopi.img}
                      alt="Robusta"
                      height={500}
                      width={500}
                      className="rounded-lg hover:scale-110 transition-all duration-300 ease-in-out lg:w-full"
                    />
                    <h1 className="text-center text-2xl text-orange-500">
                      {kopi.name}
                    </h1>
                    <p className="text-center text-3xl">
                      Rp.{kopi.price.toLocaleString()}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* about us segment */}
        <div
          className="mx-auto h-auto py-20 flex justify-center"
          id="section-about"
        >
          <div className="flex flex-col gap-4 container ">
            <h1 className="text-5xl text-orange-500 font-bold text-center">
              About
            </h1>
            {/* divider */}
            <div className="w-20 h-1 bg-orange-500 mx-auto my-10"></div>
            <div className="flex gap-20">
              <div className="flex flex-col w-full md:w-full lg:md-1/2 text-justify lg:text-lg items-center justify-center">
                <p className="mb-5 px-10">
                  Ad laborum qui quis esse aliquip quis do Lorem deserunt
                  aliquip sunt. Adipisicing pariatur veniam ut minim dolore
                  excepteur laboris aliqua pariatur adipisicing commodo. Qui
                  labore dolor duis enim deserunt aute duis enim ex dolore
                  deserunt ea enim. Laborum est proident pariatur veniam qui.
                  Deserunt mollit sint laborum minim veniam reprehenderit
                  laborum id laboris reprehenderit. In sint excepteur eiusmod
                  nostrud cillum ipsum qui consequat nostrud deserunt est
                  nostrud mollit nisi. Aliquip mollit Lorem quis aliquip
                  deserunt commodo eu anim sit non labore consectetur quis.
                  Dolor ut ad incididunt culpa consequat. Culpa veniam nulla
                  aliquip exercitation minim. Mollit excepteur duis consectetur
                  quis est amet proident exercitation velit elit cupidatat
                  reprehenderit. Fugiat culpa magna cupidatat labore esse sit
                  quis commodo aliqua irure esse anim labore.
                </p>
              </div>
              <div className="w-1/ h-auto hidden lg:block">
                <Image
                  src="/img/kopi/4.webp"
                  alt="Robusta"
                  height={1200}
                  width={1200}
                  className="rounded-lg hover:scale-110 transition-all duration-300 ease-in-out lg:w-full hover:shadow-xl w-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="bg-slate-900 mx-auto h-auto py-20 flex justify-center"
          id="section-contact"
        >
          <div className="flex flex-col gap-4 container ">
            <h1 className="text-5xl text-orange-500 font-bold text-center">
              Contact
            </h1>
            {/* divider */}
            <div className="w-20 h-1 bg-orange-500 mx-auto my-10"></div>
            <div className="flex flex-col md:flex-row flex-wrap items-center justify-evenly gap-20 px-10">
              <div className="flex flex-col items-center justify-center gap-4 md:w-1/4 lg:w-auto ">
                <FaFacebook className="text-6xl text-blue-600" />
                <span className="text-blue-600 text-2xl">Komar.izmi</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-4  md:w-1/4 lg:w-auto">
                <FaInstagram className="text-6xl text-pink-600" />
                <span className="text-pink-600 text-2xl">@Komar.izmi</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-4  md:w-1/4 lg:w-auto">
                <FaTwitter className="text-6xl text-blue-400" />
                <span className="text-blue-400 text-2xl">Komar.izmi</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-4 md:w-1/4 lg:w-auto">
                <FaWhatsapp className="text-6xl text-green-600" />
                <span className="text-green-600 text-2xl">+6282100110022</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-4 md:w-1/4 lg:w-auto">
                <FaTelegram className="text-6xl text-blue-400" />
                <span className="text-blue-400 text-2xl">@Komar.izmi</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-4 md:w-1/4 lg:w-auto">
                <HiOutlineMail className="text-6xl text-red-500" />
                <span className="text-red-500 text-2xl">
                  Komar.izmi@mail.com
                </span>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </main>
    </Fragment>
  );
}
export default Landing;
