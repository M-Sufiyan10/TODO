import React from 'react'
import { FaTrash } from 'react-icons/fa'
interface DeleteProps
{
    handleDelete:()=>void
}

const Delete = ({handleDelete}:DeleteProps) => {
  return (
    <button onClick={handleDelete}>
        <FaTrash/>
    </button>
  )
}

export default Delete