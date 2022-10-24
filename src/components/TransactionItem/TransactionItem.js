import React from "react";
import { TableRow, TableCell } from "@mui/material";
import TransactionItemAmount from "../TransactionItemAmount/TransactionItemAmount";

function TransactionItem({
  transaction_logo,
  transaction,
  amount,
  amountStatus,
  date,
  card_logo,
  card,
  expiry_date,
}) {
  return (
    <TableRow>
      <TableCell colSpan={2} sx={{ fontWeight: "bold" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={`${transaction_logo}`}
            alt={transaction}
            style={{
              width: "30px",
              height: "30px",
              marginRight: "10px",
            }}
          />
          {transaction}
        </div>
      </TableCell>
      <TableCell style={{ color: "#757575" }}>
        <TransactionItemAmount amountStatus={amountStatus} amount={amount} />
      </TableCell>
      <TableCell style={{ color: "#757575" }}>{date}</TableCell>
      <TableCell>
        <img
          src={`${card_logo}`}
          alt={transaction}
          style={{
            border: "1px solid #e0e0e0",
            borderRadius: "5px 5px 5px 5px",
            width: "50px",
            height: "100%",
          }}
        />
      </TableCell>
      <TableCell>
        <div style={{ color: "black" }}>{card}</div>
        <div style={{ color: "#757575" }}>{expiry_date}</div>
      </TableCell>
    </TableRow>
  );
}

export default TransactionItem;
