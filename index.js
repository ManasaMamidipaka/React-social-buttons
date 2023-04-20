const Button = (props) => {
  //  Write your code here.
  const { className, name } = props;
  return <button className={className}>{name}</button>;
};

const element = (
  //  Write your code here.
  <div className="container">
    <h1 className="heading"> Social Buttons </h1>
    <div className="button-container">
      <Button className="like-button" name="Like " />
      <Button className="comment-button" name="Comment" />
      <Button className="share-button" name="Share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
