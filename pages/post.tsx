import fs from 'fs'
import path  from 'path'
import Head from 'next/head'
import React, { ReactNode } from 'react'
import marked from 'marked'

type Props = {
    children?: ReactNode,
    posts?: object
}

export default function Movie({children, posts}:Props) {
  console.log(posts)
  return (
    <div className="flex flex-col justify-start min-h-screen py-2 bg-yellow-100">
      <Head>
        <title>movie page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <article className="prose-sm mobile:prose p-7 mx-auto">
        <div dangerouslySetInnerHTML={{__html: marked(posts)}}></div>
      </article>
      
    </div>
  )
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('posts'))
  
  console.log(files) //posts폴더의 파일명들이 나옴

  const posts = files.map(filename => filename.replace('.md', ''))
  console.log(posts)

  files.forEach((filename)=>{
    console.log(filename)
    let markDownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
    console.log(markDownWithMeta)
  })
  
  const returnPost = fs.readFileSync(path.join('posts', files[0]), 'utf-8')
  return {
    props: {
      posts: returnPost
    }
  }
}