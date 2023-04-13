interface Props {
  children: string
}

export default function CustomErrorMessage({ children }: any) {
  return <p className="text-left text-[red]">{children}</p>
}
