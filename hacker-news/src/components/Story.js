import React, { useEffect, useState } from "react";
import { storyIds } from "../services/hnApi";

const Story = () => {
  const [storyId, setStoryId] = useState([]);

  useEffect(() => {
    storyIds().then((data) => data && data.url && setStoryId(data));
    console.log(storyId);
  }, []);

  return <div></div>;
};

export default Story;
