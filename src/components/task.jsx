export const Task = (props) => {
  return (
    <div
      className={`w-[345px] h-[62px] bg-gray-50 rounded-md flex justify-between px-4 items-center`}
    >
      <div className="flex gap-2.5 items-center">
        <input
          checked={props.isCompleted}
          type="checkbox"
          className={`w-5 h-5 bg-white my-[5px]`}
        ></input>
        <p
          className={`text-black text-sm ${
            props.isCompleted && "line-through"
          }`}
        >
          {props.taskName}
        </p>
      </div>
      {props.isCompleted && (
        <button
          className={`text-red-500 text-sm bg-red-50 rounded-[6px] py-[6.5px] px-3`}
        >
          Delete
        </button>
      )}
    </div>
  );
};
