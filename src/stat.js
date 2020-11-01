import React from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux"

export default function Stat() {
  const data = useSelector(state => state.data);
  const { id, content, done } = data;
  // 已选中数据
  const doneData = data.filter(item => item.done
  );
  const dispatch = useDispatch();

  return <div id="todo-stats">
    <span className="todo-count">
      <span className="word">总数 </span><span className="number">{data.length} </span>
      <span className="word">已完成 </span><span className="number">{doneData.length} </span>
      <span className="word">待完成 </span><span className="number">{data.length - doneData.length} </span>
    </span>
    <span className="todo-clear">
      <a onClick={() => {
        dispatch({
          type: "DELETEDONE",
        })
      }}
      >删除已完成</a>
    </span>

  </div>
};
