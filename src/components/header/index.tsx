import Image from 'next/image'

export default function Header() {
    return (
      <section className="header">
        <div className="lights"></div>
        <div className="logo">
            <Image src="/logo-nanda-dias.svg" alt="Nanda Dias" width="98" height="42" />
        </div>
        <div className="olar"><a href="#">Olar</a></div>
      </section>
    )
  }
  