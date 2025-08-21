export const Task = (props) => {
  return (
    <div
      className={`w-[345px] h-[62px] bg-gray-50 rounded-md flex justify-between p-[16px]`}
    >
      <input type="checkbox" className={`w-5 h-5 bg-white my-[5px]`}></input>
      <p className="text-black text-sm py-[6.5px]">{props.taskName}</p>
      <button
        className={`text-red-500 text-sm bg-red-50 rounded-[6px] py-[6.5px] px-[12px]`}
      >
        Delete
      </button>
    </div>
  );
};
