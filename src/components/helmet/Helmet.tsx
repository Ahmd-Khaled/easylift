import { ReactNode } from "react"

interface HelmetProps {
  title: string
  children: ReactNode
}

const Helmet = ({ title, children }: HelmetProps) => {
  document.title = "مؤسسه الأسهل للمصاعد" + title
  return <div className="w-100">{children}</div>
}

export default Helmet
