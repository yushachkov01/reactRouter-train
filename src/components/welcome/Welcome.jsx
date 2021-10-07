import {Link} from 'react-router-dom'

const Welcome = () => {
  return (
    <div>
      <h1>Hello</h1>
      <Link to='/posts/'>Переход на следующую страницу</Link>
    </div>
  )
};

export default Welcome;