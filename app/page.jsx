import Banner from '@/components/Banner/Banner'
import Trending from '@/components/Trending/Trending'
import EditorChoice from '@/components/EditorChoice/EditorChoice'
import Advertisement from '@/components/Advertisement/Advertisement'
import VideoPost from '@/components/VideoPost/VideoPost'
import HandPicked from '@/components/HandPicked/HandPicked'
import StoriesPost from '@/components/StoriesPost/StoriesPost'
import Newsletter from '@/components/Newsletter/Newsletter'
import { getCategories, getPostByCategory } from '@/utils/common'

export default async function Home() {
  let categories = await getCategories();
  const posts = [];
  const bannerPosts = [];
  for (const category of categories) {
    let categoryPosts    = await getPostByCategory(category.id);
    posts[category.name] = categoryPosts
    bannerPosts.push(...categoryPosts);
  }
  return (
    <main>
      <Banner posts={bannerPosts}></Banner>
      <Trending posts={posts['Sports']}></Trending>
      <EditorChoice categories={categories}></EditorChoice>
      <Advertisement></Advertisement>
      <VideoPost posts={posts['Games']}></VideoPost>
      <HandPicked posts={posts['Travel']}></HandPicked>
      <StoriesPost posts={posts['Entertainment']}></StoriesPost>
      <Newsletter></Newsletter>
    </main>
  )
}
