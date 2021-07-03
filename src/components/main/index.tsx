import Social from "../social/"
import Categories from "../categories/"

interface ChildrenProps {
    children: React.ReactNode
}

export default function Main({children}:ChildrenProps) {
    return (
      <section className="main">
        <Social/>
        <div className="content">{children}</div>
        <Categories/>
      </section>
    )
  }
  