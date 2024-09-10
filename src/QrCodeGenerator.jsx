import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";

import "./qrCodeGenerator.css";

export const QrCodeGenerator = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  const onClickHandler = () => {
    setResult(value);
    setValue("");
  };
  const onChangeHandler = (event) => {
    setValue(event.target.value);
    setResult("");
  };

  console.log("Result: " + result);

  return (
    <div className="container">
      <input
        type="text"
        value={value}
        placeholder="Enter text for QR code..."
        onChange={onChangeHandler}
        className="input"
      />
      <button type="button" className="button" onClick={onClickHandler}>
        Generate QR code
      </button>

      {result !== "" && (
        <div className="qrWrapper">
          <QRCodeSVG value={value} fgColor="red" size={200} />
        </div>
      )}
    </div>
  );
};
