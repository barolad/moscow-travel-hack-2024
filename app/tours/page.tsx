import Header from "@/components/header";
import Image from "next/image";
import Footer from "@/components/footer";
import SearchBlock from "@/components/search-block";
import Tours from "@/components/tours";
import HotTours from "@/components/hot-tours";

const ToursPage = () => {
  return (
    <div className="min-h-dvh">
      <Header />
      <div className="container">
        <div className="h-[24px] w-full" />
        <div className="text-[14px]">
          <span className="text-[#0370C7] hover:underline hover:cursor-pointer">
            Главная
          </span>{" "}
          /{" "}
          <span className="text-[#0370C7] hover:underline hover:cursor-pointer">
            Туры
          </span>
        </div>
        <div className="h-[24px] w-full" />
        <h1 className="text-[32px] font-pg">Туры</h1>
        <div className="h-[24px] w-full" />
      </div>
      <div className="container grid gap-y-[24px] mb-[70px]">
        <SearchBlock />
        <div className="w-full h-[140px] grid grid-cols-4 gap-x-[24px] font-pg">
          <div className="w-full relative rounded-[20px] overflow-hidden">
            <Image
              src="/Rectangle-6274.webp"
              alt=""
              className="object-cover"
              fill
            />
            <p className="absolute bottom-4 left-5 text-white">
              Горящие туры по России
            </p>
          </div>
          <div className="w-full relative rounded-[20px] overflow-hidden">
            <Image
              src="/Rectangle-6274-3.webp"
              alt=""
              className="object-cover"
              fill
            />
            <p className="absolute bottom-4 left-5 text-white">Москва</p>
          </div>
          <div className="w-full relative rounded-[20px] overflow-hidden">
            <Image
              src="/Rectangle-6274-1.webp"
              alt=""
              className="object-cover"
              fill
            />
            <p className="absolute bottom-4 left-5 text-white">Автобусные</p>
          </div>
          <div className="w-full relative rounded-[20px] overflow-hidden">
            <Image
              src="/Rectangle-6274-2.webp"
              alt=""
              className="object-cover"
              fill
            />
            <p className="absolute bottom-4 left-5 text-white">Экотуры</p>
          </div>
        </div>
      </div>
      <Tours />
      <div className="h-[40px] w-full" />
      <HotTours />
      <div className="h-[40px] w-full" />
      <Footer />
    </div>
  );
};

export default ToursPage;
