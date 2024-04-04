import logo from './logo.svg';
import { useState } from "react";
import './App.css';


function App() {
  const [text, setText] = useState("");
  const [comments, setComments] = useState([]);

  const handleSubmit = () => {
    if (!text)
      return;
    setComments([...comments,
    {
      text,
      children: []
    }
    ]);
    setText('');
  };

  const addNestedReply = (replyText, path) => {
    console.log(path);
    let nestedPath = path.split('.');
    let commentsCopy = comments;
    console.log(commentsCopy);
    let updatedCopy = [...commentsCopy];
    console.log(updatedCopy);
    for (let i = 0; i < nestedPath.length; i++) {
      updatedCopy = updatedCopy[nestedPath[i]].children;
    }
    updatedCopy.push({ text: replyText, children: [] });
    setComments(commentsCopy);
  }

  return (
    <div style={{ margin: '0 450px' }}>
      <input type='text' value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleSubmit}>Comment</button>
      <CommentsBox comments={comments} setComments={setComments} addReplyOnComment={addNestedReply} />
    </div>
  );
}

function CommentsBox({ comments, addReplyOnComment }) {
  return (
    <>
      {comments.map((comment, index) => <CommentBlock key={index} comment={comment} addReplyOnComment={addReplyOnComment} path={`${index}`} />)}
    </>
  );
}

function CommentBlock({ comment, addReplyOnComment, path }) {
  const [replyText, setReplyText] = useState('');
  const [isReplyClicked, setIsReplyClicked] = useState(false);

  const addReply = (replyText, path) => {
    if (!replyText)
      return;
    addReplyOnComment(replyText, path);
    setIsReplyClicked(false);
  }

  return (
    <div style={{ border: '1px solid black', padding: '5px', }}>
      <div>{comment.text}</div>
      {!isReplyClicked && (
        <button type='button' onClick={() => setIsReplyClicked(true)}>
          Reply
        </button>
      )}
      {isReplyClicked && (
        <div>
          <input value={replyText} type='text' onChange={(e) => setReplyText(e.target.value)} />
          <button onClick={() => addReply(replyText, path)}>Add</button>
        </div>)}
      <button onClick={() => setIsReplyClicked(false)}>Delete</button>
      {comment.children.length > 0 &&
        comment.children.map((reply, index) =>
          <div style={{ margin: '0 15px' }}>
            <CommentBlock key={index} comment={reply} addReplyOnComment={addReplyOnComment} path={`${path}.${index}`} />
          </div>
        )}
    </div>
  );
}

export default App;
