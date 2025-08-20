import { Btn } from "@/components";
const Home = () => {
  return (
    <div className="flex justify-center mt-[60px]">
      <div
        className="w-[377px] h-[290px] py-6 px-4 bg-white 
      shadow-[0_0_12px_0_rgba(0,0,0,0.16)] rounded-[6px]"
      >
        <div className="w-[345px] h-[187px] mb-10 text-center">
          <h2 className="w-full text-xl leading-[28px] font-semibold mb-5">
            To-Do list
          </h2>
          <div className="flex gap-[6px]">
            <input
              className="w-[280px] h-[40px] rounded-[6px] border-[1px] 
            border-zinc-200 mb-5"
            ></input>
            <Btn
              py="11.5px"
              px="16px"
              size="14px"
              fontcolor="rgba(249,249,249,1)"
              bg="rgba(60,130,246,1)"
              name="Add"
            ></Btn>
          </div>
          <div className="flex gap-[6px] mb-8">
            <Btn
              py="8.5px"
              px="12px"
              size="12px"
              fontcolor="rgba(249,249,249,1)"
              bg="rgba(60,130,246,1)"
              name="All"
            ></Btn>
            <Btn
              py="8.5px"
              px="12px"
              size="12px"
              fontcolor="rgba(54,54,54,1)"
              bg="rgba(243,244,246,1)"
              name="Active"
            ></Btn>
            <Btn
              py="8.5px"
              px="12px"
              size="12px"
              fontcolor="rgba(54,54,54,1)"
              bg="rgba(243,244,246,1)"
              name="Completed"
            ></Btn>
          </div>
          <p
            className="w-full h-[17px] text-[14px] 
          leading-[17px] text-gray-500"
          >
            No tasks yet. Add one above!
          </p>
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
