import GenelBilgiCard from "../features/card/GenelBilgiCard";
import GraphCard from "../features/card/GraphCard";

const GenelBilgiler = () => {
  return (
    <div className="text-center flex flex-col justify-evenly h-full">
      <GenelBilgiCard title="Araç Sayısı" color="#207BBE" value={217} key={0} />
      <GenelBilgiCard title="Görevli Personel" color="#2EAF9F" value={324} key={1} />
      <GraphCard title="Yollar" tumYollar={250} acikYol={175} key={2} />
    </div>
  );
};

export default GenelBilgiler;
