import { Icons } from "@/shared/assets/icons";
import { ReactNode } from "react";
import { HeartIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

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

const Header = () => {
  return (
    <div className="h-[72px] container sticky top-0 inset-x-0 bg-white z-40 overflow-hidden">
      <div className="flex flex-row justify-between items-center py-[12px]">
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
            <MenuItem title="Бонусы" icon={<Icons.bonus />} />
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
