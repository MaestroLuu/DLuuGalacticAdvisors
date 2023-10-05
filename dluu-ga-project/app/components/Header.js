import Image from "next/image";

export default function Header() {
  return (
    <div className="flex flex-row justify-between">
      <div>
        <h3>INSURANCE ASSESSMENT</h3>
        <h1>CLIENT NAME</h1>
        <br />
        <div className="grid grid-cols-2">
          <text>Conducted on: </text>
          <input placeholder="Date" />
          <text>Date Accepted: </text>
          <input placeholder="Date" />
          <text>Reviewer Name: </text>
          <input placeholder="Name" />
        </div>
      </div>
      <Image
        src="/logo.png"
        alt="Galactic Advisors"
        className="m-8"
        width={100}
        height={24}
        priority
      />
    </div>
  );
}
