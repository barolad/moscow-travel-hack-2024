"use client";

import { SearchInput } from "@/components/ui/search-input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Icons } from "@/shared/assets/icons";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { ChevronDown, MinusIcon, PlusIcon } from "lucide-react";
import { normalizeCountForm } from "@/shared/lib/utils";
import { ru } from "date-fns/locale";
import { useQuery } from "@tanstack/react-query";
import { getApiV1CitiesPrefix } from "@/shared/api";
import { debounce } from "next/dist/server/utils";
import * as React from "react";

const SearchBlock = () => {
  const [date, setDate] = useState<Date>();
  const [days, setDays] = useState<number>(7);
  const [adults, setAdults] = useState<number>(2);
  const [child, setChild] = useState<number>(0);

  const [fromInputSearchValue, setFromInputSearchValue] = useState("");
  const [fromInputValue, setFromInputValue] = useState("");
  const [fromInputId, setFromInputId] = useState(0);
  const [fromPopupOpen, setFromPopupOpen] = useState(false);

  const fromDebounced = debounce(
    (args) => setFromInputSearchValue(args.target.value),
    100,
  );

  const { data: fromInputResult } = useQuery({
    queryKey: ["from-input", fromInputSearchValue],
    queryFn: () =>
      getApiV1CitiesPrefix(
        fromInputSearchValue ? fromInputSearchValue : "Москва",
      ),
    retry: false,
  });

  const [toInputSearchValue, setToInputSearchValue] = useState("");
  const [toInputValue, setToInputValue] = useState("");
  const [toInputId, setToInputId] = useState(0);
  const [toPopupOpen, setToPopupOpen] = useState(false);

  const toDebounced = debounce(
    (args) => setToInputSearchValue(args.target.value),
    100,
  );

  const { data: toInputResult } = useQuery({
    queryKey: ["from-input", toInputSearchValue],
    queryFn: () =>
      getApiV1CitiesPrefix(toInputSearchValue ? toInputSearchValue : "Москва"),
    retry: false,
  });

  return (
    <div className="h-[80px] bg-[#f5f5f5] rounded-[20px] p-[16px] flex flex-row items-center justify-between gap-[16px]">
      <div className="*:h-[48px] flex-1 overflow-hidden rounded-[12px] grid grid-cols-5 border-neutral-300 border divide-x divide-neutral-300">
        <Popover open={fromPopupOpen}>
          <PopoverTrigger asChild>
            <input
              onMouseDown={() => setFromPopupOpen(true)}
              onBlur={() => setFromPopupOpen(false)}
              type="text"
              placeholder="Откуда"
              onChange={(event) => {
                fromDebounced(event);
                setFromInputValue(event.target.value);
              }}
              value={fromInputValue}
              className="flex h-10 w-full bg-background text-accent-foreground placeholder:text-[#a6a6a6] px-3 py-2 font-medium focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
            />
          </PopoverTrigger>
          <PopoverContent align="start">
            <div className="flex flex-col space-y-[8px] ">
              {fromInputResult?.data?.map((city) => (
                <div
                  key={city.id}
                  className="cursor-pointer"
                  onClick={() => {
                    setFromInputId(city.id || 1);
                    setFromInputValue(city.name || "");
                  }}
                >
                  {city.name}
                </div>
              ))}
            </div>
          </PopoverContent>
        </Popover>
        <Popover open={toPopupOpen}>
          <PopoverTrigger asChild>
            <input
              onMouseDown={() => setToPopupOpen(true)}
              onBlur={() => setToPopupOpen(false)}
              type="text"
              placeholder="Куда"
              onChange={(event) => {
                toDebounced(event);
                setToInputValue(event.target.value);
              }}
              value={toInputValue}
              className="flex h-10 w-full bg-background text-accent-foreground placeholder:text-[#a6a6a6] px-3 py-2 font-medium focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
            />
          </PopoverTrigger>
          <PopoverContent align="start">
            <div className="flex flex-col space-y-[8px] ">
              {toInputResult?.data?.map((city) => (
                <div
                  key={city.id}
                  className="cursor-pointer"
                  onClick={() => {
                    setToInputId(city.id || 1);
                    setToInputValue(city.name || "");
                  }}
                >
                  {city.name}
                </div>
              ))}
            </div>
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger asChild>
            <button
              className={cn(
                "flex flex-row bg-white items-center px-[8px] py-[12px] justify-start text-left rounded-none",
                !date && "text-muted-foreground",
              )}
            >
              {date ? (
                <span className="font-medium text-accent-foreground">
                  {format(date, "PPP", { locale: ru })}
                </span>
              ) : (
                <div className="text-[#a6a6a6] flex justify-between w-full items-center">
                  <span className="font-medium">Когда</span>
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
                "flex flex-row bg-white items-center px-[8px] py-[12px] justify-start text-left rounded-none",
                !date && "text-muted-foreground",
              )}
            >
              {days && (
                <div className="flex justify-between w-full items-center">
                  <span className="font-medium text-accent-foreground">
                    {days} {normalizeCountForm(days, ["ночь", "ночи", "ночей"])}
                  </span>
                  <ChevronDown className="size-[24px] text-[#a6a6a6]" />
                </div>
              )}
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <div className="w-[248px] rounded-[12px] p-[24px] flex flex-col">
              <div className="flex flex-row justify-between items-center">
                <p className="font-medium">Ночей</p>
                <div className="flex h-[40px] px-[8px] space-x-[8px] justify-between items-center rounded-[12px] border border-border">
                  <MinusIcon
                    className="size-[20px]"
                    onClick={() =>
                      setDays((prevState) => {
                        if (prevState <= 1) return prevState;
                        return prevState - 1;
                      })
                    }
                  />
                  <p className="font-medium w-[20px] text-center">{days}</p>
                  <PlusIcon
                    className="size-[20px]"
                    onClick={() => setDays((prevState) => prevState + 1)}
                  />
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger asChild>
            <button
              className={cn(
                "flex flex-row bg-white items-center px-[8px] py-[12px] justify-start text-left rounded-none",
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
            <div className="w-[248px] rounded-[12px] p-[24px] flex flex-col space-y-[16px]">
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
                  <p className="font-medium w-[20px] text-center">{child}</p>
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
      </div>
      <Button className="py-[12px] px-[16px] h-[48px]">Найти</Button>
    </div>
  );
};

export default SearchBlock;
