import { Link } from "react-router-dom";

import s from "./navigation.module.css";

export const Navigation = () => {
  return (
    <nav className={s.container}>
      <Link to="/gereration-QR-code-app/generate">Generate QR code</Link>
      <Link to="/gereration-QR-code-app/scan">Scan QR code</Link>
      <Link to="/gereration-QR-code-app/generateHistory">
        History of QR code generation
      </Link>
      <Link to="/gereration-QR-code-app/scanHistory">
        History of QR code scanning
      </Link>
    </nav>
  );
};
