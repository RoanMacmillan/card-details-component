import React from "react";


function SubmitButton({ onClick }) {
    return (
      <button className="submitBtn" type="submit" onClick={onClick}>Confirm</button>
    );
  }

  export default SubmitButton