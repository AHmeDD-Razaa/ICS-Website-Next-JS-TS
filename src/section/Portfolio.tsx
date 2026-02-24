import Box from '@/app/components/Box'
import Heading from '@/app/components/Heading'
import Slider from '@/app/components/Slider'

export default async function Portfolio() {
    const portfolio = await fetch("https://staging-api.icsglobal.ae/api/v1/users/portfolio/get-all",
        {cache: "no-store"}
    )
    const res = await portfolio.json()
    console.log("Portfolio Data:", res)

    const result = res?.data || []
    console.log("Data:", res?.data[0])

  return (
    <div className="max-lg:px-3 px-12.5">
      <Heading text={"portfolio"} image={true} />
{
<div className="pt-15">
        <Slider>
                              {result.map((item:any, index:number) => (
                                <Box
                                  key={index}
                                  image={
                                    <img
                                      src={item.images[0].image}
                                      className="object-cover transition"
                                    />
                                  }
                                />
                              ))}
                            </Slider>
      </div>
      }
    </div>
  )
}
