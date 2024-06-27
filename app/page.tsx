import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col h-screen justify-center items-center gap-5">
      <div className="flex flex-col gap-4">
        <Link href="/register">Sign in</Link>
      </div>
 </main>
  );
}
