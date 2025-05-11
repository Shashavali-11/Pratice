// import { useReducer, useCallback } from 'react';

// const initialState = [];

// function reducer(state, action) {
//   switch (action.type) {
//     case 'ADD':
//       return [...state, { id: Date.now(), title: action.title, completed: false }];
//     case 'TOGGLE':
//       return state.map(todo =>
//         todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
//       );
//     case 'REMOVE':
//       return state.filter(todo => todo.id !== action.id);
//     default:
//       return state;
//   }
// }

// export default function UseToDo() {
//   const [todos, dispatch] = useReducer(reducer, initialState);

//   const addTodo = useCallback((title) => {
//     dispatch({ type: 'ADD', title });
//   }, []);

//   const toggleTodo = useCallback((id) => {
//     dispatch({ type: 'TOGGLE', id });
//   }, []);

//   const removeTodo = useCallback((id) => {
//     dispatch({ type: 'REMOVE', id });
//   }, []);

//   return { todos, addTodo, toggleTodo, removeTodo };
// }




import { useReducer, useCallback } from 'react';

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return [...state, { id: Date.now(), title: action.title, completed: false }];
    case 'TOGGLE':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case 'REMOVE':
      return state.filter(todo => todo.id !== action.id);
    case 'UPDATE':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, title: action.newTitle } : todo
      );
    default:
      return state;
  }
}

export default function useTodos() {
  const [todos, dispatch] = useReducer(reducer, initialState);

  const addTodo = useCallback((title) => {
    dispatch({ type: 'ADD', title });
  }, []);

  const toggleTodo = useCallback((id) => {
    dispatch({ type: 'TOGGLE', id });
  }, []);

  const removeTodo = useCallback((id) => {
    dispatch({ type: 'REMOVE', id });
  }, []);

  const editTodo = useCallback((id, newTitle) => {
    dispatch({ type: 'UPDATE', id, newTitle });
  }, []);

  return { todos, addTodo, toggleTodo, removeTodo, editTodo };
}
