import S from "./styles.module.scss"

export default function Social(){
    return (
      <section className={S.social}>
        <ul>
            <li>github</li>
            <span>/</span>
            <li>twitter</li>
            <span>/</span>
            <li>instagram</li>
            <span>/</span>
            <li>behance</li>
            <span>/</span>
            <li>linkedin</li>
        </ul>
      </section>
    )
  }
  