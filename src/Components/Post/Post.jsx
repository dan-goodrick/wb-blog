import { useEffect, useState } from 'react';
import postData from '../../data/post_data.json';
import './Post.css';
import { useParams } from 'react-router-dom';

export default function Post() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  let {id} = useParams() 
  console.log("params", id)
  useEffect(() => {
    // This is where you would make an axios call to a server in a fullstack application
    // but for today we'll be just be filtering an array of dummy data
    const post = postData.find((post) => post.id == id);
    if (post) {
      setTitle(post.title);
      setContent(post.content);
    } else {
      setTitle('Post Not Found');
    }
  }, []);

  return (
    <div className="Post">
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
}
