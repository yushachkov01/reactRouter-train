import { useState } from 'react'
import '../../styles/App.css'
import { Link } from 'react-router-dom'
import MyInputs from '../input/MyInputs'
import PostContainer from '../postContainer/PostContainer'
const Post = () => {

  return (
    <div className="App">
      <MyInputs/>
      <PostContainer />
      <Link to='/'>Назад</Link>
    </div>
  )
};

export default Post;