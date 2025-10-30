import React, { useState } from 'react'
import TaskCount from "./TaskCount";
import AddTask from "./AddTask";
import type { TaskProps } from "./Task";
import Task from "./Task";


const Todo = () => {

    const [tasks, setTasks] = useState<TaskProps[]>([]);
    const [text, setText] = useState("");
  
    const handleText = (e: React.ChangeEvent<HTMLInputElement>) => {
      setText(e.target.value);
      console.log("text ", text);
    };
  
    const addTask = () => {
      if (!text.trim()) return;
  
      const task = { id: Date.now(), text: text, isChecked: false };
      const newTask = [...tasks, task];
      console.log("NEW Task to be added : ", newTask);
      setTasks(newTask);
      setText("");
    };
    const toggle = (id: number) => {
      setTasks((tasks) =>
        tasks.map((task) =>
          task.id === id ? { ...task, isChecked: !task.isChecked } : task
        )
      );
    };
  
    const handleDelete = (id: number) => {
      setTasks((objs) => objs.filter((task) => task.id !== id));
    };
  
    const handleEdit = (id: number, text: string) => {
      setTasks((obj) =>
        obj.map((task) => (task.id === id ? { ...task, text: text } : task))
      );
    };
    const totalTask = tasks.length;
    const doneTask = tasks.filter((obj) => {
      return obj.isChecked;
    }).length;

  return (
      <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="mx-auto max-w-2xl px-4 py-10 space-y-6">
          <div>
            <TaskCount doneTask={doneTask} totalTask={totalTask} />
          </div>
          <div>
            <AddTask
              text={text}
              handleTask={addTask}
              handleText={(e) => handleText(e)}
            />
          </div>

          {tasks.map((task) => (
            <Task
            key={task.id}
              id={task.id}
              isChecked={task.isChecked}
              text={task.text}
              onToggle={() => toggle(task.id)}
              onDelete={() => handleDelete(task.id)}
              onEdit={(newtext)=>handleEdit(task.id, newtext)}
            />
          ))}
        </div>
      </div> 
  )
}

export default Todo