import Image from "next/image";
import packageJson from "../package.json";

export default function Home() {
  const appName = process.env.Nex;
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
      <main className="flex min-h-screen w-full flex-col items-end justify-end p-16 bg-white dark:bg-black">
        <h1 className="text-3xl font-bold capitalize w-max bg-red-700 p-2">{packageJson.name}</h1>
      </main>
    </div>
  );
}
