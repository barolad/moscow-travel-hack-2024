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
import { ChevronDown } from "lucide-react";

const SearchBlock = () => {
  const [date, setDate] = useState<Date>();
  const [days, setDays] = useState<number>(7);
  return (
    <div className="h-[80px] bg-[#f5f5f5] rounded-[20px] p-[16px] flex flex-row items-center justify-between gap-[16px]">
      <div className="*:h-[48px] flex-1 overflow-hidden rounded-[12px] grid grid-cols-5 border-neutral-300 border divide-x divide-neutral-300">
        <SearchInput placeholder="Откуда" />
        <SearchInput placeholder="Куда" />
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
                  {format(date, "PPP")}
                </span>
              ) : (
                <div className="text-[#a6a6a6] flex justify-between w-full items-center">
                  <span className="font-medium">Когда</span>
                  <Icons.calendar className="size-[24px]" />
                </div>
              )}
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
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
                    {days} ночей
                  </span>
                  <ChevronDown className="size-[24px] text-[#a6a6a6]" />
                </div>
              )}
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <div className="w-[292px] rounded-[12px] p-[24px] flex flex-col">
              <div className="flex flex-row justify-between items-center">
                <p className="font-medium"></p>
              </div>
            </div>
          </PopoverContent>
        </Popover>
        <input type="text" />
      </div>
      <Button className="py-[12px] px-[16px] h-[48px]">Найти</Button>
    </div>
  );
};

export default SearchBlock;
