"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import {
  ChevronDown,
  ChevronRightIcon,
  HeartIcon,
  MinusIcon,
  PlusIcon,
} from "lucide-react";
import { Icons } from "@/shared/assets/icons";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useQuery } from "@tanstack/react-query";
import { getApiV1ToursId } from "@/shared/api";
import { normalizeCountForm } from "@/shared/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { Calendar } from "@/components/ui/calendar";
import * as React from "react";
import { Button } from "@/components/ui/button";

const ToolContent = () => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger>
        <Icons.question className="size-[16px]" />
      </TooltipTrigger>
      <TooltipContent className="w-[640px]">
        <div className="p-[16px] grid grid-cols-2 grid-rows-2 gap-[8px]">
          <div>
            <p className="font-medium mb-[8px]">Базовый</p>
            <p className="text-[12px]">
              Туристы живут а палатках, кэмпингах или хижинах. Удобств нет или
              находятся на улице
            </p>
          </div>
          <div>
            <p className="font-medium mb-[8px]">Средний</p>
            <p className="text-[12px]">
              Гостевые дома или гостиницы 3*. Удобства в каждом номере, на
              территории могут быть спа-зона, бассейны и тренажерный зал
            </p>
          </div>
          <div>
            <p className="font-medium mb-[8px]">Простой</p>
            <p className="text-[12px]">
              Гостевые дома или гостиницы 1-2*. Удобства могут быть в каждом
              номере или на этаже
            </p>
          </div>
          <div>
            <p className="font-medium mb-[8px]">Высокий</p>
            <p className="text-[12px]">
              Гостиницы 4-5*, глэмпинги. Удобства в каждом номере, часто
              включают в себя экслюзиные услуги вроде собственного бассейна
            </p>
          </div>
        </div>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);
const TourPage = ({ params: { tourId } }: { params: { tourId: string } }) => {
  const { data: tour } = useQuery({
    queryKey: ["one_tour", tourId],
    queryFn: () => getApiV1ToursId(Number(tourId)),
    retry: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
  const [date, setDate] = useState<Date>();
  const [adults, setAdults] = useState<number>(1);
  const [child, setChild] = useState<number>(0);

  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

  if (!tour?.data) return;

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
          </span>{" "}
          /{" "}
          <span className="text-[#0370C7] hover:underline hover:cursor-pointer">
            {tour.data?.title?.slice(0, 15) + "..."}
          </span>
        </div>{" "}
        <div className="h-[24px] w-full" />
        <div className="flex flex-row justify-between">
          <div className="flex-1">
            <h1 className="text-[32px] font-pg">{tour.data?.title}</h1>
            <div className="h-[16px] w-full" />
            <div className="flex flex-row space-x-[16px]">
              <div className="inline-flex items-center gap-1 font-medium">
                <Icons.mountains className="size-[16px] fill-none" />
                {tour.data?.category}
              </div>
              <div className="inline-flex items-center gap-1 font-medium">
                <Icons.clockFastForward className="size-[16px] fill-none" />
                {tour?.data?.night_count}{" "}
                {normalizeCountForm(Number(tour?.data?.night_count) || 2, [
                  "ночь",
                  "ночи",
                  "ночей",
                ])}
              </div>
            </div>
          </div>
          <div className="flex flex-row space-x-[12px]">
            <div className="size-[48px] z-20 rounded-[8px] bg-[#F5F5F5] flex items-center justify-center">
              <HeartIcon />
            </div>
            <div className="size-[48px] z-20 rounded-[8px] bg-[#007470] flex items-center justify-center">
              <p className="text-[18px] text-white font-medium">
                {tour?.data?.rating}
              </p>
            </div>
            <div>
              <p className="text-[14px]">На основе</p>
              <p className="text-[14px]">
                {tour?.data?.reviews?.length} оценок
              </p>
            </div>
          </div>
        </div>
        <div className="h-[24px] w-full" />
        <div className="grid grid-cols-5 gap-[12px]">
          <div className="relative col-span-2 row-span-2 h-[408px] overflow-hidden rounded-[16px]">
            <Image
              src="https://sun9-28.userapi.com/impg/vSkgXwh-r1low-tlEuhxtup-DILLp_9Iy55hZQ/8CQ-Ux5y-CI.jpg?size=929x613&quality=96&sign=ca8815df8efd537a645f43443f2beeba&type=album"
              alt=""
              className="object-cover"
              fill
            />
          </div>
          <div className="relative col-span-2 row-span-2 h-[408px] overflow-hidden rounded-[16px]">
            <Image
              src="/Rectangle-6274.webp"
              alt=""
              className="object-cover"
              fill
            />
          </div>
          <div className="relative overflow-hidden rounded-[16px]">
            <Image
              src="/Rectangle-6274.webp"
              alt=""
              className="object-cover"
              fill
            />
          </div>
          <div className="relative overflow-hidden rounded-[16px]">
            <Image
              src="/Rectangle-6274.webp"
              alt=""
              className="object-cover"
              fill
            />
          </div>
        </div>
        <div className="h-[40px] w-full" />
        <div className="h-[1px] bg-[#D9D9D9] w-full" />
        <div className="h-[40px] w-full" />
        <div className="flex flex-row flex-wrap gap-[16px]">
          {tour?.data?.type?.map((type, index) => (
            <div
              className="rounded-[12px] border border-border px-[16px] py-[12px] flex justify-center items-center text-[16px] font-medium"
              key={index}
            >
              {type.title}
            </div>
          ))}
        </div>
        <div className="h-[40px] w-full" />
        <div className="flex flex-row space-x-[24px]">
          <div className="flex-1">
            <div>
              <p
                className={cn("line-clamp-4", {
                  "line-clamp-none": isDescriptionOpen,
                })}
              >
                {tour?.data?.description}
              </p>
              {!isDescriptionOpen && (
                <div
                  className="inline-flex text-[#0370C7] items-center mt-[8px] cursor-pointer"
                  onClick={() => setIsDescriptionOpen(true)}
                >
                  <p className="text-[14px]">Развернуть</p>
                  <ChevronDown className="size-[16px]" />
                </div>
              )}
              <div className="h-[16px] w-full" />
              <div className="inline-flex text-[#A6A6A6] items-center space-x-[8px]">
                <Icons.messageSquare className="size-[16px]" />
                <p className="text-[14px]">
                  Информация предоставлена партнёром
                </p>
              </div>
              <div className="h-[40px] w-full" />
              <div className="grid grid-cols-4 gap-x-[24px]">
                <div className="bg-[#F5F5F5] rounded-[12px] p-[16px] flex flex-col space-y-[8px] h-full justify-between">
                  <div className="text-[12px] text-[#888]">
                    Уровень сложности
                  </div>

                  <div className="inline-flex text-[#1d1d1d] items-center space-x-[8px]">
                    <p className="font-semibold">
                      {tour?.data?.difficulty_level}
                    </p>
                    <ToolContent />
                  </div>

                  <div className="inline-flex text-[#0370C7] items-center mt-[8px]">
                    <p className="text-[14px]">Смотреть маршрут</p>
                    <ChevronRightIcon className="size-[16px]" />
                  </div>
                </div>
                <div className="bg-[#F5F5F5] rounded-[12px] p-[16px] flex flex-col space-y-[8px] h-full justify-between">
                  <div className="text-[12px] text-[#888]">Комфорт</div>

                  <div className="inline-flex text-[#1d1d1d] items-center space-x-[8px]">
                    <p className="font-semibold">{tour?.data?.comfort_level}</p>
                    <ToolContent />
                  </div>

                  <div className="inline-flex text-[#0370C7] items-center mt-[8px]">
                    <p className="text-[14px]">Место проживания</p>
                    <ChevronRightIcon className="size-[16px]" />
                  </div>
                </div>
                <div className="bg-[#F5F5F5] rounded-[12px] p-[16px] flex flex-col space-y-[8px] h-full">
                  <div className="text-[12px] text-[#888]">Кто уже едет?</div>
                  <div className="inline-flex text-[#1d1d1d] items-center space-x-[8px]">
                    <p className="font-semibold">5/20 человек</p>
                  </div>
                </div>
                <div className="bg-[#F5F5F5] rounded-[12px] p-[16px] flex flex-col space-y-[8px] h-full justify-between">
                  <div className="text-[12px] text-[#888]">Ближайшая дата</div>

                  <div className="inline-flex text-[#1d1d1d] items-center space-x-[8px]">
                    <p className="font-semibold">28 апреля, сб</p>
                  </div>

                  <div className="inline-flex text-[#0370C7] items-center mt-[8px]">
                    <p className="text-[14px]">Другие даты</p>
                    <ChevronRightIcon className="size-[16px]" />
                  </div>
                </div>
              </div>
              <div className="h-[40px] w-full" />
              <div className="grid grid-cols-2 gap-[24px]">
                <div className="flex flex-col space-y-[8px]">
                  <div className="inline-flex space-x-[12px] items-center">
                    <Icons.greenWallet />
                    <p className="font-pg text-[20px]">Оплачивается отдельно</p>
                  </div>
                  <div>
                    {tour?.data?.not_included?.map((item, index) => (
                      <div
                        className="inline-flex items-center space-x-[12px]"
                        key={index}
                      >
                        <Icons.bullet className="w-[8px]" />
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
                  <div>
                    {tour?.data?.included?.map((item, index) => (
                      <div
                        className="inline-flex items-center space-x-[12px]"
                        key={index}
                      >
                        <Icons.bullet className="w-[8px]" />
                        <p>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[40px] w-full" />
            <div>
              <p className="font-pg text-[28px]">Программа тура</p>
              <div className="h-[32px] w-full" />
              <div>
                <div className="flex flex-row space-x-[8px] items-center">
                  <div className="bg-[#1D1D1D] size-[48px] font-pg text-[20px] text-white rounded-full flex items-center justify-center">
                    1
                  </div>
                  <p className="text-[20px] font-pg">день</p>
                </div>
                <div className="h-[16px] w-full" />
                <div className="flex flex-row">
                  <div className="w-[48px] flex justify-center">
                    <div className="h-full w-[2px] bg-[#EBEBEB]" />
                  </div>
                  <div className="flex-1">
                    <div className="grid-cols-3 grid h-[180px] gap-x-[10px]">
                      <div className="relative overflow-hidden rounded-[16px]">
                        <Image
                          src="https://sun9-28.userapi.com/impg/vSkgXwh-r1low-tlEuhxtup-DILLp_9Iy55hZQ/8CQ-Ux5y-CI.jpg?size=929x613&quality=96&sign=ca8815df8efd537a645f43443f2beeba&type=album"
                          alt=""
                          className="object-cover"
                          fill
                        />
                      </div>
                      <div className="relative overflow-hidden rounded-[16px]">
                        <Image
                          src="/Rectangle-6274.webp"
                          alt=""
                          className="object-cover"
                          fill
                        />
                      </div>
                      <div className="relative overflow-hidden rounded-[16px]">
                        <Image
                          src="/Rectangle-6274.webp"
                          alt=""
                          className="object-cover"
                          fill
                        />
                      </div>
                    </div>
                    <div className="h-[24px] w-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[392px] h-full">
            <div className="sticky top-0 inset-x-0 p-[32px] grid bg-[#F5F5F5] rounded-[16px]">
              <p className="text-[24px] font-pg mb-[8px]">26 500 ₽</p>
              <p className="text-[#747474] mb-[16px]">4 400 ₽ / день 8 дней</p>
              <Popover>
                <PopoverTrigger asChild>
                  <button
                    className={cn(
                      "flex flex-row mb-[16px] rounded-[16px] border border-border bg-white items-center px-[8px] py-[12px] justify-start text-left",
                      !date && "text-muted-foreground",
                    )}
                  >
                    {date ? (
                      <span className="font-medium text-accent-foreground">
                        {format(date, "PPP", { locale: ru })}
                      </span>
                    ) : (
                      <div className="text-[#a6a6a6] flex justify-between w-full items-center">
                        <span className="font-medium">Дата</span>
                        <Icons.calendar className="size-[24px]" />
                      </div>
                    )}
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <Popover>
                <PopoverTrigger asChild>
                  <button
                    className={cn(
                      "flex flex-row bg-white rounded-[16px] border border-border items-center mb-[16px]  px-[8px] py-[12px] justify-start text-left",
                      !date && "text-muted-foreground",
                    )}
                  >
                    {adults && (
                      <div className="flex justify-between w-full items-center">
                        <span className="font-medium text-accent-foreground">
                          {adults + child}{" "}
                          {child > 0
                            ? normalizeCountForm(adults + child, [
                                "гость",
                                "гостя",
                                "гостей",
                              ])
                            : normalizeCountForm(adults, [
                                "взрослый",
                                "взрослых",
                                "взрослых",
                              ])}
                        </span>
                        <ChevronDown className="size-[24px] text-[#a6a6a6]" />
                      </div>
                    )}
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <div className="w-[324px] rounded-[12px] p-[24px] flex flex-col space-y-[16px]">
                    <div className="flex flex-row justify-between items-center">
                      <div className="flex flex-col">
                        <p className="font-medium">Взрослые</p>
                        <p className="text-[14px] text-[#a6a6a6]">от 18 лет</p>
                      </div>
                      <div className="flex h-[40px] px-[8px] space-x-[8px] justify-between items-center rounded-[12px] border border-border">
                        <MinusIcon
                          className={cn("size-[20px]", {
                            "opacity-50": adults <= 1,
                          })}
                          onClick={() =>
                            setAdults((prevState) => {
                              if (prevState <= 1) return prevState;
                              return prevState - 1;
                            })
                          }
                        />
                        <p className="font-medium w-[20px] text-center">
                          {adults}
                        </p>
                        <PlusIcon
                          className={cn("size-[20px]", {
                            "opacity-50 cursor-not-allowed": adults >= 4,
                          })}
                          onClick={() =>
                            setAdults((prevState) => {
                              if (prevState >= 4) return prevState;
                              return prevState + 1;
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="flex flex-row justify-between items-center">
                      <p className="font-medium">Дети</p>
                      <div className="flex h-[40px] px-[8px] space-x-[8px] justify-between items-center rounded-[12px] border border-border">
                        <MinusIcon
                          className={cn("size-[20px]", {
                            "opacity-50": child <= 0,
                          })}
                          onClick={() =>
                            setChild((prevState) => {
                              if (prevState <= 0) return prevState;
                              return prevState - 1;
                            })
                          }
                        />
                        <p className="font-medium w-[20px] text-center">
                          {child}
                        </p>
                        <PlusIcon
                          className={cn("size-[20px]", {
                            "opacity-50 cursor-not-allowed": child >= 4,
                          })}
                          onClick={() =>
                            setChild((prevState) => {
                              if (prevState >= 4) return prevState;
                              return prevState + 1;
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
              <Button className="mb-[16px]">Купить тур</Button>
              <p className="text-[#747474] text-center">Гарантия проведения</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TourPage;
