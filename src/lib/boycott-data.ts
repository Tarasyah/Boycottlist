import type { Company } from '@/types';

// This is mock data. In a real application, this would be fetched
// from a database that is populated by the Boycott List Summarizer.
//
// TO USE YOUR OWN DATA:
// 1. Convert your CSV file into a JSON array of objects.
// 2. Paste your data here, replacing the mockCompanies array.
// 3. Make sure your object keys match the 'Company' type properties.
const mockCompanies: Company[] = [
  {
    id: '1',
    "Category": 'Technology',
    "Company Name": 'HP (Hewlett Packard)',
    "Involvement": 'Provides technology and services to the Israeli military and illegal settlements.',
    "Sub-companies / Brands": 'N/A',
    "Country": 'USA',
  },
  {
    id: '2',
    "Category": 'Industrial',
    "Company Name": 'Siemens',
    "Involvement": 'Involved in the construction of the Euro-Asia Interconnector, which links Israel\'s electricity grid with Europe\'s, crossing through illegal settlements.',
    "Sub-companies / Brands": 'N/A',
    "Country": 'Germany',
  },
  {
    id: '3',
    "Category": 'Apparel',
    "Company Name": 'Puma',
    "Involvement": 'Sponsors the Israel Football Association, which includes teams in illegal Israeli settlements on Palestinian land.',
    "Sub-companies / Brands": 'N/A',
    "Country": 'Germany',
  },
  {
    id: '4',
    "Category": 'Finance',
    "Company Name": 'AXA',
    "Involvement": 'Invests in Israeli banks that finance the theft of Palestinian land and natural resources.',
    "Sub-companies / Brands": 'N/A',
    "Country": 'France',
  },
  {
    id: '5',
    "Category": 'Food & Beverage',
    "Company Name": 'SodaStream',
    "Involvement": 'Actively complicit in Israel\'s policy of displacing the indigenous Bedouin-Palestinian citizens of Israel in the Naqab (Negev).',
    "Sub-companies / Brands": 'N/A',
    "Country": 'Israel',
  },
  {
    id: '6',
    "Category": 'Food & Beverage',
    "Company Name": "McDonald's",
    "Involvement": 'Israeli franchise provided free meals to the Israeli military.',
    "Sub-companies / Brands": 'N/A',
    "Country": 'USA',
  },
  {
    id: '7',
    "Category": 'Food & Beverage',
    "Company Name": 'Burger King',
    "Involvement": 'Israeli franchise provided free meals to Israeli soldiers.',
    "Sub-companies / Brands": 'N/A',
    "Country": 'USA',
  },
   {
    id: '8',
    "Category": 'Food & Beverage',
    "Company Name": 'Starbucks',
    "Involvement": 'Sued its workers\' union, Starbucks Workers United, over a pro-Palestine post.',
    "Sub-companies / Brands": 'N/A',
    "Country": 'USA',
  },
  {
    id: '9',
    "Category": 'Technology',
    "Company Name": 'Google & Amazon',
    "Involvement": 'Involved in Project Nimbus, a $1.2B contract to provide cloud services to the Israeli government and military.',
    "Sub-companies / Brands": 'Alphabet, AWS',
    "Country": 'USA',
  },
  {
    id: '10',
    "Category": 'Energy',
    "Company Name": 'Chevron',
    "Involvement": 'Extracting gas claimed by Israel in the Eastern Mediterranean, generating billions in revenue for Israel.',
    "Sub-companies / Brands": 'N/A',
    "Country": 'USA',
  },
  {
    id: '11',
    "Category": 'Technology',
    "Company Name": 'Intel',
    "Involvement": 'Announced a new $25 billion investment in Israel in June 2023. Runs a large R&D center in Israel.',
    "Sub-companies / Brands": 'N/A',
    "Country": 'USA',
  },
  {
    id: '12',
    "Category": 'Technology',
    "Company Name": 'IBM',
    "Involvement": 'Provides services to the Israeli Population and Immigration Authority, and has a large R&D center in Israel.',
    "Sub-companies / Brands": 'N/A',
    "Country": 'USA',
  },
  {
    id: '13',
    "Category": 'Food & Beverage',
    "Company Name": 'Coca-Cola',
    "Involvement": 'Operates a factory in the illegal Israeli settlement of Atarot.',
    "Sub-companies / Brands": 'N/A',
    "Country": 'USA',
  },
  {
    id: '14',
    "Category": 'Food & Beverage',
    "Company Name": 'Sabra',
    "Involvement": 'Jointly owned by PepsiCo and Strauss Group, which provides financial support to the Israeli military.',
    "Sub-companies / Brands": 'PepsiCo, Strauss Group',
    "Country": 'USA',
  },
  {
    id: '15',
    "Category": 'Industrial',
    "Company Name": 'Caterpillar',
    "Involvement": 'Sells bulldozers and other equipment to the Israeli military, which are used to demolish Palestinian homes and infrastructure.',
    "Sub-companies / Brands": 'N/A',
    "Country": 'USA',
  },
];

export async function getBoycottList(): Promise<Company[]> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockCompanies;
}
