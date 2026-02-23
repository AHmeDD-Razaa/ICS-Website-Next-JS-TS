import Heading from '@/app/components/Heading'
import Slider from '@/app/components/Slider'

export default function Partners() {
  const data = [
    { img: "/images/clientsLogo.png" },
    { img: "/images/clientsLogo.png" },
    { img: "/images/clientsLogo.png" },
    { img: "/images/clientsLogo.png" },
    { img: "/images/clientsLogo.png" },
    { img: "/images/clientsLogo.png" },
    { img: "/images/clientsLogo.png" },
    { img: "/images/clientsLogo.png" },
  ]

  return (
    <div className="max-lg:px-3 px-12.5 pt-15 lg:pt-25 xl:pt-45 pb-15 lg:pb-25 xl:pb-45">
      <Heading text={"Our Partners"} />

      <div className="pt-15">
        <Slider data={data} />
      </div>
    </div>
  )
}
