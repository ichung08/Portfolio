const Project = ({ title, github, website, event, desc, tech }) => {
  return (
    <div className="post">
      <h3>{title}</h3>
      {github && <a href={github}>Github</a>} {website && <a href={website}>Website</a>}
      <p>{event}</p>
      <p>{desc}</p>
      <p>{tech}</p>
    </div>
  );
};

export default Project;
