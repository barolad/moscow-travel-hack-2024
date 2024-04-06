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
          </div>
        </div>
      </div>
    </DialogContent>
  );
};

export default FastCheckTourModal;
