"use client";
import { Button, debounce } from "@mui/material";
import { useTheme } from "next-themes";
import { useMemo } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";

export default function Darkmode() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  const onModeClick = useMemo(
    () =>
      debounce(() => {
        setTheme(isDark ? "light" : "dark");
      }),
    [isDark, setTheme]
  );

  return (
    <Button
      className="text-white"
      onClick={onModeClick}
      size="medium"
      variant="text"
    >
      <BsFillMoonStarsFill />
      <h1 className={"text-xs ml-3 whitespace-nowrap"}>
        {isDark ? "light" : "dark"}
      </h1>
    </Button>
  );
}
