import Heading from '@/app/components/Heading'
import Slider from '@/app/components/Slider'

export default function Portfolio() {
  const data = [
    { img: "/images/Group 7.png" },
    { img: "/images/Group 7.png" },
    { img: "/images/Group 7.png" },
    { img: "/images/Group 7.png" },
    { img: "/images/Group 7.png" },
    { img: "/images/Group 7.png" },
    { img: "/images/Group 7.png" },
    { img: "/images/Group 7.png" },
    { img: "/images/Group 7.png" },
    { img: "/images/Group 7.png" },
    
  ]

  return (
    <div className="max-lg:px-3 px-12.5">
      <Heading text={"portfolio"} image={true} />

      <div className="pt-15">
        <Slider data={data} />
      </div>
    </div>
  )
}
