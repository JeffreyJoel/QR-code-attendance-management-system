const wrapper = document.querySelector(".wrapper"), 
qrInput = wrapper.querySelector(".form input"), 
generateBtn = wrapper.querySelector(".form button"), 
qrImg = wrapper.querySelector(".qr-code img");

generateBtn.addEventListener("click", () => { 
  let qrValue = qrInput.value;
  
  if(!qrValue) return; // if the input is empty then return from here generateBtn.innerText = "Generating QR Code...";
// getting a QR code of user entered value using the qrserver 
// api and passing the api returned img src to qrImg
qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
qrImg.addEventListener("load", () => { 
	wrapper.classList.add("active");
	generateBtn.innerText = "Generating QR Code...";
});
});

qrInput.addEventListener("keyup", () => {
if(!qrInput.value) {
wrapper.classList.remove("active");
}
});