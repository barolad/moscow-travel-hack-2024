"use client";

import { DialogContent } from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Clock, ClockIcon } from "lucide-react";

const FastCheckTourModal = ({ id }: { id: string }) => {
  return (
    <DialogContent className="p-0 h-[600px] w-[1064px] overflow-hidden">
      <div className="h-full flex flex-row">
        <Carousel className="w-[520px]">
          <CarouselContent className="h-[600px]">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="h-[600px]">
                <div className="p-1 relative h-[600px]">
                  <Image
                    src="/Rectangle-6274-3.webp"
                    alt=""
                    className="object-cover z-0"
                    fill
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious variant="default" />
          <CarouselNext variant="default" />
        </Carousel>
        <div className="w-[544px] h-full p-[24px]">
          <div className="flex flex-col space-y-[24px]">
            <div className="w-full flex justify-between">
              <p className="text-[24px] w-[392px] font-pg leading-tight">
                Две столицы: Москва — Санкт-Петербург «Семейные каникулы»
              </p>
              <div className="size-[40px] z-20 rounded-[8px] bg-[#007470] flex items-center justify-center">
                <p className="text-[12px] text-white font-medium">8.8</p>
              </div>
            </div>
            <div className="flex flex-row space-x-[24px]">
              <div className="inline-flex items-center space-x-[8px]">
                <ClockIcon className="size-[15px] text-[#9999a9]" />
                <p className="text-[12px]">6 ночей</p>
              </div>
              <div className="inline-flex items-center space-x-[8px]">
                <p className="text-[12px] text-[#9999a9]">Активность: </p>
                <p className="text-[12px]">Низкая</p>
              </div>
              <div className="inline-flex items-center space-x-[8px]">
                <p className="text-[12px] text-[#9999a9]">Комфорт: </p>
                <p className="text-[12px]">Выше среднего</p>
              </div>
            </div>
            <div>
              <p className="line-clamp-6">
                Тематическая образовательная программа для школьников Москвы и
                Московской области дает ребятам возможность познакомиться с
                современными тенденциями транспортной отрасли, а также помогает
                в развитии системного мышления и совершенствовании навыков
                командной работы. Дети побывают в центре профориентации, посетят
                знаменитый павильон «Космос» на ВДНХ и смогут попробовать себя в
                роли конструкторов будущего. А накануне поездки гиды-кураторы
                проведут деловую игру «Приключения в СКИЛЛГОРОДЕ» в классе, где
                обучаются ребята (возможны альтернативные варианты за
                дополнительную плату).
              </p>
            </div>
            <div className="flex flex-row flex-wrap gap-[8px]">
              <div className="rounded-[8px] border border-border px-[8px] py-[6px] flex justify-center items-center text-[10px] font-medium">
                Автобусные
              </div>
              <div className="rounded-[8px] border border-border px-[8px] py-[6px] flex justify-center items-center text-[10px] font-medium">
                Автобусные
              </div>
              <div className="rounded-[8px] border border-border px-[8px] py-[6px] flex justify-center items-center text-[10px] font-medium">
                Автобусные
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </DialogContent>
  );
};

export default FastCheckTourModal;
