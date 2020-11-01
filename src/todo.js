import { useSelector } from "react-redux";
import React from 'react';
import Li from './li';

export default function Todo() {
  // 从 Redux 的 store 中提取数据
  const data = useSelector(state => state.data);
  return <ul id="todo-list">
    {
      // 生成 li
      data.map(item => <Li
        key={item.id}
        data={item}
      />)
    }
  </ul>
};

