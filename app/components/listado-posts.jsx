import { Fragment } from "react";
import Post from "./post";
import stylesPosts from "~/styles/blog.css";

export default function ListadoPosts({ posts }) {
  return (
    <Fragment>
      <h2 className="heading">Blog</h2>
      <div className="blog">
        {posts.map((post) => (
          <Post key={post.id} post={post.attributes} />
        ))}
      </div>
    </Fragment>
  );
}
