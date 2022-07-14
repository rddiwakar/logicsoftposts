const Post = ({postData})=>{
    return (
        <div>
            <img src={""}  alt={postData.id}/>
            <h2>{postData.title}</h2>
            <blockquote>created by {postData.userId}</blockquote>
            <p>{postData.body}</p>
        </div>
    )
}
export {Post}