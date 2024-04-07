"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import {
  ChevronDown,
  ChevronRightIcon,
  HeartIcon,
  MinusIcon,
  PlayIcon,
  PlusIcon,
  ThumbsDownIcon,
  ThumbsUpIcon,
  Video,
} from "lucide-react";
import { Icons } from "@/shared/assets/icons";
import Image from "next/image";
import { cn, randomNumberInRange } from "@/lib/utils";
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
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { AccordionContent } from "@radix-ui/react-accordion";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import HotTours from "@/components/hot-tours";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

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
                {tour?.data?.nights_count}{" "}
                {normalizeCountForm(Number(tour?.data?.nights_count) || 2, [
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
              src={tour.data.media.head[0].src}
              alt=""
              className="object-cover"
              fill
            />
          </div>
          <div className="relative col-span-2 row-span-2 h-[408px] overflow-hidden rounded-[16px]">
            <Image
              src={tour.data.media.head[1].src}
              alt=""
              className="object-cover"
              fill
            />
          </div>
          <div className="relative overflow-hidden rounded-[16px]">
            <Image
              src={tour.data.media.head[2].src}
              alt=""
              className="object-cover"
              fill
            />
          </div>
          <div className="relative overflow-hidden rounded-[16px]">
            <Image
              src={tour.data.media.head[3].src}
              alt=""
              className="object-cover brightness-50"
              fill
            />
            <div className="size-full absolute top-0 left-0 text-white font-medium flex justify-center items-center">
              <div>
                <p className="text-[24px] text-center space-y-[24px]">
                  {randomNumberInRange(1, 5)}
                </p>
                <p>фото</p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[40px] w-full" />
        <div className="h-[1px] bg-[#D9D9D9] w-full" />
        <div className="h-[40px] w-full" />
        <div className="flex flex-row flex-wrap gap-[16px]">
          {tour?.data?.tags?.map((type, index) => (
            <div
              className="rounded-[12px] border border-border px-[16px] py-[12px] flex justify-center items-center text-[16px] font-medium"
              key={index}
            >
              {type}
            </div>
          ))}
        </div>
        <div className="h-[40px] w-full" />
        <div className="flex flex-row space-x-[24px]">
          <div className="flex-1">
            <div>
              <div
                dangerouslySetInnerHTML={{
                  __html: tour.data.description!,
                }}
                className={cn("line-clamp-4", {
                  "line-clamp-none": isDescriptionOpen,
                })}
              />

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

                  <Link
                    href="#marsh"
                    className="inline-flex text-[#0370C7] items-center mt-[8px]"
                  >
                    <p className="text-[14px]">Смотреть маршрут</p>
                    <ChevronRightIcon className="size-[16px]" />
                  </Link>
                </div>
                <div className="bg-[#F5F5F5] rounded-[12px] p-[16px] flex flex-col space-y-[8px] h-full justify-between">
                  <div className="text-[12px] text-[#888]">Комфорт</div>

                  <div className="inline-flex text-[#1d1d1d] items-center space-x-[8px]">
                    <p className="font-semibold">{tour?.data?.comfort_level}</p>
                    <ToolContent />
                  </div>

                  <Link
                    href="#otel"
                    className="inline-flex text-[#0370C7] items-center mt-[8px]"
                  >
                    <p className="text-[14px]">Место проживания</p>
                    <ChevronRightIcon className="size-[16px]" />
                  </Link>
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
              </div>
            </div>
            <div className="h-[40px] w-full" />
            <div className="w-[808px]">
              <p className="font-pg text-[28px]">Программа тура</p>
              <div className="h-[32px] w-full" />
              {tour?.data?.program?.map((day, index) => (
                <div key={index} className="mb-[32px]">
                  <div className="flex flex-row space-x-[8px] items-center">
                    <div className="bg-[#1D1D1D] size-[48px] font-pg text-[20px] text-white rounded-full flex items-center justify-center">
                      {index + 1}
                    </div>
                    <p className="text-[20px] font-pg">день</p>
                  </div>
                  <div className="h-[16px] w-full" />
                  <div className="flex flex-row">
                    <div className="w-[48px] flex justify-center">
                      <div className="h-full w-[2px] bg-[#EBEBEB]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-row h-[180px] gap-x-[10px]">
                        <div className="relative overflow-hidden rounded-[16px] w-[260px]">
                          <Image
                            // @ts-ignore
                            src={
                              tour?.data?.media?.program[
                                randomNumberInRange(
                                  0,
                                  tour.data.media.program.length,
                                )
                              ]?.src || "/Rectangle-6274.webp"
                            }
                            alt=""
                            className="object-cover"
                            fill
                          />
                        </div>
                        <div className="relative overflow-hidden rounded-[16px] w-[260px]">
                          <Image
                            src={
                              tour?.data?.media?.program[
                                randomNumberInRange(
                                  0,
                                  tour.data.media.program.length,
                                )
                              ]?.src || "/Rectangle-6274.webp"
                            }
                            alt=""
                            className="object-cover"
                            fill
                          />
                        </div>
                        <div className="relative overflow-hidden rounded-[16px] w-[180px]">
                          <Image
                            src={
                              tour?.data?.media?.program[
                                randomNumberInRange(
                                  0,
                                  tour.data.media.program.length,
                                )
                              ]?.src || "/Rectangle-6274.webp"
                            }
                            alt=""
                            className="object-cover brightness-50"
                            fill
                          />
                          <div className="size-full absolute top-0 left-0 text-white font-medium flex justify-center items-center">
                            <div>
                              <p className="text-[24px] text-center space-y-[24px]">
                                {randomNumberInRange(1, 5)}
                              </p>
                              <p>фото</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="my-[24px] w-[400px]">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: day,
                          }}
                        />
                      </div>
                      <div className="h-[24px] w-full" />
                    </div>
                  </div>
                </div>
              ))}
              <div className="h-[40px] w-full" id="marsh" />
              <p className="font-pg text-[28px]">Маршрут на карте</p>
              <div className="h-[32px] w-full" />
              <iframe
                src={tour.data.map}
                height={396}
                width={808}
                className="rounded-[20px] overflow-hidden"
              />
              <div className="h-[40px] w-full" id="otel" />
              <p className="font-pg text-[28px]">Проживание</p>
              <div className="h-[32px] w-full" />
              <div className="grid grid-cols-4 grid-rows-3 gap-x-[24px] gap-y-[12px] h-[276px]">
                <Link
                  href="https://russpass.ru/hotel/635bfd29da372fd8b2e25617?arrivalDate=2024-04-07&departureDate=2024-04-08&rooms=2"
                  className="row-span-3 relative rounded-[16px] overflow-hidden"
                >
                  <div className="absolute top-[16px] inset-x-[16px] h-[40px] flex justify-between items-center">
                    <div className="size-[40px] z-20 rounded-[8px] bg-[#007470] flex items-center justify-center">
                      <p className="text-[12px] text-white font-medium">
                        {tour.data.rating}
                      </p>
                    </div>
                    <div className="size-[40px] z-30 text-white rounded-[8px] backdrop-blur-sm overflow-hidden bg-[#1d1d1d]/30 flex items-center justify-center">
                      <Icons.heart className="fill-none size-[24px] text-white" />
                    </div>
                  </div>
                  <div className="absolute z-20 bottom-0 left-0 h-[160px] w-full bg-gradient-to-t from-black" />
                  <div className="absolute z-30 bottom-0 left-0 h-[80px] w-full px-[12px] pt-[20px]">
                    <p className="font-medium text-white/80 text-[12px]">
                      Отель
                    </p>
                    <p className="text-white font-semibold line-clamp-1 mb-[4px]">
                      Altay Resort Plaza 5*
                    </p>
                  </div>
                  <Image
                    src={tour.data.media.acc[0].src}
                    alt=""
                    className="object-cover z-0"
                    fill
                  />
                </Link>
                <div className="bg-[#f5f5f5] rounded-[16px] p-[10px]">
                  <p className="font-semibold">Гостиница</p>
                  <p className="text-[12px] text-[#747474] mb-[4px]">Комфорт</p>
                  <p className="text-[12px]">Высокий</p>
                </div>
                <div className="relative rounded-[16px] overflow-hidden row-span-3">
                  <Image
                    src={tour.data.media.acc[1].src}
                    alt=""
                    className="object-cover z-0"
                    fill
                  />
                </div>
                <div className="relative rounded-[16px] overflow-hidden row-span-3">
                  <Image
                    src={tour.data.media.acc[2].src}
                    alt=""
                    className="object-cover z-0"
                    fill
                  />
                </div>
                <div className="relative rounded-[16px] overflow-hidden row-span-2">
                  <Image
                    src={tour.data.media.acc[3].src}
                    alt=""
                    className="object-cover z-0"
                    fill
                  />
                </div>
              </div>
              <div className="h-[40px] w-full" />
              <p className="font-pg text-[28px]">Важно знать</p>
              <div className="h-[32px] w-full" />
              <div className="flex flex-col space-y-[8px]">
                <div className="bg-[#F5F5F5] rounded-[16px] w-full p-[24px]">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Подготовка к туру</AccordionTrigger>
                      <AccordionContent>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: tour.data.important_info!,
                          }}
                          className="line-clamp-4 mt-[8px]"
                        />
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
                <div className="bg-[#F5F5F5] rounded-[16px] w-full p-[24px]">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Условия отмены</AccordionTrigger>
                      <AccordionContent>
                        <p>
                          отмена в течение 24 часов – полный возврат предоплаты
                          отмена более чем за 15 дней до начала тура – полный
                          возврат за вычетом 15% от стоимости тура отмена менее
                          чем за 15 дней до начала тура – предоплата не
                          возвращается
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
                <div className="bg-[#F5F5F5] rounded-[16px] w-full p-[24px]">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Пожелания гостю</AccordionTrigger>
                      <AccordionContent>
                        <p>
                          Дагестан - мусульманская республика, религию и
                          традиции которой необходимо уважать. Не рекомендуется
                          одевать майки и футболки, оголяющие плечи, обнажающие
                          торс и просвечивающие. Кофты и футболки должны быть
                          без глубокого декольте. Необходимо и мужчинам и
                          женщинам избегать шорт и сильно облегающих джинс и
                          штанов. Вместо шорт в жаркое время лучше одеть бриджи
                          (длинные шорты по колено либо ниже колена). Все должно
                          быть в рамках приличия безо всякого намека на
                          вульгарность. Это продемонстрирует ваше уважение к
                          местным жителям. При посещении мечети необходимо
                          надеть длинную одежду с рукавом по ладонь, а женщинам
                          – надеть платок на голову. Летом обязателен головной
                          убор от солнца, солнцезащитный крем, и желательно
                          иметь солнечные очки. Вечером в горах может резко
                          холодать, поэтому желательно взять даже летом кофту
                          и/или ветровку. Обувь должна быть удобной! Мы будем
                          ходить по камням, подходить к обрывам. Желательно
                          одеть кроссовки или треккинговые ботинки. Не
                          рекомендую одевать сандали (если они не
                          туристические).
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
              <div className="h-[40px] w-full" />
              <div className="flex flex-row justify-between items-center">
                <p className="font-pg text-[28px]">Отзывы и оценки</p>
                <div className="flex flex-row space-x-[8px] items-center">
                  <div className="h-[32px] w-[40px] z-20 rounded-[8px] bg-[#007470] flex items-center justify-center">
                    <p className="text-[14px] text-white">
                      {tour?.data?.rating}
                    </p>
                  </div>
                  <div>
                    <p className="text-[14px]">
                      {tour?.data?.reviews?.length} отзывов
                    </p>
                  </div>
                </div>
              </div>
              <div className="h-[32px] w-full" />
              <div className="flex flex-row space-x-[8px] *:size-[104px] *:cursor-pointer">
                {Array.from({ length: 4 }).map((el, index) => (
                  <Dialog key={index}>
                    <DialogTrigger asChild>
                      <div className="relative overflow-hidden rounded-[16px]">
                        <Image
                          src={tour.data.media.head[index].src}
                          alt=""
                          className="object-cover brightness-50"
                          fill
                        />
                        <div className="size-full absolute top-0 left-0 text-white font-medium flex justify-center items-center">
                          <PlayIcon className="fill-white" />
                        </div>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="!p-0 !w-fit">
                      <Carousel orientation="vertical">
                        <CarouselContent className="max-h-[640px]">
                          <CarouselItem>
                            <video
                              src="https://xducky.publit.io/file/-7.mp4"
                              width={360}
                              height={512}
                              autoPlay
                            />
                          </CarouselItem>
                          <CarouselItem>
                            <video
                              src="https://xducky.publit.io/file/-3.mp4"
                              width={360}
                              height={512}
                              autoPlay
                            />
                          </CarouselItem>
                          <CarouselItem>
                            <video
                              src="https://xducky.publit.io/file/-1.mp4"
                              width={360}
                              height={512}
                              autoPlay
                            />
                          </CarouselItem>
                          <CarouselItem>
                            <video
                              src="https://xducky.publit.io/file/-2.mp4"
                              width={360}
                              height={512}
                              autoPlay
                            />
                          </CarouselItem>
                        </CarouselContent>
                      </Carousel>
                    </DialogContent>{" "}
                  </Dialog>
                ))}
              </div>
              <div className="h-[32px] w-full" />
              {tour.data.reviews?.map((review, index) => (
                <div key={index} className="py-[16px] px-[12px] w-full">
                  <div className="flex flex-row space-x-[8px] items-center mb-[12px]">
                    <div className="w-[42px] h-[38px] z-20 rounded-[8px] bg-[#007470] flex items-center justify-center">
                      <p className="text-[12px] text-white font-medium">
                        {randomNumberInRange(1, 10)}
                      </p>
                    </div>
                    <div className="flex flex-col">
                      <p className="font-medium">{review.frequency}</p>
                      <p className="text-[12px] text-[#747474]">
                        {review.username} | {randomNumberInRange(5, 19)} отзывов
                      </p>
                    </div>
                  </div>
                  <p className="text-[14px] text-[#747474]">
                    {randomNumberInRange(5, 30)} августа 2023 г.
                  </p>
                  <p className="text-[14px]">
                    <span className="text-[#747474]">Что понравилось: </span>
                    {review.liked?.map((el) => el + ", ")}
                  </p>
                  <div className="mt-[8px] mb-[12px] flex flex-row">
                    <div className="mt-[3px] mr-[8px]">
                      <Icons.smileFace />
                    </div>
                    <div>
                      <p>{review.positive_comment}</p>
                    </div>
                  </div>
                  <div className="mb-[12px] flex flex-row">
                    <div className="mt-[3px] mr-[8px]">
                      <Icons.noSmileFace />
                    </div>
                    <div>
                      <p>{review.negative_comment}</p>
                    </div>
                  </div>
                  <div className="mb-[12px] flex flex-row items-center space-x-[16px]">
                    <div className="flex flex-row space-x-[8px] items-center">
                      <ThumbsUpIcon className="size-[20px]" />{" "}
                      <p>{randomNumberInRange(0, 100)}</p>
                    </div>
                    <div className="flex flex-row space-x-[8px] items-center">
                      <ThumbsDownIcon className="size-[20px]" />{" "}
                      <p>{randomNumberInRange(0, 100)}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-x-[12px] *:h-[170px] *:cursor-pointer">
                    {Array.from({ length: 3 }).map((el, index) => (
                      <div
                        className="relative overflow-hidden rounded-[16px]"
                        key={index}
                      >
                        <Image
                          src={
                            tour.data.media.head[
                              randomNumberInRange(0, 100) % 4
                            ].src
                          }
                          alt=""
                          className="object-cover"
                          fill
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              <div className="h-[32px] w-full" />
              <div className="flex flex-row space-x-[10px] mb-[44px]">
                <Button className="!bg-[#EBEBEB] !h-[48px]">
                  Смотреть все
                </Button>
                <Button className="!h-[48px]">Оставить отзыв</Button>
              </div>
              <div className="mb-[44px]">
                <HotTours />
              </div>
            </div>
          </div>

          <div className="w-[392px] min-h-dvh">
            <div className="sticky top-[92px] mb-[40px] inset-x-0 p-[32px] grid bg-[#F5F5F5] rounded-[16px]">
              <p className="text-[24px] font-pg mb-[8px]">26 500 ₽</p>
              <p className="text-[#747474] mb-[16px]">
                4 400 ₽ / день • 8 дней
              </p>
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
              <Link
                href={`/tours/${tourId}/order`}
                className={cn("mb-[16px] !h-[48px]", buttonVariants())}
              >
                Купить тур
              </Link>
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
