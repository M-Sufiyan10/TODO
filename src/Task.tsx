import { useEffect, useRef, useState } from "react";
import Checkbox from "./Components/Checkbox";
import Delete from "./Components/Delete";
import Edit from "./Components/Edit";

export interface TaskProps {
  text: string;
  id: number;
  isChecked: boolean;
  onToggle?: () => void;
  onDelete?: () => void;
  onEdit?: (nextText: string) => void;
}

const Task = ({ text, isChecked, onToggle, onDelete, onEdit }: TaskProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState(text);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing) inputRef.current?.focus();
  }, [isEditing]);

  useEffect(() => {
    // keep draft in sync if list updates externally
    if (!isEditing) setDraft(text);
  }, [text, isEditing]);

  const commit = () => {
    const next = draft.trim();
    if (!next || next === text) {
      setIsEditing(false);
      setDraft(text);
      return;
    }
    onEdit!(next);
    setIsEditing(false);
  };

  const cancel = () => {
    setDraft(text);
    setIsEditing(false);
  };

  return (
    <div className="w-full rounded-xl bg-white/10 backdrop-blur border border-white/10 shadow-md p-3">
      <div className="flex items-center justify-between gap-3">
        <div className="shrink-0 w-7 h-7 rounded-full bg-white/20 border border-white/30 flex items-center justify-center text-xs text-white/80">
          <Checkbox isCheck={isChecked} onToggle={onToggle!} />
        </div>

        {!isEditing ? (
          <div
            className={`flex-1 truncate ${
              isChecked ? "opacity-70 line-through" : "text-white/90"
            }`}
          >
            {text}
          </div>
        ) : (
          <input
            ref={inputRef}
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") commit();
              if (e.key === "Escape") cancel();
            }}
            className="flex-1 px-3 py-2 rounded-lg bg-white text-black outline-none focus:ring-2 focus:ring-sky-400"
            placeholder="Edit task"
          />
        )}

        <div className="flex items-center gap-2">
          {!isEditing ? (            
              <Edit onEdit={() => setIsEditing(true)} />
          ) : (
            <>
              <button
                className="px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-200 border border-emerald-400/30 hover:bg-emerald-500/30 transition"
                onClick={commit}
              >
                Save
              </button>
              <button
                className="px-3 py-1 rounded-lg bg-slate-500/20 text-slate-200 border border-slate-400/30 hover:bg-slate-500/30 transition"
                onClick={cancel}
              >
                Cancel
              </button>
            </>
          )}

            <Delete handleDelete={onDelete!} />
        </div>
      </div>
    </div>
  );
};

export default Task;
