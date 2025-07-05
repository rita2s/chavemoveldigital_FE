import React from "react";

const InputWithError = ({error}) => {
  return (
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        {error && (
            <small style={{ color: "red" }}>{error}</small>
        )}
      </div>
  );
}



export default InputWithError;

