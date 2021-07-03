import Header from "../components/header"
import Main from "../components/main"
import PostFeed from "../components/post-feed"

export default function Home() {

  let aux = 0;

  return (
    <>
      <Header />
      <Main>
        <PostFeed/>
        <PostFeed/>
        <PostFeed/>
        <PostFeed/>
      </Main>
    </>
  )
}
