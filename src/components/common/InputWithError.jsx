import React from "react";

const InputWithError = ({error}) => {
  return (
      <div className={"dflxc"} style={{width: "100%" }}>
        {error && (
            <small style={{ color: "red" }}>{error}</small>
        )}
      </div>
  );
}



export default InputWithError;

