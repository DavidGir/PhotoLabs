import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  
  // Extract the properties from props:
  const { title, onClick } = props;
  
  return (
    <div className="topic-list__item" onClick={onClick}>
      <span>{title}</span>
    </div>
  );
};

export default TopicListItem;
