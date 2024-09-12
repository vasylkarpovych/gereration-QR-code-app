import { QRCodeSVG } from "qrcode.react";

import { GENERATE_DATA } from "../constants";

export const GenerateHistory = () => {
  const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || "[]");

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
