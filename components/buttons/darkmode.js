"use client";
import { Button } from "@mui/material";
import { useTheme } from "next-themes";
import { BsFillMoonStarsFill } from "react-icons/bs";

export default function Darkmode() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <Button
      className="text-white"
      onClick={() => setTheme(isDark ? "light" : "dark")}
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
