import MalzemeCard from "../features/card/MalzemeCard";

const MalzemeListe = () => {
  return (
    <div className="h-full grid xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-2 lg:gap-4 p-4">
      <MalzemeCard title="Sıcak İçecek" value={100} type={"ADET"} color="#3097bf" />
      <MalzemeCard title="Çorba" value={100} type={"KAP"} color="#3097bf" />
      <MalzemeCard title="Sıcak Yemek" value={100} type={"KAP"} color="#3097bf" />
      <MalzemeCard title="Kullanılan Tuz" value={100} type={"TON"} color="#3097bf" />
      <MalzemeCard title="Dağıtılan Tuz" value={50} type={"TON"} color="#3097bf" />
      <MalzemeCard title="Kurtarılan Araç" value={10} type={"ADET"} color="#3097bf" />
      <MalzemeCard title="Kurtarılan Vatandaş" value={30} type={"KİŞİ"} color="#3097bf" />
      <MalzemeCard title="Hasta Nakil" value={100} type={"KİŞİ"} color="#3097bf" />
      <MalzemeCard title="Yerinde Sağlık" value={100} type={"KİŞİ"} color="#3097bf" />
      <MalzemeCard title="Talep" value={500} type={"ADET"} color="#3097bf" />
      <MalzemeCard title="Mama" value={100} type={"TON"} color="#3097bf" />
      <MalzemeCard title="Müd. Edilen Hayvan" value={100} type={"ADET"} color="#3097bf" />
      <MalzemeCard title="Kurtarılan Hayvan" value={100} type={"ADET"} color="#3097bf" />
      <MalzemeCard title="Konaklama" value={100} type={"KİŞİ"} color="#3097bf" />
      <MalzemeCard title="Ring Seferi" value={100} type={"ADET"} color="#3097bf" />
      <MalzemeCard title="Devrilen Ağaç" value={500} type={"ADET"} color="#3097bf" />
      <MalzemeCard title="Uçan Çatı" value={500} type={"ADET"} color="#3097bf" />
      <MalzemeCard title="Devrilen Tabela" value={500} type={"ADET"} color="#3097bf" />
      <MalzemeCard title="Devrilen Direk" value={500} type={"ADET"} color="#3097bf" />
      <MalzemeCard title="Trafik Kazası" value={500} type={"ADET"} color="#3097bf" />
    </div>
  );
};

export default MalzemeListe;
