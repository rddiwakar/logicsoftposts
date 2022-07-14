import { Post } from "./post/post"
import React from "react";
//import { pagination } from "../../utils";
import { PageNavigator } from "../Pagination/pagination";
const PostSection = ({posts}) => {
    const [pageNum, setPageNum] = React.useState(0)
    const handlePageNum = (data)=>{
        setPageNum(data)
    }
    return (
        <div className='PostSection'>
            {posts[pageNum] && posts[pageNum].map(post =>{
                return <Post key={post.id} postData={post} />
            })}
            <PageNavigator 
                pageNum = {pageNum}
                paginatedList={posts}
                setPageNum = {handlePageNum}
            />
        </div>
    )
}
export {PostSection}