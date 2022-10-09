import React, { useState, useEffect, Fragment } from "react";

const EmailVerify = () => {
  const [validURL, setValidURL] = useState(false);

  return (
    <Fragment>
      {validURL ? <div>EmailVerify</div> : <h1>404 Not Found</h1>}
    </Fragment>
  );
};

export default EmailVerify;
