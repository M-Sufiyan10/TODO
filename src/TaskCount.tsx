

export interface TaskCountType {
  doneTask: number;
  totalTask: number;
}

const TaskCount = ({ doneTask, totalTask }: TaskCountType) => {
  return (
    <>
      <div className="counter-card mx-auto w-full rounded-2xl bg-white/10 backdrop-blur border border-white/10 shadow-xl p-5">
        <div className="flex items-center justify-between">
          <div className="text-2xl md:text-3xl font-semibold tracking-tight">
            TASKS
          </div>
          <div className="inline-flex items-center gap-2 text-sm md:text-base font-medium px-3 py-1 rounded-full bg-sky-500/20 text-sky-200 border border-sky-400/30">
            <span className="text-sky-300">Done</span>
            <span className="font-bold">{doneTask}</span>
            <span className="opacity-50">/</span>
            <span>{totalTask}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskCount;
