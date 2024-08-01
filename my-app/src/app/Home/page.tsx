import Cards from "@/components/Cards/Cards";

import { getBlogpost } from "@/lib/actions";

export default async function Page() {
  const newsdata = await getBlogpost();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {newsdata && <Cards news={newsdata} />}
    </main>
  );
}
