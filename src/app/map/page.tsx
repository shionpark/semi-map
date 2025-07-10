"use client";

import Link from "next/link";

export default function Map() {
  return (
    <>
      <Link href={"/map/1"}>1</Link>
      <Link href={"/map/2"}>2</Link>
      <Link href={"/map/3"}>3</Link>
    </>
  );
}
