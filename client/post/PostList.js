import React from "react";
import PropTypes from "prop-types";
import Post from "./Post";

function PostList (props) {
	return (
		<div style={{marginTop: "24px"}}>
			{props.posts.map((post, i)=>{
				return <Post 
					 post={post} key={i}
					onRemove={props.removeUpdate}/>
			})}
		</div>
	)
}

PostList.propTypes = {
	posts: PropTypes.array.isRequired,
	removeUpdate: PropTypes.func.isRequired
}

export default PostList;

