type Props = {
  title: string;
  value: number;
  color: string;
  type: string;
};

const MalzemeCard = ({ title, value, color, type }: Props) => {
  return (
    <div
      style={{ backgroundColor: color }}
      className="border-2 border-white rounded-md text-center text-white flex flex-col justify-between relative"
    >
      <div className="bg-[#1A76BC]">
        <h2 className="xl:text-2xl text-lg uppercase border-b-2 py-1">{title}</h2>
      </div>

      <p className="xl:text-6xl text-4xl font-bold">{value}</p>
      <p className="xl:text-lg mb-2">{type}</p>
    </div>
  );
};

export default MalzemeCard;
