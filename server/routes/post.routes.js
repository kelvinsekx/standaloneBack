import express from "express";
const router = express.Router();

import * as PostCtrl from "../controllers/post.controller";
import authCtrl from "../controllers/auth.controller";
import userCtrl from "../controllers/user.controller";


router.route("/api/posts/feed/:userId")
	.get(authCtrl.requireSignin, 
		PostCtrl.listNewsFeed);

router.route("/api/posts/by/:userId")
	.get(authCtrl.requireSignin, 
		PostCtrl.listByUser);

router.route("/api/posts/:postId")
	.delete(authCtrl.requireSignin,
		PostCtrl.isPoster,
		PostCtrl.remove);

router.route("/api/posts/uncomment")
	.put(authCtrl.requireSignin, 
		PostCtrl.uncomment);

router.route("/api/posts/comment")
	.put(authCtrl.requireSignin, 
		PostCtrl.comment);

router.route("/api/posts/like")
	.put(authCtrl.requireSignin, 
		PostCtrl.like);

router.route("/api/posts/unlike")
	.put(authCtrl.requireSignin, 
		PostCtrl.unlike);

router.route("/api/posts/photo/:postId")
	.get(PostCtrl.photo);

router.route("/api/posts/new/:userId")
	.post(authCtrl.requireSignin, 
		PostCtrl.create);

router.param("postId", 
	PostCtrl.postByID);
	
router.param("userId", 
	userCtrl.userByID);

export default router;
