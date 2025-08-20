export const Btn = (props) => {
  return (
    <div>
      <button
        className={`border-2 rounded-[6px]`}
        style={{ backgroundColor: props.bg, color: props.fontcolor }}
      >
        {props.name}
      </button>
    </div>
  );
};
