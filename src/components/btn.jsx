export const Btn = (props) => {
  console.log(props);
  return (
    <div>
      <button className={`rounded-[6px] ` + props.className}>
        {props.name}
      </button>
    </div>
  );
};

// style={{
//   backgroundColor: props.bg,
//   color: props.fontColor,
//   fontSize: props.fontSize,
//   paddingTop: props.paddingy,
//   paddingBottom: props.paddingy,
//   paddingLeft: props.paddingx,
//   paddingRight: props.paddingx,
//   lineHeight: props.lineHeight,
// }}
