import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const dummyList = [
  {
    id: 1,
    author: "김소연",
    content: "하이1",
    emotion: 1,
    created_date: new Date().getDate(),
  },
  {
    id: 2,
    author: "임병욱",
    content: "하이2",
    emotion: 2,
    created_date: new Date().getDate(),
  },
  {
    id: 3,
    author: "최선호",
    content: "하이3",
    emotion: 3,
    created_date: new Date().getDate(),
  },
];

function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
