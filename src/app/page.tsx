"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Header from "./components/Header";
import VideoSec from "@/section/VideoSec";
import Services from "@/section/Services";
import Clients from "@/section/Clients";
import Excellence from "@/section/Excellence";
import Portfolio from "@/section/Portfolio";
import Partners from "@/section/Partners";
import Minds from "@/section/Minds";
import Contact from "@/section/Contact";
import Footer from "./components/Footer";
import StripeProvider from "./providers/StripeProvider";
import CheckoutPage from "./components/CheckoutPage";
import LoginSuccessful from "./components/LoginSuccessful";
import LogoutButton from "./components/LogoutButton";


export default function Home() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {

    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

  }, []);

  return (
    <div className="bg-[#111928]">

      <VideoSec />
      {/* <Services heading={true} button={true} /> */}
      <Clients />
      <Excellence />
      {/* <Portfolio /> */}
      <Partners />
      <Minds />
      <div className="mt-15 lg:mt-25 xl:mt-45">
        <Contact />
      </div>
      <StripeProvider>
        <CheckoutPage amount={4999} />
      </StripeProvider>
      {user && <>
      <LoginSuccessful />
      <LogoutButton />
      </>
      }
    </div>
  );
}
