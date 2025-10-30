import React from 'react'
import { FaEdit } from 'react-icons/fa'
interface EditProps
{
    onEdit:()=>void
}
const Edit = ({onEdit}:EditProps) => {
  return (
    <button  className="px-3 py-1 rounded-lg bg-amber-400/20 text-amber-200 border border-amber-300/30 hover:bg-amber-400/30 transition" onClick={onEdit}>
        <FaEdit/>
    </button>
  )
}

export default Edit