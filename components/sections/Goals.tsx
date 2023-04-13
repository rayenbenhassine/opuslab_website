import { Card, Slider, whyOpusIcon1, Image, goalsPoints, lines } from '..'

export default function Goals({ goals }: any) {
  return (
    <section className="bg-darkBlue p-[8vw] lg:relative">
      <div className="absolute left-[3vw] top-[0vw] hidden w-[22vw] lg:block">
        <Image src={goalsPoints} alt="goalsPoints" objectFit="contain" />
      </div>
      <div className="absolute bottom-[4vw] left-0  w-[3vw] ">
        <Image src={lines} alt="lines" objectFit="contain" />
      </div>
      <h1 className="mb-[7vw] text-center font-robotoBold text-[4vw] text-lightBlue lg:ml-[14vw] lg:text-left">
        OBJECTIFS
      </h1>
      <div className="hidden lg:flex lg:justify-center lg:gap-8">
        {goals.map((goal: any, key: number) => {
          return (
            <div data-aos="fade-up" key={key} data-aos-delay={key * 300}>
              <Card
                title={goal.title}
                description={goal.description}
                icon={whyOpusIcon1}
                iconBg={
                  (key == 0 && 'bg-lightBlue') ||
                  (key == 1 && 'bg-yellow') ||
                  'bg-darkPurple'
                }
              />
            </div>
          )
        })}
      </div>

      <Slider
        buttonLeftStyle="text-pink text-[6vw]"
        buttonRightStyle="text-pink text-[6vw]"
      >
        {goals.map((goal: any, key: number) => {
          return (
            <Card
              key={key}
              title={goal.title}
              description={goal.description}
              icon={whyOpusIcon1}
              iconBg={
                (key == 0 && 'bg-lightBlue') ||
                (key == 1 && 'bg-yellow') ||
                'bg-darkPurple'
              }
            />
          )
        })}
      </Slider>

      <div data-aos="fade-up" className="mt-[5vw] flex justify-center">
        <button className="bg-pink px-[5vw] py-[1.5vw] text-[2.2vw] font-semibold text-white hover:bg-lightBlue">
          COMMENCER
        </button>
      </div>
    </section>
  )
}
