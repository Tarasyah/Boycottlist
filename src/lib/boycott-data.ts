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
    "Category": "Agriculture & Agrotechnology",
    "Company Name": "AdaFresh",
    "Involvement": "Services to the Settlements, Settlement Production ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Agriculture & Agrotechnology",
    "Company Name": "Adama",
    "Involvement": "Services to the Settlements",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "China"
 },
  {
    "Category": "Agriculture & Agrotechnology",
    "Company Name": "Adanim Tea Company (1991)",
    "Involvement": "Exploitation of Occupied Production and Resources",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Agriculture & Agrotechnology",
    "Company Name": "Afimilk Agricultural Cooperative",
    "Involvement": "Services to the Settlements",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Agriculture & Agrotechnology",
    "Company Name": "Agrifood Marketing",
    "Involvement": "Settlement Production",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Agriculture & Agrotechnology",
    "Company Name": "Agrofresh Pro",
    "Involvement": "Settlement Production",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Agriculture & Agrotechnology",
    "Company Name": "Agrexco Carmel Agricultural Export Company",
    "Involvement": "Palestinian Captive Market, Settlement Production ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Agriculture & Agrotechnology",
    "Company Name": "Amir Marketing and Investments in Agriculture",
    "Involvement": "Services to the Settlements, Settlement Production ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Agriculture & Agrotechnology",
    "Company Name": "Arava Export Growers",
    "Involvement": "Settlement Enterprise, Settlement Production ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Agriculture & Agrotechnology",
    "Company Name": "Arza Winery T.R.Z. (Hayotzer Winery)",
    "Involvement": "Settlement Production",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Occupied Palestinian Territory"
 },
  {
    "Category": "Agriculture & Agrotechnology",
    "Company Name": "Assaf Winery",
    "Involvement": "Settlement Production",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Occupied Syrian Golan"
 },
  {
    "Category": "Agriculture & Agrotechnology",
    "Company Name": "Avniv",
    "Involvement": "Settlement Production",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Occupied Palestinian Territory"
 },
  {
    "Category": "Agriculture & Agrotechnology",
    "Company Name": "Bazelet Hagolan Winery",
    "Involvement": "Settlement Production",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Occupied Syrian Golan"
 },
  {
    "Category": "Agriculture & Agrotechnology",
    "Company Name": "Beresheet",
    "Involvement": "Services to the Settlements, Settlement Production ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Occupied Syrian Golan"
 },
  {
    "Category": "Agriculture & Agrotechnology",
    "Company Name": "Bickel Group",
    "Involvement": "Exploitation of Occupied Production and Resources, Services to the Settlements, Settlement Production ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Agriculture & Agrotechnology",
    "Company Name": "Binyamina Winery",
    "Involvement": "Settlement Production",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Agriculture & Agrotechnology",
    "Company Name": "Carmel Wineries",
    "Involvement": "Settlement Production",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Agriculture & Agrotechnology",
    "Company Name": "Chateau Golan Winery",
    "Involvement": "Settlement Production",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Occupied Syrian Golan"
 },
  {
    "Category": "Agriculture & Agrotechnology",
    "Company Name": "Cherriessa",
    "Involvement": "Settlement Production",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Occupied Palestinian Territory"
 },
  {
    "Category": "Agriculture & Agrotechnology",
    "Company Name": "Chim Nir",
    "Involvement": "Specialized Equipment and Services",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Agriculture & Agrotechnology",
    "Company Name": "D. Hay Marketing of Agricultural Product",
    "Involvement": "Settlement Production",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Agriculture & Agrotechnology",
    "Company Name": "Dan Pri Export and International Trade",
    "Involvement": "Services to the Settlements, Settlement Production ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Agriculture & Agrotechnology",
    "Company Name": "Deshen Hatzafon - Production and Marketing of Fertilizer",
    "Involvement": "Services to the Settlements",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Agriculture & Agrotechnology",
    "Company Name": "Edom UK",
    "Involvement": "Settlement Production",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Agriculture & Agrotechnology",
    "Company Name": "Field Produce",
    "Involvement": "Settlement Production",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Agriculture & Agrotechnology",
    "Company Name": "Gadot Agro (Merhav Agro)",
    "Involvement": "Services to the Settlements",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Agriculture & Agrotechnology",
    "Company Name": "Gat Fertilizers",
    "Involvement": "Services to the Settlements",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Agriculture & Agrotechnology",
    "Company Name": "Gat Shomron Winery",
    "Involvement": "Settlement Production",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Occupied Palestinian Territory"
 },
  {
    "Category": "Agriculture & Agrotechnology",
    "Company Name": "Genesis Land Dates/N.S Water and maintenance services",
    "Involvement": "Settlement Production",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Occupied Palestinian Territory"
 },
  {
    "Category": "Agriculture & Agrotechnology",
    "Company Name": "Golan Heights Winery",
    "Involvement": "Settlement Production",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Occupied Syrian Golan"
 },
  {
    "Category": "Agriculture & Agrotechnology",
    "Company Name": "Gush Etzion Winery",
    "Involvement": "Settlement Production",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Occupied Palestinian Territory"
 },
  {
    "Category": "Agriculture & Agrotechnology",
    "Company Name": "Gvaot Olam Farm - Agriculture (Meshek Ran)",
    "Involvement": "Settlement Production",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Occupied Palestinian Territory"
 },
  {
    "Category": "Agriculture & Agrotechnology",
    "Company Name": "Hadiklaim Israel Date Growers Cooperative",
    "Involvement": "Settlement Production",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Agriculture & Agrotechnology",
    "Company Name": "Haifa Chemicals (Haifa Group)",
    "Involvement": "Services to the Settlements",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Agriculture & Agrotechnology",
    "Company Name": "Hamashbir Agriculture",
    "Involvement": "Services to the Settlements",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Agriculture & Agrotechnology",
    "Company Name": "Hishtil",
    "Involvement": "Services to the Settlements, Settlement Production ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Agriculture & Agrotechnology",
    "Company Name": "ICL Group Ltd.",
    "Involvement": "Services to the Settlements",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Agriculture & Agrotechnology",
    "Company Name": "Israeli Agricultural Exporters (General)",
    "Involvement": "Israeli fruits, vegetables, and wines, often including produce from illegal settlements on stolen Palestinian land, are misleadingly labeled as \"Product of Israel.\"",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel (Global)"
 },
  {
    "Category": "Agriculture & Agrotechnology",
    "Company Name": "Jerusalem Winery",
    "Involvement": "Settlement Production",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Occupied Palestinian Territory"
 },
  {
    "Category": "Agriculture & Agrotechnology",
    "Company Name": "Jordan River Herbs",
    "Involvement": "Settlement Production",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Occupied Palestinian Territory"
 },
  {
    "Category": "Agriculture & Agrotechnology",
    "Company Name": "Kedem Hadarim",
    "Involvement": "Settlement Production",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Agriculture & Agrotechnology",
    "Company Name": "Land of Choice Olive Oil (Meshek Achiya)",
    "Involvement": "Settlement Production",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Occupied Palestinian Territory"
 },
  {
    "Category": "Agriculture & Agrotechnology",
    "Company Name": "Mehadrin",
    "Involvement": "Economic Exploitation, Exploitation of Labor, Settlement Enterprise, Settlement Production ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Agriculture & Agrotechnology",
    "Company Name": "Mifalei Tuff- Agricultural Cooperative Society LTD",
    "Involvement": "Economic Exploitation, Exploitation of Occupied Production and Resources, Settlement Enterprise, Settlement Production ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Occupied Syrian Golan"
 },
  {
    "Category": "Agriculture & Agrotechnology",
    "Company Name": "Mor Hasharon Fruit (Sharon Fruit)",
    "Involvement": "Palestinian Captive Market, Services to the Settlements, Settlement Production ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel, South Africa "
 },
  {
    "Category": "Agriculture & Agrotechnology",
    "Company Name": "NaanDan Jain Irrigation",
    "Involvement": "Services to the Settlements",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Agriculture & Agrotechnology",
    "Company Name": "Netafim",
    "Involvement": "Services to the Settlements",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Agriculture & Agrotechnology",
    "Company Name": "Pelter Winery",
    "Involvement": "Settlement Production",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel, Occupied Syrian Golan "
 },
  {
    "Category": "Agriculture & Agrotechnology",
    "Company Name": "Recanati Winery",
    "Involvement": "Settlement Production",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Agriculture & Agrotechnology",
    "Company Name": "Rivulis Irrigation",
    "Involvement": "Services to the Settlements",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Agriculture & Agrotechnology",
    "Company Name": "Rivulis PTE",
    "Involvement": "Services to the Settlements, Settlement Enterprise ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Singapore"
 },
  {
    "Category": "Agriculture & Agrotechnology",
    "Company Name": "Roots Sustainable Agricultural Technologies",
    "Involvement": "Services to the Settlements",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Agriculture & Agrotechnology",
    "Company Name": "S.M Valley",
    "Involvement": "Services to the Settlements, Settlement Production ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Occupied Palestinian Territory"
 },
  {
    "Category": "Agriculture & Agrotechnology",
    "Company Name": "Shilo Winery",
    "Involvement": "Settlement Production",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Occupied Palestinian Territory"
 },
  {
    "Category": "Agriculture & Agrotechnology",
    "Company Name": "Tabor Winery",
    "Involvement": "Settlement Production",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Agriculture & Agrotechnology",
    "Company Name": "Tadmir Group Management & Operating (2006)",
    "Involvement": "Israeli Construction on Occupied Land, Palestinian Captive Market, Settlement Production ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Agriculture & Agrotechnology",
    "Company Name": "Tamar Hazahav",
    "Involvement": "Settlement Production",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel, Occupied Palestinian Territory "
 },
  {
    "Category": "Agriculture & Agrotechnology",
    "Company Name": "Tanya Winery",
    "Involvement": "Settlement Production",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Occupied Palestinian Territory"
 },
  {
    "Category": "Agriculture & Agrotechnology",
    "Company Name": "Tekoa Mushroom Farm",
    "Involvement": "Settlement Production",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Agriculture & Agrotechnology",
    "Company Name": "Teperberg 1870",
    "Involvement": "Exploitation of Occupied Production and Resources, Settlement Production ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Agriculture & Agrotechnology",
    "Company Name": "Tishbi Estate Winery (Habaron Wine Cellars)",
    "Involvement": "Settlement Production",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Agriculture & Agrotechnology",
    "Company Name": "Tnuva Group",
    "Involvement": "Economic Exploitation, Palestinian Captive Market, Services to the Settlements, Settlement Enterprise, Settlement Production ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Agriculture & Agrotechnology",
    "Company Name": "Top Greenhouses",
    "Involvement": "Settlement Production",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Occupied Palestinian Territory"
 },
  {
    "Category": "Agriculture & Agrotechnology",
    "Company Name": "Vered Hatamar",
    "Involvement": "Settlement Production",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Occupied Palestinian Territory"
 },
  {
    "Category": "Agriculture & Agrotechnology",
    "Company Name": "Yamit Filtration and Water Treatment (Formerly: Yamit E.L.I.)",
    "Involvement": "Exploitation of Labor, Exploitation of Occupied Production and Resources, Settlement Production ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel, Occupied Palestinian Territory "
 },
  {
    "Category": "Agriculture & Agrotechnology",
    "Company Name": "Zakai Agricultural Know-how and Inputs",
    "Involvement": "Settlement Production",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Occupied Palestinian Territory"
 },
  {
    "Category": "Agriculture & Agrotechnology",
    "Company Name": "Zorganika",
    "Involvement": "Settlement Production",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Occupied Palestinian Territory"
 },
  {
    "Category": "App & Game Studios",
    "Company Name": "Crazy Labs",
    "Involvement": "A prominent Israeli mobile game publisher specializing in hyper-casual games.",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel (Global)"
 },
  {
    "Category": "App & Game Studios",
    "Company Name": "Moon Active",
    "Involvement": "An Israeli mobile game developer known for the game Coin Master.",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel (Global)"
 },
  {
    "Category": "App & Game Studios",
    "Company Name": "Plarium",
    "Involvement": "An Israeli game developer renowned for MMO strategy games like Vikings: War of Clans and Raid: Shadow Legends.",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel (Global)"
 },
  {
    "Category": "App & Game Studios",
    "Company Name": "Playtika Holdings Corp",
    "Involvement": "An Israeli company that develops mobile games. Co-founder Uri Shahak is the son of a former Chief of Staff of the IDF.",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel (Global)"
 },
  {
    "Category": "Banking",
    "Company Name": "AXA",
    "Involvement": "Invests in Israeli banks that finance war crimes and the theft of Palestinian land and natural resources.",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "France"
 },
  {
    "Category": "Banking",
    "Company Name": "Bank Hapoalim",
    "Involvement": "Accused of financing activity in illegal Israeli settlements.",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Banking",
    "Company Name": "Bank Leumi",
    "Involvement": "Israeli Construction on Occupied Land, Palestinian Captive Market, Services to the Settlements ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Banking",
    "Company Name": "Bank of Jerusalem",
    "Involvement": "Israeli Construction on Occupied Land, Services to the Settlements ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Banking",
    "Company Name": "Bankinvest",
    "Involvement": "Provides loans and guarantees to, or invests in, companies with activities on occupied land.",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Denmark"
 },
  {
    "Category": "Banking",
    "Company Name": "Barclays",
    "Involvement": "Holds over £1 billion in shares and provides over £3 billion in loans and underwriting to nine companies whose weapons and military technology are used in Israel’s armed violence against Palestinians.",
    "Sub-companies ": {
       " Brands": "Tesco Bank"
    },
    "Country": "United Kingdom"
 },
  {
    "Category": "Banking",
    "Company Name": "BNP Paribas",
    "Involvement": "Maintains business relationships and investments with companies implicated in the construction of Israeli settlements.",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "France"
 },
  {
    "Category": "Banking",
    "Company Name": "Citibank (Citigroup)",
    "Involvement": "Alleged to have financial relationships with companies involved in military and security operations in occupied territories.",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "United States"
 },
  {
    "Category": "Banking",
    "Company Name": "Clal Insurance Enterprises Holdings",
    "Involvement": "Exploitation of Occupied Production and Resources, Israeli Construction on Occupied Land, Services to the Settlements, Specialized Equipment and Services ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Banking",
    "Company Name": "Danske Bank",
    "Involvement": "Made loans and guarantees available to companies with settlement connections, including HeidelbergCement.",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Denmark"
 },
  {
    "Category": "Banking",
    "Company Name": "Discount Bank",
    "Involvement": "Accused of financing settlement activities.",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Banking",
    "Company Name": "First International Bank of Israel",
    "Involvement": "Israeli Construction on Occupied Land, Services to the Settlements ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Banking",
    "Company Name": "Hapoalim Bank",
    "Involvement": "Exploitation of Occupied Production and Resources, Israeli Construction on Occupied Land, Palestinian Captive Market, Services to the Settlements, Specialized Equipment and Services ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Banking",
    "Company Name": "Harel Insurance Investments and Financial Services",
    "Involvement": "Exploitation of Occupied Production and Resources, Israeli Construction on Occupied Land, Services to the Settlements, Specialized Equipment and Services ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Banking",
    "Company Name": "HSBC",
    "Involvement": "Alleged to have investments in companies supplying military equipment and services to Israel.",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "United Kingdom"
 },
  {
    "Category": "Banking",
    "Company Name": "Israel Discount Bank",
    "Involvement": "Israeli Construction on Occupied Land, Palestinian Captive Market, Services to the Settlements ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Banking",
    "Company Name": "JPMorgan Chase",
    "Involvement": "Accused of having significant financial relationships with Israeli companies involved in the occupation and settlement activities.",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "United States"
 },
  {
    "Category": "Banking",
    "Company Name": "Menora Mivtachim Holdings",
    "Involvement": "Exploitation of Occupied Production and Resources, Services to the Settlements ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Banking",
    "Company Name": "Migdal Insurance",
    "Involvement": "Israeli Construction on Occupied Land, Services to the Settlements ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Banking",
    "Company Name": "Mizrahi Tefahot Bank",
    "Involvement": "Israeli Construction on Occupied Land, Services to the Settlements ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Banking",
    "Company Name": "Nykredit",
    "Involvement": "Provides loans and guarantees to, or invests in, companies with activities on occupied land.",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Denmark"
 },
  {
    "Category": "Banking",
    "Company Name": "Phoenix Financial",
    "Involvement": "Exploitation of Occupied Production and Resources, Israeli Construction on Occupied Land, Services to the Settlements, Specialized Equipment and Services ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Banking",
    "Company Name": "Shufersal",
    "Involvement": "Services to the Settlements",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Clothing",
    "Company Name": "Aldo",
    "Involvement": "Services to the Settlements, Settlement Enterprise, Settlement Production ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Canada"
 },
  {
    "Category": "Clothing",
    "Company Name": "Castro Model",
    "Involvement": "Services to the Settlements",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Clothing",
    "Company Name": "Delta Galil Industries",
    "Involvement": "Services to the Settlements, Settlement Production ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Clothing",
    "Company Name": "Fox-Wizel Ltd. (Fox Group)",
    "Involvement": "Services to the Settlements, Settlement Enterprise ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Clothing",
    "Company Name": "Puma",
    "Involvement": "Sponsors the Israel Football Association (IFA), which includes teams from illegal Israeli settlements. The contract expires in December 2024.",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Germany"
 },
  {
    "Category": "Clothing",
    "Company Name": "ZARA (Inditex)",
    "Involvement": "The franchise holder in Israel hosted an event for a far-right politician, sparking calls for boycotts.",
    "Sub-companies ": {
       " Brands": "Pull&Bear, Bershka, Stradivarius"
    },
    "Country": "Spain"
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "A. B. Plan",
    "Involvement": "Israeli Construction on Occupied Land",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "A. Barkan and Co.",
    "Involvement": "Israeli Construction on Occupied Land",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "A. Hezi Building and Investment Co.",
    "Involvement": "Israeli Construction on Occupied Land",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "A.B. Plan",
    "Involvement": "Israeli Construction on Occupied Land",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "Africa Israel Investments",
    "Involvement": "Israeli Construction on Occupied Land",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "Agrotop",
    "Involvement": "Israeli Construction on Occupied Land, Services to the Settlements ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "Ahuzat Adi Construction Company",
    "Involvement": "Israeli Construction on Occupied Land",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "Almog C.D.A.Y",
    "Involvement": "Israeli Construction on Occupied Land",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "Amos Hadar Properties and Investments (Hadar Group)",
    "Involvement": "Israeli Construction on Occupied Land",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "Amy Metom Engineers and Consultants",
    "Involvement": "Israeli Construction on Occupied Land, Services to the Settlements ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "Anglo Saxon Real Estate Agency (Israel 1992)",
    "Involvement": "Services to the Settlements",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "Ashdar Building Company",
    "Involvement": "Israeli Construction on Occupied Land",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "Ashtrom Group",
    "Involvement": "Exploitation of Occupied Production and Resources, Israeli Construction on Occupied Land, Settlement Production, Specialized Equipment and Services, The Wall and Checkpoints ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "Avisror Moshe & Sons",
    "Involvement": "on Occupied Land Israeli Construction",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "B. Yair Building Corporation",
    "Involvement": "Israeli Construction on Occupied Land",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "Bar Amana Buildings Construction & Development Co.",
    "Involvement": "Israeli Construction on Occupied Land, Services to the Settlements ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Occupied Palestinian Territory"
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "Barad Earth Development & Road Works",
    "Involvement": "Israeli Construction on Occupied Land, The Wall and Checkpoints ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "Baran Group",
    "Involvement": "Israeli Construction on Occupied Land, Services to the Settlements ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "Bardarian Brothers",
    "Involvement": "Israeli Construction on Occupied Land, The Wall and Checkpoints ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "Benny & Tzvika",
    "Involvement": "Specialized Equipment and Services",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "Boneich Construction Development & Investments",
    "Involvement": "Israeli Construction on Occupied Land",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel, Occupied Palestinian Territory "
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "CIM Lustigman",
    "Involvement": "Israeli Construction on Occupied Land",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "Citybook Services",
    "Involvement": "Settlement Production",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel, Occupied Palestinian Territory "
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "Covenant Group",
    "Involvement": "Exploitation of Occupied Production and Resources, Israeli Construction on Occupied Land, Services to the Settlements ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "D.N. Kol Gader",
    "Involvement": "Services to the Settlements, The Wall and Checkpoints ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel, Occupied Palestinian Territory "
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "Dalia Eliaspor Building Contracting Co. 1972",
    "Involvement": "Israeli Construction on Occupied Land",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "Danya Cebus",
    "Involvement": "Israeli Construction on Occupied Land, Services to the Settlements, Specialized Equipment and Services, The Wall and Checkpoints ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "David Ackerstein Ltd.",
    "Involvement": "Israeli Construction on Occupied Land, Services to the Settlements ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "Dekel Acher Construction and Investments",
    "Involvement": "Exploitation of Occupied Production and Resources, Israeli Construction on Occupied Land, Settlement Production ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel, Occupied Syrian Golan "
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "Doma Marketing for Building & Training Itd.",
    "Involvement": "Israeli Construction on Occupied Land, Services to the Settlements, Settlement Enterprise ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Occupied Palestinian Territory"
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "Dona Engineering and Construction",
    "Involvement": "Israeli Construction on Occupied Land",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "E.T. Legal Services",
    "Involvement": "Specialized Equipment and Services",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "Efgad Engineering and Construction Works",
    "Involvement": "Israeli Construction on Occupied Land",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "Einav Ahets",
    "Involvement": "Israeli Construction on Occupied Land",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "Eldad Spivak Engineering Co.",
    "Involvement": "Exploitation of Occupied Production and Resources, Israeli Construction on Occupied Land ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "Eli Yohanan Engineers",
    "Involvement": "Israeli Construction on Occupied Land, The Wall and Checkpoints ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "Elyakim Ben Ari",
    "Involvement": "Exploitation of Occupied Production and Resources, Settlement Production ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "Euro Israel (I.S.)",
    "Involvement": "Israeli Construction on Occupied Land",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "Extal",
    "Involvement": "Exploitation of Labor, Settlement Production ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Occupied Palestinian Territory"
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "Gadish Engineering - Yoram Gadish Group",
    "Involvement": "Israeli Construction on Occupied Land",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel, USA "
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "Galnor Building and Development Co.",
    "Involvement": "Israeli Construction on Occupied Land, Services to the Settlements, The Wall and Checkpoints ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "Groisman Engineering Ltd.",
    "Involvement": "Services to the Settlements",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "HBI Haerter AG",
    "Involvement": "Israeli Construction on Occupied Land",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Switzerland"
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "Haim Zaken Construction and Investments",
    "Involvement": "Israeli Construction on Occupied Land, Services to the Settlements ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "Hasid Brothers Building Contracting Co. Ltd",
    "Involvement": "Israeli Construction on Occupied Land",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "Impresa Pizzarotti & C",
    "Involvement": "Israeli Construction on Occupied Land",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Italy"
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "Isra Marin Manufacture of Structures 3000",
    "Involvement": "Israeli Construction on Occupied Land, The Wall and Checkpoints ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "Itzkin Eyal Architects",
    "Involvement": "Israeli Construction on Occupied Land",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "Kass Group (Kass - C)",
    "Involvement": "Israeli Construction on Occupied Land, Settlement Production ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel, Occupied Palestinian Territory "
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "Kfar Giladi Quarries",
    "Involvement": "Exploitation of Occupied Production and Resources, Settlement Production ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "Kiryat Sefer (Diur Modi'in)",
    "Involvement": "Israeli Construction on Occupied Land",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Occupied Palestinian Territory"
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "Kotler Adika Building Company",
    "Involvement": "Israeli Construction on Occupied Land",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "Lidor Real Estate Marketing",
    "Involvement": "Israeli Construction on Occupied Land, Services to the Settlements ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel, Occupied Palestinian Territory "
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "M.R. Hunter",
    "Involvement": "Specialized Equipment and Services",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "Magen Constructional Engineering Works Ltd",
    "Involvement": "Israeli Construction on Occupied Land, Services to the Settlements ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "Maoz Daniel",
    "Involvement": "Israeli Construction on Occupied Land",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "Margolin Bros",
    "Involvement": "Israeli Construction on Occupied Land",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "Max Bögl Stiftung & Co.",
    "Involvement": "Israeli Construction on Occupied Land",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Germany"
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "Medan Roads and Quarries (1964) LTD",
    "Involvement": "Economic Exploitation, Exploitation of Occupied Production and Resources, Settlement Enterprise, Settlement Production ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "Mei-Tal Engineering and Services",
    "Involvement": "Israeli Construction on Occupied Land",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "Meitarim Quarry",
    "Involvement": "Exploitation of Occupied Production and Resources, Services to the Settlements, Settlement Production ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "Mery Building Works Contracting Company",
    "Involvement": "Israeli Construction on Occupied Land",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Occupied Palestinian Territory"
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "Minrav Group",
    "Involvement": "Economic Exploitation, Exploitation of Occupied Production and Resources, Israeli Construction on Occupied Land, Population Control, Settlement Enterprise, Specialized Equipment and Services ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "Mishab Building and Development",
    "Involvement": "Israeli Construction on Occupied Land",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "Mishkan Eliyahu Construction and Investment Company",
    "Involvement": "Israeli Construction on Occupied Land",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "Mordechai Aviv Construction Industries",
    "Involvement": "Israeli Construction on Occupied Land, Settlement Production ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "N. O. A. Management and Consulting",
    "Involvement": "Israeli Construction on Occupied Land",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Occupied Palestinian Territory"
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "Neetuv Management and Development Co.",
    "Involvement": "Exploitation of Labor, Settlement Production ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Occupied Palestinian Territory"
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "Nesher Israel Cement Enterprises",
    "Involvement": "Israeli Construction on Occupied Land, Palestinian Captive Market, The Wall and Checkpoints ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "Neuman Steel Industries for Construction",
    "Involvement": "Israeli Construction on Occupied Land, Settlement Production ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "New Way Traffic",
    "Involvement": "Israeli Construction on Occupied Land, The Wall and Checkpoints ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "Olenik Transportation Earth Work and Road Constructions",
    "Involvement": "Israeli Construction on Occupied Land, The Wall and Checkpoints ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "Olizki Infrastructure Ltd",
    "Involvement": "Services to the Settlements, The Wall and Checkpoints ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "Oron Group",
    "Involvement": "Exploitation of Occupied Production and Resources, Israeli Construction on Occupied Land, Settlement Production ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "Peretz Bonei Hanegev",
    "Involvement": "Israeli Construction on Occupied Land, Palestinian Captive Market ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "Peretz Sela Civil Engineering",
    "Involvement": "Israeli Construction on Occupied Land, The Wall and Checkpoints ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "Phoenicia America-Israel (Flat Glass)",
    "Involvement": "Services to the Settlements, Specialized Equipment and Services, The Wall and Checkpoints ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "Psagot Ziv Investment and Development (1993) Ltd.",
    "Involvement": "Israeli Construction on Occupied Land, Services to the Settlements ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "Rami Levi Hashikma Marketing",
    "Involvement": "Israeli Construction on Occupied Land, Services to the Settlements ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "Readymix Industries Israel",
    "Involvement": "Israeli Construction on Occupied Land, Population Control, Services to the Settlements, Settlement Enterprise, The Wall and Checkpoints ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "Rotshtein Real Estate",
    "Involvement": "Israeli Construction on Occupied Land",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "S.A.G. (Velvel) Building & Development Ltd.",
    "Involvement": "Israeli Construction on Occupied Land",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel, Occupied Palestinian Territory "
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "SA.D.R. Construction Works Co.",
    "Involvement": "Israeli Construction on Occupied Land, Settlement Production ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Occupied Palestinian Territory"
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "Salit HaAdumim Quarry & Stone Processing Plant",
    "Involvement": "Exploitation of Labor, Exploitation of Occupied Production and Resources, Settlement Production ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Occupied Palestinian Territory"
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "Sarfati Simon Ltd.",
    "Involvement": "Israeli Construction on Occupied Land",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "Shachar and Co. Building and Engineering Company Ltd.",
    "Involvement": "Israeli Construction on Occupied Land",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Occupied Palestinian Territory"
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "Shapir Engineering and Industry",
    "Involvement": "Exploitation of Occupied Production and Resources, Israeli Construction on Occupied Land, Services to the Settlements, Settlement Production, Specialized Equipment and Services ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "Shlomo Cohen Construction Company",
    "Involvement": "Israeli Construction on Occupied Land",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "Shoham Engineering and Development",
    "Involvement": "Israeli Construction on Occupied Land",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "Steconfer",
    "Involvement": "Israeli Construction on Occupied Land, Services to the Settlements ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Portugal"
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "Susya Dairy",
    "Involvement": "Settlement Production",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Occupied Palestinian Territory"
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "Tedem Civil Engineering",
    "Involvement": "Israeli Construction on Occupied Land, The Wall and Checkpoints ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "The Metrontario Group",
    "Involvement": "Israeli Construction on Occupied Land",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Canada"
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "Tzifha International",
    "Involvement": "Exploitation of Occupied Production and Resources, Israeli Construction on Occupied Land, Settlement Production ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Occupied Palestinian Territory"
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "Umm Brothers Construction Works Investment and Development Company",
    "Involvement": "Israeli Construction on Occupied Land",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "Villar International",
    "Involvement": "Israeli Construction on Occupied Land, Settlement Enterprise ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "Y.D. Barzani",
    "Involvement": "Exploitation of Occupied Production and Resources, Israeli Construction on Occupied Land, Services to the Settlements ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "Yaaz Construction & Development",
    "Involvement": "Specialized Equipment and Services",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "Yatz-Ar",
    "Involvement": "Israeli Construction on Occupied Land, Services to the Settlements ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "Yechezkel Morad",
    "Involvement": "Israeli Construction on Occupied Land, Specialized Equipment and Services, The Wall and Checkpoints ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "Yehuda Welded Mesh (Yehuda Group)",
    "Involvement": "Israeli Construction on Occupied Land, Population Control, Services to the Settlements, Settlement Enterprise, Specialized Equipment and Services, The Wall and Checkpoints ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "YuGan Engineering",
    "Involvement": "Israeli Construction on Occupied Land",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "Z.M.H. Hammerman",
    "Involvement": "Israeli Construction on Occupied Land",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Construction & Real Estate",
    "Company Name": "Zalman Barashi",
    "Involvement": "Israeli Construction on Occupied Land, Services to the Settlements, Specialized Equipment and Services, The Wall and Checkpoints ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Cybersecurity",
    "Company Name": "Check Point Software Technologies",
    "Involvement": "A pioneer in cybersecurity that offers extensive security solutions, originating and headquartered in Israel.",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel (Global)"
 },
  {
    "Category": "Cybersecurity",
    "Company Name": "CyberArk",
    "Involvement": "Specializes in privileged access management, headquartered in Israel with a broad international reach.",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel (Global)"
 },
  {
    "Category": "Cybersecurity",
    "Company Name": "Fortinet",
    "Involvement": "Accused of sponsoring a conference on Israeli military technology.",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "United States"
 },
  {
    "Category": "Cybersecurity",
    "Company Name": "Imperva",
    "Involvement": "Initially founded in Israel, offers cybersecurity solutions for websites and data applications.",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "United States"
 },
  {
    "Category": "Cybersecurity",
    "Company Name": "McAfee",
    "Involvement": "A global cybersecurity company with various business interests in Israel.",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "United States"
 },
  {
    "Category": "Cybersecurity",
    "Company Name": "Opswat",
    "Involvement": "Accused of sponsoring a conference on Israeli military technology.",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "United States"
 },
  {
    "Category": "Cybersecurity",
    "Company Name": "Radware",
    "Involvement": "A cybersecurity firm providing solutions for service availability in data centers.",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel (Global)"
 },
  {
    "Category": "Cybersecurity",
    "Company Name": "Varonis",
    "Involvement": "Co-founded in Israel and the U.S., specializing in data security and analytics.",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel & United States"
 },
  {
    "Category": "Cybersecurity",
    "Company Name": "Waterfall Security",
    "Involvement": "Accused of sponsoring a conference on Israeli military technology.",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Defense / Military",
    "Company Name": "Afcon Holdings",
    "Involvement": "Private Security and Surveillance Technology, Services to the Settlements, Specialized Equipment and Services, The Wall and Checkpoints ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Defense / Military",
    "Company Name": "Aeronautics",
    "Involvement": "Settlement Production, Specialized Equipment and Services ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Defense / Military",
    "Company Name": "B.G. Ilanit Gates and Urban Elements",
    "Involvement": "Settlement Production, Specialized Equipment and Services, The Wall and Checkpoints ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Occupied Palestinian Territory"
 },
  {
    "Category": "Defense / Military",
    "Company Name": "Beit Alpha Technologies (B.A.T)",
    "Involvement": "Specialized Equipment and Services",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Defense / Military",
    "Company Name": "Ben Security",
    "Involvement": "Private Security and Surveillance Technology, Services to the Settlements ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Defense / Military",
    "Company Name": "Bladeworx",
    "Involvement": "Specialized Equipment and Services",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Defense / Military",
    "Company Name": "BlueBird Aero Systems",
    "Involvement": "Specialized Equipment and Services",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Defense / Military",
    "Company Name": "C. Mer Group",
    "Involvement": "Private Security and Surveillance Technology, Specialized Equipment and Services, The Wall and Checkpoints ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Defense / Military",
    "Company Name": "CEIA Costruzioni Elettroniche Industriali Automatismi",
    "Involvement": "Specialized Equipment and Services, The Wall and Checkpoints ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Italy"
 },
  {
    "Category": "Defense / Military",
    "Company Name": "CTI- Computech International",
    "Involvement": "Specialized Equipment and Services",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel, USA "
 },
  {
    "Category": "Defense / Military",
    "Company Name": "Caliber 3",
    "Involvement": "Israeli Construction on Occupied Land, Private Security and Surveillance Technology ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Occupied Palestinian Territory"
 },
  {
    "Category": "Defense / Military",
    "Company Name": "Combined Systems (CSI)",
    "Involvement": "Specialized Equipment and Services",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "USA"
 },
  {
    "Category": "Defense / Military",
    "Company Name": "Comodan Far East",
    "Involvement": "Specialized Equipment and Services, The Wall and Checkpoints ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Defense / Military",
    "Company Name": "Contact International (Kalia Israel Ammunition Co.)",
    "Involvement": "Settlement Production, Specialized Equipment and Services ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Occupied Palestinian Territory"
 },
  {
    "Category": "Defense / Military",
    "Company Name": "Controp Precision Technologies",
    "Involvement": "Specialized Equipment and Services, The Wall and Checkpoints ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Defense / Military",
    "Company Name": "DJI-DaJiang Innovation Technology Company",
    "Involvement": "Specialized Equipment and Services",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "China"
 },
  {
    "Category": "Defense / Military",
    "Company Name": "DefenSoft",
    "Involvement": "Specialized Equipment and Services, The Wall and Checkpoints ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Defense / Military",
    "Company Name": "ENI Advanced Security Solutions",
    "Involvement": "Services to the Settlements, Specialized Equipment and Services ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Defense / Military",
    "Company Name": "El Go Team",
    "Involvement": "Specialized Equipment and Services, The Wall and Checkpoints ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Defense / Military",
    "Company Name": "El-Far Electronics Systems",
    "Involvement": "Israeli Construction on Occupied Land, Services to the Settlements, Specialized Equipment and Services, The Wall and Checkpoints ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Defense / Military",
    "Company Name": "Elbit Systems",
    "Involvement": "Population Control, Services to the Settlements, Specialized Equipment and Services, The Wall and Checkpoints ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel, USA "
 },
  {
    "Category": "Defense / Military",
    "Company Name": "Eltal Technologistics",
    "Involvement": "Specialized Equipment and Services, The Wall and Checkpoints ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Defense / Military",
    "Company Name": "Evron Systems Ltd.",
    "Involvement": "Private Security and Surveillance Technology",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Occupied Palestinian Territory"
 },
  {
    "Category": "Defense / Military",
    "Company Name": "Falcon (WF) Technologies",
    "Involvement": "Specialized Equipment and Services, The Wall and Checkpoints ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Defense / Military",
    "Company Name": "G1 Secure Solutions (formerly G4S Israel)",
    "Involvement": "Services to the Settlements, Specialized Equipment and Services, The Wall and Checkpoints ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Defense / Military",
    "Company Name": "Galshan Marketing Human Resources Guarding & Security",
    "Involvement": "Private Security and Surveillance Technology, Services to the Settlements ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Defense / Military",
    "Company Name": "Garrett Metal Detectors",
    "Involvement": "Specialized Equipment and Services, The Wall and Checkpoints ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "USA"
 },
  {
    "Category": "Defense / Military",
    "Company Name": "Group 5 Security (Tzevet 5)",
    "Involvement": "Private Security and Surveillance Technology",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel, Occupied Palestinian Territory "
 },
  {
    "Category": "Defense / Military",
    "Company Name": "HOS Technology R&D",
    "Involvement": "Specialized Equipment and Services",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Defense / Military",
    "Company Name": "HaShomrim Guarding and Security Group Company (S.B. Shmira Ubitahon)",
    "Involvement": "Private Security and Surveillance Technology, The Wall and Checkpoints ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Defense / Military",
    "Company Name": "Human Safety Company for Accidents Investigation & Prevention (Bitihut Enosh)",
    "Involvement": "Population Control, Private Security and Surveillance Technology ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Defense / Military",
    "Company Name": "Ispra Israel Product Research",
    "Involvement": "Private Security and Surveillance Technology, Specialized Equipment and Services ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Defense / Military",
    "Company Name": "K-9 Solutions",
    "Involvement": "Private Security and Surveillance Technology, The Wall and Checkpoints ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Defense / Military",
    "Company Name": "Leonardo S.p.A",
    "Involvement": "Population Control, Specialized Equipment and Services ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Italy"
 },
  {
    "Category": "Defense / Military",
    "Company Name": "M.R. Hunter",
    "Involvement": "Specialized Equipment and Services",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Defense / Military",
    "Company Name": "MDT Armor",
    "Involvement": "Specialized Equipment and Services",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "USA"
 },
  {
    "Category": "Defense / Military",
    "Company Name": "Magalcom",
    "Involvement": "Private Security and Surveillance Technology",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Defense / Military",
    "Company Name": "Magna B.S.P",
    "Involvement": "Private Security and Surveillance Technology, Specialized Equipment and Services, The Wall and Checkpoints ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Defense / Military",
    "Company Name": "Maavarim",
    "Involvement": "Private Security and Surveillance Technology, Specialized Equipment and Services, The Wall and Checkpoints ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Defense / Military",
    "Company Name": "Meprolight",
    "Involvement": "Specialized Equipment and Services",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel, Occupied Palestinian Territory "
 },
  {
    "Category": "Defense / Military",
    "Company Name": "Mifram Group",
    "Involvement": "Specialized Equipment and Services, The Wall and Checkpoints ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Defense / Military",
    "Company Name": "Mikud Guarding (Mikud Group)",
    "Involvement": "Private Security and Surveillance Technology, Services to the Settlements, Specialized Equipment and Services ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Defense / Military",
    "Company Name": "Modi'in Ezrachi",
    "Involvement": "Private Security and Surveillance Technology, Services to the Settlements, The Wall and Checkpoints ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Defense / Military",
    "Company Name": "Moked Matara",
    "Involvement": "Private Security and Surveillance Technology, Services to the Settlements ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Defense / Military",
    "Company Name": "Motorola Solutions",
    "Involvement": "Population Control, Services to the Settlements, Settlement Enterprise, Specialized Equipment and Services, The Wall and Checkpoints ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "USA"
 },
  {
    "Category": "Defense / Military",
    "Company Name": "N. Jan",
    "Involvement": "Specialized Equipment and Services, The Wall and Checkpoints. ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Defense / Military",
    "Company Name": "Naska Industries - SK Group",
    "Involvement": "Specialized Equipment and Services",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Defense / Military",
    "Company Name": "Natoon Nof Yam Security",
    "Involvement": "Private Security and Surveillance Technology, Services to the Settlements ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Defense / Military",
    "Company Name": "Nextcom Group",
    "Involvement": "Exploitation of Occupied Production and Resources, Israeli Construction on Occupied Land, Services to the Settlements, Specialized Equipment and Services ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Defense / Military",
    "Company Name": "Nuctech",
    "Involvement": "Specialized Equipment and Services, The Wall and Checkpoints ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "China"
 },
  {
    "Category": "Defense / Military",
    "Company Name": "Orad",
    "Involvement": "Economic Exploitation, Exploitation of Occupied Production and Resources, Population Control, Services to the Settlements, Settlement Enterprise, Settlement Production, Specialized Equipment and Services, The Wall and Checkpoints ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Defense / Military",
    "Company Name": "Oshkosh Corporation",
    "Involvement": "Specialized Equipment and Services",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "USA"
 },
  {
    "Category": "Defense / Military",
    "Company Name": "RT LTA Systems",
    "Involvement": "Settlement Production, Specialized Equipment and Services ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Defense / Military",
    "Company Name": "Reshef Security",
    "Involvement": "Private Security and Surveillance Technology, Services to the Settlements, The Wall and Checkpoints ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Defense / Military",
    "Company Name": "Roboteam",
    "Involvement": "Specialized Equipment and Services",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Defense / Military",
    "Company Name": "S.I.H Security Cleaning and Services",
    "Involvement": "Private Security and Surveillance Technology, The Wall and Checkpoints ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Defense / Military",
    "Company Name": "Shamrad Electronics",
    "Involvement": "Private Security and Surveillance Technology, Specialized Equipment and Services, The Wall and Checkpoints ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Defense / Military",
    "Company Name": "Sheleg Lavan (White Snow)",
    "Involvement": "Private Security and Surveillance Technology, Services to the Settlements, The Wall and Checkpoints ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Defense / Military",
    "Company Name": "Smart Shooter",
    "Involvement": "Population Control, Specialized Equipment and Services, The Wall and Checkpoints ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Defense / Military",
    "Company Name": "Sturm, Ruger & Co., Inc.",
    "Involvement": "Specialized Equipment and Services",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "USA"
 },
  {
    "Category": "Defense / Military",
    "Company Name": "T & M Protection Resources Holdings Israel",
    "Involvement": "Private Security and Surveillance Technology, Services to the Settlements, Specialized Equipment and Services, The Wall and Checkpoints ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Defense / Military",
    "Company Name": "Tandu Technologies and Security Systems Ltd",
    "Involvement": "Private Security and Surveillance Technology, Services to the Settlements, The Wall and Checkpoints ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Defense / Military",
    "Company Name": "Teltone Electronics",
    "Involvement": "Settlement Production, Specialized Equipment and Services ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel, Occupied Palestinian Territory "
 },
  {
    "Category": "Defense / Military",
    "Company Name": "Top Sky Line Engineering Systems",
    "Involvement": "Private Security and Surveillance Technology",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Defense / Military",
    "Company Name": "Tshuva Research",
    "Involvement": "Population Control, Private Security and Surveillance Technology ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Defense / Military",
    "Company Name": "Videotec",
    "Involvement": "Private Security and Surveillance Technology",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Italy"
 },
  {
    "Category": "Defense / Military",
    "Company Name": "Yahav Oranit",
    "Involvement": "Israeli Construction on Occupied Land, Private Security and Surveillance Technology, Services to the Settlements ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Occupied Palestinian Territory"
 },
  {
    "Category": "Defense / Military",
    "Company Name": "Zoko Enterprises",
    "Involvement": "Population Control, Specialized Equipment and Services, The Wall and Checkpoints ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Energy & Utilities",
    "Company Name": "ABB Group",
    "Involvement": "Exploitation of Occupied Production and Resources, Israeli Construction on Occupied Land, Services to the Settlements ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Sweden, Switzerland "
 },
  {
    "Category": "Energy & Utilities",
    "Company Name": "Afek Oil and Gaz",
    "Involvement": "Exploitation of Occupied Production and Resources",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Energy & Utilities",
    "Company Name": "Amisragas, American Israeli Gas Crop.",
    "Involvement": "Services to the Settlements",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Energy & Utilities",
    "Company Name": "Aqwise- Wise Water Technologies",
    "Involvement": "Settlement Production",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Energy & Utilities",
    "Company Name": "B.D.T.H Israel Solar Energy Ltd.",
    "Involvement": "Israeli Construction on Occupied Land, Palestinian Captive Market, Services to the Settlements, Settlement Production ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": ""
 },
  {
    "Category": "Energy & Utilities",
    "Company Name": "B. Gaon Holdings",
    "Involvement": "Israeli Construction on Occupied Land, Services to the Settlements, Settlement Enterprise ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Energy & Utilities",
    "Company Name": "CETCO Mineral Technology Group",
    "Involvement": "Exploitation of Occupied Production and Resources, Services to the Settlements, Specialized Equipment and Services ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "USA"
 },
  {
    "Category": "Energy & Utilities",
    "Company Name": "Dor Alon Energy Israel (1988) Ltd.",
    "Involvement": "Palestinian Captive Market, Services to the Settlements, Settlement Enterprise ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Energy & Utilities",
    "Company Name": "EffiSolar Enterprises Inc.",
    "Involvement": "Exploitation of Occupied Production and Resources, Israeli Construction on Occupied Land, Services to the Settlements ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Canada"
 },
  {
    "Category": "Energy & Utilities",
    "Company Name": "Energix Renewable Energies",
    "Involvement": "Economic Exploitation, Exploitation of Occupied Production and Resources, Settlement Enterprise, Settlement Production ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Energy & Utilities",
    "Company Name": "Enerpoint Israel",
    "Involvement": "Exploitation of Occupied Production and Resources, Israeli Construction on Occupied Land, Settlement Production ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Energy & Utilities",
    "Company Name": "Enlight Renewable Energy",
    "Involvement": "Economic Exploitation, Exploitation of Occupied Production and Resources, Services to the Settlements, Settlement Enterprise, Settlement Production ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Energy & Utilities",
    "Company Name": "F.K. Generators and Equipment",
    "Involvement": "Services to the Settlements, The Wall and Checkpoints ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Energy & Utilities",
    "Company Name": "First Solar",
    "Involvement": "Economic Exploitation, Israeli Construction on Occupied Land, Services to the Settlements ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "USA"
 },
  {
    "Category": "Energy & Utilities",
    "Company Name": "General Electric",
    "Involvement": "Economic Exploitation, Exploitation of Occupied Production and Resources, Population Control, Settlement Enterprise, Settlement Production, Specialized Equipment and Services ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "USA"
 },
  {
    "Category": "Energy & Utilities",
    "Company Name": "Green is us",
    "Involvement": "Economic Exploitation, Israeli Construction on Occupied Land, Services to the Settlements ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Energy & Utilities",
    "Company Name": "Hagihon Company Ltd. Jerusalem Area's Water and Wastewater Utility",
    "Involvement": "Israeli Construction on Occupied Land, Services to the Settlements, Settlement Enterprise ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Energy & Utilities",
    "Company Name": "Hai Dolev Holdings Ltd.",
    "Involvement": "Exploitation of Occupied Production and Resources, Services to the Settlements, Specialized Equipment and Services ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Energy & Utilities",
    "Company Name": "JA Solar Holdings",
    "Involvement": "Israeli Construction on Occupied Land",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "China"
 },
  {
    "Category": "Energy & Utilities",
    "Company Name": "Kardan NV",
    "Involvement": "Israeli Construction on Occupied Land, Services to the Settlements ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Netherlands"
 },
  {
    "Category": "Energy & Utilities",
    "Company Name": "M.G.A. Energy Solutions",
    "Involvement": "Exploitation of Occupied Production and Resources, Israeli Construction on Occupied Land ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel, Occupied Palestinian Territory "
 },
  {
    "Category": "Energy & Utilities",
    "Company Name": "Meshek Energy-Renewable Energies",
    "Involvement": "Economic Exploitation, Exploitation of Occupied Production and Resources ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Energy & Utilities",
    "Company Name": "Mey Eden (Eden Springs)",
    "Involvement": "Exploitation of Occupied Production and Resources, Settlement Production ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Energy & Utilities",
    "Company Name": "Orkal Industries and Mechanization",
    "Involvement": "Settlement Production, The Wall and Checkpoints ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Energy & Utilities",
    "Company Name": "PGR Drive Technologies",
    "Involvement": "Israeli Construction on Occupied Land, Services to the Settlements ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Turkey"
 },
  {
    "Category": "Energy & Utilities",
    "Company Name": "Padcon",
    "Involvement": "Economic Exploitation, Services to the Settlements ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Germany"
 },
  {
    "Category": "Energy & Utilities",
    "Company Name": "Paz Oil Company",
    "Involvement": "Economic Exploitation, Palestinian Captive Market, Services to the Settlements, Settlement Enterprise ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Energy & Utilities",
    "Company Name": "Powergen Solar A (formerly Solegreen)",
    "Involvement": "Services to the Settlements",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Energy & Utilities",
    "Company Name": "Ral Electric Holdings (formerly: Adir Electric Boards)",
    "Involvement": "Services to the Settlements, The Wall and Checkpoints ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Energy & Utilities",
    "Company Name": "Refu Elektronik",
    "Involvement": "Exploitation of Occupied Production and Resources, Services to the Settlements ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Germany"
 },
  {
    "Category": "Energy & Utilities",
    "Company Name": "SMA Solar Technology",
    "Involvement": "Israeli Construction on Occupied Land, Services to the Settlements ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Germany"
 },
  {
    "Category": "Energy & Utilities",
    "Company Name": "Solaredge",
    "Involvement": "Exploitation of Occupied Production and Resources, Israeli Construction on Occupied Land ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Energy & Utilities",
    "Company Name": "Solvay",
    "Involvement": "Exploitation of Occupied Production and Resources, Services to the Settlements ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Belgium"
 },
  {
    "Category": "Energy & Utilities",
    "Company Name": "Sonol Israel",
    "Involvement": "Services to the Settlements",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Energy & Utilities",
    "Company Name": "Suntech",
    "Involvement": "Exploitation of Occupied Production and Resources, Israeli Construction on Occupied Land ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "China"
 },
  {
    "Category": "Energy & Utilities",
    "Company Name": "Tahal Group International",
    "Involvement": "Israeli Construction on Occupied Land, Services to the Settlements ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel, Netherlands "
 },
  {
    "Category": "Energy & Utilities",
    "Company Name": "Teralight",
    "Involvement": "Economic Exploitation, Exploitation of Occupied Production and Resources, Services to the Settlements, Settlement Enterprise, Settlement Production ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Energy & Utilities",
    "Company Name": "Zabar Solar",
    "Involvement": "Economic Exploitation, Exploitation of Occupied Production and Resources, Services to the Settlements, Settlement Enterprise, Settlement Production ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Food & Beverages",
    "Company Name": "Abadi Bakery",
    "Involvement": "Settlement Production",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Occupied Palestinian Territory"
 },
  {
    "Category": "Food & Beverages",
    "Company Name": "Achdut Factory for Tahini Halva and Sweets (Achdut-Achva)",
    "Involvement": "Exploitation of Labor, Services to the Settlements, Settlement Production ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Occupied Palestinian Territory"
 },
  {
    "Category": "Food & Beverages",
    "Company Name": "Angel Bakeries (Salomon A. Angel)",
    "Involvement": "Services to the Settlements, Settlement Production ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Food & Beverages",
    "Company Name": "Aroma Espresso Bar",
    "Involvement": "Services to the Settlements",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Food & Beverages",
    "Company Name": "Burger King",
    "Involvement": "Accused of donating meals to the Israeli military.",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "United States"
 },
  {
    "Category": "Food & Beverages",
    "Company Name": "Burger Ranch (Orgad HSN)",
    "Involvement": "Services to the Settlements",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Food & Beverages",
    "Company Name": "Cafe Cafe",
    "Involvement": "Services to the Settlements",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Food & Beverages",
    "Company Name": "Carrefour",
    "Involvement": "Entered a partnership with Israeli companies involved in violations against Palestinians. Carrefour-Israel has also supported Israeli soldiers with gift packages.",
    "Sub-companies ": {
       " Brands": "Promocash"
    },
    "Country": "France"
 },
  {
    "Category": "Food & Beverages",
    "Company Name": "Carrefour Israel (formerly Yenot Bitan)",
    "Involvement": "Services to the Settlements, Settlement Enterprise ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Food & Beverages",
    "Company Name": "The Central Bottling Company (Coca-Cola Israel)",
    "Involvement": "Settlement Enterprise, Settlement Production ",
    "Sub-companies ": {
       " Brands": "Coca-Cola, Sprite, Fanta, Powerade, etc."
    },
    "Country": "Israel"
 },
  {
    "Category": "Food & Beverages",
    "Company Name": "The Coca-Cola Company",
    "Involvement": "Accused of involvement in illegal Israeli settlements through its Israeli franchisee.",
    "Sub-companies ": {
       " Brands": "Innocent, Fanta, Costa Coffee, Powerade, Honest Tea, Rose's Cordial, Sprite, Schweppes UK, Glaceau Smartwater, 5 Alive"
    },
    "Country": "United States"
 },
  {
    "Category": "Food & Beverages",
    "Company Name": "Domino's Pizza",
    "Involvement": "Accused of donating meals to the Israeli military.",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "United States"
 },
  {
    "Category": "Food & Beverages",
    "Company Name": "Elite",
    "Involvement": "Part of the Strauss Group, with a significant presence in the confectionery, chocolate, and coffee market in Israel.",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel (Local)"
 },
  {
    "Category": "Food & Beverages",
    "Company Name": "English Cake",
    "Involvement": "Services to the Settlements",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Food & Beverages",
    "Company Name": "Herzel Bibi Nitsat HaDuvdevan",
    "Involvement": "Services to the Settlements",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Food & beverages",
    "Company Name": "Israel Salt Company",
    "Involvement": "Exploitation of Occupied Production and Resources, Settlement Production ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Food & Beverages",
    "Company Name": "Joe Gourmet Coffee",
    "Involvement": "Services to the Settlements",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Food & Beverages",
    "Company Name": "McDonald's",
    "Involvement": "Targeted by grassroots campaigns after its Israeli franchisee provided generous in-kind donations to the Israeli military. The Malaysian franchisee has also filed a lawsuit against activists.",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "United States"
 },
  {
    "Category": "Food & Beverages",
    "Company Name": "Nestlé",
    "Involvement": "Has a presence in Israel through its investment in Osem, a major Israeli food producer.",
    "Sub-companies ": {
       " Brands": "Perrier, Nescafé, Nespresso, NIDO, Gerber, Kit Kat, Häagen-Dazs, Purina, etc."
    },
    "Country": "Switzerland"
 },
  {
    "Category": "Food & Beverages",
    "Company Name": "Oppenheimer Manufacturing and Marketing",
    "Involvement": "Settlement Production",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Occupied Palestinian Territory"
 },
  {
    "Category": "Food & Beverages",
    "Company Name": "Osem",
    "Involvement": "A subsidiary of Nestlé, produces a wide range of food products consumed domestically and internationally. Headquartered in Israel.",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel (Local)"
 },
  {
    "Category": "Food & Beverages",
    "Company Name": "Papa John's",
    "Involvement": "Targeted by grassroots boycott campaigns as its franchisee in Israel has provided generous in-kind donations to the Israeli military.",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "United States"
 },
  {
    "Category": "Food & Beverages",
    "Company Name": "Pepsi",
    "Involvement": "Acquired SodaStream, an Israeli company with operations in disputed territories. Has a joint venture with Sabra.",
    "Sub-companies ": {
       " Brands": "Pepsi, Mountain Dew, 7 Up, Gatorade, Tropicana, Lipton Iced Teas, etc."
    },
    "Country": "United States"
 },
  {
    "Category": "Food & Beverages",
    "Company Name": "Pizza Hut",
    "Involvement": "Targeted by grassroots boycott campaigns as its franchisee in Israel has provided generous in-kind donations to the Israeli military.",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "United States"
 },
  {
    "Category": "Food & Beverages",
    "Company Name": "Prigat",
    "Involvement": "Produces juice and juice products, owned by Gan Shmuel Foods. Operations are based in Israel with global exports.",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel (Global)"
 },
  {
    "Category": "Food & Beverages",
    "Company Name": "Ramat Hagolan Dairies (Golan Heights Dairies)",
    "Involvement": "Settlement Production",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Occupied Syrian Golan"
 },
  {
    "Category": "Food & Beverages",
    "Company Name": "Sabra",
    "Involvement": "Partially owned by Strauss Group, an Israeli corporation reported to support the Israeli Defense Forces.",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel (Global)"
 },
  {
    "Category": "Food & Beverages",
    "Company Name": "Shamir Salads",
    "Involvement": "Exploitation of Occupied Production and Resources, Settlement Production ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Occupied Palestinian Territory"
 },
  {
    "Category": "Food & Beverages",
    "Company Name": "SodaStream",
    "Involvement": "Accused of exploiting the local Bedouin community at its factory in the Negev Desert and being complicit in the displacement of indigenous Bedouin-Palestinians.",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel (Global)"
 },
  {
    "Category": "Food & Beverages",
    "Company Name": "Starbucks",
    "Involvement": "The largest private owner, Howard Shultz, is a zionist who invests heavily in Israel's economy, including a $1.7 billion investment in cybersecurity startup Wiz.",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "United States"
 },
  {
    "Category": "Food & Beverages",
    "Company Name": "Strauss Group",
    "Involvement": "An Israeli multinational food company with various partnerships across Israel and globally.",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel (Global)"
 },
  {
    "Category": "Food & Beverages",
    "Company Name": "Tabasco Holdings (Pizza Hut Israel)",
    "Involvement": "Services to the Settlements",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Food & Beverages",
    "Company Name": "Tara",
    "Involvement": "A dairy company purchased by Coca-Cola in 1997 with a significant presence in the Israeli market.",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel (Local)"
 },
  {
    "Category": "Food & Beverages",
    "Company Name": "Tempo Beverages",
    "Involvement": "Exploitation of Occupied Production and Resources",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Food & Beverages",
    "Company Name": "Zion Wines",
    "Involvement": "Settlement Production",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Occupied Palestinian Territory"
 },
  {
    "Category": "Heavy Machinery",
    "Company Name": "AM General",
    "Involvement": "Specialized Equipment and Services, The Wall and Checkpoints ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "USA"
 },
  {
    "Category": "Heavy Machinery",
    "Company Name": "Atlas Copco",
    "Involvement": "Israeli Construction on Occupied Land, Specialized Equipment and Services, The Wall and Checkpoints ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Sweden"
 },
  {
    "Category": "Heavy Machinery",
    "Company Name": "Avi Cranes",
    "Involvement": "Israeli Construction on Occupied Land, Services to the Settlements, The Wall and Checkpoints ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Heavy Machinery",
    "Company Name": "Bomag",
    "Involvement": "Israeli Construction on Occupied Land, The Wall and Checkpoints ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Germany"
 },
  {
    "Category": "Heavy Machinery",
    "Company Name": "CNH Industrial",
    "Involvement": "Israeli Construction on Occupied Land, Specialized Equipment and Services, The Wall and Checkpoints ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Netherlands, UK "
 },
  {
    "Category": "Heavy Machinery",
    "Company Name": "Caterpillar (CAT)",
    "Involvement": "Israeli Construction on Occupied Land, Specialized Equipment and Services, The Wall and Checkpoints ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "USA"
 },
  {
    "Category": "Heavy Machinery",
    "Company Name": "Efco Equipment",
    "Involvement": "Israeli Construction on Occupied Land, Specialized Equipment and Services ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Heavy Machinery",
    "Company Name": "Fassi",
    "Involvement": "Specialized Equipment and Services",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Italy"
 },
  {
    "Category": "Heavy Machinery",
    "Company Name": "General Motors Company",
    "Involvement": "Services to the Settlements, Specialized Equipment and Services, The Wall and Checkpoints ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "USA"
 },
  {
    "Category": "Heavy Machinery",
    "Company Name": "HD Hyundai",
    "Involvement": "Israeli Construction on Occupied Land, Population Control, Settlement Enterprise, Specialized Equipment and Services ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "South Korea"
 },
  {
    "Category": "Heavy Machinery",
    "Company Name": "Ha'argaz Technopach Metal Industries",
    "Involvement": "Settlement Production, Specialized Equipment and Services, The Wall and Checkpoints ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Occupied Palestinian Territory"
 },
  {
    "Category": "Heavy Machinery",
    "Company Name": "Herrenknecht",
    "Involvement": "Exploitation of Occupied Production and Resources, Israeli Construction on Occupied Land ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Germany"
 },
  {
    "Category": "Heavy Machinery",
    "Company Name": "Hidromek",
    "Involvement": "Specialized Equipment and Services",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Turkey"
 },
  {
    "Category": "Heavy Machinery",
    "Company Name": "Hitachi",
    "Involvement": "Specialized Equipment and Services, The Wall and Checkpoints ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Japan"
 },
  {
    "Category": "Heavy Machinery",
    "Company Name": "JCB (JC Bamford Excavators)",
    "Involvement": "Israeli Construction on Occupied Land, Population Control, Settlement Enterprise, Specialized Equipment and Services, The Wall and Checkpoints ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "UK"
 },
  {
    "Category": "Heavy Machinery",
    "Company Name": "JLG Industries",
    "Involvement": "Israeli Construction on Occupied Land",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "USA"
 },
  {
    "Category": "Heavy Machinery",
    "Company Name": "Liebherr International",
    "Involvement": "Israeli Construction on Occupied Land, The Wall and Checkpoints ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Germany, Switzerland "
 },
  {
    "Category": "Heavy Machinery",
    "Company Name": "Lorenzetto Loris",
    "Involvement": "Israeli Construction on Occupied Land",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Italy"
 },
  {
    "Category": "Heavy Machinery",
    "Company Name": "Manitou",
    "Involvement": "The Wall and Checkpoints",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "France"
 },
  {
    "Category": "Heavy Machinery",
    "Company Name": "Merkavim Transportation Technologies",
    "Involvement": "Population Control, Services to the Settlements, Settlement Enterprise, Specialized Equipment and Services ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Heavy Machinery",
    "Company Name": "Schwing",
    "Involvement": "Israeli Construction on Occupied Land, Services to the Settlements, Specialized Equipment and Services ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Germany"
 },
  {
    "Category": "Heavy Machinery",
    "Company Name": "Terex Corporation",
    "Involvement": "Israeli Construction on Occupied Land, Specialized Equipment and Services, The Wall and Checkpoints ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "USA"
 },
  {
    "Category": "Heavy Machinery",
    "Company Name": "Volvo Group (AB Volvo)",
    "Involvement": "Israeli Construction on Occupied Land, Population Control, Services to the Settlements, Specialized Equipment and Services, The Wall and Checkpoints ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Sweden"
 },
  {
    "Category": "Heavy Machinery",
    "Company Name": "Wirtgen Group",
    "Involvement": "Israeli Construction on Occupied Land",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Germany"
 },
  {
    "Category": "Industrial Manufacturing",
    "Company Name": "Afic Printing Products",
    "Involvement": "Settlement Production",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel, Occupied Syrian Golan "
 },
  {
    "Category": "Industrial Manufacturing",
    "Company Name": "Altoni Leather S.P.A",
    "Involvement": "Israeli Construction on Occupied Land, Services to the Settlements ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Italy"
 },
  {
    "Category": "Industrial Manufacturing",
    "Company Name": "Atid Packaging",
    "Involvement": "Settlement Production",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Occupied Palestinian Territory"
 },
  {
    "Category": "Industrial Manufacturing",
    "Company Name": "Beton Atarot (formerly: Elad Imported Cement)",
    "Involvement": "Settlement Production",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Occupied Palestinian Territory"
 },
  {
    "Category": "Industrial Manufacturing",
    "Company Name": "Carmel Industries (I.L.)",
    "Involvement": "Settlement Production",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel, Occupied Palestinian Territory "
 },
  {
    "Category": "Industrial Manufacturing",
    "Company Name": "Elyahu Zalman & Sons Metal Tubes Industries",
    "Involvement": "Settlement Production",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Occupied Palestinian Territory"
 },
  {
    "Category": "Industrial Manufacturing",
    "Company Name": "F.K. Generators and Equipment",
    "Involvement": "Services to the Settlements, The Wall and Checkpoints ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Industrial Manufacturing",
    "Company Name": "Greenkote Plc (Summet Hitech Coatings)",
    "Involvement": "Settlement Production",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "USA"
 },
  {
    "Category": "Industrial Manufacturing",
    "Company Name": "Habika Cooling (Nativ Hagdud)",
    "Involvement": "Settlement Production",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Occupied Palestinian Territory"
 },
  {
    "Category": "Industrial Manufacturing",
    "Company Name": "Hamat Group (formerly: Lipski Plastic)",
    "Involvement": "Settlement Production",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel, Occupied Palestinian Territory "
 },
  {
    "Category": "Industrial Manufacturing",
    "Company Name": "Heidelberg Materials (formerly HeidelbergCement)",
    "Involvement": "Exploitation of Occupied Production and Resources, Services to the Settlements, Settlement Production ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Germany"
 },
  {
    "Category": "Industrial Manufacturing",
    "Company Name": "I.R.P.C. Rubber Products Co.",
    "Involvement": "Settlement Production, Specialized Equipment and Services ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel, Occupied Palestinian Territory "
 },
  {
    "Category": "Industrial Manufacturing",
    "Company Name": "Jaguar Land Rover Automotive PLC",
    "Involvement": "Population Control, Specialized Equipment and Services ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "UK"
 },
  {
    "Category": "Industrial Manufacturing",
    "Company Name": "KalRam Yacobowitz",
    "Involvement": "Services to the Settlements, The Wall and Checkpoints ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Industrial Manufacturing",
    "Company Name": "Keter Plastic (Keter Group)",
    "Involvement": "Settlement Production",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Industrial Manufacturing",
    "Company Name": "Kvotzat Mifalei J.Brosh Brosh Fibers (formerly Ayelet Barkan)",
    "Involvement": "Settlement Production",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Occupied Palestinian Territory"
 },
  {
    "Category": "Industrial Manufacturing",
    "Company Name": "L-3 Communications",
    "Involvement": "Specialized Equipment and Services, The Wall and Checkpoints ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "USA"
 },
  {
    "Category": "Industrial Manufacturing",
    "Company Name": "MAN Truck & Bus",
    "Involvement": "Population Control, Services to the Settlements, Specialized Equipment and Services ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Germany"
 },
  {
    "Category": "Industrial Manufacturing",
    "Company Name": "Mitsubishi Motors Corporation",
    "Involvement": "Services to the Settlements, Settlement Enterprise, Specialized Equipment and Services ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Japan"
 },
  {
    "Category": "Industrial Manufacturing",
    "Company Name": "Molitan Industries",
    "Involvement": "Settlement Production",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel, Occupied Palestinian Territory "
 },
  {
    "Category": "Industrial Manufacturing",
    "Company Name": "Natuzzi S.p.A",
    "Involvement": "Israeli Construction on Occupied Land, Services to the Settlements ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Italy"
 },
  {
    "Category": "Industrial Manufacturing",
    "Company Name": "Ofertex Industries",
    "Involvement": "Settlement Production",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Occupied Palestinian Territory"
 },
  {
    "Category": "Industrial Manufacturing",
    "Company Name": "P.L.H. Lighting Engineering",
    "Involvement": "Services to the Settlements, The Wall and Checkpoints ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Industrial Manufacturing",
    "Company Name": "Polimil",
    "Involvement": "Specialized Equipment and Services, The Wall and Checkpoints ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Industrial Manufacturing",
    "Company Name": "Readymix Industries Israel",
    "Involvement": "Israeli Construction on Occupied Land, Population Control, Services to the Settlements, Settlement Enterprise, The Wall and Checkpoints ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Industrial Manufacturing",
    "Company Name": "Roche Bobois",
    "Involvement": "Israeli Construction on Occupied Land, Services to the Settlements ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "France"
 },
  {
    "Category": "Industrial Manufacturing",
    "Company Name": "Rolbit Electronic Thermostats and Controllers",
    "Involvement": "Settlement Production",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Occupied Palestinian Territory"
 },
  {
    "Category": "Industrial Manufacturing",
    "Company Name": "Supergum Industries",
    "Involvement": "Settlement Production, Specialized Equipment and Services ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Industrial Manufacturing",
    "Company Name": "Swarovski",
    "Involvement": "Israeli Construction on Occupied Land, Services to the Settlements ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Liechtenstein"
 },
  {
    "Category": "Industrial Manufacturing",
    "Company Name": "Tempur Sealy",
    "Involvement": "Israeli Construction on Occupied Land, Services to the Settlements ",
    "Sub-companies ": {
       " Brands": "Tempur, Tempur-Pedic, Cocoon, Sealy, etc."
    },
    "Country": "USA"
 },
  {
    "Category": "Industrial Manufacturing",
    "Company Name": "Teva Naot",
    "Involvement": "Services to the Settlements",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel, Occupied Palestinian Territory "
 },
  {
    "Category": "Industrial Manufacturing",
    "Company Name": "ThyssenKrupp AG",
    "Involvement": "Population Control, Specialized Equipment and Services ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Germany"
 },
  {
    "Category": "Industrial Manufacturing",
    "Company Name": "Toyota Motor Corporation",
    "Involvement": "Specialized Equipment and Services",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Japan"
 },
  {
    "Category": "Industrial Manufacturing",
    "Company Name": "Volkswagen Group",
    "Involvement": "Population Control, Services to the Settlements, Settlement Enterprise, Specialized Equipment and Services ",
    "Sub-companies ": {
       " Brands": "Volkswagen, Audi, Porsche, Lamborghini, etc."
    },
    "Country": "Germany"
 },
  {
    "Category": "Industrial Manufacturing",
    "Company Name": "Y. Zamberg Metal Products",
    "Involvement": "Population Control, Settlement Enterprise, Settlement Production, Specialized Equipment and Services ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Occupied Palestinian Territory"
 },
  {
    "Category": "Industrial Manufacturing",
    "Company Name": "Yatir Quarry",
    "Involvement": "Exploitation of Occupied Production and Resources, Settlement Production ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel, Occupied Palestinian Territory "
 },
  {
    "Category": "Online Services & Platforms",
    "Company Name": "Airbnb, Inc.",
    "Involvement": "Services to the Settlements",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "USA"
 },
  {
    "Category": "Online Services & Platforms",
    "Company Name": "Amazon",
    "Involvement": "Signed a $1.22 billion contract (Project Nimbus) with Google to provide cloud technology to the Israeli government and military, directly implicating it in Israel's system of oppression.",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "United States"
 },
  {
    "Category": "Online Services & Platforms",
    "Company Name": "Booking.com",
    "Involvement": "Services to the Settlements, Settlement Enterprise ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Netherlands"
 },
  {
    "Category": "Online Services & Platforms",
    "Company Name": "eBay",
    "Involvement": "Has a presence in Israel primarily through the acquisition of local companies and establishment of development centers.",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "United States"
 },
  {
    "Category": "Online Services & Platforms",
    "Company Name": "Expedia Group",
    "Involvement": "Services to the Settlements, Settlement Enterprise ",
    "Sub-companies ": {
       " Brands": "Expedia.com, Hotels.com, Trivago, Vrbo, etc."
    },
    "Country": "USA"
 },
  {
    "Category": "Online Services & Platforms",
    "Company Name": "Fiverr",
    "Involvement": "An online marketplace for freelance services founded in Israel with a global reach.",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel (Global)"
 },
  {
    "Category": "Online Services & Platforms",
    "Company Name": "Google (Alphabet)",
    "Involvement": "Signed a $1.22 billion contract (Project Nimbus) with Amazon to provide cloud technology to the Israeli government and military, directly implicating it in Israel's system of oppression.",
    "Sub-companies ": {
       " Brands": "Android, Chrome, DeepMind, YouTube, etc."
    },
    "Country": "United States"
 },
  {
    "Category": "Online Services & Platforms",
    "Company Name": "Monday.com",
    "Involvement": "A Tel Aviv-based tech firm specializing in customizable work management software.",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel (Global)"
 },
  {
    "Category": "Online Services & Platforms",
    "Company Name": "RE/MAX",
    "Involvement": "Markets and sells property in illegal Israeli settlements built on stolen Palestinian land, thus enabling Israel’s colonization of the occupied West Bank.",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "United States"
 },
  {
    "Category": "Online Services & Platforms",
    "Company Name": "RE/MAX Holdings",
    "Involvement": "Services to the Settlements",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "USA"
 },
  {
    "Category": "Online Services & Platforms",
    "Company Name": "RE/MAX Israel (Impact Property Developers)",
    "Involvement": "Services to the Settlements",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Online Services & Platforms",
    "Company Name": "Tabnine",
    "Involvement": "An AI-powered code completion tool developed in Israel to enhance coding efficiency.",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel (Global)"
 },
  {
    "Category": "Online Services & Platforms",
    "Company Name": "TripAdvisor, Inc.",
    "Involvement": "Services to the Settlements, Settlement Enterprise ",
    "Sub-companies ": {
       " Brands": "Bokun.io, Cruisecritic, Flipkey, Thefork, etc."
    },
    "Country": "USA"
 },
  {
    "Category": "Online Services & Platforms",
    "Company Name": "Wix",
    "Involvement": "Targeted by grassroots campaigns. The company encouraged its employees to create content supporting \"Israel’s narrative\" during the conflict.",
    "Sub-companies ": {
       " Brands": "Wixanswers.com"
    },
    "Country": "Israel"
 },
  {
    "Category": "Others",
    "Company Name": "Axel Springer",
    "Involvement": "Services to the Settlements",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Germany"
 },
  {
    "Category": "Others",
    "Company Name": "Eastlink Lanker",
    "Involvement": "Services to the Settlements, Settlement Enterprise ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "UK"
 },
  {
    "Category": "Others",
    "Company Name": "Geoda",
    "Involvement": "Population Control, Private Security and Surveillance Technology, Specialized Equipment and Services ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Others",
    "Company Name": "Maman Cargo Terminals and Handling",
    "Involvement": "Israeli Construction on Occupied Land, Palestinian Captive Market ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Others",
    "Company Name": "mPrest Systems",
    "Involvement": "Specialized Equipment and Services",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Others",
    "Company Name": "Puregym",
    "Involvement": "The CEO voiced support for UK arms sales to Israel, leading to boycott calls.",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "UK"
 },
  {
    "Category": "Others",
    "Company Name": "Salvat Logistica",
    "Involvement": "Services to the Settlements",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Spain"
 },
  {
    "Category": "Others",
    "Company Name": "Unikowsky Maoz",
    "Involvement": "Settlement Production",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Occupied Palestinian Territory"
 },
  {
    "Category": "Pharmaceuticals",
    "Company Name": "Dexcel",
    "Involvement": "Palestinian Captive Market",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Pharmaceuticals",
    "Company Name": "Meytag High Tech Ventures",
    "Involvement": "Services to the Settlements, Settlement Production ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Occupied Syrian Golan"
 },
  {
    "Category": "Pharmaceuticals",
    "Company Name": "Perrigo",
    "Involvement": "Palestinian Captive Market",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Ireland"
 },
  {
    "Category": "Pharmaceuticals",
    "Company Name": "Salomon, Levin & Elstein (SLE)",
    "Involvement": "Palestinian Captive Market",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Pharmaceuticals",
    "Company Name": "Taro Pharmaceutical Industries",
    "Involvement": "Palestinian Captive Market",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Pharmaceuticals",
    "Company Name": "Teva Pharmaceutical Industries",
    "Involvement": "Palestinian Captive Market",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Pharmaceuticals",
    "Company Name": "Trima",
    "Involvement": "Palestinian Captive Market",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Retail & Services",
    "Company Name": "Albar Mimunit Services",
    "Involvement": "Services to the Settlements",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Retail & Services",
    "Company Name": "Colmobil Corporation",
    "Involvement": "Specialized Equipment and Services",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Retail & Services",
    "Company Name": "Delek Israel Fuel Company Ltd.",
    "Involvement": "Services to the Settlements",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Retail & Services",
    "Company Name": "Kravitz",
    "Involvement": "Services to the Settlements",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Retail & Services",
    "Company Name": "Super Pharm (Israel)",
    "Involvement": "Services to the Settlements",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Retail & Services",
    "Company Name": "Union Motors",
    "Involvement": "Specialized Equipment and Services",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Retail & Services",
    "Company Name": "Y. Tzarfati Car and Metal Services",
    "Involvement": "Exploitation of Labor, Exploitation of Occupied Production and Resources, Services to the Settlements, Settlement Production ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Occupied Palestinian Territory"
 },
  {
    "Category": "Technology & Computers",
    "Company Name": "All Trade Group",
    "Involvement": "Population Control, Settlement Enterprise, Settlement Production, Specialized Equipment and Services ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel, Occupied Palestinian Territory "
 },
  {
    "Category": "Technology & Computers",
    "Company Name": "Altice International",
    "Involvement": "Israeli Construction on Occupied Land, Palestinian Captive Market, Private Security and Surveillance Technology, Services to the Settlements ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Luxembourg"
 },
  {
    "Category": "Technology & Computers",
    "Company Name": "AnyVision Interactive Technologies (Oosto)",
    "Involvement": "Private Security and Surveillance Technology, The Wall and Checkpoints ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Technology & Computers",
    "Company Name": "Apple",
    "Involvement": "Acquired several Israeli companies and conducts limited R&D in Israel focusing on semiconductor technologies. Allegedly matches worker donations to IDF and illegal settlements.",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "United States"
 },
  {
    "Category": "Technology & Computers",
    "Company Name": "Arista Networks",
    "Involvement": "Accused of sponsoring a conference on Israeli military technology.",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "United States"
 },
  {
    "Category": "Technology & Computers",
    "Company Name": "B Communications",
    "Involvement": "Israeli Construction on Occupied Land, Palestinian Captive Market, Services to the Settlements ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Technology & Computers",
    "Company Name": "BMC Software",
    "Involvement": "Accused of sponsoring a conference on Israeli military technology.",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "United States"
 },
  {
    "Category": "Technology & Computers",
    "Company Name": "Bezeq The Israeli Telecommunication Corporation",
    "Involvement": "Israeli Construction on Occupied Land, Palestinian Captive Market, Services to the Settlements, The Wall and Checkpoints ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Technology & Computers",
    "Company Name": "Bnei Eli Etkes Surveying and Engineering Instruments Ltd",
    "Involvement": "Israeli Construction on Occupied Land, Services to the Settlements, Specialized Equipment and Services ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Technology & Computers",
    "Company Name": "Boeing Company",
    "Involvement": "Specialized Equipment and Services",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "USA"
 },
  {
    "Category": "Technology & Computers",
    "Company Name": "BriefCam",
    "Involvement": "Private Security and Surveillance Technology",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Technology & Computers",
    "Company Name": "Cellcom Israel",
    "Involvement": "Israeli Construction on Occupied Land, Palestinian Captive Market, Services to the Settlements, Specialized Equipment and Services, The Wall and Checkpoints ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Technology & Computers",
    "Company Name": "Cisco Systems",
    "Involvement": "Private Security and Surveillance Technology, Services to the Settlements, Specialized Equipment and Services ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "USA"
 },
  {
    "Category": "Technology & Computers",
    "Company Name": "Comm-IT Technologies",
    "Involvement": "Accused of sponsoring a conference on Israeli military technology.",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Technology & Computers",
    "Company Name": "Corsight Al",
    "Involvement": "Population Control, Private Security and Surveillance Technology, The Wall and Checkpoints ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Technology & Computers",
    "Company Name": "Dell Technologies",
    "Involvement": "Population Control, Specialized Equipment and Services ",
    "Sub-companies ": {
       " Brands": "Michael & Susan Dell Foundation"
    },
    "Country": "USA"
 },
  {
    "Category": "Technology & Computers",
    "Company Name": "E.P.R. Systems",
    "Involvement": "Services to the Settlements, Settlement Production ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Occupied Palestinian Territory"
 },
  {
    "Category": "Technology & Computers",
    "Company Name": "Elrom Studios (2000) Ltd.",
    "Involvement": "Settlement Enterprise",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Occupied Syrian Golan"
 },
  {
    "Category": "Technology & Computers",
    "Company Name": "Formula Systems",
    "Involvement": "Settlement Production, Specialized Equipment and Services ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Technology & Computers",
    "Company Name": "GMV",
    "Involvement": "Israeli Construction on Occupied Land, Services to the Settlements ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Spain"
 },
  {
    "Category": "Technology & Computers",
    "Company Name": "Hewlett Packard Enterprise (HPE)",
    "Involvement": "Specialized Equipment and Services",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "USA"
 },
  {
    "Category": "Technology & Computers",
    "Company Name": "HikVision",
    "Involvement": "Accused of supplying surveillance technology to the Israeli military for use against Palestinians.",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "China"
 },
  {
    "Category": "Technology & Computers",
    "Company Name": "Hot Mobile (formerly: Mirs Communications)",
    "Involvement": "Israeli Construction on Occupied Land, Palestinian Captive Market, Services to the Settlements, Specialized Equipment and Services ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Technology & Computers",
    "Company Name": "Hot Telecommunication Systems",
    "Involvement": "Israeli Construction on Occupied Land, Palestinian Captive Market, Services to the Settlements ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Technology & Computers",
    "Company Name": "IBM",
    "Involvement": "Services to the Settlements, Specialized Equipment and Services, The Wall and Checkpoints ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "USA"
 },
  {
    "Category": "Technology & Computers",
    "Company Name": "Intel",
    "Involvement": "Announced a $25 billion investment in Israel. Its \"Qiryat Gat\" plant is built on the ruins of the ethnically cleansed Palestinian village of Iraq al Manshiya.",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "United States"
 },
  {
    "Category": "Technology & Computers",
    "Company Name": "Malam Team",
    "Involvement": "Population Control, Specialized Equipment and Services, The Wall and Checkpoints ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Technology & Computers",
    "Company Name": "Matrix IT",
    "Involvement": "Settlement Enterprise, Specialized Equipment and Services ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Technology & Computers",
    "Company Name": "Microsoft",
    "Involvement": "Population Control, Services to the Settlements, Settlement Enterprise, Specialized Equipment and Services ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "USA"
 },
  {
    "Category": "Technology & Computers",
    "Company Name": "Micron",
    "Involvement": "One of Micron's factories is based in Kiryat Gat.",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "United States"
 },
  {
    "Category": "Technology & Computers",
    "Company Name": "Ness A.T",
    "Involvement": "Specialized Equipment and Services, The Wall and Checkpoints ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Technology & Computers",
    "Company Name": "NetApp",
    "Involvement": "Accused of sponsoring a conference on Israeli military technology.",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "United States"
 },
  {
    "Category": "Technology & Computers",
    "Company Name": "Nokia",
    "Involvement": "Accused of sponsoring a conference on Israeli military technology.",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Finland"
 },
  {
    "Category": "Technology & Computers",
    "Company Name": "Nutanix",
    "Involvement": "Accused of sponsoring a conference on Israeli military technology.",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "United States"
 },
  {
    "Category": "Technology & Computers",
    "Company Name": "NVIDIA",
    "Involvement": "Operations in Israel involve AI and deep learning. Acquired Israeli company Mellanox Technologies. Raised $10 million for Israeli charities and provided aid to evacuated families.",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "United States"
 },
  {
    "Category": "Technology & Computers",
    "Company Name": "One Software Technologies",
    "Involvement": "Specialized Equipment and Services, The Wall and Checkpoints ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Technology & Computers",
    "Company Name": "Oracle",
    "Involvement": "Acquired several Israeli companies and has a presence in Israel mainly through sales and support services.",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "United States"
 },
  {
    "Category": "Technology & Computers",
    "Company Name": "OSI Systems",
    "Involvement": "Specialized Equipment and Services, The Wall and Checkpoints ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "USA"
 },
  {
    "Category": "Technology & Computers",
    "Company Name": "Partner Communications (formerly Orange)",
    "Involvement": "Israeli Construction on Occupied Land, Palestinian Captive Market, Services to the Settlements ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Technology & Computers",
    "Company Name": "Pelephone Communications",
    "Involvement": "Israeli Construction on Occupied Land, Palestinian Captive Market, Services to the Settlements ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Technology & Computers",
    "Company Name": "Prologic ITS",
    "Involvement": "Accused of sponsoring a conference on Israeli military technology.",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Technology & Computers",
    "Company Name": "Qualcomm",
    "Involvement": "Operates R&D facilities in Israel focusing on wireless communication technologies.",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "United States"
 },
  {
    "Category": "Technology & Computers",
    "Company Name": "Rad-Bynet",
    "Involvement": "Services to the Settlements, Specialized Equipment and Services, The Wall and Checkpoints ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Technology & Computers",
    "Company Name": "Rapiscan Systems",
    "Involvement": "Specialized Equipment and Services, The Wall and Checkpoints ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "USA"
 },
  {
    "Category": "Technology & Computers",
    "Company Name": "ServiceNow",
    "Involvement": "Accused of sponsoring a conference on Israeli military technology.",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "United States"
 },
  {
    "Category": "Technology & Computers",
    "Company Name": "Siemens AG",
    "Involvement": "Population Control, Services to the Settlements, Settlement Enterprise, Specialized Equipment and Services ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Germany"
 },
  {
    "Category": "Technology & Computers",
    "Company Name": "Sony Corporation",
    "Involvement": "Private Security and Surveillance Technology",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Japan"
 },
  {
    "Category": "Technology & Computers",
    "Company Name": "Stentofon Israel",
    "Involvement": "Specialized Equipment and Services",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Technology & Computers",
    "Company Name": "Sysnet Software",
    "Involvement": "Specialized Equipment and Services",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Technology & Computers",
    "Company Name": "TKH Security",
    "Involvement": "Provides Israeli police with surveillance technology that is used to entrench apartheid.",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Netherlands"
 },
  {
    "Category": "Technology & Computers",
    "Company Name": "Telrad Networks",
    "Involvement": "Israeli Construction on Occupied Land, Population Control, Services to the Settlements, Settlement Enterprise, Specialized Equipment and Services ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Transportation",
    "Company Name": "American President Lines",
    "Involvement": "Population Control, Specialized Equipment and Services ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": ""
 },
  {
    "Category": "Transportation",
    "Company Name": "CAF- Construcciones y Auxiliar de Ferrocarriles",
    "Involvement": "Israeli Construction on Occupied Land, Services to the Settlements ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Spain"
 },
  {
    "Category": "Transportation",
    "Company Name": "CNA-Cable Neige Amenagement - Maitrise D'Oeuvre",
    "Involvement": "Israeli Construction on Occupied Land, Services to the Settlements ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "France"
 },
  {
    "Category": "Transportation",
    "Company Name": "Dan Public Transportation Company",
    "Involvement": "Israeli Construction on Occupied Land, Services to the Settlements ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Transportation",
    "Company Name": "Eastern Lines",
    "Involvement": "Services to the Settlements, Settlement Production ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Occupied Palestinian Territory"
 },
  {
    "Category": "Transportation",
    "Company Name": "Egged Israel Transport Cooperative Society",
    "Involvement": "Services to the Settlements",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Transportation",
    "Company Name": "Electra Afikim (formerly Afikim)",
    "Involvement": "Services to the Settlements, Settlement Enterprise ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Transportation",
    "Company Name": "Ford Motor Company",
    "Involvement": "Specialized Equipment and Services, The Wall and Checkpoints ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "USA"
 },
  {
    "Category": "Transportation",
    "Company Name": "Ineco",
    "Involvement": "Services to the Settlements",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Spain"
 },
  {
    "Category": "Transportation",
    "Company Name": "Kavim Public Transportation",
    "Involvement": "Services to the Settlements",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Transportation",
    "Company Name": "Lesico Group",
    "Involvement": "Exploitation of Occupied Production and Resources, Israeli Construction on Occupied Land, Services to the Settlements, The Wall and Checkpoints ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Transportation",
    "Company Name": "Maersk (Mærsk)",
    "Involvement": "Services to the Settlements, Specialized Equipment and Services ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Denmark"
 },
  {
    "Category": "Transportation",
    "Company Name": "Marom Tuval - Consulting, Management and Investments LTD",
    "Involvement": "Israeli Construction on Occupied Land, Services to the Settlements ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Transportation",
    "Company Name": "Mayer Cars & Trucks Co.",
    "Involvement": "Population Control, Services to the Settlements, Settlement Enterprise, Specialized Equipment and Services ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Transportation",
    "Company Name": "Superbus",
    "Involvement": "Services to the Settlements",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Transportation",
    "Company Name": "Taavura Holdings",
    "Involvement": "Israeli Construction on Occupied Land, Palestinian Captive Market, Services to the Settlements, Settlement Production, The Wall and Checkpoints ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Transportation",
    "Company Name": "Tnufa Transportation Solutions",
    "Involvement": "Services to the Settlements, Settlement Enterprise ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Transportation",
    "Company Name": "WSP Global Inc.",
    "Involvement": "Israeli Construction on Occupied Land",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Canada"
 },
  {
    "Category": "Waste Management",
    "Company Name": "Compost Or",
    "Involvement": "Exploitation of Occupied Production and Resources, Settlement Enterprise ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel, Occupied Palestinian Territory "
 },
  {
    "Category": "Waste Management",
    "Company Name": "Green-Oil Energy",
    "Involvement": "Settlement Production",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Occupied Palestinian Territory"
 },
  {
    "Category": "Waste Management",
    "Company Name": "Greennet Recycling and Waste Treatment",
    "Involvement": "Exploitation of Occupied Production and Resources, Settlement Enterprise ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Occupied Palestinian Territory"
 },
  {
    "Category": "Waste Management",
    "Company Name": "PreZero",
    "Involvement": "Services to the Settlements, Settlement Enterprise ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Germany"
 },
  {
    "Category": "Waste Management",
    "Company Name": "T.M.M. Integrated Recycling Industries",
    "Involvement": "Exploitation of Occupied Production and Resources",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 },
  {
    "Category": "Waste Management",
    "Company Name": "Tal El Collection and Recycling",
    "Involvement": "Settlement Production",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Occupied Palestinian Territory"
 },
  {
    "Category": "Waste Management",
    "Company Name": "Tyrec",
    "Involvement": "Exploitation of Occupied Production and Resources, Settlement Enterprise ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Occupied Palestinian Territory"
 },
  {
    "Category": "Waste Management",
    "Company Name": "YSB-Ya'acobi Brothers Group",
    "Involvement": "Israeli Construction on Occupied Land, Services to the Settlements, Specialized Equipment and Services ",
    "Sub-companies ": {
       " Brands": ""
    },
    "Country": "Israel"
 }
 ];

export async function getBoycottList(): Promise<Company[]> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockCompanies;
}
