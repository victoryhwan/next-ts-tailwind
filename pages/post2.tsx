import fs from 'fs'
import path  from 'path'
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import mdxPrism from 'mdx-prism';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import React, { ReactNode } from 'react'
import marked from 'marked'
import { GetStaticPaths, GetStaticProps } from 'next';
import { PostType } from '../types/post';
import { MDXRemote, MDXRemoteSerializeResult,} from 'next-mdx-remote';

import {getAllPostDir} from '../utils/mdxUtils'

const components = {
  Head,
  Image,
  Link,
};

// type Props = {
//   children?: ReactNode,
//   posts?: object
// }

type PostPageProps = {
  source: MDXRemoteSerializeResult;
  postDirArr?: []
  // frontMatter: PostType;
};

// export default function Post({source, frontMatter}:PostPageProps) {
  const PostPage = ({ source, postDirArr }: PostPageProps) => {
  // console.log(posts)
  return (
    // <div className="flex flex-col justify-start min-h-screen py-2 ">
    //   <Head>
    //     <title>post2 page</title>
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>
    //   {/* <article className="prose prose-indigo p-7 mx-auto max-w-max">
    //     <div dangerouslySetInnerHTML={{__html: marked(posts)}}></div>
    //   </article> */}
    //   <div className="prose dark:prose-dark p-7 mx-auto max-w-max">
    //       <MDXRemote {...source} components={components}/>
    //     </div>
    // </div>

    <div>
      <Header/>
      <div className="container mx-auto max-w-7xl">
            <div className="lg:flex">
                <Sidebar postList={postDirArr}/>
                <div className="min-w-0 flex-auto px-4 sm:px-6 xl:px-8 pt-10 pb-24 lg:pb-16">
                  <div className="prose dark:prose-dark p-7 mx-auto max-w-max">
                    <MDXRemote {...source} components={components}/>
                  </div>
                </div>
            </div>
        </div>
      <Footer/>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  
  const files = fs.readdirSync(path.join('posts'), {withFileTypes: true})
  
  // console.log(files) //posts폴더의 파일명들이 나옴

  files.forEach((item)=>{
      if(item.isDirectory()){
          console.log(`${item.name} is Dir`)
      }
  })
  console.log(getAllPostDir())

  const postContent = fs.readFileSync(path.join('posts', files[1].name))

  const { content, data } = matter(postContent);
  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [require('remark-code-titles')],
      rehypePlugins: [mdxPrism],
    },
    scope: data,
  });

  let postDirArr = getAllPostDir()
  console.log(postDirArr)
  return {
    props: {
      source: mdxSource,
      // frontMatter: data,
      postDirArr: postDirArr
      
    // fallback: false,
    }
  }
}


export default PostPage;