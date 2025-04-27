import React from "react";

import Button from "./commons/Button";

const AuthButtons = () => {
  return (
    <div className="flex gap-4 items-center">
      <Button variant="primary">Sign Up</Button>
      <Button variant="secondary">Log In</Button>
    </div>
  );
};

export default AuthButtons;