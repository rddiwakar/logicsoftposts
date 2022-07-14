import "./singlePost.css";
const SinglePostPage = ({ singlePost }) => {
    
    return (
        <>
            {
                singlePost &&
                <div className="singlePost" >
                    <img src={singlePost.image} alt={singlePost.id} />
                    <div className="singlePostData">
                        <h2>{singlePost.title}</h2>
                        <blockquote>created by {singlePost.userId}</blockquote>
                        <p>{singlePost.body}</p>
                    </div>
                </div> 
            }
        </>
    )
}
export { SinglePostPage }