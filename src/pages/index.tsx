import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="flex gap-4">
        <Link href="/csr">csr</Link>
        <Link href="/ssr">ssr</Link>
        <Link href="/ssg">ssg</Link>
      </div>
    </main>
  );
}
