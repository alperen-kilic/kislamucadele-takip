import React from "react";
import { PieChart } from "react-minimal-pie-chart";

type Props = {
  title: string;
  tumYollar: number;
  acikYol: number;
};

const GraphCard = ({ title, tumYollar, acikYol }: Props) => {
  return (
    <div>
      <p className="text-3xl xl:text-4xl">{title}</p>
      <div className="flex justify-center space-x-8 text-6xl lg:text-5xl xl:text-7xl mt-2 mb-6">
        <p className="text-[#3aa500]">{acikYol}</p>
        <p className="text-[#e50202]">{tumYollar - acikYol}</p>
      </div>
      <PieChart
        className="min-h-fit max-h-40 2xl:max-h-60 mt-5 mb-5"
        lineWidth={25}
        labelStyle={{
          fontSize: "25px",
          fill: "#fff",
        }}
        labelPosition={0}
        label={() => `%${((acikYol / tumYollar) * 100).toFixed()}`}
        data={[
          { title: "Açık", value: acikYol, color: "#3aa500" },
          { title: "Kapalı", value: tumYollar - acikYol, color: "#e50202" },
        ]}
      />
    </div>
  );
};

export default GraphCard;
