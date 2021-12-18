import '../App.css';
import {useState, useEffect} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PostDetail from '../components/PostDetail';
import CommentsList from '../components/CommentsList';
import { useParams } from 'react-router-dom';
import background from '../theme/assets/img/post-sample-image.jpg';

function Post() {
  const [post, setPost] = useState([])
  const [comments, setComments] = useState([])
// eslint-disable-next-line
  const { id } = useParams()

  const header = { title: "Yannis Saliniere", 
                   subtitle: "Développeur d'application Python",
                   style: { backgroundImage: `url(${background})` } };


  useEffect(() => {
    fetch(`http://localhost:8000/api/posts/${id}`, {
      'method': 'GET',
      headers: {
        'Content-type': 'application/json',
        'Authorization': 'None'

      }
    })
    .then(resp => resp.json())
    .then(resp => setPost(resp))
    .catch(error => console.log(error))
// eslint-disable-next-line
  }, [])

  useEffect(() => {
    fetch(`http://localhost:8000/api/posts/${id}/comments/`, {
      'method': 'GET',
      headers: {
        'Content-type': 'application/json',
        'Authorization': 'None'

      }
    })
    .then(resp => resp.json())
    .then(resp => setComments(resp['results']))
    .catch(error => console.log(error))
// eslint-disable-next-line
  }, [])

  return (
    <div className="App">
      <Header header = {header}/>
      <PostDetail post = {post}/>
      <CommentsList comments = {comments}/>
      <Footer />
    </div>
  );
}

export default Post;