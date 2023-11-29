type Props = {
  color: string;
  title: string;
  value: number;
};

const GenelBilgiCard = ({ color, title, value }: Props) => {
  return (
    <div>
      <p className="text-3xl xl:text-4xl">{title}</p>
      <p style={{ color: color }} className="text-6xl xl:text-7xl mt-2 mb-6">
        {value}
      </p>
    </div>
  );
};

export default GenelBilgiCard;
