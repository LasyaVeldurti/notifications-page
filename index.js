const Notification = (props) => {
  //  Write your code here.
  const { className, src, message } = props;
  return (
    <div className={className}>
      <img className="image-icon" src={src} />
      <p>{message}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 class="heading">Notifications</h1>
    <Notification
      className="information-container"
      src="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      message="Information message"
    />
    <Notification
      className="success-container"
      src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      message="Success message"
    />
    <Notification
      className="warning-container"
      src="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      message="Warning message"
    />
    <Notification
      className="error-container"
      src="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      message="Error message"
    />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
