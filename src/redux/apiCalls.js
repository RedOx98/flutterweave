import axios from "axios";
import { getPostStart, getPostSuccess, getPostFailure } from "./postRedux";

export const getPosts = async (dispatch) => {
    dispatch(getPostStart());
    try {
        const res = await axios.get("https://api.newscatcherapi.com/v2/search?q='Elon musk'&sources=businessinsider.com,businessjournaldaily.com,businessreport.com&page_size=10", {
            headers: {
                "x-api-key": "YKn5QEGhYTnjI-IZDFCKTNRw9gjsEvmpS1M4R89akCQ",
                "Retry-After": 3600,
            }
        });
        dispatch(getPostSuccess(res.data));
        console.log(res.data);
    } catch (err) {
        dispatch(getPostFailure());
    }
}