import { Link } from "react-router-dom";

import s from "./navigation.module.css";

export const Navigation = () => {
  return (
    <nav className={s.container}>
      <Link to="/generate">Generate QR code</Link>
      <Link to="/scan">Scan QR code</Link>
      <Link to="/generateHistory">History of QR code generation</Link>
      <Link to="/scanHistory">History of QR code scanning</Link>
    </nav>
  );
};
