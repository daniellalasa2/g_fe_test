import React from "react";
import {useSelector} from "react-redux";
import {Grid,Box,Container,makeStyles} from "@material-ui/core";
import {AddField,Filter,HeaderBar,TaskItem} from "../../components";

const useStyle = makeStyles({
  filterSelect_root:{
    width:"200px"
  },
  container_root:{
    backgroundColor:"#e0e0e0",
    borderRadius:"5px",
    minHeight:"500px",
    padding:"30px 10px 10px 10px",
  },
  main_root:{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop:"20px"
  }
});

function Main(props){
    const {todos,filter} = useSelector(store => store);
    const classes = useStyle();
    const generateTodoItemsFromTodosList = (_todos)=>{
      let filteredTodos = Array.from(_todos);
      if(filter.filter !== "all"){
        const completedStatus = filter.filter === "completed";
        filteredTodos = filteredTodos.filter(item=>item.completedStatus === completedStatus);
      }
      return filteredTodos.map(item => <TaskItem key={`TaskItem${item.id}`} id={item.id} title={item.title} completedStatus={item.completedStatus}/>);
    };
    return(
      <>
      <HeaderBar title="Todos"/>
      <div className={classes.main_root}>
        <Grid>
          <Container className={classes.container_root}>
          <Box component="div">
            <Grid container direction="row" justify="center" spacing={1}>
              <Grid item xs={6} lg={8}>
               <AddField />
              </Grid>
              <Grid item xs={6} lg={4}>
                <Filter />
              </Grid>
            </Grid>
          </Box>
          <Box component="div" m={1}>
            {generateTodoItemsFromTodosList(todos)}
          </Box>
          </Container>
        </Grid>
      </div>
      </>
    );
}

export default Main;



