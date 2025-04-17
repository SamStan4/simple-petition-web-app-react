import React, { useState, useEffect } from "react";
import { addSignature, getSignatures } from "@util/api";
import SignaturePageText from "@components/signature-text/SignatureText.jsx";
import SignatureForm from "@components/signature-form/SignatureForm.jsx";

import "./SignaturePageStyles.css";

export default function SignaturePage() {
  const [signatures, setSignatures] = useState([]);
  const getSetSignatures = async () => {
    const newSignatures = await getSignatures();
    setSignatures(newSignatures);
  }
  useEffect(() => {
    getSetSignatures();
  }, []);
  const handleSubmitForm = async (name, email, city, state) => {
    const addStatus = await addSignature(name, email, city, state);
    if (addStatus) {
      getSetSignatures();
    }
  };
  return (
    <div className="page-wrapper">
      <div className="form-wrapper">
        <div className="inner-form-wrapper">
          <SignaturePageText/>
          <SignatureForm
            onSubmitForm={handleSubmitForm}
          />
        </div>
      </div>
    </div>
  );
};