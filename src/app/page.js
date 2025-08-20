import { Btn } from "@/components";
const Home = () => {
  return (
    <div className="flex justify-center mt-[60px]">
      <div className="w-[377px] h-[290px] py-6 px-4 shadow-2xl/16 shadow-gray-900 rounded-[6px]">
        <div className="w-[345px] h-[187px] bg-blue-50 mb-10 text-center">
          <h2 className="w-full h-[28px] text-[20px] font-semibold mb-5">
            To-Do list
          </h2>
          <div className="flex gap-[6px]">
            <input className="w-[280px] h-[40px] border-1 rounded-[6px] mb-5"></input>
            <Btn fontcolor="white" bg="blue" name="Add"></Btn>
          </div>
          <div className="flex gap-[6px] mb-8">
            <Btn fontcolor="white" bg="blue" name="All"></Btn>
            <Btn fontcolor="black" bg="gray" name="Active"></Btn>
            <Btn fontcolor="black" bg="gray" name="Completed"></Btn>
          </div>
          <p className="w-full h-[17px]">No tasks yet. Add one above!</p>
        </div>
        <div className="h-[15px] bg-gray-50"></div>
      </div>
    </div>
  );
};
export default Home;
