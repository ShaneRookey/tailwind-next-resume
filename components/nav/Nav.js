"use client";
import { PAGES } from "@/constants";
import { Button } from "@mui/material";
import Darkmode from "../buttons/darkmode";

function Nav() {
  return (
    <div className="flex justify-center sticky top-0 z-50 py-2">
      <div className="bg-gradient-to-b from-teal-900 to-teal-600 text-white shadow-md rounded-lg">
        {PAGES.map((page, i) => {
          return (
            <Button
              key={i}
              variant="text"
              size="medium"
              className="text-white"
              href={`#${page.name.toLocaleLowerCase()}`}
            >
              {page.icon}
              <h1 className="ml-3 bg-transparent whitespace-nowrap">
                {`${page.name}`}
              </h1>
            </Button>
          );
        })}
        <Darkmode />
      </div>
    </div>
  );
}

export default Nav;
