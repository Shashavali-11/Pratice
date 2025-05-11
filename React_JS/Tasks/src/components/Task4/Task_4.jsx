// import React, { useRef, useMemo, useState, useEffect } from 'react';
// import useTodos from './UseToDo';

// const FILTERS = {
//   ALL: 'ALL',
//   COMPLETED: 'COMPLETED',
//   PENDING: 'PENDING',
// };

// export default function Task_4() {
//   const { todos, addTodo, toggleTodo, removeTodo } = useTodos();
//   const [filter, setFilter] = useState(FILTERS.ALL);
//   const [editingId, setEditingId] = useState(null);
//   const [editText, setEditText] = useState('');

//   const inputRef = useRef();
//   const editInputRef = useRef();

//   useEffect(() => {
//     inputRef.current.focus(); // Auto-focus input
//   }, []);

  

//   const handleAddTodo = () => {
//     const value = inputRef.current.value.trim();

//     if (value) {
//       addTodo(value);
//       inputRef.current.value = '';
//       inputRef.current.focus();
//     }
//   };

//   const filteredTodos = useMemo(() => {
//     switch (filter) {
//       case FILTERS.COMPLETED:
//         return todos.filter(todo => todo.completed);
//       case FILTERS.PENDING:
//         return todos.filter(todo => !todo.completed);
//       default:
//         return todos;
//     }
//   }, [todos, filter]);

//   const handleUpdate = () => {
    

//   }
  
//   const handleEdit = (id, title) => {
//     setEditingId(id);
//     setEditText(title);
    

//   }
  

//   const completedCount = useMemo(
//     () => todos.filter(todo => todo.completed).length,
//     [todos]
//   );
//   const pendingCount = todos.length - completedCount;



//   return (
//     <div style={{ padding: '2rem' }}>
//       <h2>📝 Todo Manager</h2>

//       {/* Input */}
//       <input ref={inputRef} placeholder="Enter new todo..." onKeyDown={(e) => {if(e.key === 'Enter'){handleAddTodo()}}} />&nbsp;&nbsp;&nbsp;
//       <button onClick={handleAddTodo}>Add Todo</button>

//       {/* Filters */}
//       <div style={{ margin: '1rem 0' }}>
//         <button onClick={() => setFilter(FILTERS.ALL)}>Show All</button>&nbsp;&nbsp;&nbsp;
//         <button onClick={() => setFilter(FILTERS.COMPLETED)}>Completed</button>&nbsp;&nbsp;&nbsp;
//         <button onClick={() => setFilter(FILTERS.PENDING)}>Pending</button>
//       </div>

//       {/* Todo List */}
//       <ul>
//         {filteredTodos.map(todo => (
//           <li key={todo.id}>

//                {editingId === todo.id ? (
//               <>
//                 <input
//                   ref={editInputRef}
//                   value={editText}
//                   onChange={(e) => setEditText(e.target.value)}
//                   onKeyDown={(e) => {
//                     if (e.key === 'Enter') handleUpdate(todo.id);
//                   }}
//                 />
//                 &nbsp;
//                 <button onClick={() => handleUpdate(todo.id)}>Save</button>
//                 &nbsp;
//                 <button onClick={() => setEditingId(null)}>Cancel</button>
//               </>
//             ) : (
//               <>
//                 <span style={{ textDecoration: todo.completed ? 'line-through' : '' }}>
//                   {todo.title}
//                 </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                 <button onClick={() => toggleTodo(todo.id)}>
//                   {todo.completed ? 'Mark Incomplete' : 'Mark Complete'}
//                 </button>&nbsp;&nbsp;&nbsp;
//                 <button onClick={() => handleEdit(todo.id, todo.title)}>Edit</button>&nbsp;&nbsp;&nbsp;
//                 <button onClick={() => removeTodo(todo.id)}>Delete</button>
//               </>
//             )}




//             {/* <span style={{ textDecoration: todo.completed ? 'line-through' : '' }}>
//               {todo.title}
//             </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//             <button onClick={() => toggleTodo(todo.id)}>
//               {todo.completed ? 'Mark Incomplete' : 'Mark Complete'}
//             </button>&nbsp;&nbsp;&nbsp;
//             <button onClick={handleEdit()} >Edit</button>&nbsp;&nbsp;&nbsp;
//             <button onClick={() => removeTodo(todo.id)}>Delete</button> */}
//           </li>
//         ))}
//       </ul>

//       {/* Stats */}
//       <p>Total: {todos.length} | Completed: {completedCount} | Pending: {pendingCount}</p>
//     </div>
//   );
// }






import React, { useRef, useMemo, useState, useEffect } from 'react';
import useTodos from './UseToDo';

const FILTERS = {
  ALL: 'ALL',
  COMPLETED: 'COMPLETED',
  PENDING: 'PENDING',
};

export default function Task_4() {
  const { todos, addTodo, toggleTodo, removeTodo, editTodo } = useTodos();
  const [filter, setFilter] = useState(FILTERS.ALL);
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState('');
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleAddTodo = () => {
    const value = inputRef.current.value.trim();
    if (value) {
      addTodo(value);
      inputRef.current.value = '';
      inputRef.current.focus();
    }
  };

  const handleEdit = (id, currentTitle) => {
    setEditingId(id);
    setEditingText(currentTitle);
  };

  const handleSaveEdit = (id) => {
    if (editingText.trim()) {
      editTodo(id, editingText.trim());
    }
    setEditingId(null);
    setEditingText('');
  };

  const filteredTodos = useMemo(() => {
    switch (filter) {
      case FILTERS.COMPLETED:
        return todos.filter(todo => todo.completed);
      case FILTERS.PENDING:
        return todos.filter(todo => !todo.completed);
      default:
        return todos;
    }
  }, [todos, filter]);

  const completedCount = useMemo(() => todos.filter(todo => todo.completed).length, [todos]);
  const pendingCount = todos.length - completedCount;

  return (
    // <div style={{ padding: '2rem', border: '1px solid #ccc', borderRadius: '80px', backgroundColor: 'skyblue' }}>
    <div
    style={{
    padding: '2rem',
    border: '1px solid #ccc',
    borderRadius: '20px',
    backgroundImage: 'url("https://png.pngtree.com/thumb_back/fh260/background/20230415/pngtree-blue-background-and-wallpaper-hd-image-victor-free-vector-image_2422840.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#fff',
    minHeight: 'auto'
  }}>
      <h2>📝 Todo Manager</h2>

      <input ref={inputRef} placeholder="Enter new todo..." onKeyDown={(e) => {if(e.key === 'Enter') handleAddTodo() } } />&nbsp;&nbsp;&nbsp;
      <button onClick={handleAddTodo}>Add Todo</button>

      <div style={{ margin: '1rem 0' }}>
        <button onClick={() => setFilter(FILTERS.ALL)}>Show All</button>&nbsp;&nbsp;&nbsp;
        <button onClick={() => setFilter(FILTERS.COMPLETED)}>Completed</button>&nbsp;&nbsp;&nbsp;
        <button onClick={() => setFilter(FILTERS.PENDING)}>Pending</button>
      </div>

      <ul>
        {filteredTodos.map(todo => (
          <li key={todo.id} 
           style={{
    marginBottom: '10px',
    color: 'white',
    padding: '10px',
    borderRadius: '25px',
    paddingTop: '10px',
    paddingBottom: '20px',
    // background: 'linear-gradient(-45deg, white, #2575fc, gray, #6a82fb)',
    backgroundSize: '300% 300%',
    animation: 'gradientMove 6s ease infinite'
  }}
          >
            {editingId === todo.id ? (
              <>
                <input
                  value={editingText}
                  onChange={e => setEditingText(e.target.value)}
                  onKeyDown={e => { if (e.key === 'Enter') handleSaveEdit(todo.id); }}
                />&nbsp;&nbsp;&nbsp;
                <button onClick={() => handleSaveEdit(todo.id)}>Save</button>&nbsp;&nbsp;&nbsp;
                <button onClick={() => setEditingId(null)}>Cancel</button>&nbsp;&nbsp;&nbsp;
              </>
            ) : (
              <>
                <span style={{ textDecoration: todo.completed ? 'line-through' : '' }}>
                  {todo.title}
                </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={() => toggleTodo(todo.id)}>
                  {todo.completed ? 'Mark Incomplete' : 'Mark Complete'}
                </button>&nbsp;&nbsp;&nbsp;
                <button onClick={() => handleEdit(todo.id, todo.title)}>Edit</button>&nbsp;&nbsp;&nbsp;
                <button style={{background:'red' }} onClick={() => removeTodo(todo.id) }>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>

      <p>Total: {todos.length} | Completed: {completedCount} | Pending: {pendingCount}</p>
    </div>
  );
}
