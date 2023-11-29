import moment from "moment";
import "moment/locale/tr";
import { useEffect, useRef, useState } from "react";

const Footer = () => {
  const [saat, setSaat] = useState("");
  const saatRef = useRef(0);
  useEffect(() => {
    saatRef.current = setInterval(() => {
      setSaat(moment().format("DD/MM/YYYY HH:mm:ss"));
    }, 1000);

    return () => {
      if (saatRef.current) {
        clearInterval(saatRef.current);
      }
    };
  }, []);
  return (
    <div className="bg-indigo-950 flex-grow-0 flex-shrink basis-10 text-white text-xl flex items-center justify-end font-bold pr-5">
      {saat}
    </div>
  );
};

export default Footer;
