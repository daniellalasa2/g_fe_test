import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import {
  removeTodoWithApiCall,
  editTodoWithApiCall,
} from "../../redux/todos/actions";
import classNames from "classnames";
import ContentEditable from "react-contenteditable";
import {
  Card,
  CardHeader,
  IconButton,
  Chip,
  makeStyles,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import DoneIcon from "@material-ui/icons/Done";
import PropTypes from "prop-types";

const useStyle = makeStyles((theme) => ({
  card_root: {
    marginTop: theme.spacing(3),
    width: "100%",
  },
  cardHeader_root: {
    textAlign: "left",
  },
  cardHeader_action: {
    margin: "8px 8px 0 0",
  },
  itemTitleSpan: {
    outline: "none",
    border: "none",
    overflow: "hidden",
  },
}));

function TaskItem({ id, description, completed }) {
  const classes = useStyle();

  const dispatchRemoveTodo = useDispatch();
  const dispatchEditTodo = useDispatch();

  const handleDeleteTodo = () => {
    // TODO: Ask user ,are sure or not?(popover, modal)
    dispatchRemoveTodo(removeTodoWithApiCall(id));
  };
  const handleEditTodo = (_description) => {
    dispatchEditTodo(editTodoWithApiCall(id, { description: _description }));
  };
  const toggleTaskStatus = () => {
    dispatchEditTodo(editTodoWithApiCall(id, { completed: !completed }));
  };

  return (
    <Card className={classes.card_root}>
      <CardHeader
        action={
          <div className={classes.cardHeader_action}>
            <IconButton aria-label="delete" onClick={handleDeleteTodo}>
              <DeleteIcon />
            </IconButton>
            <Chip
              label={completed ? "Completed" : "Incomplete"}
              color={completed ? "primary" : "secondary"}
              icon={
                completed ? <DoneIcon style={{ direction: "right" }} /> : <></>
              }
              onClick={toggleTaskStatus}
            />
          </div>
        }
        className={classes.cardHeader_root}
        title={
          <ContentEditable
            tagName="span"
            html={description}
            className={classNames(classes.itemTitleSpan)}
            onBlur={(e) => handleEditTodo(e.currentTarget.innerText.trim())}
          />
        }
      />
    </Card>
  );
}

TaskItem.propTypes = {
  id: PropTypes.string.isRequired,
  description: PropTypes.string,
  completed: PropTypes.bool.isRequired,
};

TaskItem.defaultProps = {
  description: "New task",
};
export default TaskItem;
