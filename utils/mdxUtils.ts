import fs from 'fs';
import path from 'path';

// POSTS_PATH is useful when you want to get the path to a specific file
export const POSTS_PATH = path.join(process.cwd(), 'posts');

// postFilePaths is the list of all mdx files inside the POSTS_PATH directory
export const postFilePaths = fs
  .readdirSync(POSTS_PATH)
  // Only include md(x) files
  .filter((path) => /\.mdx?$/.test(path));

//post directory array {name, withFileTypes}
export const getAllPostDir = () =>{
  const postDir = fs.readdirSync(POSTS_PATH, {withFileTypes: true})
                    .filter(item => item.isDirectory())
                    .map(item => {
                      return {
                        name: item.name,
                        postCnt: getPosts(item.name)
                      }
                    })

  
  return postDir
}

export const getPosts = (dir: string)=>{
  const count = fs.readdirSync(path.join(POSTS_PATH, dir))
  // Only include md(x) files
  .filter((path) => /\.mdx?$/.test(path))
  .length

  return count
}

