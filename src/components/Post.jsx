import { Button, Card, CardActions, CardActionArea, CardContent, CardMedia, makeStyles, Typography } from "@material-ui/core";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getPosts } from "../redux/apiCalls";


const useStyles = makeStyles((theme)=>({
    card:{
        marginBottom: theme.spacing(5),
    },
    media: {
        height: 250,
        [theme.breakpoints.down("sm")]: {
            height: 150,
        },
    },
}));;


const Post = ({postman}) => {
    // const dispatch = useDispatch();
    // const poster = useSelector((state) => state.post.posts)
    // const [post, setPost] = useState([])
    

    // useEffect(() => {
    //     const getPost = async () => {
    //         try {
    //             const res = await axios.get("https://api.newscatcherapi.com/v2/search?q='Elon musk'&sources=businessinsider.com,businessjournaldaily.com,businessreport.com&page_size=10", {
    //                 headers: {
    //                     "x-api-key": "YKn5QEGhYTnjI-IZDFCKTNRw9gjsEvmpS1M4R89akCQ",
    //                     "Retry-After": 3600,
    //                 }
    //             });
                
    //             setPost(res.data);
    //             console.log(res.data);
    //         } catch (err) {
    //             console.log(err);
    //         }
    //     }
    //     getPost();
    // },[])

    // useEffect(() => {
    //     getPosts(dispatch);
        
    // },[dispatch])

  const  classes = useStyles();
  return (
    
  <Card className={classes.card}>
  
    <CardActionArea>
    
    <CardMedia 
            className={classes.media}
            image="https://images.pexels.com/photos/1647116/pexels-photo-1647116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            title="My Post"
        />
        <CardContent>
            <Typography gutterBottom variant="h5">My First</Typography>
              <Typography variant="body2"> 
            Lorem ipsum dolor sit amet, diam omittam singulis mea ne, ad sit case appetere. Vitae viderer molestie his ut. Quo quod iriure noluisse ut, sit id bonorum assentior. Duo utamur inermis cu, ne ullamcorper deterruisset vis, ut per vidit alienum. No molestiae voluptatum disputando mei, vis in nostrum apeirian. Lorem ipsum dolor sit amet, diam omittam singulis mea ne, ad sit case appetere. Vitae viderer molestie his ut. Quo quod iriure noluisse ut, sit id bonorum assentior. Duo utamur inermis cu, ne ullamcorper deterruisset vis, ut per vidit alienum. No molestiae voluptatum disputando mei, vis in nostrum apeirian.
            </Typography>
        </CardContent>
    </CardActionArea>
    <CardActions>
        <Button size="small" color="primary">Share</Button>
        <Button size="small" color="primary">Learn More</Button>
    </CardActions>
  </Card>);
};

export default Post;

// articles[0].title