import React from "react"
import {
  List as MUIList,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  ListItemSecondaryAction,
  IconButton,
  Slide
} from "@material-ui/core"
import { Delete, MoneyOff } from "@material-ui/icons"
import useStyles from "./styles"

const List = () => {
  const classes = useStyles()

  const transactions = [
    { id: 1, type: "Income", category: "Salary", amount: 500, date: "Wed Feb 10" },
    { id: 2, type: "Expense", category: "Car", amount: 100, date: "Wed Feb 08" },
    { id: 3, type: "Income", category: "Business", amount: 300, date: "Wed Feb 01" }
  ]

  return (
    <MUIList dense={false} className={classes.list}>
      {transactions.map(transaction => (
        <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
          <ListItem>
            <ListItemAvatar>
              <Avatar
                className={
                  transaction.type === "Income" ? classes.avatarIncome : classes.avatarExpense
                }
              >
                <MoneyOff />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={transaction.category}
              secondary={`$${transaction.amount} - ${transaction.date}`}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick="">
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Slide>
      ))}
    </MUIList>
  )
}
export default List

//___________________________________________________________
// Using context:
// import React, { useContext } from "react"

// import { ExpenseTrackerContext } from "../../../context/context"

// In the function:
// const globalState = useContext(ExpenseTrackerContext)