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
      className="border-2 text-center flex flex-col justify-evenly relative"
    >
      <h2 className="xl:text-2xl text-lg uppercase">{title}</h2>
      <p className="xl:text-6xl text-4xl font-bold">{value}</p>
      <p className="xl:text-lg">{type}</p>
    </div>
  );
};

export default MalzemeCard;
