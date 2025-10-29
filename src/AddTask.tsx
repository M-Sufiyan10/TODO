import React from "react";
interface AddTaskType {
  handleText: (e:React.ChangeEvent<HTMLInputElement>) => void;
  handleTask:()=>void
  text:string
}
const AddTask = ({ handleText,handleTask ,text}: AddTaskType) => {
  return (
    <>
      <div className="flex items-center gap-3 w-full">
        <div className="flex-1">
          <input
            className="w-full px-4 py-3 rounded-xl bg-white text-black placeholder:text-neutral-500 border border-black border-solid shadow-sm outline-none focus:ring-2 focus:ring-sky-400"
            type="text"
            value={text}
            placeholder="Add a new task"
            onChange={handleText}
            
          />
        </div>
        <div>
          <button
            onClick={handleTask}
            className="px-5 py-3 rounded-xl bg-gradient-to-br from-sky-500 via-sky-600 to-blue-600 text-white font-semibold shadow-md hover:shadow-lg hover:brightness-110 active:scale-[0.98] transition-all border border-white/10"
          >
            Add
          </button>
        </div>
      </div>
    </>
  );
};

export default AddTask;
