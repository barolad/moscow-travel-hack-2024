"use client";

import { Icons } from "@/shared/assets/icons";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { getApiV1ToursHot } from "@/shared/api";

const HotTours = () => {
  const { data: hotTours } = useQuery({
    queryKey: ["hot-tours"],
    queryFn: () => getApiV1ToursHot(),
  });
  return (
    <>
      <div className="container space-y-[32px]">
        <h2 className="font-pg text-[24px]">Рекомендованные туры</h2>
        <div>
          {hotTours?.data?.map((tour) => (
            <div
              className="h-[276px] w-[184px] relative rounded-[16px] overflow-hidden"
              key={tour.id}
            >
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
                <p className="font-medium text-white/80 text-[12px]">
                  от 1000 ₽
                </p>
              </div>
              <Image
                src="/Rectangle-6274-3.webp"
                alt=""
                className="object-cover z-0"
                fill
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HotTours;
