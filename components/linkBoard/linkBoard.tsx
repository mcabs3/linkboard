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
    <>
      <main className="mx-auto max-w-vp-lg flex flex-col justify-center min-h-screen">
        <header className="px-4 py-8 flex flex-col items-center justify-center">
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
          <ul className="max-w-[375px] mx-auto px-8">
            {data.links.map((link) => (
              <li key={link.name} className="first-of-type:mt-0 mt-4">
                <Link
                  href={link.url}
                  className="bg-primary-400 font-bold scale-95 hover:scale-100 transition-all border-2 flex items-center justify-center gap-2 py-4 rounded-lg bg-gradient-to-br border-t-primary-400/50 border-l-primary-400/50 border-r-primary-600/50 border-b-primary-600/50 border-t-primary-400/50 dark:border-l-primary-400/50 dark:border-r-secondary-400/50 dark:border-b-secondary-400/50 dark:from-primary-400/5 dark:to-secondary-400/5 dark:text-primary-50 dark:hover:border-t-primary-400/80 dark:hover:border-l-primary-400/80 dark:hover:border-r-secondary-400/80 dark:hover:border-b-secondary-400/80 dark:hover:from-primary-400/30 dark:hover:to-secondary-400/30"
                >
                  {!!link.icon && (
                    <link.icon className="w-4 h-4 fill-accent-950 dark:fill-primary-50" />
                  )}
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>
        {/* <Source /> */}
      </main>
    </>
  );
}
