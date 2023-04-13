import {
  useState,
  ReactNode,
  IoMdArrowDropleft,
  IoMdArrowDropright,
  Dispatch,
  SetStateAction,
} from '..'

interface Props {
  children: Array<ReactNode>
  setAnimation?: Dispatch<SetStateAction<string>>
  buttonLeftStyle: string
  buttonRightStyle: string
}

export default function Slider({
  children,
  setAnimation,
  buttonLeftStyle,
  buttonRightStyle,
}: Props) {
  const [index, setIndex] = useState(0)

  function decrement() {
    if (index > 0) {
      setIndex((oldIndex) => {
        return oldIndex - 1
      })
    }
  }

  function increment() {
    if (index < children.length - 1) {
      setIndex((oldIndex) => {
        return oldIndex + 1
      })
    }
  }

  return (
    <div className="flex justify-center lg:hidden">
      <button
        onClick={() => {
          //setAnimation('rightLeft')
          decrement()
        }}
        className={buttonLeftStyle}
      >
        <IoMdArrowDropleft />
      </button>
      {children[index]}
      <button
        onClick={() => {
          //setAnimation('leftRight')
          increment()
        }}
        className={buttonRightStyle}
      >
        <IoMdArrowDropright />
      </button>
    </div>
  )
}
