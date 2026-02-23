import Heading from "@/app/components/Heading";
import Slider from "@/app/components/Slider";

export default function Clients() {
  const data = [
    { img: "/images/clientsLogo.png" },
    { img: "/images/clientsLogo.png" },
    { img: "/images/clientsLogo.png" },
    { img: "/images/clientsLogo.png" },
    { img: "/images/clientsLogo.png" },
    { img: "/images/clientsLogo.png" },
    { img: "/images/clientsLogo.png" },
    { img: "/images/clientsLogo.png" },
  ];

  return (
    <div className="max-lg:px-3 px-12.5 pt-15 lg:pt-25 xl:pt-45">
      <Heading text={"Clients"} />

      <div className="pt-16 lg:pb-25 pb-15 xl:pb-45">
        <Slider data={data} />
      </div>
    </div>
  );
}
