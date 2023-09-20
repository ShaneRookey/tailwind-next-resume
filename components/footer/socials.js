import { Button } from "@mui/material";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

function Socials() {
  return (
    <div className="flex justify-evenly">
      <Button href="https://www.instagram.com/shanerookey/" target="_blank">
        <AiFillInstagram className="text-3xl cursor-pointer text-teal-800 dark:text-white" />
      </Button>
      <Button
        href="https://www.linkedin.com/in/shane-rookey-7273aa157/"
        target="_blank"
      >
        <AiFillLinkedin className="text-3xl cursor-pointer text-teal-800 dark:text-white" />
      </Button>
    </div>
  );
}

export default Socials;
