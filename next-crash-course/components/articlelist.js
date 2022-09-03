import Link from 'next/link'
import ArticleItem from './articleitem'
import styles from "../styles/Home.module.css"
import React from 'react'
const ArticleList = ({articles}) => {
    return (
        <div className = {styles.grid}>
             {articles.map((article)=> (
             <ArticleItem article={article} />
             ))}         
        </div>
        
    )   
} 
export default ArticleList