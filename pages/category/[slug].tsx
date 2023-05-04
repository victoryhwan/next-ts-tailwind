import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Sidebar from '../../components/Sidebar'
import MetaHead from '../../components/MetaHead'
import React, { ReactNode } from 'react'
import Link from 'next/link';
import { GetStaticPaths, GetStaticProps } from 'next';
import {getAllPostDir} from '../../utils/mdxUtils'

type CategoryListProps = {
  postDirArr?: []
  postList:any
  categoryName:string
};

type PostInfoProps = {
  categoryName: string
  postName?:string
}

const CategoryListPage = ({ postDirArr, postList, categoryName}: CategoryListProps) => {
    // console.log(posts)
    return (
      <>
        <MetaHead title={categoryName} description={categoryName} />
        <div>
          <Header postList={postDirArr}/>
          <div className="container mx-auto max-w-7xl bg-gray-100">
                <div className="lg:flex">
                    <Sidebar postList={postDirArr}/>
                    <div className="min-w-0 flex-auto px-4 sm:px-6 xl:px-8 pt-10 pb-24 lg:pb-16">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-8">
                        {
                          postList[0].posts.map((item, index) => {
                            return <Section key={index} categoryName={categoryName} postName={item.substring(0,item.length-4)}/>
                          })
                        }
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
    paths.push({ params: {
      slug: categoryInfo.name}})
  })
  
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (params) => {

  // console.log(`getStaticProps params : ${JSON.stringify(params)}`)

  let postDirArr = getAllPostDir()
  let postList = postDirArr.filter(postDir => postDir.name === params.params.slug)
  // console.log(`postDirArr : ${JSON.stringify(postDirArr)}`)
  // console.log(`postList : ${JSON.stringify(postList)}`)
  return {
    props: {
      postDirArr: postDirArr, //사이드메뉴 리스트 정보
      postList: postList, //slug 카테고리에 해당하는 post list
      categoryName: params.params.slug
    }
  }
}

//카테고리 인덱스 , 클릭시 카테고리의 index 페이지로 이동
function Section ({categoryName, postName}:PostInfoProps) {

    return (
      <section className="flex">
        <Link href={`/post/${categoryName}/${postName}`}>
          <div className="w-full h-60 relative text-black overflow-hidden rounded-2xl flex hover:shadow-lg bg-white">
            <div className="w-full flex md:flex-col">
              <div className="sm:max-w-sm sm:flex-none md:w-auto md:flex-auto flex flex-col items-start relative z-10 p-6 xl:p-8">
                <h2 className="text-lg font-semibold mb-2 text-shadow">{postName}</h2>
                {/* <p className="font-medium text-rose-100 text-shadow mb-4">Build something with Tailwind in our online playground.</p> */}
                {/* <a href="" className="mt-auto bg-rose-900 bg-opacity-50 hover:bg-opacity-75 transition-colors duration-200 rounded-xl font-semibold py-2 px-4 inline-flex">{`글보러 가기`}</a> */}
              </div>
            </div>
            {/* <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-rose-500 hidden sm:block"></div> */}
          </div>
        </Link>
      </section>
    )
  }

  export default CategoryListPage;