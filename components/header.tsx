"use client";

import { Icons } from "@/shared/assets/icons";
import { ReactNode, useState } from "react";
import { HeartIcon, UploadIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
import * as React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

interface MenuItemProps {
  title?: string;
  icon: ReactNode;
  hidden?: boolean;
}
const MenuItem = ({ title, icon, hidden = false }: MenuItemProps) => (
  <div className="flex justify-center items-center px-[12px] space-x-[8px] hover:underline hover:underline-offset-[8px] hover:cursor-pointer">
    {icon}

    {!!title && (
      <p
        className={cn("text-[16px] font-medium", {
          "lg:inline-block hidden": hidden,
        })}
      >
        {title}
      </p>
    )}
  </div>
);

const CustomBadge = ({ title }: { title: string }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div
      onClick={() => setIsActive((prevState) => !prevState)}
      className={cn(
        "flex h-[32px] cursor-pointer items-center px-[8px] mr-[16px] border border-primary rounded-md",
        {
          "bg-primary": isActive,
        },
      )}
    >
      {title}
    </div>
  );
};

const Header = () => {
  return (
    <div className="h-[72px] container sticky top-0 inset-x-0 bg-white z-40 overflow-y-scroll">
      <div className="flex flex-row justify-between items-center py-[12px] h-[1000px]">
        <div className="flex flex-row space-x-[20px] h-[48px] items-center">
          <Link href="/" className="flex flex-row space-x-[16px]">
            <Icons.logo className="" />
            <div className="bg-neutral-300 w-[2px] h-[28px]" />
            <div className="flex space-x-[16px]">
              <Icons.logorussia className="" />
              <Icons.chevron className="rotate-90" />
            </div>
          </Link>
          <div className="flex flex-row">
            <MenuItem title="Меню" icon={<Icons.burgermenu />} />
            <Dialog>
              <DialogTrigger asChild>
                <Icons.bonus />
              </DialogTrigger>
              <MenuItem title="Бонусы" />
              {/*<p className="text-violet-500">Блок</p>*/}

              <DialogContent className="w-[674px] rounded-[16px] p-[24px]">
                <div className="inline-flex items-center mx-auto space-x-1">
                  <p className="font-pg text-[32px] text-center">
                    Напишите отзыв и получите 50
                  </p>
                  <Icons.bonus className="size-[32px]" />
                </div>
                <div>
                  <div className="flex flex-row space-x-[20px] items-center">
                    <div className="relative w-[140px] h-[70px] overflow-hidden rounded-[8px]">
                      <Image
                        src="https://i.imgur.com/oRsLGPg.jpeg"
                        alt=""
                        className="object-cover"
                        fill
                      />
                    </div>
                    <div>
                      <h1 className="font-medium w-[400px]">
                        Две столицы: Москва — Санкт-Петербург «Семейные
                        каникулы»
                      </h1>
                      <div className="inline-flex space-x-[8px] ">
                        <p className="text-[14px] text-[#747474]">
                          22-25 сентября 2023 г.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[20px] w-full" />
                <div className="">
                  <p className="text-[14px] mb-3 text-[#747474]">
                    Как вы провели время? Оцените по шкале
                  </p>
                  <div className="flex flex-row">
                    {Array.from({ length: 10 }).map((_, index) => (
                      <div
                        key={index}
                        className="size-[36px] flex justify-center items-center duration-150 hover:bg-border rounded-md hover:cursor-pointer"
                      >
                        {index + 1}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="">
                  <p className="text-[14px] mb-3 text-[#747474]">
                    Что вам особенно понравлось?
                  </p>
                  <div className="flex flex-row">
                    <CustomBadge title="Расположение" />
                    <CustomBadge title="Цена/качество" />
                    <CustomBadge title="Комфорт" />
                    <CustomBadge title="Гид" />
                  </div>
                </div>
                <div className="">
                  <p className="text-[14px] mb-3 text-[#747474]">Вид отдыха</p>
                  <div className="flex flex-row">
                    <Tabs defaultValue="account" className="">
                      <TabsList>
                        <TabsTrigger value="account">в одиночку</TabsTrigger>
                        <TabsTrigger value="password1">с друзьями</TabsTrigger>
                        <TabsTrigger value="password23">с детьми</TabsTrigger>
                        <TabsTrigger value="passwor34d">с парой</TabsTrigger>
                        <TabsTrigger value="password4">
                          бизнес-поездка
                        </TabsTrigger>
                      </TabsList>
                    </Tabs>
                  </div>
                </div>
                <div className="">
                  <p className="text-[14px] mb-3 text-[#747474]">
                    Вы уже были здесь раньше?
                  </p>
                  <div className="flex flex-row">
                    <Tabs defaultValue="4111" className="">
                      <TabsList>
                        <TabsTrigger value="4111">впервые здесь</TabsTrigger>
                        <TabsTrigger value="pa32ssword1">
                          периодически бываю
                        </TabsTrigger>
                        <TabsTrigger value="passwor1d23">
                          регулярно посещаю
                        </TabsTrigger>
                      </TabsList>
                    </Tabs>
                  </div>
                </div>
                <div className="flex items-center space-x-[12px]">
                  <Checkbox id="promo" />
                  <label
                    htmlFor="promo"
                    className="text-sm  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Я местный житель
                  </label>
                </div>
                <div className="flex flex-row items-center space-x-1">
                  <p>Добавьте видео отзыв и получите еще 50</p>
                  <Icons.bonus className="" />
                  <Button
                    size="sm"
                    variant="outline"
                    className="!h-[28px] ml-5 flex flex-row items-center space-x-3"
                  >
                    <p>Добавить видеоотзыв</p>{" "}
                    <UploadIcon className="size-[15px]" />
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <div className="flex flex-row">
          <MenuItem
            title="Проекты Мостуризма"
            icon={<Icons.Mosturizm />}
            hidden
          />
          <MenuItem
            title="Мои планы"
            icon={<HeartIcon className="text-black" />}
            hidden
          />
          <MenuItem title="Войти" icon={<Icons.user />} hidden />
          <MenuItem icon={<Icons.circleflags />} hidden />
        </div>
      </div>
    </div>
  );
};

export default Header;
