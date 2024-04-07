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
import { Clock, ClockIcon, HeartIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { getApiV1ToursId } from "@/shared/api";
import { normalizeCountForm } from "@/shared/lib/utils";
import { Icons } from "@/shared/assets/icons";
import * as React from "react";

const FastCheckTourModal = ({ id }: { id: number }) => {
  const { data: tour } = useQuery({
    queryKey: ["one_tour", id],
    queryFn: () => getApiV1ToursId(id),
    retry: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
  return (
    <DialogContent className="p-0 h-[600px] w-[1064px] overflow-hidden">
      <div className="h-full flex flex-row overflow-y-scroll">
        <Carousel className="w-[520px]">
          <CarouselContent className="h-[600px]">
            {tour?.data?.media?.head?.map((el, index) => (
              <CarouselItem key={index} className="h-[600px]">
                <div className="p-1 relative h-[600px]">
                  <Image
                    src={tour.data.media.head[index].src}
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
        <div className="w-[544px] h-full p-[24px] flex flex-col justify-between overflow-y-scroll">
          <div className="flex flex-col space-y-[24px] h-full ">
            <div className="w-full flex justify-between">
              <p className="text-[24px] w-[392px] font-pg leading-tight">
                {tour?.data?.title}
              </p>
              <div className="size-[40px] z-20 rounded-[8px] bg-[#007470] flex items-center justify-center">
                <p className="text-[12px] text-white font-medium">
                  {tour?.data?.rating}
                </p>
              </div>
            </div>
            <div className="flex flex-row space-x-[24px]">
              <div className="inline-flex items-center space-x-[8px]">
                <ClockIcon className="size-[15px] text-[#9999a9]" />
                <p className="text-[14px]">
                  {tour?.data?.nights_count}{" "}
                  {normalizeCountForm(tour?.data?.nights_count, [
                    "ночь",
                    "ночи",
                    "ночей",
                  ])}
                </p>
              </div>
              <div className="inline-flex items-center space-x-[8px]">
                <p className="text-[14px] text-[#9999a9]">Активность: </p>
                <p className="text-[14px]">Низкая</p>
              </div>
              <div className="inline-flex items-center space-x-[8px]">
                <p className="text-[14px] text-[#9999a9]">Комфорт: </p>
                <p className="text-[14px]">Выше среднего</p>
              </div>
            </div>
            <div>
              <div
                dangerouslySetInnerHTML={{
                  __html: tour?.data?.description!,
                }}
                className="line-clamp-6"
              />
            </div>
            <div className="flex flex-row flex-wrap gap-[8px]">
              {tour?.data?.tags?.map((type, index) => (
                <div
                  key={index}
                  className="rounded-[8px] border border-border px-[8px] py-[6px] flex justify-center items-center text-[12px] font-medium"
                >
                  {type}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-x-[12px]">
              <Button className="flex flex-col h-[48px]">
                <p className="font-medium leading-tight text-[16px]">
                  от 45 660 ₽
                </p>
                <p className="font-medium text-[#1d1d1d]/50 text-[12px] leading-tight">
                  Купить билеты
                </p>
              </Button>
              <Button
                className="h-[48px] space-x-[8px] bg-[#EBEBEB]"
                variant="secondary"
              >
                <p className="font-medium leading-tight text-[16px]">
                  В избранное
                </p>
                <HeartIcon />
              </Button>
            </div>
            <div className="flex flex-col space-y-[8px]">
              <div className="inline-flex space-x-[12px] items-center">
                <Icons.greenWallet />
                <p className="font-pg text-[20px]">Оплачивается отдельно</p>
              </div>
              <div className="flex flex-col">
                {tour?.data?.not_included?.map((item, index) => (
                  <div
                    className="inline-flex items-center space-x-[12px]"
                    key={index}
                  >
                    <div>
                      <div className="bg-[#D9D9D9] size-[8px] rounded-full" />
                    </div>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col space-y-[8px]">
              <div className="inline-flex space-x-[12px] items-center">
                <Icons.greenClipBoard />
                <p className="font-pg text-[20px]">Входит в стоимость</p>
              </div>
              <div className="flex flex-col">
                {tour?.data?.included?.map((item, index) => (
                  <div
                    className="inline-flex items-center space-x-[12px]"
                    key={index}
                  >
                    <div>
                      <div className="bg-[#D9D9D9] size-[8px] rounded-full" />
                    </div>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="h-[24px] w-full" />
            <Button className="w-full !h-[48px] sticky bottom-0 mt-[24px] bg-[#EBEBEB] hover:bg-primary">
              Больше информации о туре
            </Button>
          </div>
        </div>
      </div>
    </DialogContent>
  );
};

export default FastCheckTourModal;
