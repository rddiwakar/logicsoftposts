import Image from "../../../Assets/image.jpeg"
import "./post.css";
import { Link } from "react-router-dom";
const Post = ({ postData, singePostHandler }) => {

    return (
        <Link to="post">
            <div className="Post" onClick={() => {
                const postDatas = {...postData,image:Image}
                singePostHandler(postDatas)
            }}>
                <img src={Image} alt={postData.id} />
                <div className="postData">
                    <h2>{postData.title}</h2>
                    <blockquote>created by {postData.userId}</blockquote>
                    <p>{postData.body}</p>
                </div>
            </div>
        </Link>
    )
}
export { Post }