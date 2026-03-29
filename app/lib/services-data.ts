import { Stethoscope, FlaskConical, Syringe, Heart, ShieldPlus } from "lucide-react";

export const servicesData = [
  {
    id: "doctor",
    title: "Doctor Consultation",
    icon: Stethoscope,
    subServices: [
      {
        id: "doctor-home-service",
        name: "Doctor Home Service",
        price: "500.000",
        image: "/images/home-service.webp",
        desc: "Professional doctor home visit service providing medical consultation, diagnosis, treatment, and follow-up care directly at your home.",
        benefits: [
          { title: "Convenience", text: "Consult a healthcare professional from the comfort of your home, saving time and travel." },
          { title: "Accessibility", text: "Get medical advice and prescriptions for common conditions without visiting a clinic." },
          { title: "Timely Care", text: "Receive fast consultations for minor illnesses without long waiting times." },
        ],
      },
      {
        id: "gp-online",
        name: "General Practitioner Online",
        price: "20.000",
        image: "/images/doctor-online.webp",
        desc: "Access healthcare through convenient online consultations, addressing diagnoses, treatments, and follow-up care flexibly from your own space.",
        benefits: [
          { title: "Convenience", text: "Consult a healthcare professional from the comfort of your home, saving time and travel." },
          { title: "Accessibility", text: "Get medical advice and prescriptions for common conditions without visiting a clinic." },
          { title: "Timely Care", text: "Receive fast consultations for minor illnesses without long waiting times." },
          { title: "Cost-Effective", text: "More affordable than in-person visits by reducing travel and time-off costs." },
        ],
      },
      {
        id: "medical-online",
        name: "Medical Doctor Online Consultation",
        price: "40.000",
        desc: "Connect with specialized medical expertise remotely, eliminating the need for physical travel through our online platform.",
        image: "/images/consultation.webp",
        benefits: [
          { title: "Pediatrician", text: "Consult with doctor specializing in the medical care of infants, children, and adolescents." },
          { title: "Surgeon", text: "Consult with medical professional skilled in performing surgical procedures." },
          { title: "Aesthetic Doctor", text: "Consult with medical practitioner with expertise in aesthetic or cosmetic medicine." },
        ],
      },
      {
        id: "prescription",
        name: "Online Medical Prescription",
        price: "20.000",
        desc: "Online medical prescriptions allow patients to receive medications remotely through secure virtual consultations.",
        image: "/images/medical-prescription.webp",
        benefits: [
          { title: "Convenience", text: "Receive prescriptions without visiting a physical clinic, saving time and effort." },
          { title: "Accessibility", text: "Improves access to medications for patients in remote areas." },
          { title: "Time Efficient", text: "Reduces travel time and waiting at clinics or pharmacies." },
          { title: "Privacy", text: "Provides a discreet way to obtain prescription medications." },
          { title: "Continuity of Care", text: "Ensures consistent management of chronic conditions with timely prescription refills." },
        ],
      },
      {
        id: "leave-letter",
        name: "Online Sick Leave Letter",
        price: "75.000",
        desc: "Online sick leave letters allow individuals to consult healthcare professionals remotely and obtain medical certificates through digital platforms.",
        image: "/images/online-sick.webp",
        benefits: [
          { title: "Convenience", text: "Receive prescriptions without visiting a physical clinic, saving time and effort." },
          { title: "Accessibility", text: "Easy access for individuals in remote areas or with limited mobility." },
          { title: "Time Saving", text: "Avoid travel time and long waiting queues." },
          { title: "Efficient", text: "Fast and simple process through online consultation." },
          { title: "Reduce Exposure", text: "Minimizes exposure to illness by avoiding in-person visits." },
        ],
      },
    ],
  },
  {
    id: "lab",
    title: "Home Lab Services",
    icon: FlaskConical,
    subServices: [
      {
        id: "general-health-checkup",
        name: "General Health Checkup",
        price: "850.000",
        image: "/images/lab-general.jpg",
        desc: "Comprehensive health screening to assess overall wellness and detect early signs of medical conditions.",
        items: [
          {
            id: "cbc",
            name: "Complete Blood Count (CBC)",
            price: "150.000",
            desc: "Measures overall blood health, including infection, anemia, and immune status.",
            image: "/images/lab-cbc.jpg",
            benefits: [
              {
                title: "Measure",
                text: "• Red Blood Cells (RBC) \n • White Blood Cells (WBC) \n • Hemoglobin (Hb) \n • Hematocrit (Hct)",
              },
              {
                title: "Benefit",
                text: "• Early detection of infections and inflammatory conditions\n• Screening for anemia and blood disorders\n• Monitoring chronic diseases\n• Evaluating overall immune health\n• Supporting diagnosis before medical treatment or procedures",
              },
            ],
          },
          {
            id: "lft",
            name: "Liver Function Test (LFT)",
            price: "200.000",
            desc: "Evaluates liver health and detects inflammation or liver damage.",
            image: "/images/lab-lft.jpg",
            benefits: [
              {
                title: "Measure",
                text: "• Alanine Aminotransferase (ALT) \n • Aspartate Aminotransferase (AST) \n • Alkaline Phosphatase (ALP) \n • Bilirubin",
              },
              {
                title: "Benefit",
                text: "• Early detection of infections and inflammatory conditions\n• Monitoring liver conditions such as hepatitis or fatty liver \n • Evaluating liver function before starting certain medications \n • Supporting diagnosis of jaundice and bile duct disorders \n • Tracking liver health for individuals with chronic conditions",
              },
            ],
          },
          {
            id: "kft",
            name: "Kidney Function Test (KFT)",
            price: "200.000",
            desc: "Assesses kidney performance and detects early kidney problems.",
            image: "/images/lab-kft.jpg",
            benefits: [
              {
                title: "Measure",
                text: "• Creatinine \n • Blood Urea Nitrogen (BUN) \n • Estimated Glomerular Filtration Rate (eGFR) \n • Electrolytes",
              },
              {
                title: "Benefit",
                text: "• Early detection of kidney problems \n • Monitoring chronic kidney disease \n • Evaluating kidney function in patients with diabetes or hypertension \n • Assessing overall fluid and electrolyte balance \n • Supporting diagnosis before medical treatment or medication adjustment",
              },
            ],
          },
          {
            id: "lipid",
            name: "Lipid Profile",
            price: "250.000",
            desc: "Checks cholesterol and triglyceride levels to assess heart disease risk.",
            image: "/images/lab-lipid.jpg",
            benefits: [
              {
                title: "Measure",
                text: "• Total Cholesterol \n • Low-Density Lipoprotein (LDL) \n • High-Density Lipoprotein (HDL) \n • Triglycerides",
              },
              {
                title: "Benefit",
                text: "• Early detection of cardiovascular risk factors \n • Monitoring cholesterol levels for heart health management \n • Supporting lifestyle and dietary adjustments \n • Evaluating the effectiveness of cholesterol-lowering treatments \n • Reducing the risk of heart attack and stroke through early intervention",
              },
            ],
          },
          {
            id: "hba1c",
            name: "Blood Glucose (HbA1c)",
            price: "175.000",
            desc: "Monitors blood sugar levels and long-term glucose control.",
            image: "/images/lab-hba1c.jpg",
            benefits: [
              {
                title: "Measure",
                text: "• Fasting Blood Glucose (FBG) \n • HbA1c (Hemoglobin A1c) \n • Estimated Average Glucose (eAG)",
              },
              {
                title: "Benefit",
                text: "• Early detection of prediabetes and diabetes \n • Monitoring long-term blood sugar control \n • Evaluating the effectiveness of diabetes treatment plans \n • Reducing the risk of diabetes-related complications \n • Supporting lifestyle and dietary management decisions",
              },
            ],
          },
          {
            id: "urinalysis",
            name: "Urinalysis",
            price: "125.000",
            desc: "Detects urinary tract infections, kidney issues, and metabolic disorders.",
            image: "/images/lab-urinalysis.jpg",
            benefits: [
              {
                title: "Measure",
                text: "• Appearance & Color \n • pH Level \n • Protein \n • Glucose & Ketones",
              },
              {
                title: "Benefit",
                text: "• Early detection of urinary tract infections \n • Monitoring kidney health and function \n • Identifying metabolic disorders such as diabetes \n • Supporting diagnosis of urinary abnormalities \n • Routine screening for overall health assessment",
              },
            ],
          },
          {
            id: "electrolyte",
            name: "Electrolyte Panel",
            price: "185.000",
            desc: "Measures essential minerals to maintain fluid balance and nerve function.",
            image: "/images/lab-electrolyte.jpg",
            benefits: [
              {
                title: "Measure",
                text: "• Sodium \n • Potassium \n • Chloride \n • Bicarbonate",
              },
              {
                title: "Benefit",
                text: "• Detecting dehydration or overhydration \n • Monitoring kidney and heart function \n • Identifying electrolyte imbalances that may affect heart rhythm \n • Supporting diagnosis of metabolic or hormonal disorders \n • Evaluating overall fluid and acid-base balance",
              },
            ],
          },
          {
            id: "crp",
            name: "C-Reactive Protein (CRP)",
            price: "195.000",
            desc: "Identifies inflammation and infection levels in the body.",
            image: "/images/lab-crp.jpg",
            benefits: [
              {
                title: "Measure",
                text: "• C-Reactive Protein Level \n • High-Sensitivity CRP \n • Inflammatory Response",
              },
              {
                title: "Benefit",
                text: "• Early detection of inflammation and infection \n • Monitoring chronic inflammatory conditions \n • Supporting diagnosis of autoimmune disorders \n • Evaluating cardiovascular risk (with hs-CRP) \n • Tracking treatment effectiveness during infection or inflammation",
              },
            ],
          },
        ],
      },
      {
        id: "infectious-disease-tests",
        name: "Infectious Disease Tests",
        price: "450.000",
        image: "/images/lab-infectious.jpg",
        desc: "Laboratory tests to identify bacterial, viral, and infectious diseases accurately and quickly.",
        items: [
          {
            id: "covid-19",
            name: "COVID-19 PCR/Antigen",
            price: "250.000",
            desc: "Accurate testing to detect active COVID-19 infection for early diagnosis and safe travel or work clearance.",
            image: "/images/lab-covid.jpg",
            benefits: [
              {
                title: "Benefit",
                text: "• Early detection of COVID-19 infection \n • Supports timely isolation and treatment decisions \n • Required for travel, work, or medical clearance \n • Helps prevent the spread of the virus to others \n • Reliable laboratory results (PCR) and rapid screening (Antigen)",
              },
            ],
          },
          {
            id: "dengue-fever",
            name: "Dengue Fever Test",
            price: "450.000",
            desc: "Blood test to detect dengue infection early and help prevent severe complications.",
            image: "/images/lab-dengue.jpg",
            benefits: [
              {
                title: "Benefit",
                text: "• Early detection for faster medical intervention \n • Helps prevent severe complications \n • Supports accurate diagnosis and proper monitoring \n • Safe and hygienic blood sample procedure \n • Reliable laboratory results",
              },
            ],
          },
          {
            id: "malaria-test",
            name: "Malaria Test",
            price: "350.000",
            desc: "Rapid diagnostic test to identify malaria infection and guide timely treatment.",
            image: "/images/lab-malaria.jpg",
            benefits: [
              {
                title: "Benefit",
                text: "• Rapid detection of malaria infection \n • Enables timely and appropriate treatment \n • Helps prevent severe complications \n • Simple and minimally invasive blood sample procedure \n • Reliable and accurate laboratory results",
              },
            ],
          },
          {
            id: "typhoid-fever",
            name: "Typhoid Fever Test",
            price: "350.000",
            desc: "Laboratory test to diagnose typhoid fever and support proper medical treatment.",
            image: "/images/lab-typhoid.jpg",
            benefits: [
              {
                title: "Benefit",
                text: "• Early detection of typhoid infection \n • Supports accurate diagnosis and proper treatment \n • Helps prevent complications from delayed treatment \n • Safe and hygienic sample collection procedure \n • Reliable laboratory results for effective monitoring",
              },
            ],
          },
          {
            id: "sti-panel",
            name: "STI Panel",
            price: "850.000",
            desc: "Comprehensive screening to detect sexually transmitted infections accurately and confidentially.",
            image: "/images/lab-sti.jpg",
            benefits: [
              {
                title: "Benefit",
                text: "• Early detection of common sexually transmitted infections \n • Accurate and reliable laboratory results \n • Confidential and discreet testing process \n • Supports timely and appropriate medical treatment \n • Helps prevent complications and transmission to partners",
              },
            ],
          },
        ],
      },
      { id: "hormone-specialised-tests", name: "Hormone & Specialised Tests", price: "1.200.000", image: "/images/lab-hormone.jpg", desc: "Advanced testing to evaluate hormone balance and diagnose specific medical conditions.", items: [] },
      {
        id: "nutritional-vitamin-tests",
        name: "Nutritional & Vitamin Tests",
        price: "950.000",
        image: "/images/lab-nutritional.jpg",
        desc: "Blood tests to measure vitamin and nutrient levels affecting energy, immunity, and metabolism.",
        items: [],
      },
      {
        id: "allergy-sensitivity-tests",
        name: "Allergy & Sensitivity Tests",
        price: "1.100.000",
        image: "/images/lab-allergy.jpg",
        desc: "Tests to identify allergic reactions and sensitivities to foods, substances, or environmental factors.",
        items: [],
      },
      {
        id: "gastrointestinal-&-metabolic-tests",
        name: "Gastrointestinal & Metabolic Tests",
        price: "1.100.000",
        image: "/images/lab-allergy.jpg",
        desc: "Tests to identify allergic reactions and sensitivities to foods, substances, or environmental factors.",
        items: [],
      },
    ],
  },
  {
    id: "home-care",
    title: "Home Care Services",
    icon: Heart,
    subServices: [
      {
        id: "wound-care",
        name: "Wound and Care",
        price: "500.000",
        image: "/images/wound-care.jpg",
        desc: "Comprehensive healthcare services covering expert wound and ostomy care, advanced wound dressing techniques, precise minor surgical procedures, and thorough post-surgical care to support optimal recovery.",
        benefits: [
          {
            title: "Benefit",
            text: "• Wound and Ostomy Care \n • Advanced Wound Dressing \n • Minor Surgeries\n• Post-Surgical Care",
          },
        ],
      },
      {
        id: "monitoring",
        name: "Monitoring & Prevention",
        price: "200.000",
        image: "/images/monitoring.webp",
        desc: "Ensuring patient well-being through continuous vital sign monitoring and implementing preventive measures to reduce the risk of infections.",
        benefits: [
          {
            title: "Benefit",
            text: "• Vital Sign Monitoring\n• Infection Prevention",
          },
        ],
      },
      {
        id: "nurse-visit",
        name: "Nurse Home Visit",
        price: "250.000",
        image: "/images/nurse-visit.jpg",
        desc: "A Nurse Home Visit delivers professional healthcare directly to your home, providing personalized assessments, treatments, and health education.",
        benefits: [
          {
            title: "Benefit",
            text: "• Convenience\n• Personalized Care\n• Timely Intervention\n• Enhanced Relationship\n• Accessibility",
          },
        ],
      },
      {
        id: "pediatric-care",
        name: "Pediatric Home Care",
        price: "700.000",
        image: "/images/pediatric.webp",
        desc: "Pediatric home care provides specialized medical services for children directly in their homes, ensuring comfort, safety, and convenient healthcare.",
        benefits: [
          {
            title: "Benefit",
            text: "• Convenience\n• Personalized Care\n• Reduced Stress\n• Improved Compliance\n• Family Involvement",
          },
        ],
      },
      {
        id: "ent-care",
        name: "Otolaryngology Home Care",
        price: "700.000",
        image: "/images/ent.webp",
        desc: "Otolaryngology home care provides specialized medical services for ear, nose, and throat conditions directly in the comfort of the patient's home.",
        benefits: [
          {
            title: "Benefit",
            text: "• Convenience\n• Personalized Care\n• Comfort\n• Reduced Infection Risk\n• Family Involvement",
          },
        ],
      },
      {
        id: "dengue-fever",
        name: "Dengue Fever Home Care",
        price: "850.000",
        image: "/images/dengue-homecare.jpg",
        desc: "Dengue fever home care focuses on treating and managing dengue symptoms at home, supporting patient recovery while reducing transmission risks and hospital-related complications.",
        benefits: [
          {
            title: "Benefit",
            text: "• Comfortable Recovery Environment \n • Reduced Transmission Risk \n• Personalized Treatment\n• Regular Monitoring\n• Avoidance of Hospital Risks",
          },
        ],
      },
    ],
  },
  {
    id: "iv",
    title: "IV Therapy Services",
    icon: Syringe,
    subServices: [
      {
        id: "bali-belly",
        name: "Bali Belly Infusion",
        price: "1.990.000",
        image: "/images/bali-belly.jpg",
        desc: "Rapid GI reset hydration. Reduces nausea, relieves stomach cramps, and supports gut lining with electrolytes, anti-nausea agents, and essential vitamins.",
        benefits: [
          {
            title: "Composition",
            text: "Therapeutic Components:\n• Saline infusion solution (NaCl 0,9%) 500ml\n• Pain Killer IV\n• Anti-Vomiting IV\n• Gaster Protector IV\n\nVitamin Boosters:\n• Vitamin C\n• Vitamin B1, B2, B3, B5, B6",
          },
        ],
      },
      {
        id: "super-bali-belly",
        name: "Super Bali Belly IV",
        price: "2.190.000",
        image: "/images/super-bali-belly.jpg",
        desc: "Advanced gut recovery & immunity boost. Enhances digestive relief with electrolytes, zinc, probiotics, and vitamins-protects gut barrier while strengthening your immune system.",
        benefits: [
          {
            title: "Composition",
            text: "Therapeutic Components:\n• Saline infusion solution (NaCl 0,9%) 500ml\n• Pain Killer IV\n• Anti-Vomiting IV\n• Stomach Protector IV\n\nVitamin Boosters:\n• Vitamin C, B1, B2, B3, B5, B6, B12\n• Folic Acid, Biotin, Zinc (20mg), Probiotics",
          },
        ],
      },
      {
        id: "nad-plus",
        name: "Pure NAD+ Anti Aging",
        price: "2.390.000",
        image: "/images/nad-plus.jpg",
        desc: "Pure NAD+ infusion for anti-aging & cellular renewal. High-dose NAD+ fuels mitochondria, boosts DNA repair. Get optimal results with an oversight by our certified doctor.",
        benefits: [
          {
            title: "Benefit",
            text: "• Anti-Aging and Chronic Disease\n• Energy and Mental Health\n• Healthspan and Human Performance\n• Reduced Fatigue and More Energy\n• Increased Endurance and Physical Performance",
          },
          {
            title: "Composition",
            text: "• Saline infusion solution (NaCl 0,9%) 500ml\n• Nicotinamide Adenine Dinucleotide (100mg-750mg)",
          },
        ],
      },
      {
        id: "booster-nad-plus",
        name: "Booster NAD+ Anti Aging",
        price: "1.900.000",
        image: "/images/booster-nad.jpg",
        desc: "Energy, anti-aging & cellular repair. NAD+ infusion enhances mitochondrial function, supports DNA repair, cognitive clarity, endurance, and oxidative defense.",
        benefits: [
          {
            title: "Composition",
            text: "• Saline solution 500ml\n• Vitamin A, C, D, E\n• Vitamin B-Complex (B1, B2, B5, B6, B7, B12)\n• Folic Acid, Zinc, L-carnitine, Magnesium",
          },
        ],
      },
      {
        id: "basic-immune",
        name: "Basic Immune Booster",
        price: "1.675.000",
        image: "/images/basic-immune.jpg",
        desc: "Foundational immune support. Delivers electrolytes, Vitamin B-Complex, and Vitamin C to boost your defenses, energy, and collagen synthesis.",
        benefits: [
          {
            title: "Composition",
            text: "• Ringers Lactate / Saline 500ml\n• Vitamin B-Complex (B1, B2, B6, B12)\n• Biotin, Folic Acid, Niacinamide, Pantothenic Acid\n• Vitamin C (1,000 mg)",
          },
        ],
      },
      {
        id: "standard-immune",
        name: "Standard Immune Booster",
        price: "2.075.000",
        image: "/images/standard-immune.jpg",
        desc: "Enhanced immune formula. High-dose Vitamin C, B-Complex, and electrolytes to power metabolism, energy, red blood cells, and skin health.",
        benefits: [
          {
            title: "Composition",
            text: "• Ringers Lactate / Saline 500ml\n• Vitamin C (2,100 mg)\n• Vitamin B-Complex (B1, B2, B6, B12)\n• Niacinamide, Pantothenic Acid, Folic Acid, Biotin",
          },
        ],
      },
      {
        id: "super-immune",
        name: "Super Immune Booster",
        price: "2.440.000",
        image: "/images/super-immune.jpg",
        desc: "Potent IV drip combining electrolytes, NAC-Glutathione, Zinc, and extensive vitamins. Delivers formidable immune enhancement and antioxidant defenses.",
        benefits: [
          {
            title: "Composition",
            text: "• Saline 500ml, Zinc (5 mg), NAC-Glutathione (30 mg)\n• Vitamin A, C, D3, E\n• Vitamin B-Complex (B1, B2, B5, B6, B12)\n• Folic Acid, Biotin, Niacinamide",
          },
        ],
      },
      {
        id: "hangover-infusion",
        name: "Hangover Infusion",
        price: "1.490.000",
        image: "/images/hangover.webp",
        desc: "Quick 30-60 minute procedure designed to help relieve hangover symptoms through rapid hydration and a targeted combination of vitamins and electrolytes.",
        benefits: [
          {
            title: "Composition",
            text: "• Saline 500ml\n• Pain Killer IV\n• Anti-Vomiting IV\n• Gaster Protector IV\n• Vitamin B1, B6, B12",
          },
        ],
      },
      {
        id: "fever-infusion",
        name: "Fever Infusion",
        price: "1.190.000",
        image: "/images/fever-infusion.jpg",
        desc: "Rapid recovery of high fever for adults through intravenous and can be beneficial to restore body fluids.",
        benefits: [
          {
            title: "Composition",
            text: "• Paracetamol IV\n• RL (Electrolytes) 500ml",
          },
        ],
      },
      {
        id: "gastritis-infusion",
        name: "GERD / Gastritis Infusion",
        price: "1.890.000",
        image: "/images/gastritis.webp",
        desc: "Useful for treating inflammation in the stomach or gaster caused by irritation due to stomach acid.",
        benefits: [
          {
            title: "Composition",
            text: "• Saline 500ml\n• Pain Killer IV\n• Anti-Vomiting IV\n• Gaster Protector IV\n• Vitamin B1, B6, B12",
          },
        ],
      },
      {
        id: "iron-infusion",
        name: "Iron Infusion",
        price: "1.790.000",
        image: "/images/iron-infusion.jpg",
        desc: "An effective treatment for iron deficiency, the condition that causes tiredness and affects your ability to function.",
        benefits: [
          {
            title: "Composition",
            text: "• Saline infusion solution (NaCl 0.9%) 100ml\n• Crystalloid (Ringers Lactate) 500ml\n• Vitamin C (1,000 mg)\n• Vitamin B Complex (5,000 mg)\n• Iron Sucrose Complex (100 mg)",
          },
        ],
      },
      {
        id: "candida-iv",
        name: "Candida IV Treatment",
        price: "1.400.000",
        image: "/images/candida-iv.jpg",
        desc: "Candida control infusion. Tackles yeast overgrowth at its source with targeted nutrients to restore balance and wellbeing.",
        benefits: [
          {
            title: "Composition",
            text: "• Crystalloid (Ringers Lactate) or Saline 100ml\n• Antifungal Broad Spectrum 200ml",
          },
          {
            title: "List Symptoms",
            text: "• Candida Overgrowth / Fungal Infections\n• Oral Thrush / Digestive Issues\n• Autoimmune Diseases / Brain Fog\n• Skin Issues / Mood Swings\n• Vaginal Infections / Carbohydrate Cravings",
          },
        ],
      },
      {
        id: "gym-power",
        name: "Gym Power Infusion",
        price: "1.490.000",
        image: "/images/gym-power.jpg",
        desc: "Enhance your workout with a specially formulated infusion designed to elevate energy levels, improve focus, and prepare your muscles for the challenges ahead.",
        benefits: [
          {
            title: "Composition",
            text: "• Saline 1000ml, Caffeine 100mg\n• Vitamin C 2000mg, B-Complex (B2, B3, B5, B6, B12)\n• Magnesium Sulfate 800mg, Calcium Gluconate 200mg\n• Carnitine 2.5ml, Aquades 12ml",
          },
        ],
      },
      {
        id: "gym-recovery",
        name: "Gym Recovery Infusion",
        price: "1.490.000",
        image: "/images/gym-recovery.jpg",
        desc: "Speed up muscle recovery and reduce post-workout fatigue with a replenishing infusion that helps repair muscle cells and restore energy levels.",
        benefits: [
          {
            title: "Composition",
            text: "• Saline 1000ml, BCAA 2gr\n• Vitamin C 2000mg, B-Complex (B2, B3, B5, B6, B12)\n• Magnesium Sulfate 800mg, Calcium Gluconate 200mg\n• Carnitine 2.5ml, Aquades 12ml",
          },
        ],
      },
      {
        id: "jetlag-night",
        name: "Jetlag Night Switch",
        price: "1.490.000",
        image: "/images/jetlag-night.jpg",
        desc: "For travelers arriving from the West who feel wide awake at Bali bedtime. Downshifts the nervous system and supports the body's natural 'sleep gate'.",
        benefits: [
          {
            title: "Composition",
            text: "• Saline 500-750 ml, Anti-nausea 4 mg\n• Magnesium 500-1.000 mg, Vitamin B6 5-10 mg\n• Oral Circadian Reset Pack (Magnesium glycinate, Melatonin, Glycine, L-theanine)",
          },
        ],
      },
      {
        id: "jetlag-day",
        name: "Jetlag Day Anchor",
        price: "2.690.000",
        image: "/images/jetlag-day.jpg",
        desc: "For travelers who feel sleepy too early in the afternoon then wake up at 2-4am. Builds a strong 'day signal' and improves sleep consolidation.",
        benefits: [
          {
            title: "Composition",
            text: "• Crystalloid / Saline 750-1.000 ml\n• NAD+ 250 mg, Vitamin C 1-2 g\n• Magnesium 500-1.000 mg, Vitamin B support\n• Oral Pack (Magnesium glycinate, Melatonin)",
          },
        ],
      },
    ],
  },
];
