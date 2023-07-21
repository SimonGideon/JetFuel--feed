import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFeeds } from "../features/feeds/feedsSlice";

const Feeds = () => {
    const dispatch = useDispatch();
    const feeds = useSelector((state) => state.feeds);
    
    React.useEffect(() => {
        dispatch(getFeeds());
    }, [dispatch]);
    
    return (
        <div>
        <h1>Feeds</h1>
        {feeds.map((feed) => (
            <div key={feed.id}>
            <h2>{feed.campaign_name}</h2>
            <p>{feed.pay_per_install}</p>
            </div>
        ))}
        </div>
    );
    }

    export default Feeds;