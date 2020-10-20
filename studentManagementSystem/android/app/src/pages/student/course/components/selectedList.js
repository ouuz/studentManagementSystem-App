import React from 'react';
import Common from './common'

const selectedList = ({selectedList, deleteCourse}) => {

  return (
    <Common 
      desc="selectedList"
      list={selectedList}
      countDesc="已选课程列表"
      operator={deleteCourse}
      currentCount="4"
      titleBg={require("../img/graduation-cap-seamless-pattern.png")}
    />
  );
};

export default selectedList;