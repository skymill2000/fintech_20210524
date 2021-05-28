import React from "react";
import Header from "../component/common/Header";
import QrReaderReact from "react-web-qr-reader";

const QrReader = () => {
  const delay = 500;

  const previewStyle = {
    height: 240,
    width: 320,
  };

  const handleScan = (result) => {
    if (result) {
      console.log(result);
    }
  };

  const handleError = (error) => {
    console.log(error);
  };

  return (
    <div>
      <Header title={"QR 코드 읽기"}></Header>
      <QrReaderReact
        delay={delay}
        style={previewStyle}
        onError={handleError}
        onScan={handleScan}
      />
    </div>
  );
};

export default QrReader;
