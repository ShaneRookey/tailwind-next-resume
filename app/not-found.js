import { Button } from "@mui/material";

function NotFound() {
  return (
    <>
      <h1 className="font-burtons text-2xl">
        Whoops! How&apos;d you get here?
      </h1>
      <Button size="large" href="/">
        HOME
      </Button>
    </>
  );
}

export default NotFound;
