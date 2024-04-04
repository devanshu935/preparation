import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const [toDos, setToDos] = useState([]);
  const [text, setText] = useState('');

  const handleSubmit = () => {
    const newToDo = {
      text,
      isCompleted: false
    }
    setToDos([...toDos, newToDo]);
  }

  const toggleToDo = (index) => {
    const list = [...toDos];
    list[index].isCompleted = !list[index].isCompleted;
    setToDos(list);
  }

  return (
    <>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleSubmit}>Create ToDo</button>
      <br />
      <ToDos  tasks= {toDos} toggleToDo={toggleToDo}/>
    </>
  );
}

function ToDos({tasks, toggleToDo}){
  return (
    <>
      {tasks.map((task, index) => (
        <div key={index}>{task.text}
          <button onClick={() => toggleToDo(index)}>{task.isCompleted? 'Done' : 'Pending'}</button>
        </div>
      ))}
    </>
  );
}

export default App;
