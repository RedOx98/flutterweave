import { Typography, AppBar, makeStyles, Toolbar, InputBase, alpha, Badge, Avatar } from "@material-ui/core";
import { Search, MailRounded, NotificationsNoneRounded, CancelRounded } from "@material-ui/icons";
import { useState } from "react";

const useStyles = makeStyles((theme)=>({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  search: {
    display: "flex",
    alignItems: "center",
  },
  LogoLg:{
    display: "none",
    [theme.breakpoints.up("sm")]:{
      display: "block",
    }
  },
  LogoSm:{
    display: "block",
    [theme.breakpoints.up("sm")]:{
      display: "none",
    }
  },
  search: {
    display: "flex",
    alignItems: "center",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  borderRadius: theme.shape.borderRadius,
  width: "50%",
  [theme.breakpoints.down("sm")]: {
    display: (props) => props.open ? "flex" : "none",
    width: "70%",
  },
},
input: {
  color: "white",
  marginLeft: theme.spacing(2),
},
cancel: {
  [theme.breakpoints.up("sm")]: {
    display: "none",
  }
},
searchButton: {
  marginRight: theme.spacing(2),
  [theme.breakpoints.up("sm")]: {
    display:"none",
  },
},
icons: {
  alignItems: "center",
    display: (props) => props.open ? "none" : "flex",
},
badge: {
  marginRight: theme.spacing(2),
},
}));


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const  classes = useStyles({ open });
  return <AppBar position="fixed">
    <Toolbar className={classes.toolbar}>
    <Typography variant="h6" className={classes.LogoLg}>
      redox Dev
</Typography>
<Typography variant="h6" className={classes.LogoSm}>
      REDOX
</Typography>
<div className={classes.search}>
  <Search/>
  <InputBase placeholder="Search...." className={classes.input}
  />
  <CancelRounded className={classes.cancel} onClick={() => setOpen(false)}/>
</div>
<div className={classes.icons}>
<Search className={classes.searchButton} 
onClick={() => setOpen(true)}
/>
<Badge badgeContent={4} color="secondary" className={classes.badge}>
  <MailRounded color="action" />
</Badge>
<Badge badgeContent={4} color="secondary" className={classes.badge}>
  <NotificationsNoneRounded color="action" />
</Badge>
<Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/1205033/pexels-photo-1205033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
</div>
    </Toolbar>
  </AppBar>;
};

export default Navbar;