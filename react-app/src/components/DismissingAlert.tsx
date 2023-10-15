import React, { useState } from "react";

function DismissingAlert() {
  const [showAlert, setShowAlert] = useState(false);

  const handleAlertDismiss = () => {
    setShowAlert(false);
  };

  return (
    <div className="container mt-4">
      {showAlert && (
        <div
          className="alert alert-primary alert-dismissible fade show mt-3"
          role="alert"
        >
          This is a Bootstrap Dismissing Alert!
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={handleAlertDismiss}
          ></button>
        </div>
      )}
      <button className="btn btn-primary" onClick={() => setShowAlert(true)}>
        Show Alert
      </button>
    </div>
  );
}

export default DismissingAlert;
