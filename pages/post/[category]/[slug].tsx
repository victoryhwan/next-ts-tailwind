import fs from 'fs'
import path  from 'path'
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Sidebar from '../../../components/Sidebar'
import MetaHead from '../../../components/MetaHead';
import mdxPrism from 'mdx-prism';
import React, { ReactNode } from 'react'
import marked from 'marked'
import { GetStaticPaths, GetStaticProps } from 'next';
import { PostType } from '../../../types/post';
import { MDXRemote, MDXRemoteSerializeResult,} from 'next-mdx-remote';

import {getAllPostDir} from '../../../utils/mdxUtils'

const components = {
  Head,
  Image,
  Link,
};

type PostPageProps = {
  source: MDXRemoteSerializeResult;
  postDirArr?: []
  meta:any
};

const PostPage = ({ source, postDirArr, meta }: PostPageProps) => {
  console.log(`source.scope`, JSON.stringify(source.scope))
  return (
    <>
      <MetaHead title={meta.title} description={meta.description} image={meta.image}/>
      <div>
        <Header postList={postDirArr}/>
        <div className="container mx-auto max-w-7xl">
              <div className="lg:flex">
                  <Sidebar postList={postDirArr}/>
                  <div className="flex-auto px-4 sm:px-6 xl:px-8 pt-10 pb-24 lg:pb-16">
                    <div className="prose dark:prose-dark p-7 mx-auto">
                      <MDXRemote {...source} components={components} />
                    </div>
                  </div>
              </div>
          </div>
        <Footer/>
      </div>
    </>
    
  )
}

export async function getStaticPaths() {

  // paths는 정적 페이지를 path를 미리 정의하는 곳이다. 
  const paths = []

  let postDirArr = getAllPostDir()

  postDirArr.forEach((categoryInfo)=>{
    categoryInfo.posts.forEach((post)=>{
      paths.push({ params: { 
        category: categoryInfo.name,
        slug: post.substring(0,post.length-4)}})
    })
  })
  
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (params) => {

  let fileName = params.params.slug.toString()+".mdx"

  const postContent = fs.readFileSync(path.join(`posts/${params.params.category}`, fileName)) //posts/react 디렉토리에 있는 파일을 읽음.
  const { content, data } = matter(postContent);
  // console.log(`data`, JSON.stringify(data))
  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [require('remark-code-titles')],
      rehypePlugins: [mdxPrism],
    },
    scope: data,
  });

  let postDirArr = getAllPostDir()
  // console.log(`postDirArr : ${JSON.stringify(postDirArr)}`)
  return {
    props: {
      source: mdxSource,
      postDirArr: postDirArr, //사이드메뉴 리스트 정보
      meta: data
    }
  }
}


export default PostPage;