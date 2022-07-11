import { Container, Fab, Tooltip, makeStyles, Modal, TextField, MenuItem, RadioGroup, FormControlLabel, Radio, FormLabel, Button } from "@material-ui/core";
import { AddRounded as AddIcon } from "@material-ui/icons";
import { useState } from "react";
// import { MuiAlert } from '@material-ui/lab/Alert/Alert';
import { Snackbar } from "@mui/material";



const useStyles = makeStyles((theme)=>({
    absolute: {
        position: "fixed",
        bottom: 20,
        right: 20,
    },
    container: {
        width: 500,
        height: 550,
        backgroundColor: "white",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        margin: "auto",
        [theme.breakpoints.down("sm")]: {
            width: "100vw",
            height: "100vh",
        }
    },
    form: {
        padding: theme.spacing(2),
    },
    item: {
        marginBottom: theme.spacing(3),
    },
}));

// function Alert(props, ref) {
//     return <MuiAlert elevation={6} variant="filled" {...props} />;
//   };  

const Add = () => {
  const  classes = useStyles();
  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);

  const handleClick = () => setOpen(true);

  const handleClickAlert = () => setOpenAlert(true);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenAlert(false);
  };


  return (
  <> <Tooltip title="Add" aria-label="add" onClick={handleClick}>
  <Fab color="primary" className={classes.absolute}>
    <AddIcon />
  </Fab>
</Tooltip>
<Modal open={open}>
    <Container className={classes.container}>
        <form className={classes.form} autoComplete="off">
            <div className={classes.item}>
            <TextField id="standard-basic" label="Title" size="sm" style={{width: "100%"}} />
            </div>
            <div className={classes.item}>
            <TextField 
                id="outlined-multiline-static"
                multiline
                rows={4}
                defaultValue="Tell your story..."
                variant="outlined"
                label="Description" 
                size="small" 
                style={{width: "100%"}} 
                />
            </div>
           
            <div className={classes.item}>
                <TextField select label="Visibility" value="Public">
                    <MenuItem value="Public">Public</MenuItem>
                    <MenuItem value="Private">Private</MenuItem>
                    <MenuItem value="Unlisted">Unlisted</MenuItem>
                </TextField>
            </div>
            <div className={classes.item}>
            <FormLabel component="legend">Who can comment?</FormLabel>
            <RadioGroup>
                <FormControlLabel 
                value="Everybody" 
                control={<Radio size="small"/>} 
                label="Everybody" 

                />
                <FormControlLabel 
                value="My Friends" 
                control={<Radio size="small"/>} 
                label="My Friends" 

                />
                <FormControlLabel 
                value="Nobody" 
                control={<Radio size="small"/>} 
                label="Nobody" 

                />
                <FormControlLabel 
                value="Custom" disabled 
                control={<Radio size="small"/>} 
                label="Custom {Premium}" 

                />
            </RadioGroup>
            </div>
            <div className={classes.item}>
                <Button 
                variant="outlined" 
                color="primary"
                style={{ marginRight: 20 }}
                onClick={() => setOpenAlert(true)}
                >Create</Button>
                <Button 
                variant="outlined" color="secondary"
                onClick={() => setOpen(false)}
                >Cancel</Button>
            </div>
        </form>
    </Container>
</Modal>
<Snackbar open={openAlert} autoHideDuration={4000} onClose={handleClose} message="Note archived" />
</>
  );
};

export default Add;