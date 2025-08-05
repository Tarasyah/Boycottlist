import { BoycottList } from "@/components/conscience-cart/boycott-list";
import { getBoycottList } from "@/lib/boycott-data";
import { Leaf } from "lucide-react";

export default async function Home() {
  const companies = await getBoycottList();

  return (
    <div className="container mx-auto p-4 sm:p-6 md:p-8">
      <header className="text-center mb-8 md:mb-12">
        <div className="flex justify-center items-center gap-3 mb-4">
          <Leaf className="w-10 h-10 text-primary" />
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary tracking-tight">
            ConscienceCart
          </h1>
        </div>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          An aggregated, community-moderated list of companies to support ethical consumption. Search, learn, and contribute to a more just marketplace.
        </p>
      </header>
      <main>
        <BoycottList companies={companies} />
      </main>
    </div>
  );
}
