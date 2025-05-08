"use client"

import React from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";
import { useState } from 'react';
import DropdownList from "@/components/DropdownList";
import FaqAccordion from '@/components/FaqAccordion';
import DoctorList from '@/components/DoctorList';
import FilterSidebar from '@/components/FilterSidebar';
import Advertisement from '@/components/Advertisement';
import { FaArrowRight } from "react-icons/fa6";

const faqData = [
  {
    question: "What is the role of a general physician or GP?",
    answer: "A general physician or GP, is the first point of contact for patients seeking medical care. They diagnose and treat a wide range of health issues, from minor illnesses to chronic conditions, and provide preventive care. They also refer patients to specialists when necessary."
  },
  {
    question: "When should I visit a general physician for a fever?",
    answer: "If you have a high fever (above 39°C) that persists for more than three days or is accompanied by other symptoms such as severe headache, rash, or difficulty breathing, it's best to consult a doctor for fever. Infants under three months with any fever should be seen by a doctor for fever immediately, as should adults over 65 with a fever and other symptoms."
  },
  {
    question: "Can a general physician help manage my diabetes?",
    answer: "Yes, a general physician or diabetes doctor plays a crucial role in managing diabetes. They can monitor your blood sugar levels, adjust your medication, and provide advice on lifestyle changes to help control your diabetes. If needed, they may refer you to a specialist like an endocrinologist for further management."
  },
  {
    question: "How can I book an appointment with a general physician near me?",
    answer: "You can easily book an appointment with a doctor near your location by searching the phrase general physician near me. Many clinics now offer online general physician consultation services, allowing you to consult with a doctor from the comfort of your home."
  },
  {
    question: "What is the average general physician fee for a consultation?",
    answer: "The general physician fee varies depending on factors such as location, experience, and the complexity of your health concerns. In India, the consultation fee can range from Rs. 300 to Rs. 1,500 or more. Some clinics may offer discounted rates for online general physician consultation services."
  },
  {
    question: "How can I find reliable general physician reviews before booking an appointment?",
    answer: "You can find general physician reviews on online platforms such as Google. These reviews provide insights into other patients' experiences with the doctor, including their bedside manner, wait times, and the effectiveness of their treatment. You can also ask for recommendations from friends, family, or your local pharmacist."
  },
  {
    question: "What should I expect during my first visit to a general physician?",
    answer: "During your first visit, the general physician or GP will take a detailed medical history, asking about your symptoms, lifestyle, and family health history. They will then perform a physical examination and may order tests such as blood work or imaging scans. Based on their findings, they will provide a diagnosis and treatment plan, which may include medication, lifestyle changes, or referrals to specialists."
  },
  {
    question: "Can a general physician treat allergies?",
    answer: "Yes, an allergies doctor or general physician, can diagnose and treat various types of allergies, including seasonal allergies, food allergies, and drug allergies. They may prescribe antihistamines, nasal sprays, or allergy shots to help manage your symptoms and prevent future allergic reactions."
  },
  {
    question: "How often should I visit my general physician for check-ups?",
    answer: "The frequency of check-ups depends on your age, health status, and risk factors. Generally, healthy adults should see their general physician or GP every 1-2 years for a routine check-up. Those with chronic conditions like diabetes or heart disease may need more frequent visits to monitor their health and adjust their treatment plans."
  },
  {
    question: "What are the qualifications required to become a general physician in India?",
    answer: "To become a general physician in India, one must complete an MBBS (Bachelor of Medicine, Bachelor of Surgery) degree from a recognised medical college, followed by a one-year internship. Some doctors may choose to pursue further specialisation through a postgraduate degree like an MD (Doctor of Medicine) in General Medicine or Family Medicine."
  },
  // Add more FAQ items here
];

const cities = [
    "Bengaluru", "Chennai", "Hyderabad", "Kolkata", "Delhi", "Mumbai",
    "Pune", "Gurugram", "Guwahati", "New Delhi", "Noida", "Bangalore",
    "Visakhapatnam", "Mysuru", "Indore", "Manikonda Jagir", "Secunderabad",
    "Ahmedabad", "Warangal", "Madurai"
  ];

const treatments = [
   "Abdominal Pain Treatment",
  "Coronavirus Symptom Treatment",
  "Abetalipoproteinemia Treatment",
  "Electrolyte Disorders Treatment",
  "Covid Treatment",
  "COPD Treatment",
  "Achilles Tendon Tear Treatment",
  "Abdominal Aortic Aneurysm Treatment",
  "Abnormal Heartbeat Treatment",
  "Polyneuropathy Treatment",
  "Varicocele Treatment",
  "Violent Behavior Treatment",
  "Aaestheticos Treatment",
  "Abandoned Child Syndrome Treatment",
  "Abnormal Behavior Treatment",
  "Abnormal / Unusual / Strange Behavior Treatment",
  "Abnormally Shaped Teeth Treatment",
  "Absence of the Septum Pellucidum Treatment",
  "Achilles Tendonitis Treatment"
  ];

  const ctScansList = [
    "CT Scan Abdomen",
    "CT Scan Abdomen Triphasic",
    "CT Scan Brain",
    "CT Scan Chest",
    "CT Scan with Contrast",
    "CT Angiography: Renal / Brain / Neck",
    "CT Bronchoscopy",
    "CT Guided Biopsy",
    "CT Urography",
    "HRCT Thorax",
    "CT Scan Joint 3D",
    "CT Scan Joint: Knee / Shoulder / Wrist - R/L",
    "CT Scan Neck",
    "CT Scan Orbit",
    "CT Scan Pelvis"
  ];
  
const links = [
    {
      href: "https://www.apollo247.com/specialties/general-physician-internal-medicine-specialists?consultMode=ONLINE",
      text: "General Physician / Internal Medicine Specialists Available for online consults"
    },
    {
      href: "https://www.apollo247.com/specialties/female-general-physician-internal-medicine-specialists",
      text: "Female General Physician / Internal Medicine Specialists in top cities"
    }
  ];


const EditableCityLabel = ({ defaultValue }: { defaultValue: string }) => {
  const [value, setValue] = useState(defaultValue);

  return (
  <>
    <a className="w-full bg-transparent focus:outline-none text-xs"
    >{value}</a>
    </>
  );
};

function home() {
  const [filters, setFilters] = useState({
    hospitalVisit: true,
    onlineConsult: true,
    experience: [] as string[],
    feeRange: [] as string[],
    language: [] as string[],
    clinic: [] as string[],
  });

  return (
    <div>

      <div className="flex min-h-320 mx-5 border-b-4 border-gray-400 text-sm lg:mx-32 lg:min-h-190">
      <div>
      <FilterSidebar filters={filters} setFilters={setFilters} />
      <div className='hidden lg:flex text-base mt-2 font-bold bg-cyan-100 text-cyan-800 border-2 border-cyan-800 p-2 rounded-2xl hover:shadow-lg items-center justify-center'>
        <a href="/new">Add Doctor</a>
        <FaArrowRight className='ml-2'/>
      </div>
      </div>
      <DoctorList filters={filters} />
      <Advertisement />
    </div>

      <div className='mx-5 mt-7 text-sm lg:mx-40 lg:text-md'>
        {/* content */}
        <div className='mb-8'>
        <b>Book Consult for General Medicine Online</b>
        <br/>
        <br/>
Booking an appointment with a top general physician (GP) is now easier than ever with <b>Apollo 24|7</b>. Our experienced doctors provide comprehensive care for a wide range of medical conditions, including <b>fever, allergies</b>, and diabetes. You can conveniently schedule an online general physician consultation or visit a trusted hospital/clinic near you. Our allergies doctor and diabetes doctor offer flexible appointment slots to suit your needs. With transparent general physician fees and genuine general physician reviews, you can make an informed decision when choosing your healthcare provider. Take charge of your health today by booking a doctor near your location by searching the phrase general physician near me.
<br /><br /><br />

<b>What is General Medicine?</b>
<br /><br />
General medicine is a medical speciality that focuses on the prevention, diagnosis, and treatment of internal diseases in adults. This speciality encompasses a wide range of acute and chronic conditions affecting various parts of the body, including fever, <b>asthma, heart disease</b>, liver problems, hypertension, and <b>neurological disorders</b>. General medicine plays a crucial role in healthcare by providing comprehensive medical care, managing complex conditions, and addressing multiple co-morbidities. General physicians are essential in preventive healthcare, early diagnosis, and the long-term management of chronic diseases, ultimately improving patient outcomes and quality of life.
<br /><br /><br />

<b>Who is a General Physician?</b>
<br /><br />
A general physician is a medical doctor who specialises in the diagnosis, treatment, and prevention of adult diseases. To become a general physician in the Indian subcontinent, one must complete an MBBS degree followed by postgraduate training in General Medicine or Internal Medicine. General physicians are trained to diagnose and treat a wide range of medical conditions, providing comprehensive care that includes preventive health measures, early detection of diseases, and long-term management of chronic conditions. They play a vital role in coordinating care when patients have multiple co-morbidities or complex presentations, making them essential in preventive healthcare.
<br /><br /><br />

<b>What Do General Physicians Do?</b>
<br /><br />
General physicians (GPs) are the first point of contact for patients seeking medical care. Some of the key responsibilities of doctors include:
<br />

<ul className='ml-5 mt-3 list-disc list-inside'>
    {[
"Conducting thorough physical examinations and taking detailed medical histories to accurately diagnose health issues",

"Ordering and interpreting diagnostic tests, such as blood work, imaging studies, and biopsies, to identify underlying conditions",

"Developing personalised treatment plans that may include medications, lifestyle modifications, or referrals to specialists when necessary",

"Providing preventive care, such as vaccinations and health screenings, to help patients maintain optimal health and prevent the onset of diseases",

"Educating patients about their health conditions, treatment options, and self-care strategies to promote better health outcomes",

"Collaborating with other healthcare professionals, such as specialists and nurses, to ensure comprehensive and coordinated patient care"
    ].map((item) => (
        <li
          key={item}
          className="mb-2 text-sm">
          {item}
        </li>
        ))}
</ul>
<br /><br />

<b>What are the Other Sub-Specialities of General Medicine?</b>
<br /><br />
General medicine encompasses several sub-specialties that focus on specific areas of adult healthcare, These include:
<br />
<ul className='ml-5 mt-3 list-disc list-inside'>
    {[
"Geriatric Medicine: This sub-speciality focuses on the unique healthcare needs of older adults, addressing age-related conditions and promoting healthy ageing.",

"Palliative Care: Palliative care specialists provide compassionate care to patients with serious or life-limiting illnesses, focusing on symptom management and quality of life.",

"Sports Medicine: This sub-speciality deals with the prevention, diagnosis, and treatment of sports-related injuries and conditions, helping athletes maintain optimal performance and recover from injuries.",

"Preventive Medicine: Preventive medicine specialists focus on promoting health and preventing diseases at the individual and population levels through lifestyle interventions, health education, and public health initiatives.",

"Paediatric Medicine: While general medicine primarily focuses on adult care, some general physicians may have additional training in paediatric medicine, allowing them to provide care for children and adolescents.",

"Addiction Medicine: This sub-speciality addresses substance use disorders and related health issues, providing evidence-based treatments and support for individuals struggling with addiction.",

"Occupational Medicine: Occupational medicine specialists focus on the health and safety of workers, preventing and treating work-related injuries and illnesses, and promoting safe work environments.",

"Rural Medicine: General physicians practising in rural areas often have a broad skill set to address the diverse healthcare needs of communities with limited access to specialist care."
].map((item) => (
    <li
      key={item}
      className="mb-2 text-sm">
      {item}
    </li>
    ))}
</ul>
<br /><br />

<b>What are the Examinations Conducted Under General Medicine or Tests Performed by a General Physician?</b>
<br /><br />
General physicians perform a variety of diagnostic tests and examinations to accurately diagnose and monitor health conditions. Some of the most common tests and examinations include:
<br />
<ul className='ml-5 mt-3 list-disc list-inside'>
    {[
"Physical Examination: A thorough head-to-toe assessment to evaluate overall health and identify any signs of disease or abnormalities.",

"Blood Tests: Various blood tests, such as complete blood count (CBC), metabolic panel, and lipid profile, assess organ function, detect infections, and screen for health issues.",

"Urine Analysis: Examination of urine samples to detect urinary tract infections, kidney problems, or other health conditions.",

"Imaging Studies: X-rays, ultrasounds, CT scans, and MRI scans to visualise internal structures and diagnose conditions such as fractures, tumours, or organ damage.",

"Electrocardiogram (ECG): A test that records the electrical activity of the heart to detect heart rhythm abnormalities or signs of heart disease.",

"Pulmonary Function Tests (PFTs): Breathing tests that measure lung function and capacity, are often used to diagnose and monitor respiratory conditions like asthma or chronic obstructive pulmonary disease (COPD).",

"Biopsies: The removal of small tissue samples for laboratory analysis to diagnose conditions such as cancer or inflammatory diseases.",

"Allergy Tests: Skin prick tests or blood tests to identify specific allergens causing allergic reactions.",

"Glucose Tolerance Test: A test that measures blood sugar levels over time to diagnose diabetes or prediabetes."
].map((item) => (
    <li
      key={item}
      className="mb-2 text-sm">
      {item}
    </li>
    ))}
</ul>
<br /><br />

<b>What are the Common Conditions & Diseases that General Physicians Treat?</b>
<br /><br />
General physicians are skilled at managing a wide array of health issues. Here are some of the conditions and diseases most commonly treated by doctors:
<br />
<ul className='ml-5 mt-3 list-disc list-inside'>
    {[

"Fever: A doctor for fever can diagnose and treat various infections causing fever, such as viral or bacterial infections.",

"Allergies: As allergies doctor, GP can identify allergens and provide treatment options to manage symptoms like sneezing, runny nose, and itchy eyes.",

"Diabetes: As a diabetes doctor, a GP plays a crucial role in diagnosing and managing diabetes, helping patients maintain healthy blood sugar levels through medication, diet, and lifestyle changes.",

"Hypertension: General physicians regularly monitor blood pressure and prescribe medications to control hypertension, reducing the risk of heart disease and stroke.",

"Respiratory infections: Common colds, flu, bronchitis, and pneumonia are frequently managed by doctors, who provide appropriate treatment to alleviate symptoms and prevent complications.",

"Gastrointestinal issues: General physicians treat digestive problems like acid reflux, irritable bowel syndrome, and constipation, offering dietary advice and medications to relieve symptoms.",

"Urinary tract infections (UTIs): General physicians diagnose and treat UTIs, which can cause painful urination, frequent urges to urinate, and abdominal discomfort.",

"Skin conditions: Rashes, eczema, acne, and other skin problems are addressed by GPs, who may prescribe topical or oral treatments to improve skin health.",

"Musculoskeletal pain: General physicians evaluate and treat muscle and joint pain, including back pain, arthritis, and sports injuries, recommending exercises, physical therapy, or pain medications as needed.",

"Mental health concerns: General physicians can identify and provide initial treatment for mental health issues like anxiety, depression, and stress, referring patients to specialists when necessary.",

"Headaches: General physicians can diagnose and treat various types of headaches, including tension headaches, migraines, and those caused by underlying health conditions.",

"Thyroid disorders: Doctors can detect and manage thyroid disorders like hypothyroidism and hyperthyroidism, which can cause weight changes, fatigue, and mood disturbances.",

"Anaemia: GPs can diagnose anaemia, a condition characterised by low haemoglobin levels, and recommend dietary changes or supplements to improve red blood cell production.",

"Sleep disorders: General physicians can identify sleep disorders like insomnia and sleep apnea, offering lifestyle recommendations or referring patients to sleep specialists for further evaluation and treatment.",

"Vaccinations: General physicians administer vaccinations to protect patients against preventable diseases like influenza, pneumonia, and hepatitis."
].map((item) => (
    <li
      key={item}
      className="mb-2 text-sm">
      {item}
    </li>
    ))}
</ul>
<br /><br />

<b>Reasons to See a General Physician</b>
Regular visits to a general physician are essential for maintaining optimal health and detecting potential health issues early on. Here are some key reasons to book general physician appointments:
<br />
<ul className='ml-5 mt-3 list-disc list-inside'>
    {[

"Annual check-ups: Scheduling yearly check-ups with a general physician allows for the monitoring of overall health, including blood pressure, cholesterol levels, and weight, helping to identify any developing health concerns.",

"Chronic disease management: If you have a chronic condition like diabetes, hypertension, or asthma, regular visits to a doctor are crucial for monitoring your condition and adjusting treatment plans as needed.",

"Acute illnesses: When you experience symptoms of acute illnesses like fever, sore throat, or ear pain, a general physician can provide prompt diagnosis and treatment to help you recover quickly and prevent complications.",

"Unexplained symptoms: If you experience persistent or unusual symptoms like fatigue, weight changes, or digestive issues, a GP can perform a thorough evaluation to determine the underlying cause and recommend appropriate treatment.",

"Preventive care: General physicians offer preventive services like vaccinations, cancer screenings, and lifestyle counselling to help you maintain optimal health and reduce your risk of developing chronic diseases.",

"Family history of health issues: If you have a family history of certain health conditions like heart disease, diabetes, or cancer, a general physician can assess your risk factors and provide guidance on preventive measures to lower your risk."
].map((item) => (
    <li
      key={item}
      className="mb-2 text-sm">
      {item}
    </li>
    ))}
</ul>
<br /><br />

<b>What Types of Procedures Do General Physicians Perform?</b>
General physicians perform a variety of therapeutic and minor surgical procedures, including:
<br />
<ul className='ml-5 mt-3 list-disc list-inside'>
    {[
"Health screenings: General physicians conduct routine health screenings like physical examinations, well-child visits, and adolescent health checks to assess overall health and identify any potential concerns.",

"Vaccination administration: Doctors administer vaccinations to protect patients against preventable diseases like influenza, pneumonia, and hepatitis.",

"Wound care: General physicians clean, suture, and dress wounds to promote healing and prevent infection.",

"Skin lesion removal: General physicians can perform minor surgical procedures to remove skin lesions like moles, warts, and skin tags for cosmetic or diagnostic purposes.",

"Ingrown toenail treatment: Doctors can remove or partially remove ingrown toenails to relieve pain and prevent infection.",

"Abscess drainage: Doctors can perform incision and drainage procedures to treat abscesses, which are localised infections that cause painful swelling and pus accumulation.",

"Joint injections: General physicians may administer corticosteroid injections into joints to relieve pain and inflammation associated with conditions like arthritis or bursitis.",

"Nebulizer treatment: GPs can provide nebulizer treatments to patients with respiratory conditions like asthma or COPD to deliver medication directly to the lungs and improve breathing.",

"Ear wax removal: Doctors can safely remove excessive ear wax using irrigation, suction, or specialised instruments to improve hearing and prevent ear discomfort.",

"Pap smears: Female general physicians can perform pap smears to screen for cervical cancer and detect any abnormalities in the cervical cells.",

"Electrocardiograms (ECGs): General physicians can perform and interpret ECGs to assess heart rhythm and detect any abnormalities that may indicate underlying heart disease.",

"Spirometry: GPs can conduct spirometry tests to measure lung function and diagnose respiratory conditions like asthma and COPD.",

"Urinalysis: General physicians can perform urine tests to screen for urinary tract infections, kidney problems, and other health issues.",

"Blood glucose testing: GPs can perform blood glucose tests to diagnose and monitor diabetes, ensuring proper management of the condition.",

"Minor fracture management: Doctors can diagnose and treat minor fractures by applying splints or casts and providing pain management until the bone heals.",
].map((item) => (
    <li
      key={item}
      className="mb-2 text-sm">
      {item}
    </li>
    ))}
</ul>
<br /><br />


<b>Why Choose an Apollo 24|7 General Physician?</b>
<br /><br />
<b>Apollo 24|7</b> doctors for fever and allergies doctor are highly skilled and experienced in providing comprehensive healthcare services. With their expertise and access to advanced facilities, they offer personalised care tailored to each patient's unique needs. Apollo 24|7 diabetes doctors stay up-to-date with the latest medical advancements, ensuring that patients receive the most effective and evidence-based treatments available.
<br /><br />
Patients can easily book general physician appointments through the Apollo 24|7 platform, which offers seamless access to both online and in-clinic consultations. The user-friendly interface allows patients to view general physician reviews, compare general physician fees, and find a doctor near their location by searching for the phrase general physician near me based on their preferences. By choosing an Apollo 24|7 general physician, patients can expect high-quality, patient-centric care that prioritises their health and well-being.
<br /><br /><br />

<b>What to Expect When Visiting a General Physician?</b><br /><br />
When you visit a general physician, you can expect a comprehensive evaluation of your health concerns and a personalised treatment plan tailored to your needs. Here's what a typical doctor visit may involve:
<br />
<ul className='ml-5 mt-3 list-disc list-inside'>
    {[

"Medical history review: Your general physician will ask about your medical history, including any pre-existing conditions, medications, allergies, and family history of health issues.",

"Symptom discussion: You will have the opportunity to discuss your current symptoms, concerns, and any changes in your health status since your last visit.",

"Physical examination: Your general physician will perform a thorough physical examination, checking your vital signs, assessing your overall health, and focusing on any areas of concern.",

"Diagnostic tests: Depending on your symptoms and medical history, your doctor may order diagnostic tests like blood work, urine tests, or imaging studies to gather more information about your health.",

"Diagnosis and treatment plan: Based on the information gathered during your visit, your general physician will provide a diagnosis and develop a treatment plan that may include medications, lifestyle modifications, or referrals to specialists if needed."
].map((item) => (
    <li
      key={item}
      className="mb-2 text-sm">
      {item}
    </li>
    ))}
</ul>
<br /><br />

<b>How Can I Get an Appointment With a General Physician?</b><br /><br />
Getting an appointment with a general physician is easy and convenient with Apollo 24|7. Here are the steps to book a general physician:
<br />
<ul className='ml-5 mt-3 list-disc list-inside'>
    {[
"Online booking through the website: Visit the Apollo 24|7 website and navigate to the Book Appointment section. Choose your preferred general physician based on their profile, experience, general physician reviews, and general physician fee. Select a suitable date and time for your appointment and complete booking online general physician consultation.",

"Online booking through the mobile app: Download the Apollo 24|7 mobile app from the App Store or Google Play Store. Log in or create an account, and follow the same steps as mentioned above for booking through the website. The app allows you to easily search for a doctor near your location by searching the phrase general physician near me, view available slots, and book your appointment with just a few taps.",

"Offline booking: You can also book an appointment by visiting your nearest Apollo Clinic or Hospital and requesting an appointment with a general physician at the reception. The staff will assist you in scheduling your consultation based on the doctor's availability."
].map((item) => (
    <li
      key={item}
      className="mb-2 text-sm">
      {item}
    </li>
    ))}
</ul>
<br /><br />
        </div>

        {/* link and dropdowns */}
        <div >

        <div className="space-y-4 mb-3">
            {links.map((link, idx) => (
                <div key={idx} className='relative bg-white'>
                <a
                    href={link.href}
                    className="flex items-center text-md lg:w-150"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <strong className="flex-1">{link.text}</strong>
                    <FaExternalLinkAlt className="hidden lg:inline ml-2 text-xs" />

                    <FaExternalLinkAlt className="lg:hidden absolute right-0 top-1/2 transform -translate-y-1/2 text-xs" />

                </a>
                </div>
            ))}
        </div>

        <div className="mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className='lg:w-110 relative z-10'>
          <DropdownList
            label="General Physician / Internal Medicine Specialists in top cities"
            items={cities}
            // Example alternative editable item
            renderItem={(city) => (
              <EditableCityLabel defaultValue={`Best General Physician / Internal Medicine Specialists in ${city}`} />
            )}

          />
        </div>

        <div className='lg:w-110 relative z-10'>
          <DropdownList
            label="Related Treatments"
            items={treatments}
            // Example alternative editable item
            renderItem={(treatments) => (
              <EditableCityLabel defaultValue={`Treatment for in ${treatments}`} />
            )}

          />
        </div>

        <div className='lg:w-110 relative z-10'>
          <DropdownList
            label="Related Procedures"
            items={ctScansList}
            // Example alternative editable item
            renderItem={(ctScansList) => (
              <EditableCityLabel defaultValue={`Doctors for ${ctScansList}`} />
            )}

          />
        </div>
        </div>

        </div>

        <FaqAccordion faqs={faqData} />

      </div>
    </div>
  )
}

export default home
