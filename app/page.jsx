import Banner from './components/Banner/Banner'
import Trending from './components/Trending/Trending'
import EditorChoice from './components/EditorChoice/EditorChoice'
import Advertisement from './components/Advertisement/Advertisement'
import VideoPost from './components/VideoPost/VideoPost'
import HandPicked from './components/HandPicked/HandPicked'
import StoriesPost from './components/StoriesPost/StoriesPost'
import Newsletter from './components/Newsletter/Newsletter'

export default function Home() {
  return (
    <main>
      <Banner></Banner>
      <Trending></Trending>
      <EditorChoice></EditorChoice>
      <Advertisement></Advertisement>
      <VideoPost></VideoPost>
      <HandPicked></HandPicked>
      <StoriesPost></StoriesPost>
      <Newsletter></Newsletter>
    </main>
  )
}
