import Social from "../social/"
import Categories from "../categories/"

import S from './styles.module.scss'

interface ChildrenProps {
    children: React.ReactNode
}

export default function Main({children}:ChildrenProps) {
    return (
      <section className={S.main}>
        <Social/>
        <div className={S.content}>{children}</div>
        <Categories/>
      </section>
    )
  }
  