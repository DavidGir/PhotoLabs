import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = (props) => {
  const { topics, onTopicClick } = props;
 
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map(topicItem => (
        <TopicListItem
          key={topicItem.id}
          title={topicItem.title}
          onClick={() => onTopicClick(topicItem.id)}
        />
      ))}
    </div>
  );
};

export default TopicList;
