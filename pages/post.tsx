import fs from 'fs'
import path  from 'path'
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

import mdxPrism from 'mdx-prism';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import React, { ReactNode } from 'react'
import marked from 'marked'
import { GetStaticPaths, GetStaticProps } from 'next';
import { PostType } from '../types/post';
import { MDXRemote, MDXRemoteSerializeResult,} from 'next-mdx-remote';



const components = {
  Head,
  Image,
  Link,
};

type MdxProps = {
    // children?: ReactNode,
    // posts?: object
    source: MDXRemoteSerializeResult,
    frontMatter: PostType
}
type Props = {
  children?: ReactNode,
  posts?: object
}

export default function Post({children, posts}:Props) {
  // console.log(posts)
  return (
    <div className="flex flex-col justify-start min-h-screen py-2 ">

      <article className="prose prose-indigo p-7 mx-auto max-w-max">
        <div dangerouslySetInnerHTML={{__html: marked(posts)}}></div>
      </article>
      {/* <div className="prose dark:prose-dark">
          <MDXRemote {...source} components={components}/>
        </div> */}
    </div>
  )
}


export async function getStaticProps() {
    const files = fs.readdirSync(path.join('posts'))
    
    console.log(files) //posts폴더의 파일명들이 나옴
  
    // const posts = files.map(filename => filename.replace('.md', ''))
    // console.log(posts)
  
    // files.forEach((filename)=>{
    //   console.log(filename)
    //   let markDownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
    //   console.log(markDownWithMeta)
    // })
    
    const returnPost = fs.readFileSync(path.join('posts', files[0]), 'utf-8')
    return {
      props: {
        posts: returnPost
      }
    }
  }


// export async function getStaticProps() {
// // export const getStaticProps: GetStaticProps = async () => {
//   console.log('@@@@@@@@@@@@@@@@@@')
//   const files = fs.readdirSync(path.join('posts'))
  
//   console.log(files) //posts폴더의 파일명들이 나옴

//   // const posts = files.map(filename => filename.replace('.md', ''))
//   // console.log(posts)

//   // files.forEach((filename)=>{
//   //   console.log(filename)
//   //   let markDownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
//   //   console.log(markDownWithMeta)
//   // })
  
//   const returnPost = fs.readFileSync(path.join('posts', files[0]))

//   console.log('@@@@@@@@@@@@@@@@@@')
//   const { content, data } = matter(returnPost);
//   const mdxSource = await serialize(content, {
//     // Optionally pass remark/rehype plugins
//     mdxOptions: {
//       remarkPlugins: [require('remark-code-titles')],
//       rehypePlugins: [mdxPrism, rehypeSlug, rehypeAutolinkHeadings],
//     },
//     scope: data,
//   });

//   return {
//     props: {
//       source: mdxSource,
//       frontMatter: data,
//     }
//   }
// }