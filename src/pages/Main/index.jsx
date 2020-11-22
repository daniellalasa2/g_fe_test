import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Box, makeStyles } from "@material-ui/core";
import { AddField, Filter, HeaderBar, TaskItem } from "../../components";
import { setAllTodosWithApiCall } from "../../redux/todos/actions";
const useStyle = makeStyles((theme) => ({
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
    width: "auto",
  },
}));

function Main() {
  const { todos, filter } = useSelector((store) => store);
  const dispatchInitialTodosList = useDispatch();
  const classes = useStyle();
  // using localstate to handle inner proccesses inside the component
  const [listElements, setListElements] = useState([]);
  const [listCounter, setListCounter] = useState(0);

  useEffect(() => {
    dispatchInitialTodosList(setAllTodosWithApiCall());
  }, [useDispatch, useSelector]);

  // componentDidUpdate tracks filter prop
  useEffect(() => {
    const items = generateTodoItemsFromTodosList(todos);
    setListElements(items);
    setListCounter(items.length);
  }, [filter]);

  // componentDidUpdate tracks todos prop
  useEffect(() => {
    setListElements(generateTodoItemsFromTodosList(todos));
  }, [todos]);

  const generateTodoItemsFromTodosList = (_todos) => {
    // To prevent eventual mutation
    let filteredTodos = Array.from(_todos);

    // If filter is not the default ,then filter the list od DOMs based on selected filter
    if (filter.filter !== "all") {
      const completed = filter.filter === "completed";
      filteredTodos = filteredTodos.filter(
        (item) => item.completed === completed
      );
    }
    return filteredTodos.map((item) => (
      <TaskItem
        key={`TaskItem${item.id}`}
        id={item.id}
        description={item.description}
        completed={item.completed}
      />
    ));
  };

  return (
    <>
      <HeaderBar title="Todos" counter={listCounter} />
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
          <Box component="div">{listElements}</Box>
        </Grid>
      </div>
    </>
  );
}

// Prevent unnecessary renders based on specific situtation the updated list might be same as previous
export default React.memo(Main);
