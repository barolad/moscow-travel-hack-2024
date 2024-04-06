import Header from "@/components/header";
import Image from "next/image";
import { Icons } from "@/shared/assets/icons";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import SearchBlock from "@/components/search-block";

const Tours = () => {
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
      <div className="container grid gap-y-[24px] mb-[124px]">
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
      <div className="container">
        <div className="h-[48px] flex items-center justify-between">
          <button>Популярные</button>
          <p className="text-[#a6a6a6] text-[16px]">Найдено 598 туров</p>
        </div>
        <div className="h-[40px] w-full" />
        <div className="grid grid-cols-3 gap-[24px]">
          {Array.from({ length: 10 }).map(() => (
            <div className="rounded-[20px] overflow-hidden bg-[#f5f5f5]">
              <div className="h-[238px] w-full relative">
                <div className="absolute top-[16px] inset-x-[16px] h-[40px] flex justify-between items-center">
                  <div className="size-[40px] z-20 rounded-[8px] bg-[#007470] flex items-center justify-center">
                    <p className="text-[12px] text-white font-medium">8.8</p>
                  </div>
                  <div className="size-[40px] z-30 text-white rounded-[8px] backdrop-blur-sm overflow-hidden bg-[#1d1d1d]/30 flex items-center justify-center">
                    <Icons.heart className="fill-none size-[24px] text-white" />
                  </div>
                </div>
                <div className="absolute z-20 top-0 left-0 size-full duration-150 cursor-auto hover:cursor-pointer hover:opacity-100 opacity-0">
                  <div className="absolute bottom-0 inset-x-0 h-[50px] bg-black/60 flex items-center justify-center">
                    <p className="text-white text-[16px]">Быстрый просмотр</p>
                  </div>
                </div>
                <Image
                  src="/Rectangle-6274-3.webp"
                  alt=""
                  className="object-cover z-0"
                  fill
                />
              </div>
              <div className="p-[16px] flex flex-col items-center justify-between h-[206px]">
                <div className="gap-y-[8px] flex flex-col">
                  <h4 className="line-clamp-2 text-[20px] font-pg leading-tight">
                    Две столицы: Москва — Санкт-Петербург «Семейные каникулы»
                  </h4>
                  <div className="flex flex-wrap gap-x-[12px] gap-y-[4px] text-[12px]">
                    <div className="inline-flex items-center gap-1">
                      <Icons.mapPin className="size-[16px] fill-none" />
                      Санкт-Петербург
                    </div>
                    <div className="inline-flex items-center gap-1">
                      <Icons.clockFastForward className="size-[16px] fill-none" />
                      2 ночи
                    </div>
                    <div className="inline-flex items-center gap-1">
                      <Icons.mountains className="size-[16px] fill-none" />
                      Тур
                    </div>
                    <div className="inline-flex items-center gap-1">
                      <Icons.openBook className="size-[16px] fill-none" />
                      Автобусный, пешеходный
                    </div>
                  </div>
                </div>
                <Button className="h-[48px] w-full flex flex-col">
                  <p className="font-medium leading-tight text-[16px]">
                    от 45 660 ₽
                  </p>
                  <p className="font-medium text-[#1d1d1d]/50 text-[12px] leading-tight">
                    Купить билеты
                  </p>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="h-[40px] w-full" />
      <div className="container space-y-[32px]">
        <h2 className="font-pg text-[24px]">Рекомендованные туры</h2>
        <div>
          <div className="h-[276px] w-[184px] relative rounded-[16px] overflow-hidden">
            <div className="absolute top-[16px] inset-x-[16px] h-[40px] flex justify-between items-center">
              <div className="size-[40px] z-20 rounded-[8px] bg-[#007470] flex items-center justify-center">
                <p className="text-[12px] text-white font-medium">8.8</p>
              </div>
              <div className="size-[40px] z-30 text-white rounded-[8px] backdrop-blur-sm overflow-hidden bg-[#1d1d1d]/30 flex items-center justify-center">
                <Icons.heart className="fill-none size-[24px] text-white" />
              </div>
            </div>
            <div className="absolute z-20 bottom-0 left-0 h-[160px] w-full bg-gradient-to-t from-black" />
            <div className="absolute z-30 bottom-0 left-0 h-[104px] w-full px-[12px] pt-[20px]">
              <p className="text-white font-semibold line-clamp-2 mb-[4px]">
                Домашняя коллекция бла бла бла
              </p>
              <p className="font-medium text-white/80 text-[12px]">от 1000 ₽</p>
            </div>
            <Image
              src="/Rectangle-6274-3.webp"
              alt=""
              className="object-cover z-0"
              fill
            />
          </div>
        </div>
      </div>
      <div className="h-[40px] w-full" />
      <Footer />
    </div>
  );
};

export default Tours;
