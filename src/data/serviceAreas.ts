export type ServiceArea = {
  city: string;
  county: string;
  state: string;
  slug: string;
  intro: string;
  localFocus: string;
  nearbyZones: string[];
  bodyParagraphs: string[];
  seoTitle: string;
  seoDescription: string;
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
    intro:
      "In-shop and mobile auto glass service for Chula Vista drivers. Call for windshield replacement, rock chip repair, broken door glass, back glass, leaks, molding, and window regulator problems.",
    localFocus:
      "Our shop is located on Third Avenue in Chula Vista, with mobile appointments available throughout the surrounding service area.",
    nearbyZones: ["Central Chula Vista", "Rancho Del Rey", "Eastlake", "Otay Ranch"],
    seoTitle: "Auto Glass Repair Chula Vista CA | Mobile Service",
    seoDescription:
      "Auto glass repair and windshield replacement in Chula Vista, CA. Visit our Third Avenue shop or ask about mobile service. Call for a free phone quote.",
    bodyParagraphs: [
      "A cracked windshield, shattered side window, or window that will not roll up can interrupt your day quickly. Auto Glass Chula Vista CA provides practical in-shop and mobile options for drivers throughout Chula Vista. Call with your vehicle year, make, model, and the glass problem so we can confirm the service and current availability.",
      "Our location at 1165 Third Ave gives Chula Vista customers a convenient in-shop option. Mobile appointments may also be scheduled at a home, workplace, or another suitable location within our service area. Service availability and timing depend on the glass or part required."
    ],
    faq: [
      {
        q: "Can I bring my vehicle to your Chula Vista shop?",
        a: "Yes. Our shop is at 1165 Third Ave, Chula Vista, CA 91911. Call before arriving so we can confirm availability for your vehicle."
      },
      {
        q: "Do you offer mobile service in Chula Vista?",
        a: "Yes. Mobile appointments are available within our service area. Call to confirm the location, service, and current schedule."
      },
      {
        q: "How do I request a quote?",
        a: "Call with your vehicle year, make, model, and the type of glass damage. We provide free estimates by phone."
      }
    ]
  },
  {
    city: "National City",
    county: "San Diego County",
    state: "CA",
    slug: "national-city",
    intro:
      "Mobile auto glass service for National City, with an in-shop option nearby in Chula Vista. We handle windshield damage, broken car windows, back glass, and window regulator problems.",
    localFocus:
      "National City is within our South San Diego County service area, a short distance from our Third Avenue shop in Chula Vista.",
    nearbyZones: ["Mile of Cars area", "West National City", "Paradise Valley", "Lincoln Acres"],
    seoTitle: "Auto Glass Repair National City CA | Mobile Service",
    seoDescription:
      "Need auto glass repair in National City, CA? Ask about mobile windshield and car window service or visit our nearby Chula Vista shop. Call for a quote.",
    bodyParagraphs: [
      "Drivers in National City can request mobile service for windshield replacement, rock chip repair, door glass, back glass, leaks and molding, or a window regulator problem. Tell us what happened and where the vehicle is located, and we will confirm the appropriate service and scheduling options.",
      "Customers who prefer an in-shop appointment can visit our location at 1165 Third Ave in Chula Vista. Calling first helps us verify the glass or part needed for the vehicle and avoid an unnecessary trip."
    ],
    faq: [
      {
        q: "Do you replace broken door glass in National City?",
        a: "Yes. Door glass replacement is one of the services available. Call with your vehicle information so we can check the correct glass."
      },
      {
        q: "Can you come to my home or workplace?",
        a: "Mobile appointments may be scheduled at a suitable location in National City. Call to confirm coverage and availability."
      },
      {
        q: "Can I use the Chula Vista shop instead?",
        a: "Yes. Our shop is at 1165 Third Ave in Chula Vista. Please call before visiting."
      }
    ]
  },
  {
    city: "Bonita",
    county: "San Diego County",
    state: "CA",
    slug: "bonita",
    intro:
      "Auto glass repair and replacement for Bonita drivers, with mobile appointments and an in-shop location nearby in Chula Vista. Call for a free phone estimate.",
    localFocus:
      "Bonita is close to our Chula Vista shop and is included in our mobile service area around South San Diego County.",
    nearbyZones: ["Sweetwater area", "Central Bonita", "Bonita Long Canyon", "South Bonita"],
    seoTitle: "Auto Glass Repair Bonita CA | Windshield Service",
    seoDescription:
      "Auto glass repair and windshield replacement for Bonita, CA. Mobile and nearby in-shop options are available. Call for service availability and a quote.",
    bodyParagraphs: [
      "Whether the problem is a windshield crack, a small rock chip, shattered side glass, damaged back glass, or a stuck car window, Bonita drivers can call us for service options. We will ask for basic vehicle details and explain whether an in-shop or mobile appointment fits the job.",
      "Our shop at 1165 Third Ave in Chula Vista is nearby for customers who prefer to bring the vehicle in. Mobile service may also be available at a home, workplace, or another suitable location in Bonita."
    ],
    faq: [
      {
        q: "Is mobile auto glass service available in Bonita?",
        a: "Yes. Bonita is within our service area. Call to confirm your address and current appointment availability."
      },
      {
        q: "Do you repair rock chips?",
        a: "Yes. Call and describe the size and location of the damage so we can determine whether repair may be an option."
      },
      {
        q: "What information is needed for a quote?",
        a: "Please have the vehicle year, make, model, and a description of the damaged glass ready when you call."
      }
    ]
  },
  {
    city: "Imperial Beach",
    county: "San Diego County",
    state: "CA",
    slug: "imperial-beach",
    intro:
      "Mobile auto glass service for Imperial Beach, including windshield replacement, rock chip repair, broken car windows, back glass, and leak or molding concerns.",
    localFocus:
      "Imperial Beach is included in our mobile coverage area, with an in-shop option available at our Chula Vista location.",
    nearbyZones: ["Palm Avenue corridor", "Central Imperial Beach", "South Imperial Beach", "Seacoast area"],
    seoTitle: "Auto Glass Repair Imperial Beach CA | Mobile Service",
    seoDescription:
      "Windshield and auto glass service in Imperial Beach, CA. Ask about mobile appointments or visit our Chula Vista shop. Call for a free phone estimate.",
    bodyParagraphs: [
      "Auto glass damage can make it difficult to keep a vehicle protected from wind, moisture, and road conditions. Imperial Beach drivers can contact us for windshield replacement, chip repair, door glass, back glass, leak and molding work, and window regulator repair.",
      "Mobile service may be scheduled at a suitable Imperial Beach location, depending on the job and current availability. Customers can also use our shop at 1165 Third Ave in Chula Vista. Call first so we can confirm the glass or part needed."
    ],
    faq: [
      {
        q: "Do you service windshield leaks in Imperial Beach?",
        a: "Leak and molding repair is one of our listed services. Call so we can discuss the symptoms and appointment options."
      },
      {
        q: "Can you replace back glass?",
        a: "Yes. Back glass replacement is available. Vehicle details are needed to identify the correct glass."
      },
      {
        q: "Is there an in-shop option?",
        a: "Yes. Our shop is located at 1165 Third Ave in Chula Vista. Please call before visiting."
      }
    ]
  },
  {
    city: "San Ysidro",
    county: "San Diego County",
    state: "CA",
    slug: "san-ysidro",
    intro:
      "Auto glass repair and replacement for San Ysidro drivers. Mobile appointments and an in-shop option in Chula Vista are available for common vehicle glass problems.",
    localFocus:
      "San Ysidro is within our 13-mile service radius from the Chula Vista shop, subject to the exact appointment location.",
    nearbyZones: ["San Ysidro Village", "East San Ysidro", "Border area", "Otay Mesa West edge"],
    seoTitle: "Auto Glass Repair San Ysidro CA | Mobile Service",
    seoDescription:
      "Auto glass repair and windshield replacement in San Ysidro, CA. Mobile and nearby in-shop service options. Call with your vehicle details for a quote.",
    bodyParagraphs: [
      "A damaged windshield or broken car window can be especially inconvenient for a vehicle used every day. San Ysidro customers can call us for windshield replacement, rock chip repair, side and back glass replacement, leak and molding work, or window regulator repair.",
      "We can discuss mobile service at a suitable San Ysidro location or arrange an appointment at our Chula Vista shop. Scheduling and timing depend on the type of service and availability of the correct glass or part."
    ],
    faq: [
      {
        q: "Do you provide mobile service in San Ysidro?",
        a: "San Ysidro is within our general service radius. Call with the exact location so we can confirm coverage."
      },
      {
        q: "Can you replace a shattered side window?",
        a: "Yes. Door glass replacement is available. We will need the vehicle year, make, and model to check the correct glass."
      },
      {
        q: "How quickly can an appointment be scheduled?",
        a: "Availability depends on the service, route, and required part. Call and we will provide the current scheduling options."
      }
    ]
  },
  {
    city: "Spring Valley",
    county: "San Diego County",
    state: "CA",
    slug: "spring-valley",
    intro:
      "Mobile auto glass service for Spring Valley, including cracked windshields, chips, broken side glass, back glass, leaks, molding, and window regulator issues.",
    localFocus:
      "Spring Valley locations near our service radius can request mobile scheduling or use our in-shop location in Chula Vista.",
    nearbyZones: ["Casa de Oro", "Dictionary Hill area", "Sweetwater Reservoir area", "Central Spring Valley"],
    seoTitle: "Auto Glass Repair Spring Valley CA | Mobile Service",
    seoDescription:
      "Windshield replacement and auto glass repair for Spring Valley, CA. Ask about mobile coverage or our Chula Vista shop. Call for a free phone quote.",
    bodyParagraphs: [
      "Spring Valley drivers can contact us for common auto glass problems, from a cracked windshield or rock chip to broken door glass, damaged back glass, or a window that will not move correctly. We will confirm which service applies and discuss current appointment options.",
      "Mobile coverage depends on the exact Spring Valley location because the business operates within a defined radius of the Chula Vista shop. The in-shop option at 1165 Third Ave is also available for customers who prefer to bring the vehicle in."
    ],
    faq: [
      {
        q: "Do you repair stuck car windows in Spring Valley?",
        a: "Yes. Window regulator repair is available for windows that will not roll up or down correctly."
      },
      {
        q: "Can windshield replacement be done at my location?",
        a: "Mobile appointments may be available depending on the job and exact location. Call to confirm."
      },
      {
        q: "Can I get an estimate before scheduling?",
        a: "Yes. Call with your vehicle details and the service needed for a free phone estimate."
      }
    ]
  }
];
