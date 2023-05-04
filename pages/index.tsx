
import Header from '../components/Header'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import MetaHead from '../components/MetaHead'
import React, { ReactNode } from 'react'
import Link from 'next/link';
import { GetStaticPaths, GetStaticProps } from 'next';
import {getAllPostDir} from '../utils/mdxUtils'

type Props = {
  postDirArr:any
}

export default function Home({postDirArr}:Props) {
  return (
    <>
      <MetaHead title={''} description={'Justin의 블로그입니다.'} />
      <div className="">
        <Header postList={postDirArr}/>
        {/* <Sidebar postList={postDirArr}/> */}
        {/* <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-yellow-500"> */}
          <div className="container mx-auto max-w-7xl bg-gray-100">
              <div className="lg:flex">
                  <Sidebar postList={postDirArr}/>
                  <div className="min-w-0 flex-auto px-4 sm:px-6 xl:px-8 pt-10 pb-24 lg:pb-16">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-8">
                      {
                      postDirArr.map((item, index) => {
                        return <Section key={index} categoryName={item.name}/>
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

export const getStaticProps: GetStaticProps = async () => {
  
  // console.log(getAllPostDir())
  let postDirArr = getAllPostDir()
  return {
    props: {
      postDirArr
    }
  }
}

type CategoryInfoProps = {
  categoryName?:string
}

//카테고리 인덱스 , 클릭시 카테고리의 index 페이지로 이동
function Section ({categoryName}:CategoryInfoProps) {

  return (
    <section className="flex">
      <Link href={`/category/${categoryName}`}>
        <div className="w-full h-60 relative text-black overflow-hidden rounded-2xl flex hover:shadow-lg bg-white">
          <div className="w-full flex md:flex-col">
            <div className="sm:max-w-sm sm:flex-none md:w-auto md:flex-auto flex flex-col items-start relative z-10 p-6 xl:p-8">
              <h2 className="text-xl font-semibold mb-2 text-shadow">{categoryName}</h2>
              {/* <p className="font-medium text-rose-100 text-shadow mb-4">Build something with Tailwind in our online playground.</p>
              <a href="https://play.tailwindcss.com/" className="mt-auto bg-rose-900 bg-opacity-50 hover:bg-opacity-75 transition-colors duration-200 rounded-xl font-semibold py-2 px-4 inline-flex">{`return`}</a> */}
            </div>
          </div>
          {/* <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-rose-500 hidden sm:block"></div> */}
        </div>
      </Link>
    </section>
  )
}