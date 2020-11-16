import React from "react";
import {
  Grid,
  Box,
  TextField,
  InputLabel,
  FormControl,
  MenuItem,
  Select,
  Button,
  Fab,
  Container,
  makeStyles,
  Typography,
  Card,
  CardHeader,
  IconButton,
  Chip,
  AppBar,
  Toolbar
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import DoneIcon from "@material-ui/icons/Done";
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
  card_root: {
    marginTop:"30px",
    width:"100%"
  },
  cardHeader_root:{
   textAlign:"left" 
  }
});
function Main(props){
    const classes = useStyle();
    return(
        <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop:"200px"
        }}
      >
        <Grid  xl="3" lg="5" md="6" sm="12" xs="12">
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
                Todos (10)
              </Typography>
              
            </Toolbar>
          </AppBar>
          <Container className={classes.container_root}>
          <Box component="div">
            <Grid container direction="row" xs="12" lg="12" md="12" xl="12" justify="center" spacing={1}>
              {/* <Grid item>
                <Fab size="large" color="primary" aria-label="add">
                  <AddIcon/>
                </Fab>
              </Grid> */}
              <Grid xs="6" lg="8" item>
                <TextField
                  style={{width:"100%"}}
                  id="search-field"
                  label="Add a todo"
                  placeholder="Write a todo then hit Enter"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs="6" lg="4">
              <FormControl variant="outlined">
                <InputLabel id="filter-select-label">Filter</InputLabel>
                  <Select
                    labelId="filter-select-label"
                    id="filter-select"
                    // value={10}
                    // onChange={handleChange}
                    label="Filter"
                    className={classes.filterSelect_root}
                  >
                    <MenuItem value="all">All</MenuItem>
                    <MenuItem value="completed">Completed</MenuItem>
                    <MenuItem value="incompleted">Incompleted</MenuItem>
                  </Select>
              </FormControl>
              </Grid>
            </Grid>
          </Box>
          <Box component="div" m={1}>
          <Card className={classes.card_root}>
            <CardHeader
              action={
                <>
                  <IconButton aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                  <Chip label="Completed" deleteIcon={<DoneIcon />} onDelete={()=>null} />
                </>
              }
              className={classes.cardHeader_root}
              title="First task"
            />
          </Card>
          </Box>
          </Container>
        </Grid>
      </div>
    );
}

export default Main;



