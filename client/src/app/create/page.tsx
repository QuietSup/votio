import Link from "next/link";

export default function Page() {
  return (
    <>
      <div>List</div>
      <Link href={"/survey"}>Survey</Link>
    </>
  );
}
