import { ReactNode } from "react"
import Header from "../Header"
import Footer from "../Footer"

interface BaseLayoutProps {
    children: ReactNode
}

const BaseLayout = (props: BaseLayoutProps) => {
  return (
    <div>
        <Header />
        {props.children}
        <Footer />
    </div>
  )
}

export default BaseLayout