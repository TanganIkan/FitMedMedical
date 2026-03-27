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
          },
          {
            id: "dengue-fever",
            name: "Dengue Fever Test",
            price: "450.000",
            desc: "Blood test to detect dengue infection early and help prevent severe complications.",
            image: "/images/lab-dengue.jpg",
          },
          {
            id: "malaria-test",
            name: "Malaria Test",
            price: "350.000",
            desc: "Rapid diagnostic test to identify malaria infection and guide timely treatment.",
            image: "/images/lab-malaria.jpg",
          },
          {
            id: "typhoid-fever",
            name: "Typhoid Fever Test",
            price: "350.000",
            desc: "Laboratory test to diagnose typhoid fever and support proper medical treatment.",
            image: "/images/lab-typhoid.jpg",
          },
          {
            id: "sti-panel",
            name: "STI Panel",
            price: "850.000",
            desc: "Comprehensive screening to detect sexually transmitted infections accurately and confidentially.",
            image: "/images/lab-sti.jpg",
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
        name: "Wound Care",
        price: "350.000",
        image: "/images/wound-care.jpg",
        desc: "Professional dressing and treatment for injuries.",
        benefits: [{ title: "Sterile", text: "Prevents infection." }],
      },
      { id: "monitoring", name: "Monitoring & Prevention", price: "300.000", image: "/images/monitoring.webp", desc: "Regular vital sign checks.", benefits: [] },
      { id: "nurse-visit", name: "Nurse Home Visit", price: "450.000", image: "/images/nurse-visit.jpg", desc: "Dedicated nursing care.", benefits: [] },
      { id: "pediatric-care", name: "Pediatric Home Care", price: "550.000", image: "/images/pediatric.webp", desc: "Medical attention for children.", benefits: [] },
      { id: "ent-care", name: "Otolaryngology Home Care", price: "500.000", image: "/images/ent.webp", desc: "Ear, nose, and throat care.", benefits: [] },
    ],
  },
  {
    id: "iv",
    title: "IV Therapy Services",
    icon: Syringe,
    subServices: [
      { id: "bali-belly", name: "Bali Belly Infusion", price: "1.100.000", image: "/images/bali-belly.jpg", desc: "Hydration for stomach flu.", benefits: [] },
      { id: "immune-booster", name: "Super Immune Booster", price: "1.500.000", image: "/images/immune-booster.jpg", desc: "High dose Vitamin C.", benefits: [] },
      { id: "hangover-infusion", name: "Hangover Infusion", price: "950.000", image: "/images/hangover.webp", desc: "Recover fast from a night out.", benefits: [] },
      { id: "gastritis-infusion", name: "GERD / Gastritis Infusion", price: "1.000.000", image: "/images/gastritis.webp", desc: "Medication for stomach acid.", benefits: [] },
      { id: "nad-plus", name: "Pure NAD+ Anti Aging", price: "3.500.000", image: "/images/nad-plus.jpg", desc: "Regenerate cells.", benefits: [] },
    ],
  },
];
