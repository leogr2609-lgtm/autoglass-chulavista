export type ServicePage = {
  name: string;
  slug: string;
  seoTitle: string;
  seoDescription: string;
  intro: string;
  image: string;
  imageAlt: string;
  signsTitle: string;
  signs: string[];
  bodyParagraphs: string[];
  includes: string[];
  faq: {
    q: string;
    a: string;
  }[];
};

export const servicePages: ServicePage[] = [
  {
    name: "Windshield Replacement",
    slug: "windshield-replacement",
    seoTitle: "Windshield Replacement Chula Vista CA | Mobile Service",
    seoDescription:
      "Windshield replacement in Chula Vista and South San Diego County. In-shop and mobile options are available. Call with your vehicle details for a quote.",
    intro:
      "Replacement service for windshields with extensive cracks, impact damage, or other problems that cannot be handled with a small repair. Visit our Chula Vista shop or ask about mobile service.",
    image: "/wr-black-car.webp",
    imageAlt: "Technician removing a windshield during an Auto Glass Mobile Service job",
    signsTitle: "When Windshield Replacement May Be Needed",
    signs: [
      "A long crack has spread across the windshield",
      "The damage reaches an edge of the glass",
      "The windshield has multiple impact points",
      "Visibility is affected by the damaged area"
    ],
    bodyParagraphs: [
      "The correct windshield depends on the vehicle year, make, model, and installed features. Calling with those details allows us to identify the glass and discuss current availability before an appointment is scheduled.",
      "Windshield replacement may be arranged at our shop at 1165 Third Ave in Chula Vista or through mobile service at a suitable location within our service area. The available option depends on the vehicle, job, and appointment location."
    ],
    includes: [
      "Vehicle and windshield information review",
      "Removal of the damaged windshield",
      "Installation of the correct replacement glass",
      "In-shop or mobile scheduling options"
    ],
    faq: [
      {
        q: "How do I get a windshield replacement quote?",
        a: "Call with the vehicle year, make, model, and any relevant windshield features. We provide free estimates by phone."
      },
      {
        q: "Can windshield replacement be mobile?",
        a: "Mobile service may be available at a suitable location within our coverage area. Call to confirm the job and address."
      },
      {
        q: "Can I visit the shop instead?",
        a: "Yes. Our shop is at 1165 Third Ave in Chula Vista. Please call before visiting so we can confirm the glass and availability."
      }
    ]
  },
  {
    name: "Windshield Rock Chip Repair",
    slug: "rock-chip-repair",
    seoTitle: "Windshield Rock Chip Repair Chula Vista CA",
    seoDescription:
      "Windshield rock chip repair in Chula Vista and nearby South San Diego County. Call to describe the damage and ask whether repair may be an option.",
    intro:
      "Small windshield chips may sometimes be repairable before the damage spreads. Call and describe the size and location of the chip so we can discuss the appropriate next step.",
    image: "/rc-chip-closeup.webp",
    imageAlt: "Close view of a windshield rock chip photographed during a local service job",
    signsTitle: "A Chip Should Be Checked When",
    signs: [
      "The impact has a visible center point",
      "Small lines are beginning to form around it",
      "The chip is affecting the driver's view",
      "The damage has changed since it first appeared"
    ],
    bodyParagraphs: [
      "Whether a chip can be repaired depends on its size, depth, position, and how far it has spread. A phone description helps, but the final service option may require inspection of the windshield.",
      "Rock chip appointments may be available at the Chula Vista shop or through mobile service within the coverage area. Scheduling depends on the current route and the condition of the glass."
    ],
    includes: [
      "Review of the chip size and location",
      "Discussion of repair or replacement options",
      "In-shop and mobile appointment options",
      "Free phone estimate before scheduling"
    ],
    faq: [
      {
        q: "Can every windshield chip be repaired?",
        a: "No. Repair depends on the size, depth, location, and spread of the damage. Call so we can discuss what you see."
      },
      {
        q: "Should I wait if the chip is still small?",
        a: "It is better to have the damage checked before it changes or spreads further."
      },
      {
        q: "Do you offer mobile chip repair?",
        a: "Mobile appointments may be available within our service area. Call to confirm the location and schedule."
      }
    ]
  },
  {
    name: "Door Glass Replacement",
    slug: "door-glass-replacement",
    seoTitle: "Car Door Glass Replacement Chula Vista CA",
    seoDescription:
      "Broken car door and side glass replacement in Chula Vista and nearby areas. In-shop and mobile options. Call with your vehicle details for a quote.",
    intro:
      "Replacement service for shattered or damaged driver and passenger windows. Call with the vehicle year, make, model, and affected side so we can check the correct glass.",
    image: "/dg-quarter-glass.webp",
    imageAlt: "Broken side glass on a vehicle before replacement service",
    signsTitle: "Common Side Glass Problems",
    signs: [
      "The door glass is shattered or missing",
      "The glass is cracked or chipped at an edge",
      "The window has dropped inside the door",
      "Broken glass remains inside the vehicle"
    ],
    bodyParagraphs: [
      "Vehicle side glass varies by door, body style, tint, and model. Providing complete vehicle information and identifying the affected window helps us check the correct replacement before scheduling.",
      "Door glass replacement can be discussed for an in-shop appointment or mobile service at a suitable location. If the glass is intact but will not move, window regulator repair may be the more appropriate service."
    ],
    includes: [
      "Identification of the affected door glass",
      "Removal of damaged glass from the opening",
      "Installation and operation check",
      "Review of regulator issues when applicable"
    ],
    faq: [
      {
        q: "What vehicle details do you need?",
        a: "Please provide the year, make, model, body style, and which window is damaged."
      },
      {
        q: "Can you help if the glass fell inside the door?",
        a: "Yes. Call and explain whether the glass is broken or intact so we can discuss glass and regulator service."
      },
      {
        q: "Is mobile door glass replacement available?",
        a: "Mobile service may be available within our coverage area. Call to confirm the location and glass availability."
      }
    ]
  },
  {
    name: "Window Regulator Repair",
    slug: "window-regulator-repair",
    seoTitle: "Car Window Regulator Repair Chula Vista CA",
    seoDescription:
      "Car window regulator repair in Chula Vista and nearby areas. Help for windows that are stuck, slow, or off track. Call for service availability.",
    intro:
      "Diagnosis and repair for power or manual car windows that will not roll up, move slowly, make unusual sounds, or have fallen out of position.",
    image: "/wr-regulator-part.webp",
    imageAlt: "Vehicle window regulator assembly used for car window repair",
    signsTitle: "Signs of a Regulator or Window Mechanism Problem",
    signs: [
      "The window will not roll up or down",
      "The glass moves slowly or unevenly",
      "A grinding or clicking sound comes from the door",
      "The glass has dropped or sits out of position"
    ],
    bodyParagraphs: [
      "A stuck window can involve the regulator, motor, switch, wiring, glass position, or another door component. The symptoms and vehicle details help us prepare for the correct diagnosis.",
      "Window regulator service may be arranged at the Chula Vista shop or, depending on the job and location, through mobile service. Parts and scheduling vary by vehicle."
    ],
    includes: [
      "Review of the window symptoms",
      "Inspection of the regulator and related mechanism",
      "Repair or replacement options based on diagnosis",
      "Window movement check after service"
    ],
    faq: [
      {
        q: "Does a stuck window always mean the regulator is broken?",
        a: "Not always. The motor, switch, wiring, glass position, or regulator may be involved. Diagnosis determines the correct service."
      },
      {
        q: "Can you repair manual windows?",
        a: "Call with the vehicle details and symptoms so we can confirm the available service for that mechanism."
      },
      {
        q: "Do you provide the required part?",
        a: "Part availability depends on the vehicle. Calling first allows us to identify what may be required."
      }
    ]
  },
  {
    name: "Back Glass Replacement",
    slug: "back-glass-replacement",
    seoTitle: "Back Glass Replacement Chula Vista CA | Mobile Service",
    seoDescription:
      "Rear car window and back glass replacement in Chula Vista and nearby areas. Mobile and in-shop options. Call with your vehicle details for a quote.",
    intro:
      "Replacement service for broken or damaged rear vehicle glass. Call with the year, make, model, and body style so we can check the correct back glass.",
    image: "/bg-pickup-red.webp",
    imageAlt: "Pickup truck with damaged rear glass before back glass replacement",
    signsTitle: "When Back Glass Service Is Needed",
    signs: [
      "The rear glass is shattered or missing",
      "A crack is spreading across the glass",
      "The opening is exposed to weather",
      "The rear glass no longer sits securely"
    ],
    bodyParagraphs: [
      "Back glass can differ by body style, trim, tint, and installed features. Complete vehicle details help us identify the correct glass and provide useful scheduling information.",
      "An in-shop appointment is available at our Chula Vista location, and mobile service may be possible within the coverage area. Call before traveling or scheduling so the glass can be confirmed."
    ],
    includes: [
      "Vehicle and rear glass identification",
      "Removal of damaged back glass",
      "Installation of the replacement glass",
      "In-shop or mobile appointment discussion"
    ],
    faq: [
      {
        q: "Do you replace rear windows on trucks and SUVs?",
        a: "Back glass replacement is available for many vehicle types. Call with the exact vehicle information to confirm."
      },
      {
        q: "Can the vehicle be serviced at my location?",
        a: "Mobile service may be available depending on the vehicle, job, and exact location."
      },
      {
        q: "How do I get a back glass quote?",
        a: "Call with the year, make, model, body style, and a description of the damaged rear glass."
      }
    ]
  },
  {
    name: "Leak and Molding Repair",
    slug: "leak-molding-repair",
    seoTitle: "Windshield Leak and Molding Repair Chula Vista CA",
    seoDescription:
      "Windshield leak and molding service in Chula Vista and nearby South San Diego County. Call to discuss water, wind noise, or loose molding concerns.",
    intro:
      "Inspection and service for water entering around vehicle glass, wind noise near the windshield, or molding that appears loose, lifted, or damaged.",
    image: "/wr-jeep.webp",
    imageAlt: "Technician working around a windshield and molding during a local service job",
    signsTitle: "Signs the Glass or Molding Should Be Checked",
    signs: [
      "Water appears inside after rain or washing",
      "Wind noise is noticeable around the glass",
      "Molding looks loose, lifted, or incomplete",
      "Moisture is collecting near the windshield edge"
    ],
    bodyParagraphs: [
      "Water inside a vehicle does not always come from the windshield, so the location and conditions of the leak matter. Describe when the problem happens and where moisture appears when you call.",
      "Leak and molding service may require inspection before the exact repair is determined. Appointments can be discussed for the Chula Vista shop or, when appropriate, within the mobile service area."
    ],
    includes: [
      "Review of the leak or molding symptoms",
      "Inspection of the affected glass area",
      "Discussion of the appropriate repair option",
      "In-shop or mobile scheduling when applicable"
    ],
    faq: [
      {
        q: "Does water inside always mean the windshield leaks?",
        a: "No. Water can enter from different areas. Inspection helps identify whether the glass or molding is involved."
      },
      {
        q: "Can loose windshield molding be repaired?",
        a: "Call and describe the condition. The appropriate service depends on the molding and surrounding glass area."
      },
      {
        q: "Should I schedule at the shop?",
        a: "Some leak concerns are easier to inspect at the shop. Call first and we will discuss the best appointment option."
      }
    ]
  }
];
