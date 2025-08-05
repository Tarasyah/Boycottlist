import type { Company } from '@/types';

// This is mock data. In a real application, this would be fetched
// from a database that is populated by the Boycott List Summarizer.
const mockCompanies: Company[] = [
  {
    id: '1',
    name: 'HP (Hewlett Packard)',
    reason: 'Provides technology and services to the Israeli military and illegal settlements.',
    source: 'https://bdsmovement.net/Act-Now-Against-These-Companies-Profiting-From-Genocide',
    logo: 'hp',
    category: 'Technology',
  },
  {
    id: '2',
    name: 'Siemens',
    reason: 'Involved in the construction of the Euro-Asia Interconnector, which links Israel\'s electricity grid with Europe\'s, crossing through illegal settlements.',
    source: 'https://bdsmovement.net/Act-Now-Against-These-Companies-Profiting-From-Genocide',
    logo: 'siemens',
    category: 'Industrial',
  },
  {
    id: '3',
    name: 'Puma',
    reason: 'Sponsors the Israel Football Association, which includes teams in illegal Israeli settlements on Palestinian land.',
    source: 'https://bdsmovement.net/Act-Now-Against-These-Companies-Profiting-From-Genocide',
    logo: 'puma',
    category: 'Apparel',
  },
  {
    id: '4',
    name: 'AXA',
    reason: 'Invests in Israeli banks that finance the theft of Palestinian land and natural resources.',
    source: 'https://bdsmovement.net/Act-Now-Against-These-Companies-Profiting-From-Genocide',
    logo: 'axa',
    category: 'Finance',
  },
  {
    id: '5',
    name: 'SodaStream',
    reason: 'Actively complicit in Israel\'s policy of displacing the indigenous Bedouin-Palestinian citizens of Israel in the Naqab (Negev).',
    source: 'https://bdsmovement.net/Act-Now-Against-These-Companies-Profiting-From-Genocide',
    logo: 'sodastream',
    category: 'Home Goods',
  },
  {
    id: '6',
    name: "McDonald's",
    reason: 'Israeli franchise provided free meals to the Israeli military.',
    source: 'https://www.aljazeera.com/news/2023/10/17/why-are-people-boycotting-mcdonalds',
    logo: 'mcdonalds',
    category: 'Food & Beverage',
  },
  {
    id: '7',
    name: 'Burger King',
    reason: 'Israeli franchise provided free meals to Israeli soldiers.',
    source: 'https://www.ethicalconsumer.org/ethical-campaigns-boycotts/palestine-boycott-list',
    logo: 'burger king',
    category: 'Food & Beverage',
  },
   {
    id: '8',
    name: 'Starbucks',
    reason: 'Sued its workers\' union, Starbucks Workers United, over a pro-Palestine post.',
    source: 'https://www.reuters.com/business/retail-consumer/starbucks-sues-workers-union-over-pro-palestinian-post-2023-10-19/',
    logo: 'starbucks',
    category: 'Food & Beverage',
  },
  {
    id: '9',
    name: 'Google & Amazon',
    reason: 'Involved in Project Nimbus, a $1.2B contract to provide cloud services to the Israeli government and military.',
    source: 'https://www.theguardian.com/commentisfree/2021/oct/12/google-amazon-project-nimbus-israeli-military-contract',
    logo: 'google amazon',
    category: 'Technology',
  },
];

export async function getBoycottList(): Promise<Company[]> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockCompanies;
}