import { Icons } from "@/shared/assets/icons";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="h-[318px] bg-[#1d1d1d]">
      <div className="container">
        <div className="h-[80px] w-full" />
        <div className="flex flex-row justify-between">
          <div className="flex flex-row space-x-[88px]">
            <div className="flex flex-col space-y-[12px] text-white">
              <p className="opacity-50 text-[14px] hover:cursor-pointer">
                Контакты
              </p>
              <Link
                href="tel:88003006122"
                className="text-[16px] hover:cursor-pointer"
              >
                8 (800) 300-6-122
              </Link>
              <Link
                href="mailto:press@welcome.moscow"
                className="text-[16px] hover:cursor-pointer"
              >
                press@welcome.moscow
              </Link>
            </div>
            <div className="flex flex-col space-y-[12px] text-white">
              <Link
                href="https://russpass.ru/about-us"
                className="text-[16px] hover:cursor-pointer"
              >
                О проекте
              </Link>
              <Link
                href="https://russpass.ru/partners"
                className="text-[16px] hover:cursor-pointer"
              >
                Вход для партнёров
              </Link>
            </div>
          </div>
          <div className="flex flex-row space-x-[8px]">
            <Link href="https://vk.com/russpass">
              <Icons.vk />
            </Link>
            <Link href="https://dzen.ru/russpass">
              <Icons.dzen />
            </Link>
            <Link href="https://t.me/russpassmag">
              <Icons.tg />
            </Link>
            <Link href="https://ok.ru/russpass">
              <Icons.ok />
            </Link>
          </div>
        </div>
        <div className="h-[40px] w-full" />
        <div className="flex flex-row justify-between border-t-neutral-500 border-t py-[24px]">
          <Icons.TouristDevelopment />
          <div className="text-white text-[12px] flex flex-row space-x-[32px]">
            <p className="hover:cursor-pointer">Политика конфиденциальности</p>
            <p className="hover:cursor-pointer">
              Политика обработки персональных данных
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
