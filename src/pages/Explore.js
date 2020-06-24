import React, { useState, useEffect } from "react";
import PostPreview from "../components/PostPreview";
import Loader from "../components/PostPreview";
import { client } from '../utils';

const Explore = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
		client('/posts').then(res => {
			setPosts(res.data)
			setLoading(false)
		})
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <div style={{ marginTop: "2.3rem" }}>
        <h2>Explore</h2>
        <PostPreview posts={posts} />
      </div>
    </>
  );
};

export default Explore;
