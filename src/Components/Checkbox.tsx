

// interface CheckBoxProps
// {
//     isCheck:boolean
// }

// const Checkbox = ({isCheck}:CheckBoxProps) => {
//   return (
//     <input type="checkbox" value="" onClick={()=>!isCheck} className={`isCheck ? : bg-green-500`}/>
//   )
// }

// export default Checkbox;



interface CheckBoxProps {
    isCheck: boolean;
    onToggle:()=>void
  }
  
  const Checkbox = ({ isCheck ,onToggle}: CheckBoxProps) => {

    console.log(isCheck)
    return (
      <input
        type="checkbox"
        onChange={onToggle}
        checked={isCheck}
        className={` cursor-pointer
          ${isCheck ? "bg-green-500 border-green-500" : "bg-white border-gray-400"}
        `}
      />
    );
  };
  
  export default Checkbox;
  