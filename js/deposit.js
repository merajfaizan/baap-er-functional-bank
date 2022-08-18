document.getElementById("deposit-btn").addEventListener("click", function () {
  const newDepositValue = getInputValueById("deposit-input");
  const previousDeposit = getElementValueById("total-deposit");

  const totalDeposit = previousDeposit + newDepositValue;

  setValue("total-deposit", totalDeposit);

  const previousBalance = getElementValueById("total-balance");
  const newBalance = previousBalance + newDepositValue;

  setValue("total-balance", newBalance);
});
