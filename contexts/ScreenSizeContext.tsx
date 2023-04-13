import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
interface sizeState {
  width: number
  height: number
}

export const ScreenSizeContext = createContext<sizeState>({
  width: 0,
  height: 0,
})

export const useScreenSize = () => useContext(ScreenSizeContext)

interface Props {
  children?: Array<ReactNode> | ReactNode
}

export const ScreenSizeProvider = ({ children }: Props) => {
  const [size, setSize] = useState<sizeState>({
    width: 0,
    height: 0,
  })

  useEffect(() => {
    window.addEventListener('resize', () => {
      setSize({ width: window.innerWidth, height: window.innerHeight })
    })
  }, [])

  return (
    <ScreenSizeContext.Provider value={size}>
      {children}
    </ScreenSizeContext.Provider>
  )
}
