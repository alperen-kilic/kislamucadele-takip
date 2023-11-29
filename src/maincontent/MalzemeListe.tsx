import MalzemeCard from "../features/card/MalzemeCard";

const MalzemeListe = () => {
  return (
    <div className="h-full grid xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-2 lg:gap-4 p-4">
      <MalzemeCard title="Sıcak İçecek" value={100} type={"ADET"} color="#f87171" />
      <MalzemeCard title="Çorba" value={100} type={"KAP"} color="#ef4444" />
      <MalzemeCard title="Sıcak Yemek" value={100} type={"KAP"} color="#dc2626" />
      <MalzemeCard title="Kullanılan Tuz" value={100} type={"TON"} color="#f97316" />
      <MalzemeCard title="Dağıtılan Tuz" value={50} type={"TON"} color="#fb923c" />
      <MalzemeCard title="Kurtarılan Araç" value={10} type={"ADET"} color="#a3e635" />
      <MalzemeCard title="Kurtarılan Vatandaş" value={30} type={"KİŞİ"} color="#84cc16" />
      <MalzemeCard title="Hasta Nakil" value={100} type={"KİŞİ"} color="#16a34a" />
      <MalzemeCard title="Yerinde Sağlık" value={100} type={"KİŞİ"} color="#22c55e" />
      <MalzemeCard title="Talep" value={500} type={"ADET"} color="#4ade80" />
      <MalzemeCard title="S. Hayvanları Mama" value={100} type={"TON"} color="#7dd3fc" />
      <MalzemeCard title="Müd. Edilen Hayvan" value={100} type={"ADET"} color="#38bdf8" />
      <MalzemeCard title="Kurtarılan Hayvan" value={100} type={"ADET"} color="#0284c7" />
      <MalzemeCard title="Konaklama" value={100} type={"KİŞİ"} color="#6366f1" />
      <MalzemeCard title="Ring Seferi" value={100} type={"ADET"} color="#818cf8" />
      <MalzemeCard title="Devrilen Ağaç" value={500} type={"ADET"} color="#f472b6" />
      <MalzemeCard title="Uçan Çatı" value={500} type={"ADET"} color="#ec4899" />
      <MalzemeCard title="Devrilen Tabela" value={500} type={"ADET"} color="#e11d48" />
      <MalzemeCard title="Devrilen Direk" value={500} type={"ADET"} color="#f43f5e" />
      <MalzemeCard title="Trafik Kazası" value={500} type={"ADET"} color="#fb7185" />
    </div>
  );
};

export default MalzemeListe;
