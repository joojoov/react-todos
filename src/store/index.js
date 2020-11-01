import { createStore } from "redux";

function reducer(state = {
  data: [
    {
      id: 0,
      content: "唱歌",
      done: false,
      deleted: false
    },
    {
      id: 1,
      content: "跳舞",
      done: false,
    },
    {
      id: 2,
      content: "Rap",
      done: false,
      deleted: false
    },
    {
      id: 3,
      content: "打篮球",
      done: false,
      deleted: false
    }
  ]
}, action) {
  let nowData = [...state.data];
  switch (action.type) {
    case "ADD":
      // 添加 todo
      return {
        data: [...nowData, {
          id: Date.now(),
          content: action.content,
          done: false,
          deleted: false
        }]
      }

    case "DONE":
      // 修改 todo 状态
      nowData.forEach((item, index) => {
        // 通过 id 确认该条数据
        if (item.id === action.id) {
          nowData[index] = {
            ...item,
            done: action.done
          }
        }
      })
      // 记得 return
      return { data: nowData };

    case "DELETE":
      // 修改为 deleted 状态
      nowData.forEach((item, index) => {
        // 通过 id 确认该条数据
        if (item.id === action.id) {
          nowData[index] = {
            ...item,
            deleted: true
          }
        }
      })
      // 页面上删除->过滤展示点击删除的数据
      nowData = nowData.filter(item => item.id !== action.id);
      return {
        data: nowData
      }

    case "DELETEDONE":
      // 修改为 deleted 状态
      nowData.forEach((item, index) => {
        // 通过 id 确认该条数据
        if (item.done === true) {
          nowData[index] = {
            ...item,
            deleted: true
          }
        }
      })
      // 页面上删除已完成
      nowData = nowData.filter(item => !item.done);
      return {
        data: nowData
      }

    case "EDIT":
      // 提交编辑
      nowData.forEach((item, index) => {
        // 通过 id 确认该条数据
        if (item.id === action.id) {
          nowData[index] = {
            ...item,
            content: action.content
          }
        }
      })
      return {
        data: nowData
      }
  }

  return state;
}
const store = createStore(reducer);
export { store };
