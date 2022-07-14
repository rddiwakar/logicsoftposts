import Image from "../../../Assets/image.jpeg"
import "./post.css";
const Post = ({ postData }) => {
    return (
        <div className="Post">
            <img src={Image} alt={postData.id} />
            <div className="postData">
                <h2>{postData.title}</h2>
                <blockquote>created by {postData.userId}</blockquote>
                <p>{postData.body}</p>
            </div>
        </div>
    )
}
export { Post }