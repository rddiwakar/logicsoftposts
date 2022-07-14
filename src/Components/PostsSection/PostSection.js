import { Post } from "./post/post"
import React from "react";
//import { pagination } from "../../utils";
import { PageNavigator } from "../Pagination/pagination";
import "./PostSection.css"
const PostSection = ({ posts }) => {
    const [pageNum, setPageNum] = React.useState(0)
    const handlePageNum = (data) => {
        setPageNum(data)
    }
    return (
        <div className='PostSection'>
            {
                posts && posts.length ?
                    <>
                        <div className="posts">
                            {posts[pageNum] && posts[pageNum].map(post => {
                                return <Post key={post.id} postData={post} />
                            })}
                        </div>
                        <PageNavigator
                            pageNum={pageNum}
                            paginatedList={posts}
                            setPageNum={handlePageNum}
                        />
                    </> :
                    <div> Post are not found related to search</div>
            }

        </div>
    )
}
export { PostSection }