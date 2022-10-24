import { AMOUNT_STATUSES } from "../constants";

const getAmountStatus = (amount) => {
  let amountStatus = AMOUNT_STATUSES.equal;

  if (amount.indexOf("+") > -1) {
    amountStatus = AMOUNT_STATUSES.up;
  }

  if (amount.indexOf("-") > -1) {
    amountStatus = AMOUNT_STATUSES.down;
  }

  return { amountStatus };
};

export default getAmountStatus;
