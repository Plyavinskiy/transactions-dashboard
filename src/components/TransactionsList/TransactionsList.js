import React from "react";

import {
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Container,
  Button,
} from "@mui/material";

import { transactions } from "../../constants";
import TransactionItem from "../TransactionItem/TransactionItem";
import getAmountStatus from "../../helpers/getAmountStatus";
import { FiCalendar } from "react-icons/fi";

function TransactionsList() {
  return (
    <Container>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  borderBottom: "1px solid rgba(224, 224, 224, 1)",
                }}
                colSpan={6}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  Recent Transactions
                  <Button
                    startIcon={<FiCalendar size="14" />}
                    variant="outlined"
                    style={{
                      borderColor: "#e0e0e0",
                      textTransform: "none",
                      color: "#424242",
                    }}
                  >
                    <span style={{ paddingTop: "2px" }}>Select date</span>
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableHead>
            <TableRow
              sx={{
                borderBottom: "1px solid rgba(224, 224, 224, 1)",
              }}
            >
              <TableCell>
                <Button
                  variant="outlined"
                  style={{
                    textTransform: "none",
                    borderColor: "#e0e0e0",
                    backgroundColor: "#f5f5f5",
                    color: "#000",
                  }}
                >
                  View all
                </Button>
                <Button
                  variant="outlined"
                  style={{
                    textTransform: "none",
                    borderColor: "#e0e0e0",
                    color: "#000",
                  }}
                >
                  Transfers
                </Button>
                <Button
                  variant="outlined"
                  style={{
                    textTransform: "none",
                    borderColor: "#e0e0e0",
                    color: "#000",
                  }}
                >
                  Cards
                </Button>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableHead>
            <TableRow
              sx={{
                borderBottom: "1px solid rgba(224, 224, 224, 1)",
              }}
            >
              <TableCell colSpan={2} style={{ color: "#757575" }}>
                Transaction
              </TableCell>
              <TableCell style={{ color: "#757575" }}>Amount</TableCell>
              <TableCell style={{ color: "#757575" }}>Date</TableCell>
              <TableCell style={{ color: "#757575" }}>Card</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((row) => {
              const {
                transaction_logo,
                transaction,
                amount,
                date,
                card_logo,
                card,
                expiry_date,
              } = row;

              const { amountStatus } = getAmountStatus(amount);

              return (
                <TransactionItem
                  {...{
                    transaction_logo,
                    transaction,
                    amountStatus,
                    amount,
                    date,
                    card_logo,
                    card,
                    expiry_date,
                  }}
                  key={row.id}
                />
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
}

export default TransactionsList;
