document.getElementById("withdraw-btn").addEventListener("click", function () {
  const newWithdrawAmount = getInputValueById("withdraw-input");
  const previousWithdrawAmount = getElementValueById("withdraw-amount");

  const totalWithdrawAmount = previousWithdrawAmount + newWithdrawAmount;

  setValue("withdraw-amount", totalWithdrawAmount);

  const currentBalance = getElementValueById("total-balance");
  const newBalance = currentBalance - newWithdrawAmount;

  setValue("total-balance", newBalance);
});
