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
        <Grid  xl="3" lg="5" md="6" sm="12" xs="12">
            <HeaderBar />
          <Container className={classes.container_root}>
          <Box component="div">
            <Grid container direction="row" xs="12" lg="12" md="12" xl="12" justify="center" spacing={1}>
              <Grid xs="6" lg="8" item>
               <AddField />
              </Grid>
              <Grid item xs="6" lg="4">
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



