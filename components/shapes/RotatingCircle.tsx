import { useScreenSize } from 'contexts/ScreenSizeContext'
import {
  Image,
  circleIcon1,
  circleIcon2,
  circleIcon3,
  circleIcon4,
  useState,
  SetStateAction,
  Dispatch,
  lg,
} from '..'

interface Props {
  positions: Array<string>
  setPositions: Dispatch<SetStateAction<string[]>>
}

export default function RotatingCircle({ positions, setPositions }: Props) {
  const [rotate, setRotate] = useState(45)
  const size = useScreenSize()

  const updatePositions = (id: string) => {
    let index = positions.findIndex((position) => position == id)
    const tab = []
    do {
      tab.push(positions[index])
      index++
      if (index > positions.length - 1) {
        index = 0
      }
    } while (tab.length !== positions.length)
    setPositions(tab)
  }

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e.currentTarget.id)
    if (positions[1] === e.currentTarget.id) {
      setRotate((rotate) => rotate - 90 * 3)
    } else if (positions[2] === e.currentTarget.id) {
      setRotate((rotate) => rotate - 90 * 2)
    } else if (positions[3] === e.currentTarget.id) {
      setRotate((rotate) => rotate - 90)
    }

    updatePositions(e.currentTarget.id)
  }

  return (
    <div
      className={'relative  my-[8vw] w-max lg:m-0'}
      style={{
        transform: `rotate(${rotate}deg)`,
        transitionDuration: '2s',
      }}
    >
      <div
        className="absolute top-[0.6vw] left-[0.6vw] h-[4vw] w-[5vw] -rotate-[44deg] bg-lightBlue"
        style={{
          clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)',
        }}
      ></div>
      <div
        className="absolute right-[0.6vw] top-[0.6vw] h-[4vw] w-[5vw] rotate-45 bg-pink"
        style={{
          clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)',
        }}
      ></div>
      <div className="relative grid h-[32vw] w-[32vw]  grid-cols-2 overflow-hidden rounded-full">
        <button
          className="relative z-0 flex  flex-col-reverse bg-lightBlue"
          onClick={handleClick}
          id="lightBlue"
        >
          <div
            className="relative ml-[-5%] box-border h-[22%] w-[105%] bg-darkBlue"
            style={{
              clipPath: 'polygon(100% 100%, 30% 0, 0 100%)',
            }}
          >
            <div
              className="  absolute top-[0.8vw] right-[2.1vw] left-[1.1vw] bottom-0 z-10 gap-0 bg-purple"
              style={{
                clipPath: 'polygon(100% 100%, 30% 0, 0 100%)',
              }}
            ></div>
          </div>
          <div className="absolute  top-[5.5vw] left-[5.5vw] w-[5vw]">
            <Image src={circleIcon2} />
          </div>
        </button>
        <button
          className="relative z-0 bg-pink"
          id="pink"
          onClick={handleClick}
        >
          <div
            className="relative -z-0 mt-[-5%] box-border h-[105%] w-[22%] bg-darkBlue"
            style={{
              clipPath: 'polygon(0 100%, 100% 30%, 0 0)',
            }}
          >
            {' '}
            <div
              className="absolute top-[1.1vw] right-[0.8vw] left-[0vw] bottom-[2vw]  z-10 bg-lightBlue "
              style={{
                clipPath: 'polygon(0 100%, 100% 30%, 0 0)',
              }}
            ></div>
          </div>
          <div className="absolute  top-[5.8vw] left-[5vw] w-[5vw] ">
            <Image src={circleIcon4} alt="circleIcon4" />
          </div>
        </button>

        <button
          className="relative  flex flex-row-reverse border-darkBlue bg-purple"
          id="purple"
          onClick={handleClick}
        >
          <div
            className="relative mb-[-5%] box-border h-[105%] w-[22%] bg-darkBlue"
            style={{
              clipPath: 'polygon(100% 0, 0 70%, 100% 100%)',
            }}
          >
            <div
              className="absolute top-[2.1vw] right-0 left-[0.8vw] bottom-[1.1vw] bg-turquoise"
              style={{
                clipPath: 'polygon(100% 0, 0 70%, 100% 100%)',
              }}
            ></div>
          </div>
          <div className="absolute  top-[5.5vw] left-[5vw] w-[5vw]">
            <Image src={circleIcon1} />
          </div>
        </button>
        <button
          className="relative flex border-darkBlue bg-turquoise"
          id="turquoise"
          onClick={handleClick}
        >
          <div
            className="relative mr-[-5%] box-border h-[22%] w-[105%] bg-darkBlue"
            style={{
              clipPath: 'polygon(0 0, 70% 100%, 100% 0)',
            }}
          >
            <div
              className="absolute top-0 right-[1.1vw] left-[2.1vw] bottom-[0.8vw] bg-pink"
              style={{
                clipPath: 'polygon(0 0, 70% 100%, 100% 0)',
              }}
            ></div>
          </div>
          <div className="absolute  top-[6.8vw] left-[5vw] w-[5vw] ">
            <Image src={circleIcon3} alt="circleIcon3" />
          </div>
        </button>

        <div className="absolute top-[30%] bottom-[30%] right-[30%] left-[30%] z-10 rounded-full  border-darkBlue bg-darkBlue"></div>
        <div className="absolute top-[25%] bottom-[25%] right-[25%] left-[25%] z-10 rounded-full  border-[0.7vw] border-darkBlue bg-transparent"></div>
      </div>

      <div
        className="absolute bottom-[0.7vw] left-[0.7vw] h-[4vw] w-[5vw] rotate-[44deg] bg-purple"
        style={{
          clipPath: 'polygon(50% 100%, 100% 0%, 0% 0%)',
        }}
      ></div>
      <div
        className="absolute bottom-[0.7vw] right-[0.7vw] h-[4vw] w-[5vw] -rotate-45 bg-turquoise"
        style={{
          clipPath: 'polygon(50% 100%, 100% 0%, 0% 0%)',
        }}
      ></div>
    </div>
  )
}
