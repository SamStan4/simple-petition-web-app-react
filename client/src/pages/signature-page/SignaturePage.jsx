import React, { useState, useEffect } from "react";
import SignaturePageText from "@components/signature-text/SignatureText.jsx";
import "./SignaturePageStyles.css";

export default function SignaturePage() {
  const [signatures, setSignatures] = useState([]);
  useEffect(() => {
    // TODO: set the signatures
  }, []);
  return (
    <div className="page-wrapper">
      <div className="form-wrapper">
        <div className="inner-form-wrapper">
          <SignaturePageText/>
        </div>
      </div>
    </div>
  );
};