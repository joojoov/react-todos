import React, { useState } from 'react';
import { useDispatch } from "react-redux"

export default function CreateTodo() {
  // 修改 content
  const [content, setConent] = useState("");
  const dispatch = useDispatch();

  return <div id="create-todo">
    <input
      id="new-todo"
      placeholder="What needs to be done?"
      autocomplete="off"
      type="text"
      value={content}
      onChange={({ target }) => {
        setConent(target.value)
      }}
      // 回车键添加
      onKeyDown={({ keyCode }) => {
        if (keyCode === 13 && content.trim()) {
          dispatch({
            type: "ADD",
            content
          });
          // 还原添加前状态
          setConent("");
        }
      }}
    /></div>
};
