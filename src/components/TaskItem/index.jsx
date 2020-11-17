import React from "react";
import {Card,CardHeader,IconButton,Chip,makeStyles} from "@material-ui/core"
import DeleteIcon from "@material-ui/icons/Delete";
import DoneIcon from "@material-ui/icons/Done";

const useStyle = makeStyles({
  card_root: {
    marginTop:"30px",
    width:"100%"
  },
  cardHeader_root:{
   textAlign:"left" 
  },
  cardHeader_action:{
    margin:"8px 8px 0 0"
  }
});

export default function AddField(props){
    const {title} = props;
    const classes = useStyle();
    return(
        <Card className={classes.card_root}>
            <CardHeader
            action={
                <div className={classes.cardHeader_action}>
                <IconButton aria-label="delete">
                    <DeleteIcon />
                </IconButton>
                <Chip label="Completed" deleteIcon={<DoneIcon />} onDelete={()=>null} />
                </div>
            }
            className={classes.cardHeader_root}
            title={title}
            />
        </Card>
    );

}