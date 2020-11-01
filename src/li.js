import React, { useRef, useStat, useEffect, useState } from "react";
import { useDispatch } from "react-redux"

export default function Li(props) {
  const { id, content, done } = props.data;
  const dispatch = useDispatch();
  // 添加 edit 状态，默认值 false
  let [edit, setEdit] = useState(false);
  let editText = useRef();
  // 存储编辑前的值
  const [editVal, setEditVal] = useState(content);
  useEffect(() => {
    // 监测编辑状态
    if (edit) {
      editText.current.focus();
    }
  }, [edit])
  // {edit ? "editingdisplay" : "display"}
  return <li className={edit ? "editing" : ""}>
    <div className={"todo " + (done ? "done" : "")}>
      <div className="display">
        <input
          className="check"
          type="checkbox"
          checked={done}
          onChange={({ target }) => {
            dispatch({
              type: "DONE",
              id,
              done: target.checked
            })
          }}
        />
        <div
          className="todo-content"
          onDoubleClick={() => {
            setEdit(true)
          }}
        >{content}</div>
        <span
          className="todo-destroy"
          onClick={() => {
            dispatch({
              type: "DELETE",
              id,
            })
          }}></span>


      </div>
      <div className="edit">
        <input
          ref={editText}
          onBlur={() => {
            // 不为空就提交
            if (editVal.trim()) {
              dispatch({
                type: "EDIT",
                id,
                content: editVal
              })
            } else {
              // 为空则恢复之前内容
              setEditVal(content)
            }
            setEdit(false);
          }}
          className="todo-input"
          type="text"
          value={editVal}
          onChange={({ target }) => {
            setEditVal(target.value)
          }}
        /></div>
    </div>
  </li>
};



