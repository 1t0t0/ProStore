"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { MoonIcon, SunIcon, SunMoon } from "lucide-react";
import { useTheme } from "next-themes";

const ModeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="focus-visible:ring-0 focus-visible:ring-offset-0"
        >
          {theme === "system" ? (
            <SunMoon />
          ) : theme === "dark" ? (
            <MoonIcon />
          ) : (
            <SunIcon />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-40 bg-white dark:bg-gray-900 rounded-md shadow-md p-3"
      >
        <DropdownMenuLabel className="border-b border-gray-200">
          Appearance
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={theme === "system"}
          onClick={() => setTheme("system")}
        >
          System
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={theme === "dark"}
          onClick={() => setTheme("dark")}
        >
          Dark
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={theme === "light"}
          onClick={() => setTheme("light")}
        >
          Light
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ModeToggle;
