"use client";

import { useQuery } from "@tanstack/react-query";
import { getApiV1ToursId } from "@/shared/api";
import Header from "@/components/header";
import * as React from "react";
import Footer from "@/components/footer";
import Image from "next/image";
import { Icons } from "@/shared/assets/icons";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useMaskito } from "@maskito/react";
import options from "@/lib/mask";
import { Checkbox } from "@/components/ui/checkbox";
import { ClockIcon, MinusIcon, PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { addDays, format } from "date-fns";
import { ru } from "date-fns/locale";
import { Calendar } from "@/components/ui/calendar";
import { DateRange } from "react-day-picker";

const OrderTourPage = ({
  params: { tourId },
}: {
  params: { tourId: string };
}) => {
  const { data: tour } = useQuery({
    queryKey: ["one_tour", tourId],
    queryFn: () => getApiV1ToursId(Number(tourId)),
    retry: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  const [adults, setAdults] = useState<number>(1);
  const [date, setDate] = React.useState<DateRange | undefined>(undefined);
  const maskedInputRef = useMaskito({ options });

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
          </span>{" "}
          /{" "}
          <span className="text-[#0370C7] hover:underline hover:cursor-pointer">
            Заявка на тур
          </span>
        </div>{" "}
        <div className="h-[24px] w-full" />
        <h1 className="text-[32px] font-pg">Заявка на тур</h1>
        <div className="h-[24px] w-full" />
        <div className="flex flex-row space-x-[24px]">
          <div className="w-[704px]">
            <div className="flex flex-row space-x-[20px]">
              <div className="relative size-[120px] overflow-hidden rounded-[16px]">
                <Image
                  src={tour.data.media.head[0].src}
                  alt=""
                  className="object-cover"
                  fill
                />
              </div>
              <div>
                <h1 className="font-pg text-[24px] mb-[8px]">
                  {tour.data.title}
                </h1>
                <div className="inline-flex space-x-[8px]">
                  <Icons.mapPin className="size-[24px] fill-none" />
                  <p className="font-medium">{tour.data.location}</p>
                </div>
              </div>
            </div>
            <div className="h-[32px] w-full" />

            <h1 className="text-[20px] font-pg">Ваши данные</h1>
            <div className="h-[24px] w-full" />
            <div className="grid gap-y-[16px]">
              <div className="space-y-[8px]">
                <Label>Фамилия</Label>
                <Input
                  placeholder="Фамилия"
                  className="!h-[48px] !placeholder-[#d9d9d9] !rounded-[12px]"
                />
              </div>
              <div className="space-y-[8px]">
                <Label>Имя</Label>
                <Input
                  placeholder="Имя"
                  className="!h-[48px] !placeholder-[#d9d9d9] !rounded-[12px]"
                />
              </div>
              <div className="space-y-[8px]">
                <Label>Телефон</Label>
                <Input
                  ref={maskedInputRef}
                  placeholder="+7 (999) 999-99-99"
                  className="!h-[48px] !placeholder-[#d9d9d9] !rounded-[12px]"
                />
              </div>
              <div className="flex items-center space-x-[12px]">
                <Checkbox id="promo" />
                <label
                  htmlFor="promo"
                  className="text-sm  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Хочу получать письма об интересных событиях и выгодных
                  предложениях
                </label>
              </div>
            </div>
            <div className="h-[24px] w-full" />
            <h1 className="text-[20px] font-pg">Детали заявки</h1>
            <div className="h-[24px] w-full" />
            <div className="flex flex-row space-x-[16px]">
              <div className="flex flex-col space-y-[8px] w-[250px]">
                <p className="text-[14px] text-[#A6A6A6]">Участники</p>
                <div className="flex items-center justify-between h-[48px]">
                  <p className="font-medium">Количество</p>
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
                    <p className="font-medium w-[20px] text-center">{adults}</p>
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
              </div>
              <div className="flex flex-col flex-1 space-y-[8px]">
                <p className="text-[14px]">Даты тура</p>
                <Popover>
                  <PopoverTrigger asChild>
                    <button
                      className={cn(
                        "flex flex-row mb-[16px] rounded-[16px] border border-border bg-white items-center px-[8px] py-[12px] justify-start text-left",
                        !date && "text-muted-foreground",
                      )}
                    >
                      <span className="font-medium text-accent-foreground">
                        {date?.from ? (
                          date.to ? (
                            <>
                              {format(date.from, "LLL dd, y", { locale: ru })} -{" "}
                              {format(date.to, "LLL dd, y", { locale: ru })}
                            </>
                          ) : (
                            format(date.from, "LLL dd, y", { locale: ru })
                          )
                        ) : (
                          <div className="text-[#d9d9d9] flex justify-between space-x-[8px] w-full items-center">
                            <span className="font-medium">Выберите даты</span>
                          </div>
                        )}
                      </span>
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="range"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                      defaultMonth={date?.from}
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            <div className="h-[24px] w-full" />
            <h1 className="text-[20px] font-pg">Данные участников тура</h1>
            <div className="h-[24px] w-full" />
            {Array.from({ length: adults }).map((el, index) => (
              <div key={index} className="mb-[24px]">
                <h1 className="text-[20px] font-pg">{index + 1} учатник</h1>
                <div className="h-[24px] w-full" />
                <div className="grid gap-y-[16px]">
                  <div className="space-y-[8px]">
                    <Label>Имя</Label>
                    <Input
                      placeholder="Имя"
                      className="!h-[48px] !placeholder-[#d9d9d9] !rounded-[12px]"
                    />
                  </div>
                  <div className="space-y-[8px]">
                    <Label>Фамилия</Label>
                    <Input
                      placeholder="Фамилия"
                      className="!h-[48px] !placeholder-[#d9d9d9] !rounded-[12px]"
                    />
                  </div>
                </div>
              </div>
            ))}
            <div className="space-y-[8px] mb-[110px]">
              <Label>Комментарий</Label>
              <Input
                placeholder="Напишите сообщение (по желанию)"
                className="!h-[48px] !placeholder-[#d9d9d9] !rounded-[12px]"
              />
            </div>
          </div>
          <div className="">
            <div className="flex flex-col space-y-[16px]">
              <p className="font-pg text-[20px]">Информация</p>
              <div className="inline-flex items-center space-x-[8px]">
                <ClockIcon className="size-[15px] text-[#9999a9]" />
                <p className="text-[14px]">6 ночей</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OrderTourPage;
