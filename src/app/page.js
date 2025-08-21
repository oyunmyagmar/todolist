import { Btn, Task } from "@/components";
const Home = () => {
  const task = {
    taskName: "ger teverleh",
    isCompleted: true,
    // isChecked: true,
  };
  return (
    <div className="flex justify-center mt-[60px]">
      <div className="w-[377px]  py-6 px-4 bg-white shadow-[0_0_12px_0_rgba(0,0,0,0.16)] rounded-[6px]">
        <div className="w-[345px]  mb-10 text-center">
          <h2 className="w-full text-xl leading-7 font-semibold mb-5">
            To-Do list
          </h2>
          <div className="flex gap-1.5 mb-5">
            <input className="w-[280px] h-[40px] rounded-[6px] border-[1px] border-zinc-200"></input>
            <Btn
              className="py-[11.5px] px-4 text-sm leading-[17px] text-[#F9F9F9] bg-blue-500"
              name="Add"
            ></Btn>
          </div>
          <div className="flex gap-1.5 mb-8">
            <Btn
              className="py-[8.5px] px-3 text-xs leading-[15px] text-[#F9F9F9] bg-blue-500"
              name="All"
            ></Btn>
            <Btn
              className="py-[8.5px] px-3 text-xs leading-[15px] text-[#363636] bg-gray-50"
              name="Active"
            ></Btn>
            <Btn
              className="py-[8.5px] px-3 text-xs leading-[15px] text-[#363636] bg-gray-50"
              name="Completed"
            ></Btn>
          </div>

          <div className="w-full bg-white flex flex-col items-center gap-[19px] py-5">
            <Task
              taskName={task.taskName}
              isCompleted={task.isCompleted}
            ></Task>
            <Task
              taskName={task.taskName}
              isCompleted={task.isCompleted}
            ></Task>
            <Task></Task>
            <Task></Task>
          </div>

          <div className="w-full h-[17px] text-sm leading-[17px] text-gray-500 mt-5">
            <p>No tasks yet. Add one above!</p>
          </div>
          <div className="w-full h-[17px] text-sm leading-[17px] mt-5">
            <p className=" text-gray-500">1 of 2 tasks completed</p>
            <p className="text-red-500">Clear completed</p>
          </div>
        </div>
        <div className="w-full h-[15px] flex justify-center gap-1 text-xs">
          <span className="text-gray-500">Powered by</span>
          <span className="text-[rgba(59,115,237,1)]">Pinecone academy</span>
        </div>
      </div>
    </div>
  );
};
export default Home;

// const defaultBtnProps = {
//   paddingy: "8.5px",
//   paddingx: "12px",
//   fontSize: "12px",
//   lineHeight: "15px",
//   fontColor: "rgba(54,54,54,1)",
//   bg: "rgba(243,244,246,1)",
//   name: "Button",
// };
