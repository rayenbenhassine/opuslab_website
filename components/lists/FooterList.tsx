import { ReactNode } from 'react'

type Props = {
  title: string
  items: Array<ReactNode>
  style: string
  titleStyle: string
}

export default function FooterList({ title, items, style, titleStyle }: Props) {
  return (
    <div className={style}>
      <h1 className={titleStyle}>{title}</h1>
      <ul>
        {items.map((item: ReactNode, key: number) => {
          return <li key={key}>{item}</li>
        })}
      </ul>
    </div>
  )
}
