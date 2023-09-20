import Image from "next/image";

function Header({ ...props }) {
  return (
    <div
      {...props}
      className="flex flex-col items-center sm:flex-row sm:justify-center"
    >
      <Image src={"/shanerookeylogo.png"} width={200} height={200} alt="logo" />
      <Image
        className="rounded-full"
        src={"/shanebrick.jpg"}
        width={200}
        height={200}
        alt="me"
      />
    </div>
  );
}

export default Header;
