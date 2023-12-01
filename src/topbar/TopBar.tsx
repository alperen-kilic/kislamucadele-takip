const TopBar = () => {
  return (
    <div className="bg-white py-8 flex justify-between px-4 md:px-16 flex-initial items-center">
      <img src="/kaymakamlik.png" alt="Beylikduzu" className="h-10 sm:h-14 md:h-20" />
      <h1 className="uppercase font-studio text-[#1A76BC] hidden lg:block text-3xl xl:text-5xl">
        Kışla Mücadele
      </h1>
      <img src="/beylikduzu.png" alt="Beylikduzu" className="h-10 sm:h-14 md:h-24" />
    </div>
  );
};

export default TopBar;
