import React from "react";
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
    marginTop:"200px"
  }
});

function Main(props){
    const classes = useStyle();
    return(
        <div className={classes.main_root}>
        <Grid>
          <HeaderBar />
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
            <TaskItem title={"New task"}/>
          </Box>
          </Container>
        </Grid>
      </div>
    );
}

export default Main;



