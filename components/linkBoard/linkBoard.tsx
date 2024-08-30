"use client";

import data from "@/config";
import { useEffect, useState } from "react";
import nameRandomizer from "@/utils/nameRandomizer";
import Loading from "@/components/loading/loading";
import Image from "next/image";
import Link from "next/link";

export default function LinkBoard() {
  const [loading, setLoading] = useState(true);
  const [randomizedName, setRandomizedName] = useState(data.name);

  useEffect(() => {
    setLoading(false);
    if (data.animation && data.animation?.nameRandomizer) {
      nameRandomizer({ name: data.name, setRandomizedName });
    }
    if (data.sortByLength) {
      data.links.sort((a, b) => (a.name.length > b.name.length ? 1 : -1));
    }
  }, []);

  if (loading) return <Loading />;

  return (
    <main className="max-w-[600px] shadow-lg dark:shadow-none mx-auto flex flex-col justify-center min-h-screen px-8 bg-accent-50 dark:bg-transparent">
      <header className="py-8 flex flex-col items-center justify-center">
        <Image
          src="/profile.jpg"
          alt="An ai generated image of Miguel Caballero"
          width={150}
          height={150}
          className="rounded-full my-8"
        />
        <div className="text-center">
          <h1 className="uppercase text-3xl text-primary-500 font-black tracking-widest">
            {data.name}
          </h1>
          <h2 className="font-thin lowercase">{data.description}</h2>
        </div>
      </header>
      <section>
        <ul className="max-w-[375px] mx-auto">
          {data.links.map((link) => (
            <li key={link.name} className="first-of-type:mt-0 mt-4">
              <Link
                href={link.url}
                className="rounded flex gap-4 items-center px-8 py-4 transition-all hover:scale-105 text-accent-500 fill-accent-400 border-2 font-normal tracking-widest border-accent-500/80 bg-accent-500/5 hover:bg-primary-500/10 hover:text-primary-500/80 hover:border-primary-500/80 hover:fill-primary-500/80 dark:bg-gradient-to-br dark:hover:from-primary-500/10 dark:hover:to-secondary-500/10 dark:hover:text-white dark:hover:border-r-secondary-500/80 dark:hover:border-b-secondary-500/80 dark:hover:fill-white"
              >
                {!!link.icon && <link.icon className="w-4 h-4 fill-inherit" />}
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
      {/* <Source /> */}
    </main>
  );
}
