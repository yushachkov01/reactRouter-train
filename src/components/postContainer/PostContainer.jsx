import {useSelector} from "react-redux"

const PostContainer = () => {
const names = useSelector(state => state)
console.log({names});

  return (
    <div>
   {names.map((name)=> <div>{name.name}, {name.lastname}</div>)}
  
    </div>

  )
};

export default PostContainer;