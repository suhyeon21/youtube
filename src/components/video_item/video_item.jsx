import React from "react";
import styles from "./video_item.module.css";

const VideoItem = (props) => (
  <li className={styles.container}>
    <div className={styles.video}>
      <img
        src={props.video.snippet.thumbnails.medium.url}
        alt="video thumbnail"
      />

      <div>
        <p>{props.video.snippet.title}</p>
        <p>{props.video.snippet.channelTitle}</p>
      </div>
    </div>
  </li>
);

export default VideoItem;
