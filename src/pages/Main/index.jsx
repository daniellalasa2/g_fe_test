import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Grid,
  Box,
  makeStyles,
  Snackbar,
  CircularProgress,
} from "@material-ui/core";
import { AddField, Filter, HeaderBar, TaskItem } from "../../components";
import { setAllTodosWithApiCall } from "../../redux/todos/actions";
import { Skeleton } from "@material-ui/lab";

const useStyle = makeStyles((theme) => ({
  skeleton_root: {
    marginTop: theme.spacing(3),
    borderRadius: "4px",
  },
  filterSelect_root: {
    width: "100%",
  },
  container_root: {
    backgroundColor: "#e0e0e0",
    minHeight: "80%",
    padding: theme.spacing(3),
    maxWidth: "800px",
  },
  main_root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: theme.spacing(3),
    flexDirection: "column",
    width: "auto",
  },
}));

function Main() {
  const state = useSelector((store) => store);
  const { filter } = state;
  const todos = state.todos.list;
  const networkStatus = state.todos.status;
  const networkError = state.todos.error;

  const dispatchInitialTodosList = useDispatch();
  const classes = useStyle();

  useEffect(() => {
    dispatchInitialTodosList(setAllTodosWithApiCall());
  }, []);

  const generateTodoItemsFromTodosList = () => {
    let filteredTodos = Array.from(todos); // To prevent eventual mutation
    let result = [];
    if (filteredTodos.length > 0) {
      if (filter.filter !== "all") {
        filteredTodos = filteredTodos.filter(
          (item) => item.completed === (filter.filter === "completed")
        );
      }
      result = filteredTodos.map((item) => (
        <TaskItem
          key={`TaskItem${item.id}`}
          id={item.id}
          description={item.description}
          completed={item.completed}
        />
      ));
      return result;
    }
    if (networkStatus === "pending" && filteredTodos.length === 0) {
      return generateSkeleton(3);
    }
  };

  const generateSkeleton = (numberOfChilds) => {
    const childArr = [];
    for (let i = 0; i < numberOfChilds; i++) {
      childArr.push(
        <Skeleton
          className={classes.skeleton_root}
          key={`skeleton${i}`}
          variant="rect"
          width={"100%"}
          height={"80px"}
        />
      );
    }
    return childArr;
  };
  return (
    <>
      <HeaderBar title="Todos" counter={todos.length} />
      <div className={classes.main_root}>
        <Grid container direction="column" className={classes.container_root}>
          <Box component="div">
            <Grid container direction="row" justify="center" spacing={1}>
              <Grid item xs={12} sm={6} md={8} lg={9}>
                <AddField />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Filter />
              </Grid>
            </Grid>
          </Box>
          <Box component="div">{generateTodoItemsFromTodosList()}</Box>
        </Grid>
        {todos.length > 0 && (
          <p style={{ color: "grey", fontSize: "13px" }}>
            Click on title of each task to edit
          </p>
        )}
        <Snackbar
          message="Error while saving changes, reloading ..."
          open={networkError}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          action={<CircularProgress size={25} color="secondary" />}
        />
      </div>
    </>
  );
}

// Prevent unnecessary renders based on specific situtation the updated list might be same as previous
export default React.memo(Main);
