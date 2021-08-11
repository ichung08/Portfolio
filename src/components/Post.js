const Post = ({ pos, date, desc, tech }) => {
  return (
    <div className="post">
      <h3>{pos}</h3>
      <p>{date}</p>
      <p>{desc}</p>
      <p>{tech}</p>
    </div>
  );
};

export default Post;
