import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  
  // Extract the properties from props:
  const { id, slug, title } = props;
  
  return (
    <div className="topic-list__item">
      <span>{id}</span>
      <span>{slug}</span>
      <span>{title}</span>
    </div>
  );
};

export default TopicListItem;
