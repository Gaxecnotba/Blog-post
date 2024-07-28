import Cards from "@/components/Cards/Cards";
// import { useEffect, useState } from "react";

import { getBlogpost } from "@/lib/actions";
import { Key } from "react";

export default async function HomePage() {
  // const [news, setNews] = useState({});
  const newsdata = await getBlogpost();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {newsdata.map(
        (item: {
          id: Key;
          title: string;
          date: string;
          description: string;
          auth: string;
        }) => {
          <Cards
            key={item.id}
            id={item.id}
            title={item.title}
            date={item.date}
            description={item.description}
            auth={item.auth}
          />;
        }
      )}
    </main>
  );
}
