import Image from "next/image";

const Head = () => {
  return (
    <div className="masthead">
      <div
        className="logo"
        style={{
          backgroundColor: "#00ffee",
        }}
      >
        <Image src="/wink-logo.png" alt="Wink logo" width={800} height={366} />
        <div
          style={{
            fontSize: "5rem",
            color: "#000",
          }}
        >
          Tattoo
        </div>
      </div>
    </div>
  );
};
export default Head;
