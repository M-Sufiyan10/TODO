import React from 'react'
import { FaEdit } from 'react-icons/fa'
interface EditProps
{
    onEdit:()=>void
}
const Edit = ({onEdit}:EditProps) => {
  return (
    <button onClick={onEdit}>
        <FaEdit/>
    </button>
  )
}

export default Edit