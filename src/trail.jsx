// import { useState, useEffect } from 'react';

// const priorities = {
//   low: 'bg-green-200',
//   medium: 'bg-yellow-200',
//   high: 'bg-red-200',
// };

// const App = () => {
//   const initialTasks = JSON.parse(localStorage.getItem('tasks')) || [];
//   const [tasks, setTasks] = useState(initialTasks);
//   const [taskName, setTaskName] = useState('');
//   const [priority, setPriority] = useState('low');
//   const [filterPriority, setFilterPriority] = useState('all');

//   useEffect(() => {
//     localStorage.setItem('tasks', JSON.stringify(tasks));
//   }, [tasks]);

//   const addTask = () => {
//     if (taskName.trim() === '') return;

//     const newTask = {
//       id: tasks.length + 1,
//       name: taskName,
//       priority: priority,
//       completed: false,
//     };

//     setTasks([...tasks, newTask]);
//     setTaskName('');
//     setPriority('low');
//   };

//   const editTask = (taskId, newName, newPriority) => {
//     const updatedTasks = tasks.map((task) =>
//       task.id === taskId ? { ...task, name: newName, priority: newPriority } : task
//     );
//     setTasks(updatedTasks);
//   };

//   const deleteTask = (taskId) => {
//     const updatedTasks = tasks.filter((task) => task.id !== taskId);
//     setTasks(updatedTasks);
//   };

//   const toggleCompletion = (taskId) => {
//     const updatedTasks = tasks.map((task) =>
//       task.id === taskId ? { ...task, completed: !task.completed } : task
//     );
//     setTasks(updatedTasks);
//   };

//   const filterTasks = (taskList, filter) => {
//     if (filter === 'all') {
//       return taskList;
//     }
//     return taskList.filter((task) => task.priority === filter);
//   };

//   const totalTasks = tasks.length;
//   const completedTasks = tasks.filter((task) => task.completed).length;

//   return (
//     <div className="bg-gray-100">
//       <div className="bg-white p-8 rounded shadow-md">
//         <h1 className="text-2xl font-bold mb-4">Todo List</h1>
//         <div className="mb-4 flex space-x-2">
//           <input
//             type="text"
//             placeholder="Add a new task"
//             className="border p-2 flex-grow"
//             value={taskName}
//             onChange={(e) => setTaskName(e.target.value)}
//           />
//           <select
//             value={priority}
//             onChange={(e) => setPriority(e.target.value)}
//             className="border p-2"
//           >
//             <option value="low">Low</option>
//             <option value="medium">Medium</option>
//             <option value="high">High</option>
//           </select>
//           <button
//             onClick={addTask}
//             className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Add</button>
//         </div>

//         <div className="mb-4">
//           <label className="block">Filter by Priority:</label>
//           <select
//             value={filterPriority}
//             onChange={(e) => setFilterPriority(e.target.value)}
//             className="border p-2"
//           >
//             <option value="all">All</option>
//             <option value="low">Low</option>
//             <option value="medium">Medium</option>
//             <option value="high">High</option>
//           </select>
//         </div>
//         <ul>
//           {filterTasks(tasks, filterPriority).map((task) => (
//             <li
//               key={task.id}
//               className={`bg-white p-4 mb-2 flex justify-between items-center ${priorities[task.priority]}`}
//             >
//               <span className={task.completed ? 'line-through' : ''}>{task.name}</span>
//               <div className="space-x-2">
//                 <button
//                   onClick={() =>
//                     editTask(task.id, prompt('Edit task:', task.name), task.priority)
//                   }
//                   className="text-blue-500"
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => toggleCompletion(task.id)}
//                   className={task.completed ? 'text-gray-500' : 'text-green-500'}
//                 >
//                   {task.completed ? 'Undo' : 'Complete'}
//                 </button>
//                 <button
//                   onClick={() => deleteTask(task.id)}
//                   className="text-red-500"
//                 >
//                   Delete
//                 </button>
//               </div>
//             </li>
//           ))}
//         </ul>
//         <div className="mt-4 text-gray-700">
//           <p>Total Tasks: {totalTasks}</p>
//           <p>Completed Tasks: {completedTasks}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;

