import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";

import { GENERATE_DATA } from "../../constants";

import s from "./qrCodeGenerator.module.css";

export const QrCodeGenerator = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  const onClickHandler = () => {
    const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || "[]");

    localStorage.setItem(GENERATE_DATA, JSON.stringify([...prevData, value]));

    setResult(value);
    setValue("");
  };
  const onChangeHandler = (event) => {
    setValue(event.target.value);
    setResult("");
  };

  console.log("Result: " + result);

  return (
    <div className={s.container}>
      <input
        type="text"
        value={value}
        placeholder="Enter text for QR code..."
        onChange={onChangeHandler}
        className={s.input}
      />
      <button type="button" className={s.button} onClick={onClickHandler}>
        Generate QR code
      </button>

      {result !== "" && (
        <div className={s.qrWrapper}>
          <QRCodeSVG value={value} fgColor="red" size={200} />
        </div>
      )}
    </div>
  );
};
