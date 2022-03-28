import fs from 'fs'
import path  from 'path'
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Sidebar from '../../components/Sidebar'
import mdxPrism from 'mdx-prism';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import React, { ReactNode } from 'react'
import marked from 'marked'
import { GetStaticPaths, GetStaticProps } from 'next';
import { PostType } from '../../types/post';
import { MDXRemote, MDXRemoteSerializeResult,} from 'next-mdx-remote';

import {getAllPostDir} from '../../utils/mdxUtils'

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

type Params = {
  params: {
    slug:String
  }
}

// export default function Post({source, frontMatter}:PostPageProps) {
  const PostPage = ({ source, postDirArr }: PostPageProps) => {
  // console.log(posts)
  return (
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

export async function getStaticPaths() {

  /** paths는 post/[slug].tsx 에서 정적 페이지를 생성해 놓을 path를 미리 정의하는 곳이다. 
   * 예) post/blog1, post/blog2 는 가능하고, post/blog3 은 불가능 하다.
   */
  // const paths = [
  //   { params: { slug: "blog1"} },
  //   { params: { slug: "blog2"} }
  // ]
  const paths = []
  console.log(`@@@@@@@@@`)
  const files = fs.readdirSync(path.join('posts/react'), {withFileTypes: true})
  console.log(`files : ${JSON.stringify(files)}`)
  files.forEach((item)=>{
    paths.push({ params: { slug: item.name.substring(0,item.name.length-4)}})
  })
  
  
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (params) => {
  // const router = useRouter()
  // const { slug } = router.query

  console.log(`getStaticProps params : ${JSON.stringify(params.params.slug)}`)
  let fileName = params.params.slug.toString()+".mdx"
  const files = fs.readdirSync(path.join('posts'), {withFileTypes: true})
  
  // console.log(files) //posts폴더의 파일명들이 나옴

  files.forEach((item)=>{
      if(item.isDirectory()){
          console.log(`${item.name} is Directory (exist)`)
      }
  })

  console.log(`files[0].name : ${files[0].name}`)
  const postContent = fs.readFileSync(path.join('posts/react', fileName)) //posts/react 디렉토리에 있는 파일을 읽음.

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
  console.log(`postDirArr : ${JSON.stringify(postDirArr)}`)
  return {
    props: {
      source: mdxSource,
      // frontMatter: data,
      postDirArr: postDirArr //사이드메뉴 리스트 정보 
      
    // fallback: false,
    }
  }
}


export default PostPage;