import GenelBilgiler from "./GenelBilgiler";
import MalzemeListe from "./MalzemeListe";

const Content = () => {
  return (
    <div className="text-black h-full grid grid-cols-10 bg-[#B4B4B4]">
      <div className="col-span-10 lg:col-span-2 bg-white">
        <GenelBilgiler />
      </div>
      <div className="lg:col-span-8 col-span-10">
        <MalzemeListe />
      </div>
    </div>
  );
};

export default Content;
