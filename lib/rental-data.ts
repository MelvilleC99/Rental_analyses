export const rentalData = {
  metadata: {
    description: "Cape Town Long-Term Rental Market Analysis",
    periods: ["august_2024", "march_2025", "november_2025"],
    suburbs_count: 10,
    property_types: [
      "Studio Apartment",
      "1 Bedroom Apartment",
      "2 Bedroom Apartment",
      "3 Bedroom Apartment",
      "1 Bedroom House",
      "2 Bedroom House",
      "3 Bedroom House",
    ],
  },
  suburbs: {
    CBD: {
      august_2024: {
        total_listings: 159,
        properties: {
          "Studio Apartment": { count: 29, avg_price: 13305 },
          "1 Bedroom Apartment": { count: 86, avg_price: 15594 },
          "2 Bedroom Apartment": { count: 36, avg_price: 26872 },
          "3 Bedroom Apartment": { count: 6, avg_price: 58333 },
          "2 Bedroom House": { count: 1, avg_price: 32000 },
          "3 Bedroom House": { count: 1, avg_price: 6000 },
        },
      },
      march_2025: {
        total_listings: 148,
        properties: {
          "Studio Apartment": { count: 31, avg_price: 13989 },
          "1 Bedroom Apartment": { count: 72, avg_price: 16862 },
          "2 Bedroom Apartment": { count: 40, avg_price: 29622 },
          "3 Bedroom Apartment": { count: 5, avg_price: 57400 },
        },
      },
      november_2025: {
        total_listings: 114,
        properties: {
          "Studio Apartment": { count: 18, avg_price: 11481 },
          "1 Bedroom Apartment": { count: 49, avg_price: 16673 },
          "2 Bedroom Apartment": { count: 43, avg_price: 31314 },
          "3 Bedroom Apartment": { count: 2, avg_price: 39500 },
        },
      },
    },
    "Sea Point": {
      august_2024: {
        total_listings: 173,
        properties: {
          "Studio Apartment": { count: 16, avg_price: 15897 },
          "1 Bedroom Apartment": { count: 40, avg_price: 19659 },
          "2 Bedroom Apartment": { count: 73, avg_price: 34027 },
          "3 Bedroom Apartment": { count: 38, avg_price: 46849 },
          "1 Bedroom House": { count: 3, avg_price: 21500 },
          "2 Bedroom House": { count: 1, avg_price: 29000 },
          "3 Bedroom House": { count: 2, avg_price: 52500 },
        },
      },
      march_2025: {
        total_listings: 211,
        properties: {
          "Studio Apartment": { count: 14, avg_price: 19136 },
          "1 Bedroom Apartment": { count: 59, avg_price: 23585 },
          "2 Bedroom Apartment": { count: 97, avg_price: 36106 },
          "3 Bedroom Apartment": { count: 30, avg_price: 48865 },
          "1 Bedroom House": { count: 1, avg_price: 20000 },
          "2 Bedroom House": { count: 2, avg_price: 54500 },
          "3 Bedroom House": { count: 8, avg_price: 66286 },
        },
      },
      november_2025: {
        total_listings: 122,
        properties: {
          "Studio Apartment": { count: 10, avg_price: 17494 },
          "1 Bedroom Apartment": { count: 36, avg_price: 24490 },
          "2 Bedroom Apartment": { count: 39, avg_price: 36011 },
          "3 Bedroom Apartment": { count: 31, avg_price: 67983 },
          "2 Bedroom House": { count: 5, avg_price: 36900 },
          "3 Bedroom House": { count: 1, avg_price: 75000 },
        },
      },
    },
    "Green Point": {
      august_2024: {
        total_listings: 43,
        properties: {
          "Studio Apartment": { count: 1, avg_price: 14500 },
          "1 Bedroom Apartment": { count: 19, avg_price: 20144 },
          "2 Bedroom Apartment": { count: 19, avg_price: 26579 },
          "3 Bedroom Apartment": { count: 4, avg_price: 48750 },
        },
      },
      march_2025: {
        total_listings: 60,
        properties: {
          "Studio Apartment": { count: 5, avg_price: 14790 },
          "1 Bedroom Apartment": { count: 10, avg_price: 24250 },
          "2 Bedroom Apartment": { count: 31, avg_price: 29552 },
          "3 Bedroom Apartment": { count: 2, avg_price: 55000 },
          "2 Bedroom House": { count: 6, avg_price: 53917 },
          "3 Bedroom House": { count: 6, avg_price: 50000 },
        },
      },
      november_2025: {
        total_listings: 41,
        properties: {
          "Studio Apartment": { count: 4, avg_price: 13250 },
          "1 Bedroom Apartment": { count: 21, avg_price: 19809 },
          "2 Bedroom Apartment": { count: 9, avg_price: 37889 },
          "3 Bedroom Apartment": { count: 4, avg_price: 102250 },
          "3 Bedroom House": { count: 3, avg_price: 86667 },
        },
      },
    },
    Gardens: {
      august_2024: {
        total_listings: 31,
        properties: {
          "Studio Apartment": { count: 5, avg_price: 13220 },
          "1 Bedroom Apartment": { count: 15, avg_price: 14830 },
          "2 Bedroom Apartment": { count: 10, avg_price: 19175 },
          "3 Bedroom Apartment": { count: 1, avg_price: 125000 },
        },
      },
      march_2025: {
        total_listings: 51,
        properties: {
          "Studio Apartment": { count: 2, avg_price: 10500 },
          "1 Bedroom Apartment": { count: 19, avg_price: 17205 },
          "2 Bedroom Apartment": { count: 21, avg_price: 32019 },
          "3 Bedroom Apartment": { count: 1, avg_price: 19000 },
          "2 Bedroom House": { count: 3, avg_price: 36500 },
          "3 Bedroom House": { count: 5, avg_price: 50100 },
        },
      },
      november_2025: {
        total_listings: 30,
        properties: {
          "Studio Apartment": { count: 3, avg_price: 11267 },
          "1 Bedroom Apartment": { count: 8, avg_price: 18100 },
          "2 Bedroom Apartment": { count: 13, avg_price: 22272 },
          "3 Bedroom Apartment": { count: 3, avg_price: 81833 },
          "2 Bedroom House": { count: 1, avg_price: 125000 },
          "3 Bedroom House": { count: 2, avg_price: 56250 },
        },
      },
    },
    Woodstock: {
      august_2024: {
        total_listings: 52,
        properties: {
          "Studio Apartment": { count: 7, avg_price: 10635 },
          "1 Bedroom Apartment": { count: 24, avg_price: 12335 },
          "2 Bedroom Apartment": { count: 8, avg_price: 17850 },
          "2 Bedroom House": { count: 4, avg_price: 16062 },
          "3 Bedroom House": { count: 8, avg_price: 21500 },
        },
      },
      march_2025: {
        total_listings: 44,
        properties: {
          "Studio Apartment": { count: 5, avg_price: 13790 },
          "1 Bedroom Apartment": { count: 20, avg_price: 15700 },
          "2 Bedroom Apartment": { count: 7, avg_price: 19229 },
          "1 Bedroom House": { count: 2, avg_price: 13750 },
          "2 Bedroom House": { count: 4, avg_price: 20750 },
          "3 Bedroom House": { count: 5, avg_price: 14100 },
        },
      },
      november_2025: {
        total_listings: 49,
        properties: {
          "Studio Apartment": { count: 12, avg_price: 11487 },
          "1 Bedroom Apartment": { count: 21, avg_price: 13343 },
          "2 Bedroom Apartment": { count: 6, avg_price: 19500 },
          "3 Bedroom Apartment": { count: 2, avg_price: 17500 },
          "1 Bedroom House": { count: 1, avg_price: 12600 },
          "2 Bedroom House": { count: 4, avg_price: 23375 },
          "3 Bedroom House": { count: 3, avg_price: 12500 },
        },
      },
    },
    Vredehoek: {
      august_2024: {
        total_listings: 16,
        properties: {
          "Studio Apartment": { count: 1, avg_price: 12000 },
          "1 Bedroom Apartment": { count: 4, avg_price: 15788 },
          "2 Bedroom Apartment": { count: 8, avg_price: 23781 },
          "3 Bedroom Apartment": { count: 1, avg_price: 27000 },
          "3 Bedroom House": { count: 2, avg_price: 40000 },
        },
      },
      march_2025: {
        total_listings: 23,
        properties: {
          "Studio Apartment": { count: 1, avg_price: 12000 },
          "1 Bedroom Apartment": { count: 6, avg_price: 15417 },
          "2 Bedroom Apartment": { count: 12, avg_price: 20733 },
          "3 Bedroom Apartment": { count: 2, avg_price: 25000 },
          "2 Bedroom House": { count: 1, avg_price: 30000 },
          "3 Bedroom House": { count: 1, avg_price: 30000 },
        },
      },
      november_2025: {
        total_listings: 36,
        properties: {
          "Studio Apartment": { count: 5, avg_price: 13800 },
          "1 Bedroom Apartment": { count: 3, avg_price: 18667 },
          "2 Bedroom Apartment": { count: 22, avg_price: 27273 },
          "3 Bedroom Apartment": { count: 4, avg_price: 36000 },
          "3 Bedroom House": { count: 2, avg_price: 41000 },
        },
      },
    },
    Tamboerskloof: {
      august_2024: {
        total_listings: 21,
        properties: {
          "Studio Apartment": { count: 1, avg_price: 25000 },
          "1 Bedroom Apartment": { count: 6, avg_price: 12408 },
          "2 Bedroom Apartment": { count: 11, avg_price: 18605 },
          "3 Bedroom Apartment": { count: 1, avg_price: 33000 },
          "2 Bedroom House": { count: 2, avg_price: 36000 },
        },
      },
      march_2025: {
        total_listings: 18,
        properties: {
          "Studio Apartment": { count: 3, avg_price: 16167 },
          "1 Bedroom Apartment": { count: 2, avg_price: 19950 },
          "2 Bedroom Apartment": { count: 9, avg_price: 27083 },
          "1 Bedroom House": { count: 1, avg_price: 55000 },
          "2 Bedroom House": { count: 1, avg_price: 34000 },
          "3 Bedroom House": { count: 2, avg_price: 50500 },
        },
      },
      november_2025: {
        total_listings: 20,
        properties: {
          "1 Bedroom Apartment": { count: 2, avg_price: 22950 },
          "2 Bedroom Apartment": { count: 15, avg_price: 27770 },
          "3 Bedroom Apartment": { count: 1, avg_price: 22500 },
          "2 Bedroom House": { count: 2, avg_price: 50000 },
        },
      },
    },
    Oranjezicht: {
      august_2024: {
        total_listings: 14,
        properties: {
          "Studio Apartment": { count: 3, avg_price: 9833 },
          "1 Bedroom Apartment": { count: 4, avg_price: 14500 },
          "2 Bedroom Apartment": { count: 1, avg_price: 23000 },
          "3 Bedroom Apartment": { count: 1, avg_price: 33000 },
          "1 Bedroom House": { count: 1, avg_price: 10000 },
          "3 Bedroom House": { count: 4, avg_price: 58125 },
        },
      },
      march_2025: {
        total_listings: 15,
        properties: {
          "Studio Apartment": { count: 2, avg_price: 11750 },
          "1 Bedroom Apartment": { count: 4, avg_price: 18000 },
          "2 Bedroom Apartment": { count: 4, avg_price: 27750 },
          "3 Bedroom Apartment": { count: 2, avg_price: 33750 },
          "1 Bedroom House": { count: 1, avg_price: 11000 },
          "3 Bedroom House": { count: 2, avg_price: 42000 },
        },
      },
      november_2025: {
        total_listings: 15,
        properties: {
          "Studio Apartment": { count: 3, avg_price: 13783 },
          "1 Bedroom Apartment": { count: 7, avg_price: 16714 },
          "2 Bedroom Apartment": { count: 1, avg_price: 33333 },
          "3 Bedroom Apartment": { count: 2, avg_price: 67500 },
          "3 Bedroom House": { count: 2, avg_price: 98500 },
        },
      },
    },
    "Bo Kaap": {
      august_2024: {
        total_listings: 9,
        properties: {
          "Studio Apartment": { count: 1, avg_price: 14000 },
          "1 Bedroom Apartment": { count: 2, avg_price: 21500 },
          "2 Bedroom Apartment": { count: 5, avg_price: 29400 },
          "3 Bedroom Apartment": { count: 1, avg_price: 12500 },
        },
      },
      march_2025: {
        total_listings: 7,
        properties: {
          "1 Bedroom Apartment": { count: 3, avg_price: 20333 },
          "2 Bedroom Apartment": { count: 2, avg_price: 41250 },
          "3 Bedroom Apartment": { count: 1, avg_price: 35000 },
          "3 Bedroom House": { count: 1, avg_price: 40000 },
        },
      },
      november_2025: {
        total_listings: 5,
        properties: {
          "Studio Apartment": { count: 1, avg_price: 15000 },
          "3 Bedroom Apartment": { count: 2, avg_price: 34000 },
          "2 Bedroom House": { count: 1, avg_price: 18500 },
          "3 Bedroom House": { count: 1, avg_price: 38000 },
        },
      },
    },
    "Mouille Point": {
      august_2024: {
        total_listings: 29,
        properties: {
          "Studio Apartment": { count: 1, avg_price: 15000 },
          "1 Bedroom Apartment": { count: 6, avg_price: 28417 },
          "2 Bedroom Apartment": { count: 12, avg_price: 41583 },
          "3 Bedroom Apartment": { count: 8, avg_price: 71750 },
          "2 Bedroom House": { count: 1, avg_price: 60000 },
          "3 Bedroom House": { count: 1, avg_price: 82000 },
        },
      },
      march_2025: {
        total_listings: 37,
        properties: {
          "Studio Apartment": { count: 2, avg_price: 17500 },
          "1 Bedroom Apartment": { count: 8, avg_price: 30938 },
          "2 Bedroom Apartment": { count: 15, avg_price: 44933 },
          "3 Bedroom Apartment": { count: 10, avg_price: 73800 },
          "2 Bedroom House": { count: 1, avg_price: 75000 },
          "3 Bedroom House": { count: 1, avg_price: 95000 },
        },
      },
      november_2025: {
        total_listings: 35,
        properties: {
          "Studio Apartment": { count: 2, avg_price: 19000 },
          "1 Bedroom Apartment": { count: 7, avg_price: 32286 },
          "2 Bedroom Apartment": { count: 14, avg_price: 46071 },
          "3 Bedroom Apartment": { count: 11, avg_price: 82091 },
          "3 Bedroom House": { count: 1, avg_price: 105000 },
        },
      },
    },
  },
}
