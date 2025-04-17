import Signature from "@components/signature/Signature.jsx";
import "./SignatureWrapperStyles.css";

export default function SignatureWrapper({ signatures }) {
  console.log(signatures)
  return (
    <div className="signature-wrapper-styles">
      <h2 className="signature-text-style">Signatures</h2>
      <div className="signature-inner-wrapper-styles">
        {signatures.map((signature, index) => (
          <Signature
            key={index}
            signature={signature}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};