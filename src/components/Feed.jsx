import { Container, makeStyles } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import Post from "./Post";


const useStyles = makeStyles((theme)=>({
  container: {
    paddingTop: theme.spacing(10),
  },
}));;


const Feed = () => {
  const [postman, setPostman] = useState([])
    

    useEffect(() => {
        const getPost = async () => {
            try {
                const res = await axios.get("https://api.newscatcherapi.com/v2/search?q='Elon musk'&sources=businessinsider.com,businessjournaldaily.com,businessreport.com&page_size=10", {
                    headers: {
                        "x-api-key": "YKn5QEGhYTnjI-IZDFCKTNRw9gjsEvmpS1M4R89akCQ",
                        "Retry-After": 3600,
                    }
                });
                
                setPostman(res.data);
                console.log(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        getPost();
    },[])
  const  classes = useStyles();
  return (<Container className={classes.container}>
  {/* {
    postman.map((article) => ( */}
    <Post />
    {/* ))} */}
    <Post/>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
  </Container>
  )
}

export default Feed;