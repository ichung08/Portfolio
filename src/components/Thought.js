const Thought = (props) => {
  return (
    <div className="thought__section">
      <h3>
        <a className="thought__title" href={props.link}>
          {props.title}
        </a>
      </h3>
      <span className="thought__date">{props.date}</span>
      <span className="thought__date">
        <b>Topics:</b> {props.topic}
      </span>
    </div>
  );
};

export default Thought;
