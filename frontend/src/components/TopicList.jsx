import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = (props) => {
  const { topics } = props;
 
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map(topicItem => (
        <TopicListItem
          key={topicItem.id}
          // id={topicItem.id}
          // slug={topicItem.slug}
          title={topicItem.title}
        />
      ))}
    </div>
  );
};

export default TopicList;
