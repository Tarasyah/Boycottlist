import type { Company } from '@/types';

// This is mock data. In a real application, this would be fetched
// from a database that is populated by the Boycott List Summarizer.
const mockCompanies: Company[] = [
  {
    id: '1',
    name: 'HP (Hewlett Packard)',
    reason: 'Provides technology and services to the Israeli military and illegal settlements.',
    logo: 'hp',
  },
  {
    id: '2',
    name: 'Siemens',
    reason: 'Involved in the construction of the Euro-Asia Interconnector, which links Israel\'s electricity grid with Europe\'s, crossing through illegal settlements.',
    logo: 'siemens',
  },
  {
    id: '3',
    name: 'Puma',
    reason: 'Sponsors the Israel Football Association, which includes teams in illegal Israeli settlements on Palestinian land.',
    logo: 'puma',
  },
  {
    id: '4',
    name: 'AXA',
    reason: 'Invests in Israeli banks that finance the theft of Palestinian land and natural resources.',
    logo: 'axa',
  },
  {
    id: '5',
    name: 'SodaStream',
    reason: 'Actively complicit in Israel\'s policy of displacing the indigenous Bedouin-Palestinian citizens of Israel in the Naqab (Negev).',
    logo: 'sodastream',
  },
  {
    id: '6',
    name: "McDonald's",
    reason: 'Israeli franchise provided free meals to the Israeli military.',
    logo: 'mcdonalds',
  },
  {
    id: '7',
    name: 'Burger King',
    reason: 'Israeli franchise provided free meals to Israeli soldiers.',
    logo: 'burger king',
  },
   {
    id: '8',
    name: 'Starbucks',
    reason: 'Sued its workers\' union, Starbucks Workers United, over a pro-Palestine post.',
    logo: 'starbucks',
  },
  {
    id: '9',
    name: 'Google & Amazon',
    reason: 'Involved in Project Nimbus, a $1.2B contract to provide cloud services to the Israeli government and military.',
    logo: 'google amazon',
  },
  {
    id: '10',
    name: 'Chevron',
    reason: 'Extracting gas claimed by Israel in the Eastern Mediterranean, generating billions in revenue for Israel.',
    logo: 'chevron',
  },
  {
    id: '11',
    name: 'Intel',
    reason: 'Announced a new $25 billion investment in Israel in June 2023. Runs a large R&D center in Israel.',
    logo: 'intel',
  },
  {
    id: '12',
    name: 'IBM',
    reason: 'Provides services to the Israeli Population and Immigration Authority, and has a large R&D center in Israel.',
    logo: 'ibm',
  },
  {
    id: '13',
    name: 'Coca-Cola',
    reason: 'Operates a factory in the illegal Israeli settlement of Atarot.',
    logo: 'coca cola',
  },
  {
    id: '14',
    name: 'Sabra',
    reason: 'Jointly owned by PepsiCo and Strauss Group, which provides financial support to the Israeli military.',
    logo: 'sabra hummus',
  },
  {
    id: '15',
    name: 'Caterpillar',
    reason: 'Sells bulldozers and other equipment to the Israeli military, which are used to demolish Palestinian homes and infrastructure.',
    logo: 'caterpillar',
  },
];

export async function getBoycottList(): Promise<Company[]> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockCompanies;
}
