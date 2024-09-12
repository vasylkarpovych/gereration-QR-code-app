import { QRCodeSVG } from "qrcode.react";
import { SCAN_DATA } from "../constants";

export const ScanHistory = () => {
  const data = JSON.parse(localStorage.getItem(SCAN_DATA) || "[]");

  return (
    <div>
      {data.map((text, index) => (
        <div key={text}>
          <p>
            {index + 1}. {text}
          </p>
          <p>
            <QRCodeSVG value={text} fgColor="rgb(154, 25, 124)" size={80} />
          </p>
        </div>
      ))}
    </div>
  );
};
