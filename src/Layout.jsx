import { Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation/Navigation";
import { QrCodeGenerator } from "./components/Generate/QrCodeGenerator";
import { QrCodeScanner } from "./components/Scan/QrCodeScanner";
import { GenerateHistory } from "./components/GenerateHistory";
import { ScanHistory } from "./components/ScanHistory";

const Layout = () => {
  return (
    <div>
      <Navigation />

      <Routes>
        <Route
          path="/gereration-QR-code-app/generate"
          element={<QrCodeGenerator />}
        />
        <Route
          path="/gereration-QR-code-app/scan"
          element={<QrCodeScanner />}
        />
        <Route
          path="/gereration-QR-code-app/generateHistory"
          element={<GenerateHistory />}
        />
        <Route
          path="/gereration-QR-code-app/scanHistory"
          element={<ScanHistory />}
        />
      </Routes>
    </div>
  );
};

export { Layout };
