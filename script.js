(function () {
  const pageUrl = window.location.href.split("#")[0] + "#top";
  const qr = document.getElementById("qrcode");
  const address = document.getElementById("qrAddress");
  const copyButton = document.getElementById("copyLink");
  const status = document.getElementById("copyStatus");

  if (address) {
    address.textContent = window.location.protocol === "file:"
      ? "GitHub Pages 배포 후 실제 주소로 자동 변경됩니다."
      : pageUrl;
  }

  function makeQr() {
    if (!qr || typeof QRCode === "undefined") {
      if (qr) qr.textContent = "QR 코드를 불러오지 못했습니다. 인터넷 연결을 확인해 주세요.";
      return;
    }
    qr.innerHTML = "";
    new QRCode(qr, {
      text: pageUrl,
      width: 180,
      height: 180,
      colorDark: "#20372e",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H
    });
  }
  makeQr();

  if (copyButton) {
    copyButton.addEventListener("click", async function () {
      try {
        await navigator.clipboard.writeText(pageUrl);
        status.textContent = "주소를 복사했습니다.";
      } catch (e) {
        status.textContent = "주소: " + pageUrl;
      }
    });
  }
})();