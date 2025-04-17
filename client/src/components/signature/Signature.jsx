import "./SignatureStyles.css";

export default function Signature({ signature, index }) {
  return (
    <div className="single-signature-wrapper-styles">
      <div className="name-styles">
        <p className="text-styles">{signature.signatureName}</p>
      </div>
      <div className="city-styles">
        <p className="text-styles">{signature.signatureCity}</p>
      </div>
      <div className="state-styles">
        <p className="text-styles">{signature.signatureState}</p>
      </div>
    </div>
  );
};