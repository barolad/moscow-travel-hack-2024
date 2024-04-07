"use client";

import { Icons } from "@/shared/assets/icons";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { getApiV1Tours, getApiV1ToursHot } from "@/shared/api";
import { randomNumberInRange } from "@/lib/utils";
import Link from "next/link";

const HotTours = () => {
  const { data: hotTours } = useQuery({
    queryKey: ["tours"],
    queryFn: () => getApiV1Tours(),
  });
  return (
    <>
      <div className="container space-y-[32px]">
        <h2 className="font-pg text-[24px]">Рекомендованные туры</h2>
        <div className="flex flex-row gap-x-[8px] overflow-x-scroll">
          {hotTours?.data?.map((tour) => (
            <Link
              href={`/tours/${tour.id}`}
              className="h-[276px] min-w-[184px] relative rounded-[16px] overflow-hidden"
              key={tour.id}
            >
              <div className="absolute top-[16px] inset-x-[16px] h-[40px] flex justify-between items-center">
                <div className="size-[40px] z-20 rounded-[8px] bg-[#007470] flex items-center justify-center">
                  <p className="text-[12px] text-white font-medium">
                    {tour.rating}
                  </p>
                </div>
                <div className="size-[40px] z-30 text-white rounded-[8px] backdrop-blur-sm overflow-hidden bg-[#1d1d1d]/30 flex items-center justify-center">
                  <Icons.heart className="fill-none size-[24px] text-white" />
                </div>
              </div>
              <div className="absolute z-20 bottom-0 left-0 h-[160px] w-full bg-gradient-to-t from-black" />
              <div className="absolute z-30 bottom-0 left-0 h-[104px] w-full px-[12px] pt-[20px]">
                <p className="text-white font-semibold line-clamp-2 mb-[4px]">
                  {tour.title}
                </p>
                <p className="font-medium text-white/80 text-[12px]">
                  от {randomNumberInRange(1000, 8000)} ₽
                </p>
              </div>
              <Image
                src={tour.media[0].src}
                alt=""
                className="object-cover z-0"
                fill
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default HotTours;
