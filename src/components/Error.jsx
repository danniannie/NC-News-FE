import React from "react";

const Error = props => {
  return (
    <div>
      <p>404</p>
      {props.location && props.location.state ? (
        <p>{props.location.state.errmsg}</p>
      ) : (
        <p>Oh dear, this link isn't working... </p>
      )}

      <p>Please use the navigation bar above to visit another page.</p>
    </div>
  );
};

export default Error;
