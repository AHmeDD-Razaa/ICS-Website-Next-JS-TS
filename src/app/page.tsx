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



export default function Home() {
  return (
    <div className="bg-[#111928]">
     <Header />
     <VideoSec />
     <Services />
     <Clients />
     <Excellence />
     <Portfolio />
     <Partners />
     <Minds />
     <Contact />
     <Footer />
    </div>
  );
}
