export type ServiceArea = {
  city: string;
  county: string;
  state: string;
  slug: string;
  eta: string;
  intro: string;
  localFocus: string;
  nearbyZones: string[];
  faq: {
    q: string;
    a: string;
  }[];
};

export const serviceAreas: ServiceArea[] = [
  {
    city: "Chula Vista",
    county: "San Diego County",
    state: "CA",
    slug: "chula-vista",
    eta: "15-30 minutes",
    intro:
      "Mobile and in-shop auto glass service for Chula Vista drivers. We handle cracked windshields, broken side windows, chip repair, and regulator issues with same-day availability when possible.",
    localFocus:
      "Strong local coverage across central and south Chula Vista with fast dispatch from our shop base.",
    nearbyZones: ["Downtown Chula Vista", "Rancho Del Rey", "Eastlake", "Otay Ranch"],
    faq: [
      {
        q: "Do you replace windshields in Chula Vista the same day?",
        a: "Many windshield replacements can be scheduled the same day depending on part availability and current technician routes."
      },
      {
        q: "Can you repair a rock chip before it spreads?",
        a: "Yes. Early chip repair is one of the fastest services and helps reduce the chance of a full crack."
      },
      {
        q: "Do you offer mobile service near Eastlake and Otay Ranch?",
        a: "Yes, we provide mobile service in those Chula Vista areas and nearby zones within our coverage radius."
      }
    ]
  },
  {
    city: "National City",
    county: "San Diego County",
    state: "CA",
    slug: "national-city",
    eta: "20-35 minutes",
    intro:
      "Auto glass repair and replacement in National City with fast mobile dispatch. We help with windshield damage, door glass replacement, and window regulator problems.",
    localFocus:
      "Frequent service calls in National City for windshield cracks, break-in glass cleanup, and stuck window repairs.",
    nearbyZones: ["Mile of Cars area", "West National City", "Paradise Valley", "Lincoln Acres"],
    faq: [
      {
        q: "Do you handle shattered door glass in National City?",
        a: "Yes. We clean up broken glass and replace the side window with the correct fit for your vehicle."
      },
      {
        q: "Can you come to my work location in National City?",
        a: "Yes, mobile appointments are available for home, work, and other safe service locations."
      },
      {
        q: "Do you also repair window regulators?",
        a: "Yes. We diagnose regulator and motor issues when your window will not move correctly."
      }
    ]
  },
  {
    city: "Bonita",
    county: "San Diego County",
    state: "CA",
    slug: "bonita",
    eta: "20-35 minutes",
    intro:
      "Reliable auto glass service in Bonita for urgent and scheduled repairs. From rock chips to full windshield replacement, we provide clean and professional service at your location.",
    localFocus:
      "Bonita coverage focused on mobile convenience for residential areas and quick windshield chip response.",
    nearbyZones: ["Sweetwater area", "Central Bonita", "Bonita Long Canyon", "South Bonita"],
    faq: [
      {
        q: "Can you repair chips in Bonita before they crack?",
        a: "Yes. Chip repair is available and is best done early to help prevent spreading."
      },
      {
        q: "Do you provide both mobile and in-shop options?",
        a: "Yes. You can choose mobile service or visit our shop in Chula Vista."
      },
      {
        q: "How do I get a quote for my vehicle?",
        a: "Call us with your vehicle year, make, model, and service needed for a free phone estimate."
      }
    ]
  },
  {
    city: "Imperial Beach",
    county: "San Diego County",
    state: "CA",
    slug: "imperial-beach",
    eta: "25-40 minutes",
    intro:
      "Mobile auto glass service for Imperial Beach, including windshield replacement, leak and molding repair, and shattered car window replacement.",
    localFocus:
      "Imperial Beach service includes seal and molding attention for vehicles exposed to coastal moisture and wind.",
    nearbyZones: ["Palm Avenue corridor", "Central Imperial Beach", "South Imperial Beach", "Seacoast area"],
    faq: [
      {
        q: "Do you fix windshield leaks in Imperial Beach?",
        a: "Yes. We inspect molding and seals and perform leak and molding repairs when needed."
      },
      {
        q: "Can you replace back glass in Imperial Beach?",
        a: "Yes. We provide rear glass replacement for most vehicle types."
      },
      {
        q: "Do you offer mobile appointments close to the beach area?",
        a: "Yes, we schedule mobile service throughout Imperial Beach within our service radius."
      }
    ]
  },
  {
    city: "San Ysidro",
    county: "San Diego County",
    state: "CA",
    slug: "san-ysidro",
    eta: "25-40 minutes",
    intro:
      "Fast-response auto glass repair in San Ysidro with in-shop and mobile options. We fix broken auto glass and help you get back on the road quickly.",
    localFocus:
      "San Ysidro calls often involve urgent broken glass cases and fast scheduling for daily-driver safety.",
    nearbyZones: ["San Ysidro Village", "East San Ysidro", "Border area", "Otay Mesa West edge"],
    faq: [
      {
        q: "Can you help with urgent broken car window service in San Ysidro?",
        a: "Yes. We prioritize urgent safety-related glass damage and schedule as quickly as possible."
      },
      {
        q: "Do you service vehicles near the San Ysidro commercial area?",
        a: "Yes, mobile service is available throughout San Ysidro and nearby zones in our radius."
      },
      {
        q: "Can I book by phone and get same-day options?",
        a: "Yes. Call us and we will confirm same-day availability based on the job and parts needed."
      }
    ]
  },
  {
    city: "Spring Valley",
    county: "San Diego County",
    state: "CA",
    slug: "spring-valley",
    eta: "25-40 minutes",
    intro:
      "Professional auto glass services in Spring Valley for cracked windshields, chips, side window damage, and regulator issues. Call for a free phone estimate.",
    localFocus:
      "Spring Valley coverage includes mobile diagnosis for regulator and motor issues plus full glass replacement.",
    nearbyZones: ["Casa de Oro", "Dictionary Hill area", "Sweetwater Reservoir area", "Central Spring Valley"],
    faq: [
      {
        q: "Do you diagnose stuck windows in Spring Valley?",
        a: "Yes. We diagnose regulator and motor issues when windows do not roll up or down correctly."
      },
      {
        q: "Can windshield replacement be done at my location?",
        a: "Yes, many replacements can be completed with mobile service at home or work."
      },
      {
        q: "What services do drivers request most in Spring Valley?",
        a: "Common requests include windshield replacement, chip repair, and door glass replacement."
      }
    ]
  }
];
