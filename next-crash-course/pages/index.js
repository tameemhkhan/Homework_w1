import {server} from '../config/index'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ArticleList from '../components/articlelist'

export default function Home({articles}) {
  return (
    <div>
    <Head>
      <title>Home Page</title>
    </Head>
    {articles.map((article)=> (<h3></h3>))}
    <ArticleList articles = {articles} />
    </div>
  )
}
export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`)
  const articles = await res.json()
  return{
    props:{
      articles
    }
  }
}
// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com?_limit=6`)
//   const articles = await res.json()
//   return{
//     props:{
//       articles
//     }
//   }
// }