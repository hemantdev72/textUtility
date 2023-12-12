import { createContext, useReducer } from "react";

const PostList=createContext({
    postList:[],
    appPost:()=>{},
    deletePost:()=>{},
});

const postListReducer=(currentPostList,action)=>{
    return currentPostList;
}

const PostListProvider=({childern})=>{
    const [postList,dispatchPostList]=useReducer(postListReducer,[]);
    
    const addPost=()=>{};

    const deletePost=()=>{};

    return <PostList.Provider value={{postList,addPost,deletePost}}>{childern}</PostList.Provider>
}

export default PostListProvider;