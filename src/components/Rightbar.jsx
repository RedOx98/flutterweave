import { Container, makeStyles, Typography, Avatar, ImageList, ImageListItem, Link, Divider } from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";


const useStyles = makeStyles((theme)=>({
  container: {
    paddingTop: theme.spacing(10),
    position: "sticky",
    top: 0,
  },
  title: {
    fonstSize: 16,
    fontWeight: 500,
    color: "#555",
  },
  link:{
    marginRight: theme.spacing(2),
    color: "#555",
    fonstSize: 16,
  },
}));;


const Rightbar = () => {
  const  classes = useStyles();
  return <Container className={classes.container}>
    <Typography className={classes.title} gutterBottom>Online Friends</Typography>
    <AvatarGroup max={6} style={{ marginBottom:20 }}>
    <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
    <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg" />
    <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/3.jpg" />
    <Avatar alt="Agnes Walker" src="" />
    <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/6.jpg" />
    <Avatar alt="Agnes Walker" src="https://material-ui.com/static/images/avatar/7.jpg" />
    <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/8.jpg" />
  </AvatarGroup>
  <Typography className={classes.title} gutterBottom>Gallery</Typography>
  <ImageList
  className={classes.ImageList}
  cols={3}
  rowHeight={100}
  style={{ marginBottom:20 }}
>
    <ImageListItem>
      <img
        src="https://images.unsplash.com/photo-1597645587822-e99fa5d45d25?w=242&h=242&fit=crop&auto=format"
        alt=""
      />
    </ImageListItem>
    <ImageListItem>
      <img
        src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=242&h=242&fit=crop&auto=format"
        alt=""
      />
    </ImageListItem>
    <ImageListItem>
      <img
        src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=242&h=121&fit=crop&auto=format"
        alt=""
      />
    </ImageListItem>
    <ImageListItem>
      <img
        src="https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=121&h=121&fit=crop&auto=format"
        alt=""
      />
    </ImageListItem>
    <ImageListItem>
      <img
        src="https://images.unsplash.com/photo-1567306301408-9b74779a11af?w=121&h=121&fit=crop&auto=format"
        alt=""
      />
    </ImageListItem>
    <ImageListItem>
      <img
        src="https://images.unsplash.com/photo-1567306301408-9b74779a11af?w=121&h=121&fit=crop&auto=format"
        alt=""
      />
    </ImageListItem>
</ImageList>

<Typography className={classes.title} gutterBottom>Categories</Typography>
<Link href="#" className={classes.link} variant="body2">Sport</Link>
<Link href="#" className={classes.link} variant="body2">Food</Link>
<Link href="#" className={classes.link} variant="body2">Music</Link>
<Divider flexItem style={{ marginBottom:5 }}/>
<Link href="#" className={classes.link} variant="body2">Movies</Link>
<Link href="#" className={classes.link} variant="body2">Science</Link>
<Link href="#" className={classes.link} variant="body2">Lifestyle</Link>
  </Container>;
};

export default Rightbar;