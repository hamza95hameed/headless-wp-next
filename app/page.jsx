import Banner from './components/Banner/Banner'
import Trending from './components/Trending/Trending'
import EditorChoice from './components/EditorChoice/EditorChoice'
import Advertisement from './components/Advertisement/Advertisement'
import VideoPost from './components/VideoPost/VideoPost'
import HandPicked from './components/HandPicked/HandPicked'
import StoriesPost from './components/StoriesPost/StoriesPost'
import Newsletter from './components/Newsletter/Newsletter'

export default async function Home() {
  const res   = await fetch('http://localhost:3000/api/posts');
  const posts = await res.json();
  
  return (
    <main>
      <Banner></Banner>
      <Trending posts={posts}></Trending>
      <EditorChoice></EditorChoice>
      <Advertisement></Advertisement>
      <VideoPost></VideoPost>
      <HandPicked posts={posts}></HandPicked>
      <StoriesPost></StoriesPost>
      <Newsletter></Newsletter>
    </main>
  )
}
