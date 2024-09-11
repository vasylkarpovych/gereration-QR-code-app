import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav style={{ display: "flex", flexDirection: "column" }}>
      <Link to="/generate">Generate QR code</Link>
      <Link to="/scan">Scan QR code</Link>
      <Link to="/">History of QR code generation</Link>
      <Link to="/">History of QR code scanning</Link>
    </nav>
  );
};
