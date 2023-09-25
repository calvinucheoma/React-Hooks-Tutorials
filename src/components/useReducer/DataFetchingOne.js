import axios from 'axios';
import { useState, useEffect } from 'react';

const DataFetchingOne = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/1`)
      .then((response) => {
        setLoading(false);
        setPost(response.data);
        setError('');
      })
      .catch((_error) => {
        setLoading(false);
        setPost({});
        setError('Something went wrong!');
      });
  }, []);
  return (
    <div>
      {loading ? 'Loading' : post.title}
      {error ? error : null}
    </div>
  );
};

export default DataFetchingOne;
