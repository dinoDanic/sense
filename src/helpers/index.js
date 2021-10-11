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
