"use client";

import { Icons } from "@/shared/assets/icons";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { ChevronDown, XIcon } from "lucide-react";
import { useState } from "react";
import {
  FiltersAccordion,
  FiltersAccordionTrigger,
  FiltersAccordionContent,
  FiltersAccordionItem,
} from "@/components/ui/filters-accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import FastCheckTourModal from "@/components/fast-check-tour-modal";

const Tours = () => {
  const [filtersOpen, setFiltersOpen] = useState(false);
  return (
    <div className="container">
      <div className="flex flex-row gap-x-[12px]">
        {filtersOpen && (
          <div className="min-w-[293px] rounded-[20px] bg-[#f5f5f5]">
            <div className="pb-[24px] pt-[20px] px-[20px] flex flex-row justify-between items-center">
              <p className="text-[24px] !font-pg">Фильтры</p>
              <XIcon
                className="text-[#747474]"
                onClick={() => setFiltersOpen(false)}
              />
            </div>
            <FiltersAccordion
              type="single"
              collapsible
              className="w-full px-[20px]"
            >
              <FiltersAccordionItem value="item-1">
                <FiltersAccordionTrigger>
                  <div className="flex flex-row space-x-[12px] items-center">
                    <Icons.tag className="size-[20px]" />
                    <p className="text-[18px] font-pg">Выбранные</p>
                  </div>
                </FiltersAccordionTrigger>
                <FiltersAccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </FiltersAccordionContent>
              </FiltersAccordionItem>
              <FiltersAccordionItem value="item-2">
                <FiltersAccordionTrigger>
                  <div className="flex flex-row space-x-[12px] items-center">
                    <Icons.star className="size-[20px]" />
                    <p className="text-[18px] font-pg">Популярное</p>
                  </div>
                </FiltersAccordionTrigger>
                <FiltersAccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </FiltersAccordionContent>
              </FiltersAccordionItem>
              <FiltersAccordionItem value="item-3">
                <FiltersAccordionTrigger>
                  <div className="flex flex-row space-x-[12px] items-center">
                    <Icons.map className="size-[20px]" />
                    <p className="text-[18px] font-pg">Тип</p>
                  </div>
                </FiltersAccordionTrigger>
                <FiltersAccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </FiltersAccordionContent>
              </FiltersAccordionItem>
              <FiltersAccordionItem value="item-4">
                <FiltersAccordionTrigger>
                  <div className="flex flex-row space-x-[12px] items-center">
                    <Icons.coins className="size-[20px]" />
                    <p className="text-[18px] font-pg">Бюджет</p>
                  </div>
                </FiltersAccordionTrigger>
                <FiltersAccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </FiltersAccordionContent>
              </FiltersAccordionItem>
              <div className="flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline">
                <label
                  className="flex flex-row space-x-[12px] items-center"
                  htmlFor="garant"
                >
                  <Icons.pocket className="size-[20px]" />
                  <p className="text-[18px] font-pg">Гарантия проведения</p>
                </label>
                <Checkbox id="garant" />
              </div>
              <FiltersAccordionItem value="item-5">
                <FiltersAccordionTrigger>
                  <div className="flex flex-row space-x-[12px] items-center">
                    <Icons.users className="size-[20px]" />
                    <p className="text-[18px] font-pg">Возраст группы</p>
                  </div>
                </FiltersAccordionTrigger>
                <FiltersAccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </FiltersAccordionContent>
              </FiltersAccordionItem>
              <div className="flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline">
                <label
                  className="flex flex-row space-x-[12px] items-center"
                  htmlFor="withChilds"
                >
                  <Icons.babybold className="size-[20px]" />
                  <p className="text-[18px] font-pg">Можно с детьми</p>
                </label>
                <Checkbox id="withChilds" />
              </div>
            </FiltersAccordion>
          </div>
        )}
        <div>
          <div className="h-[48px] flex items-center justify-between">
            <div className="flex flex-row space-x-[16px]">
              {!filtersOpen && (
                <button
                  className={cn(
                    "flex border border-border rounded-[12px] flex-row bg-white items-center px-[8px] py-[12px] justify-start text-left",
                  )}
                  onClick={() => setFiltersOpen(true)}
                >
                  <div className="flex flex-row space-x-[8px]">
                    <Icons.settings className="size-[24px] text-[#a6a6a6]" />
                    <p>Фильтры</p>
                  </div>
                </button>
              )}
              <Popover>
                <PopoverTrigger asChild>
                  <button
                    className={cn(
                      "flex border border-border rounded-[12px] flex-row bg-white items-center px-[8px] py-[12px] justify-start text-left",
                    )}
                  >
                    <div className="flex flex-row space-x-[8px]">
                      <Icons.filterLines className="size-[24px] text-[#a6a6a6]" />
                      <p>Популярные</p>
                      <ChevronDown className="size-[24px] text-[#a6a6a6]" />
                    </div>
                  </button>
                </PopoverTrigger>
                <PopoverContent
                  className="w-auto p-0"
                  align="start"
                ></PopoverContent>
              </Popover>
            </div>
            <p className="text-[#a6a6a6] text-[16px]">Найдено 598 туров</p>
          </div>
          <div className="h-[40px] w-full" />
          <div
            className={cn("grid grid-cols-3 gap-[24px]", {
              "grid-cols-2": filtersOpen,
            })}
          >
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
                  <Dialog>
                    <DialogTrigger asChild>
                      <div className="absolute z-20 top-0 left-0 size-full duration-150 cursor-auto hover:cursor-pointer hover:opacity-100 opacity-0">
                        <div className="absolute bottom-0 inset-x-0 h-[50px] bg-black/60 flex items-center justify-center">
                          <p className="text-white text-[16px]">
                            Быстрый просмотр
                          </p>
                        </div>
                      </div>
                    </DialogTrigger>
                    <FastCheckTourModal id="1" />
                  </Dialog>
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
      </div>
    </div>
  );
};

export default Tours;
