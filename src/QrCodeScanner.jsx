import { Scanner } from "@yudiel/react-qr-scanner";
import { useState } from "react";

import s from "./qrCodeScanner.module.css";

export const QrCodeScanner = () => {
  const [scanned, setScanned] = useState(null);

  const scanHandler = (result) => {
    setScanned(result[0].rawValue);
  };

  return (
    <div className={s.container}>
      <Scanner
        allowMultiple
        onScan={scanHandler}
        components={{
          audio: false,
          finder: false,
        }}
        styles={{
          container: { width: 300 },
        }}
      />
      <p className={s.result}>{scanned}</p>
    </div>
  );
};
