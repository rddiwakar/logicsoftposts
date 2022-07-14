import { Post } from "./post/post"

const PostSection = ({posts}) => {
    return (
        <div className='PostSection'>
            {posts.map(post =>{
                return <Post key={post.id} postData={post} />
            })}
        </div>
    )
}
export {PostSection}