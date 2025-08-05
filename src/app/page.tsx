import { BoycottList } from "@/components/conscience-cart/boycott-list";
import { getBoycottList } from "@/lib/boycott-data";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExternalLink, Handshake } from "lucide-react";

export default async function Home() {
  const companies = await getBoycottList();

  const sources = [
    {
      name: "Ethical Consumer",
      url: "https://www.ethicalconsumer.org/ethical-campaigns-boycotts/palestine-boycott-list",
    },
    {
      name: "Boycott Israel",
      url: "https://boycott-israel.org/boycott.html?_gl=1*5clxkl*_up*MQ..*_ga*MjEwNzIwMDQzMi4xNzU0MjIzMTEy*_ga_180PTR07NS*czE3NTQyMjMxMTIkbzEkZzAkdDE3NTQyMjMxMTIkajYwJGwwJGgw",
    },
    {
      name: "Who Profits",
      url: "https://www.whoprofits.org/companies/find?Text=&Name=&Category=&Sector=&Headquarter=&Revenue=&Traded=&Presence=&Settlement=&Type=Table",
    },
    {
      name: "BDS Movement",
      url: "https://bdsmovement.net/Act-Now-Against-These-Companies-Profiting-From-Genocide",
    },
  ];

  return (
    <div className="container mx-auto p-4 sm:p-6 md:p-8">
      <header className="text-center mb-8 md:mb-12">
        <div className="flex justify-center items-center gap-3 mb-4">
          <h1 className="text-3xl md:text-5xl font-bold font-headline text-primary tracking-tight">
            Palestine Boycott Guide
          </h1>
          <Handshake className="h-8 w-8 md:h-10 md:w-10 text-primary" />
        </div>
        <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto">
          A resource for conscious consumers to support Palestinian freedom.
        </p>
      </header>
      <main>
        <BoycottList companies={companies} />
      </main>

      <footer className="mt-12">
        <Card>
          <CardHeader>
            <CardTitle>Sources</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              The information in this guide is compiled from the following
              publicly available resources:
            </p>
            <ul className="space-y-2">
              {sources.map((source) => (
                <li key={source.name}>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:underline"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>{source.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </footer>
    </div>
  );
}
