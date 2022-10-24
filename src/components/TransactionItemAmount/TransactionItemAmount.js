import React from "react";

import { Typography } from "@mui/material";
import { AMOUNT_STATUSES } from "../../constants";

function TransactionItemAmount({ amountStatus, amount }) {
  return (
    <Typography
      sx={{
        color: "inherit",
        ...(amountStatus === AMOUNT_STATUSES.up && {
          color: "#009950",
        }),
        ...(amountStatus === AMOUNT_STATUSES.down &&
          {
            // color: "#ff0000",
          }),
      }}
    >
      {`${amount}`}
    </Typography>
  );
}

export default TransactionItemAmount;
