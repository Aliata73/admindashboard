import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import {
  LayoutDashboard,
  CreditCard,
  Folders,
  Newspaper,
  Settings,
  User,
} from "lucide-react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <Command className="bg-secondary rounded-none">
      <CommandInput placeholder="جستجو ..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="پیشنهاد ها">
          <CommandItem>
            <LayoutDashboard className="ml-2 h-4 w-4" />
            <Link href='/'>داشبورد</Link>
          </CommandItem>
          <CommandItem>
            <Newspaper className="ml-2 h-4 w-4" />
            <Link href='/posts'>پست ها</Link>
          </CommandItem>
          <CommandItem>
            <Folders className="ml-2 h-4 w-4" />
            <Link href='#'>دسته بندی ها</Link>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="تنظیمات">
          <CommandItem>
            <User className="ml-2 h-4 w-4" />
            <span>پروفایل</span>
            <CommandShortcut className="absolute left-0 ml-4 hidden xl:block">P⌘</CommandShortcut>
          </CommandItem>
          <CommandItem>
          <CreditCard className="ml-2 h-4 w-4" />
            <span>حساب ها</span>
            <CommandShortcut className="absolute left-0 ml-4 hidden xl:block">B⌘</CommandShortcut>
          </CommandItem>
          <CommandItem>
          <Settings className="ml-2 h-4 w-4" />
            <span>تنظیمات</span>
            <CommandShortcut className="absolute left-0 ml-4 hidden xl:block">S⌘</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
};

export default Sidebar;
