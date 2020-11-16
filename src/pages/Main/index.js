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
  CardContent,
  CardActions,
  IconButton,
  Chip
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import FavoriteIcon from "@material-ui/icons/Favorite";
import DeleteIcon from "@material-ui/icons/Delete";
import DoneIcon from "@material-ui/icons/Done";
//import { sizing } from '@material-ui/system';
const useStyle = makeStyles({
  select_root:{
    minWidth:"140px"
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
          <Container className={classes.container_root}>
          <Box component="div">
            <Grid container direction="row" spacing={5} justify="center" xs="12" alignItems="space-between">
              <Grid item>
                <Fab size="large" color="primary" aria-label="add">
                  <AddIcon/>
                </Fab>
              </Grid>
              <Grid item>
                <TextField
                  style={{minWidth:"300px"}}
                  id="search-field"
                  label="Search"
                  variant="outlined"
                  boxShadow={2}
                />
              </Grid>
              <Grid item>
              <FormControl variant="outlined">
                <InputLabel id="sort-select-label">Sort</InputLabel>
                  <Select
                    labelId="sort-select-label"
                    id="sort-select"
                    // value={10}
                    // onChange={handleChange}
                    label="Sort"
                    className={classes.select_root}
                  >
                    <MenuItem value=""><em>None</em></MenuItem>
                    <MenuItem value="asc">Ascending</MenuItem>
                    <MenuItem value="desc">Descending</MenuItem>
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
                  <IconButton aria-label="remove">
                    <DeleteIcon />
                  </IconButton>
                  <Chip label="Completed" deleteIcon={<DoneIcon />} onDelete={()=>null} />
                </>
              }
              className={classes.cardHeader_root}
              title="Shrimp and Chorizo Paella"
            />
            {/* <CardActions disableSpacing >
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="remove">
                <DeleteIcon />
              </IconButton>
            </CardActions> */}
          </Card>
          </Box>
          </Container>
        </Grid>
        {/* <Card>
          <CardContent>
          </CardContent>
          <CardActions>
            <Button color="primary" variant="contained" onClick={() => console.log("HI")}>
              Increment
            </Button>
            <Button
              color="secondary"
              variant="contained"
              onClick={() => console.log("HI")}
            >
              Decrement
            </Button>
          </CardActions>
        </Card> */}
      </div>
    );
}

export default Main;



