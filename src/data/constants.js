import Nightfall from "../images/Diseases/Nightfall.jpg";
import Ejaculation from "../images/Diseases/Ejaculation.jpg";
import Penis_Enlargement from "../images/Diseases/Penis_Enlargement.jpg";
import Male_Infertility from "../images/Diseases/Male_Infertility.jpg";
import Sex_Specialist from "../images/Diseases/Sex_Specialist.jpg";
import Erectile_Dysfunction from "../images/Diseases/Erectile_Dysfunction.jpg";
import Consultation from "../images/Consultation.jpg";
import DietPlan from "../images/DietPlan.png";
import Natural from "../images/Natural.jpg";
import MailIcon from "@mui/icons-material/Mail";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { PhoneInTalk } from "@mui/icons-material";

export const Bio = {
  name: "Kunal Garg",
  roles: ["Full Stack Developer", "Programmer"],
  description:
    "Being an IT student, I love to code. Being a philomath , I love to read books on personal finance, self-growth & psychology. Being a freelance graphic designer, I love to create. Being a tutor, I love to teach.",
  github: "https://github.com/gkunal5802",
  resume:
    "https://drive.google.com/file/d/1oWF2S_30u62mlCUSQZ4Ascv_lW7HGLZc/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/gkunal05",
  twitter: "https://twitter.com/gkunal05",
  insta: "https://www.instagram.com/gkunal05/",
};

export const contactInfo = [
  {
    id: 1,
    type: "Mail",
    name: "xyz@gmail.com",
    link: "mailto:xyz@gmail.com",
    icon: MailIcon,
  },
  {
    id: 2,
    type: "Whatsapp",
    name: "+91 9897XXXXXXX",
    link: "https://google.com",
    icon: WhatsAppIcon,
    target: "_blank",
  },
  {
    id: 3,
    type: "Call Us",
    name: "+91 9897XXXXXXX",
    link: "tel:+919897XXXXX",
    icon: PhoneInTalk,
  },
];
export const ExploreInfo = [
  {
    id: 1,
    image: Consultation,
    title: "Free Expert Consultation",
    content:
      "HimVed offers all the consultation with our Ayurveda Experts Free of Cost",
  },
  {
    id: 2,
    image: DietPlan,
    title: "Free Diet Plan",
    content:
      "Our diet plans are unique to the needs and treatment for a disease",
  },
  {
    id: 3,
    image: Natural,
    title: "Natural and Safe",
    content: "Our treatments are absolutely Ayurvedic and safe",
  },
];
export const formFields = ["name", "email", "phone number", "message"];
export const faqs = [
  {
    id: 1,
    question: "WHAT IS THE METHOD OF OUR TREATMENT?",
    answer:
      "Our approach is absolutely natural, herbal, and ayurvedic. All the treatments are safe to be taken. A team of experts works on the formulations of the medicines",
  },
  {
    id: 2,
    question: "What are the form of medicines?",
    answer:
      "The ayurvedic medicines we advise are in the form of herbal powders, tablets, and ointments.",
  },
  {
    id: 3,
    question: "WHAT IS UNIQUE IN THE TREATMENT DONE BY HIMVED",
    answer:
      "Customized natural medication, customized diet charts and yoga/exercise tips make us different from others.",
  },
  {
    id: 4,
    question: "IS THERE ANY FREE CONSULTATION?",
    answer:
      "Yes, of course. We are always ready to give free consultation to an individual regarding any disease or disorder free of any cost.",
  },
  {
    id: 5,
    question: "HOW DO WE TRUST HIMVED FOR OUR TREATMENT?",
    answer:
      "Our patient management and support system is very unique and strong. We always give full attention to our service system",
  },
];
export const diseases = [
  {
    id: 0,
    title: "Premature Ejaculation Treatment",
    image: `${Ejaculation}`,
    subtitles: [
      "What is premature ejaculation",
      "The symptoms",
      "Causes of premature ejaculation",
      "Risk factors associated with premature ejaculation",
      "Conclusion",
    ],
    Description: [
      "Premature ejaculation refers to the rapid release of semen either before or immediately after sexual intercourse. While initially inconsequential, this condition can gradually induce stress and dissatisfaction for both partners.",
      "Some of the other symptoms are",
      "The exact cause is not known but some of the factors are given below",
      "Stress and erectile dysfunction often trigger premature ejaculation. Persistent issues with penile erection can have psychological ramifications, contributing to premature climax. Mental strain impedes relaxation, potentially causing early ejaculation. Additionally, certain medications disrupt hormonal balance and elevate specific brain chemicals, impeding a man's ability to control ejaculation during intercourse.",
      "Combining medication with counseling for mental wellbeing yields favorable outcomes for patients. If you reside in Delhi, Faridabad, or Gurgaon, rest assured as numerous specialists in the Delhi NCR region offer effective treatments for premature ejaculation.",
    ],
    Lists: [
      [],
      [
        "Low sexual pleasure as there is no control on delaying the ejaculation",
        "It affects the mental health with guilt and frustration",
        "Ejaculation occurs with less stimulation",
      ],
      [
        "Depression, stress, guilt",
        "Conscious about the body image",
        " Anxiety",
        " Personal issues between the couples",
        "Imbalance of the hormones Diseases such as urethritis, hyperthyroidism, obesity etc",
      ],
      [],
      [],
    ],
  },
  {
    id: 1,
    title: "Erectile Dysfunction Treatment",
    image: `${Erectile_Dysfunction}`,
    subtitles: [
      "What is erectile dysfunction",
      "Factors responsible for erectile dysfunction",
      "How to know if you have erection problem",
      "How erectile dysfunction is diagnosed",
      "Conclusion",
    ],
    Description: [
      "Erectile dysfunction, or impotence, occurs when men struggle to maintain sufficient penile rigidity for intercourse, commonly referred to as ED. Lifestyle and dietary factors contribute to the increasing incidence of this condition.",
      "Erectile dysfunction stems from abnormalities in blood vessel function. Consequently, prevalent causes encompass diabetes, advancing age (especially above 40), cardiovascular ailments, smoking, elevated cholesterol levels, and any conditions impacting penile blood vessels.",
      "During sexual activity with your partner, signs of erectile dysfunction may manifest as inadequate penile firmness, brief erections, or the absence of erection entirely. Such symptoms often coincide with diminished sexual desire and can contribute to premature ejaculation.",
      "",
      "Erectile dysfunction can strain marital relationships. Open communication with your partner and seeking assistance from healthcare professionals is crucial. Delaying diagnosis and treatment due to embarrassment or concern about others' perceptions can exacerbate the condition. In some cases, erectile dysfunction may indicate underlying health issues. Therefore, prompt consultation with a healthcare provider is imperative.",
    ],
    Lists: [
      [],
      [
        "Due to the defect of blood vessels there is insufficient blood flow to the penis and this may cause the damage of the tissues responsible for penis erection.",
        "Because of low levels of sexual hormones called testosterone, erectile dysfunction occurs.",
        "Chronic alcohol consumption, smoking and use of other drugs for a long time affects the blood vessels of the penis.",
        "Surgery or radiation therapy on the genital region might cause erectile dysfunction.",
        "Psychological problems such as stress, depression, relation with the partner etc affect erectile dysfunction.",
      ],
      [],
      [
        "Blood test to rule out any underlying disease or hormone level.",
        " Urine test is done to diagnose diabetes and other possible causes.",
        "Ultrasound is done to determine the blood flow in the penis",
      ],
      [],
    ],
  },
  {
    id: 2,
    title: "Male Infertility Treatment",
    image: `${Male_Infertility}`,
    subtitles: [
      "What is infertility",
      "What are the causes of male infertility",
      "When to see the doctor",
      "Symptoms of male infertility",
      "How to diagnose male infertility",
      "Treatment of male infertility",
      "Conclusion",
    ],
    Description: [
      "The situation when a couple is not able to conceive after regular unprotected sexual intercourse for a year or more is called infertility. Consult the doctor if you and your partner are having a tough time to conceive.",
      "The various causes of male infertility includes",
      "The common findings given below is the call to see the health care provider",
      "The key sign of male infertility is the inability to impregnate his partner. Additional symptoms comprise erectile dysfunction, premature ejaculation, and retrograde ejaculation, where semen flows back into the bladder.",
      "The healthcare provider conducts a thorough physical exam, blood tests, and semen analysis. Using the hormonal profile and semen test results, they determine the cause of infertility.",
      "The treatment approach includes treatment of associated disease, treatment of sexual dysfunction, stopping the toxic factors etc. Depending upon the cause of infertility and other factors,",
      "As infertility rates rise, it becomes increasingly prevalent, impacting both genders. Male infertility, in particular, is a widespread concern. Healthcare professionals assert that male infertility treatment in Delhi NCR boasts a commendable success rate. Infertility specialists offer comprehensive management strategies and unwavering support to help individuals navigate the challenges.",
    ],
    Lists: [
      [],
      [
        "Sperm Disorder",
        "Inflammation of veins",
        "Reverse Ejaculation",
        "Hormonal Imbalance",
      ],
      [
        "See if the amount of semen ejaculated is low or early",
        "Decrease in hair on the face and body",
        "Any swelling or pain in the testicles.",
      ],
      [],
      [],
      ["Surgical", "Non Surgical"],
      [],
    ],
  },
  {
    id: 3,
    title: "Penis Enlargement Treatment",
    image: `${Penis_Enlargement}`,
    subtitles: [
      "",
      "What should be the normal size of my penis",
      "What are the reasons for men to have penis enlargement",
      "What are the medical conditions that result in reduced size of penis",
      "What are the measures available in the market? What works and what might not work",
      "Surgical method for increasing the size and girth of penis",
    ],

    Description: [
      "Many claim to increase the penis size with a number of methods. Do they really work? The article makes an effort to throw light on how effective the methods are and the associated side effects.",
      "Concerns about penis size may arise even when it's within the normal range, leading to anxiety about satisfying a partner. A penis shorter than 3 inches erect is considered abnormal, termed as micropenis, while over 5 inches is typical. Variations exist, with some exceeding the norm and others falling short, contributing to individual perceptions of size adequacy.",
      "Penis enlargement motivations may stem from medical concerns like fertility or psychological factors affecting mental well-being. Genetic predispositions can result in small penises, leading to challenges in sexual activity and urine stream control.",
      "Certain marketed products promising penis enlargement can harm the organ. Vacuum pumps temporarily enlarge the penis by increasing blood flow but can cause damage and affect erection. Herbal lotions, though effective, may pose risks. Pills claiming size augmentation may not deliver results. Massaging with genuine medicated herbal oil seems safe and has shown positive outcomes in some men.",
      "Increasing the size of the penis through surgery can make a difference in size. It might have risk such as no sensation, uncomfortable sex etc. Surgery is also done to increase the girth by implanting silicone under the penis skin.",
      "Increasing the size of the penis through surgery can make a difference in size. It might have risk such as no sensation, uncomfortable sex etc. Surgery is also done to increase the girth by implanting silicone under the penis skin",
    ],
    Lists: [
      [],
      [],
      [],
      [
        "'Obesity', the leading health issue, causes buried penis due to the excess pelvic fat",
        "Prostate cancer surgery results in reduced penis size.",
        "The disease named Peyronie's disease causes abnormal bend and reduced penis size and painful erection.",
      ],
      [],
      [],
    ],
  },
  {
    id: 4,
    title: "Night Fall Treatment",
    image: `${Nightfall}`,
    subtitles: [
      "",
      "What can be the cause of night fall",
      "Symptoms of wet dreams",
      "Impact of nightfall on overall health",
      "Myths about nightfall",
      "Remedies for nightfall",
    ],
    Description: [
      "Night fall, also known as nocturnal emission or wet dreams, refers to the involuntary ejaculation of semen during sleep. While it occurs in both genders, it's more prevalent in men, particularly in middle-aged and adolescent males. While occasional ejaculation is normal, excessive occurrences warrant attention",
      "",
      "There is only one symptom associated with it. This includes ejaculation of semen while asleep. Men are usually embarrassed to discuss the issue with anyone.",
      "It becomes frustrating for men to get up early with wet pants. It results in weakness, loss of sexual desire etc. Nightfall impacts both the physical and mental health",
      "Night fall is not abnormal, it is a part of growing up and is normal in adolescents. It is believed that it happens to men only. Whereas men and women both have orgasms at night. It is believed that nocturnal emission has an adverse effect on male organs or on size of penis.",
      "",
    ],
    Lists: [
      [],
      [
        "Night fall is normal if the frequency is under control which may be two times a week.",
        "Mental illness such as depression, stress etc can cause night fall.",
        "Sedentary lifestyle leads to obesity and it accounts for nocturnal emission.",
        "Hormonal changes may cause night fall.",
        "Too much accumulation of the seminal fluid may result in night ejaculation.",
      ],
      [],
      [],
      [],
      [
        "Bathing before going to sleep- It helps you to relax physically and mentally and gives you a sound sleep",
        "Herbal massage before going to sleep promotes sleep and avoids night fall. It enhances blood circulation in the body and genital area thereby resolving other sexual dysfunctions.",
        "Take early dinner, at least 4-5 hours before hitting bed",
        "Avoid watching books and movies based on sexuality and also keep yourself away from any stimulation.",
        "Balanced diet- opt for food that is easily digested.",
        "Altering lifestyle",
        "Use of certain medicines- Holistic approach with specific herbs is effective in treatment of night fall.",
      ],
    ],
  },
  {
    id: 5,
    title: "Sex Specialist",
    image: `${Sex_Specialist}`,
    subtitles: [
      "",
      "Why the sexual issues are increasing",
      "When should you meet sex specialist",
      "Why to consult a sexologist",
      "The common issues that sexologist comes across",
      "How do sex specialists work",
    ],
    Description: [
      "A sexologist is a trained healthcare provider specializing in treating sexual issues in both men and women. Society's taboo surrounding sexual problems often deters individuals from seeking help, leading to complications for both patients and doctors. Couples or individuals typically seek assistance only when confronted with fertility concerns.",
      "Pollution, work stress, unhealthy lifestyle choices like poor diet, alcohol, and smoking, along with factors such as sleep disturbances and hormonal imbalances, detrimentally impact sexual health. These culprits contribute to sexual dysfunction and elevate infertility rates by compromising both the quality and quantity of sexual life.",
      "If experiencing sexual problems like erectile dysfunction, premature ejaculation, or loss of libido, it's wise to seek assistance from a sex specialist in Delhi. Through medication and tailored diet plans, they aid in overcoming these issues. As sexual dysfunctions are treatable, entrusting concerns to sexologists is advisable.",
      "Delhi boasts experienced, highly qualified sexologists adept in sexual dysfunctions and behaviors. Treatment extends beyond medication, fostering confidence and bolstering men's capability for a fulfilling life. With their profound understanding, sex specialists offer holistic approaches to address sexual issues and promote overall well-being.",
      "Some of the common sexual issues are low sex desire, premature ejaculation, pain during sexual intercourse, erectile dysfunction, inactive sex life etc.",
      "",
    ],
    Lists: [
      [],
      [],
      [],
      [],
      [],
      [
        "Sexologists study the sexual history of the couple or an individual and depending upon the need of the patient further approach of counselling and session is designed.",
        "Stress management is one of the key factors to improve the sexual life. Going for a walk, choosing a good diet can help to reduce stress level.",
        "The result of sex specialists in Delhi NCR is quite positive. Couples and individuals are satisfied and confident enough to know their sexual needs. The outcome is more positive if the clients are cooperative",
      ],
    ],
  },
];
