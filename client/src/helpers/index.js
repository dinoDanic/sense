export const decNumber = (number) => {
  // return (Math.round(number * 100) / 100).toFixed(2);
  const newNum = number.toFixed(2);
  return newNum;
};

export const checkValidatorn = (userDetails, cardDetails) => {
  const { email, address, name } = userDetails;
  const { cardName, number, expDate, cvv } = cardDetails;
  if (
    !email ||
    !address ||
    !email ||
    !email.includes("@") ||
    !address ||
    !name ||
    !cardName ||
    !number ||
    !expDate ||
    !cvv
  ) {
    return false;
  }
  return true;
};

export const checkErrs = (userDetails, cardDetails) => {
  const { email, address, name } = userDetails;
  const { cardName, expDate, cvv } = cardDetails;
  let errs = [];

  if (!email) {
    errs.push({ name: "email", errMessage: "Empty Email" });
  }
  if (!email.includes("@")) {
    errs.push({ name: "email", errMessage: "No @ symbol at Email" });
  }
  if (!address) {
    errs.push({ name: "address", errMessage: "Adress Empty" });
  }
  if (!name) {
    errs.push({ name: "name", errMessage: "Full Name Empty" });
  }
  if (!cardName) {
    errs.push({ name: "cardName", errMessage: "Card Name Empty" });
  }
  if (!expDate) {
    errs.push({ name: "expDate", errMessage: "Expiration Date Empty" });
  }
  if (!cvv) {
    errs.push({ name: "cvv", errMessage: "CVV Number Empty" });
  }
  return errs;
};
