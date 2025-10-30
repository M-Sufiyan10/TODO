import React from 'react'
import { FaTrash } from 'react-icons/fa'
interface DeleteProps
{
    handleDelete:()=>void
}

const Delete = ({handleDelete}:DeleteProps) => {
  return (
    <button  className="px-3 py-1 rounded-lg bg-rose-500/20 text-rose-200 border border-rose-400/30 hover:bg-rose-500/30 transition" onClick={handleDelete}>
        <FaTrash/>
    </button>
  )
}

export default Delete