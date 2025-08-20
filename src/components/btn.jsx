export const Btn = (props) => {
  console.log(props);
  return (
    <div>
      <button
        className={`rounded-[6px]`}
        style={{
          backgroundColor: props.bg,
          color: props.fontColor,
          fontSize: props.fontSize,
          paddingTop: props.py,
          paddingBottom: props.py,
          paddingLeft: props.px,
          paddingRight: props.px,
          lineHeight: props.lineHeight,
        }}
      >
        {props.name}
      </button>
    </div>
  );
};
