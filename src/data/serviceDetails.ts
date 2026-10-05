import inpatientImg from "@/assets/inpatient-rehab.webp";
import onlineImg from "@/assets/online-therapy.webp";
import pickupImg from "@/assets/pickup-drop.webp";

export interface ServiceItem {
  title: string;
  intro?: string;
  technology?: string;
  purpose?: string[];
  indications?: string[];
  benefits?: string[];
  focus?: string[];
  approach?: string[];
  image?: string;
}

export interface ServiceDetail {
  /** Leading "/" = root-level SEO URL (e.g. "/speech-therapy-perinthalmanna"); otherwise served at /services/:slug */
  slug: string;
  title: string;
  description: string;
  h1?: string;
  h2?: string;
  introBody?: string;
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string[];
  items: ServiceItem[];
}

export const serviceDetails: Record<string, ServiceDetail> = {
  physiotherapy: {
    slug: "/physiotherapy-centre-perinthalmanna",
    title: "Physiotherapy",
    description: "Advanced physiotherapy services using cutting-edge technology to relieve pain, restore movement, and rebuild strength.",
    h1: "Physiotherapy Centre Perinthalmanna",
    h2: "Advanced Physiotherapy & Technology-Assisted Rehabilitation at Lifeway",
    introBody: "<p>Lifeway Rehabilitation and Child Development Centre is a trusted Physiotherapy Centre in Malappuram, providing personalized care for pain relief, mobility, strength, and functional recovery. Our Physiotherapy Centre in Perinthalmanna offers rehabilitation for back and neck pain, joint problems, sports injuries, post-surgical recovery, stroke, cerebral palsy, and neurological conditions. Services include Pain Relief Physiotherapy, spinal decompression therapy, shockwave therapy, Class 4 laser therapy, sports injury rehabilitation, electrotherapy, and advanced gait training. We also provide technology-assisted rehabilitation, including robotic hand therapy and body-weight-supported training, to support progressive recovery.</p><p>Ready to move better and feel stronger? Book your physiotherapy appointment at Lifeway today and take the next step toward recovery.</p>",
    metaTitle: "Physiotherapy Centre Perinthalmanna | Lifeway",
    metaDescription: "Looking for a Physiotherapy Centre Perinthalmanna? Lifeway offers personalized physiotherapy for pain relief, sports injuries, stroke recovery and mobility.",
    keywords: [
      "Physiotherapy centre malappuram",
      "Physiotherapy Centre Perinthalmanna",
      "Pain Relief Physiotherapy Perinthalmanna",
      "spinal decompression therapy",
      "Physiotherapy Near Me",
      "sports injury rehabilitation",
      "shockwave therapy",
      "class 4 laser therapy",
      "stroke physiotherapy",
      "cerebral palsy",
    ],
    items: [
      {
        title: "High-Power Laser Therapy",
        intro: "An advanced, non-invasive treatment that uses focused light energy to reduce pain, decrease inflammation, and accelerate tissue healing. Highly effective for general rehabilitation and sports injuries.",
        technology: "LightForce® 25W XPi High-Power Laser System, delivering deep tissue penetration with precise, controlled therapeutic dosing for optimal results.",
        indications: [
          "Joint pain and inflammation",
          "Muscle strains and ligament injuries",
          "Sports injuries (sprains, strains, overuse injuries)",
          "Back and neck pain",
          "Tendon and soft tissue injuries",
          "Post-surgical recovery and healing",
          "Arthritis and chronic pain conditions",
        ],
        benefits: [
          "Rapid and effective pain relief",
          "Reduces inflammation and swelling",
          "Accelerates tissue repair and regeneration",
          "Supports faster return to sports and daily activities",
          "Enhances mobility and functional performance",
          "Safe, non-invasive, and comfortable treatment",
        ],
      },
      {
        title: "Radial Shockwave Therapy",
        intro: "Uses high-energy acoustic waves to stimulate natural healing, reduce pain, and improve mobility. Effective for chronic musculoskeletal conditions and sports-related injuries.",
        technology: "Chattanooga Intelect® RPW 2 Shockwave Therapy System, delivering precise, controlled, and clinically proven treatment.",
        indications: [
          "Plantar fasciitis and chronic heel pain",
          "Tennis elbow (lateral epicondylitis)",
          "Shoulder pain (including calcific tendinitis)",
          "Achilles tendinopathy",
          "Muscle trigger points and myofascial pain",
          "Sports injuries and overuse conditions",
        ],
        benefits: [
          "Stimulates natural tissue healing and regeneration",
          "Provides effective relief from chronic pain",
          "Enhances blood circulation and tissue repair",
          "Improves mobility and functional performance",
          "Supports faster recovery in sports injuries",
          "Non-invasive with minimal downtime",
        ],
      },
      {
        title: "Spinal Decompression Therapy",
        intro: "An advanced, non-invasive treatment designed to relieve pressure on the spine, reduce pain, and promote healing of spinal structures.",
        technology: "Chattanooga Triton® 6E Decompression Table, offering precise, computerized traction with targeted and comfortable spinal therapy.",
        indications: [
          "Disc bulge and disc herniation",
          "Sciatica and nerve root compression",
          "Chronic low back and neck pain",
          "Degenerative disc disease",
          "Facet joint dysfunction",
          "Postural and spinal alignment issues",
        ],
        benefits: [
          "Reduces pressure on spinal discs and nerves",
          "Promotes natural healing of disc-related conditions",
          "Provides effective pain relief",
          "Improves spinal mobility and flexibility",
          "Non-surgical and safe treatment option",
          "Comfortable, controlled, and personalized therapy",
        ],
      },
      {
        title: "Electrotherapy & Ultrasound Therapy",
        intro: "Advanced treatment modalities used to relieve pain, reduce inflammation, and promote tissue healing. Widely used in rehabilitation for acute and chronic conditions.",
        technology: "Chattanooga Intelect® Mobile 2 Combo System, combining advanced electrotherapy and therapeutic ultrasound.",
        indications: [
          "Muscle pain and spasms",
          "Joint pain and stiffness",
          "Sports injuries and soft tissue injuries",
          "Tendon and ligament injuries",
          "Post-surgical rehabilitation",
          "Back and neck pain",
          "Inflammation and swelling",
        ],
        benefits: [
          "Effective pain relief and muscle relaxation",
          "Reduces inflammation and swelling",
          "Promotes faster tissue healing",
          "Improves circulation and recovery",
          "Enhances muscle activation and function",
          "Safe, non-invasive, and widely used therapy",
        ],
      },
      {
        title: "Wireless Electrotherapy",
        intro: "Uses controlled electrical stimulation to relieve pain, activate muscles, and support rehabilitation. The wireless design allows greater comfort and freedom of movement.",
        technology: "Chattanooga Wireless Professional 4CH Full System, offering advanced multi-channel stimulation with precise, customizable treatment.",
        indications: [
          "Muscle weakness and muscle re-education",
          "Pain management (acute and chronic)",
          "Post-surgical rehabilitation",
          "Sports injuries and muscle strains",
          "Neuromuscular conditions",
          "Joint instability and reduced muscle activation",
        ],
        benefits: [
          "Effective pain relief and muscle stimulation",
          "Improves muscle strength and activation",
          "Enhances functional recovery",
          "Allows freedom of movement during treatment",
          "Customized therapy based on patient needs",
          "Comfortable, non-invasive, and efficient",
        ],
      },
      {
        title: "Body Weight Support (Unweighing) System",
        intro: "Assists patients in safe and effective movement training. By partially supporting body weight, it enables early mobilization, gait training, and functional exercises with reduced strain.",
        technology: "Biodex NxStep® Unweighing System, providing precise body weight support for controlled and progressive rehabilitation.",
        indications: [
          "Stroke and neurological rehabilitation",
          "Spinal cord injuries",
          "Post-surgical mobility training",
          "Balance and gait disorders",
          "Orthopaedic rehabilitation",
          "Weakness and reduced mobility",
        ],
        benefits: [
          "Enables early and safe walking training",
          "Reduces risk of falls during therapy",
          "Improves balance, coordination, and confidence",
          "Supports progressive weight-bearing and recovery",
          "Enhances functional mobility and independence",
          "Suitable for both neurological and orthopaedic patients",
        ],
      },
      {
        title: "Tilt Table Therapy",
        intro: "Helps patients gradually adapt to an upright position. Especially beneficial for individuals with neurological conditions, reduced mobility, or those recovering from prolonged bed rest.",
        technology: "Advanced Tilt Table System (multi-position adjustable), allowing safe and controlled verticalization and early mobilization.",
        indications: [
          "Stroke and neurological rehabilitation",
          "Spinal cord injuries",
          "Patients with prolonged immobility or ICU stay",
          "Balance and postural control issues",
          "Orthostatic hypotension (low blood pressure on standing)",
        ],
        benefits: [
          "Helps patients safely transition to standing position",
          "Improves circulation and cardiovascular stability",
          "Enhances postural control and tolerance to upright posture",
          "Supports early rehabilitation and mobility training",
          "Builds confidence in standing and functional activities",
        ],
      },
      {
        title: "Gait Training with Body Weight Support Treadmill",
        intro: "Advanced gait training using a body weight support treadmill system that enables safe and controlled walking practice.",
        technology: "Dyaco LW850 Rehabilitation Treadmill with Body Weight Support System, designed for precise, assisted gait training.",
        indications: [
          "Stroke and neurological rehabilitation",
          "Spinal cord injuries",
          "Post-surgical mobility training",
          "Gait and balance disorders",
          "Orthopaedic rehabilitation",
          "Weakness and reduced walking ability",
        ],
        benefits: [
          "Enables early and safe walking training",
          "Improves gait pattern, balance, and coordination",
          "Reduces risk of falls during therapy",
          "Supports progressive weight-bearing",
          "Enhances confidence and functional independence",
          "Suitable for both neurological and orthopaedic patients",
        ],
      },
      {
        title: "CycloMotus™ Active–Passive Rehabilitation System",
        intro: "An intelligent rehabilitation system designed to improve circulation, strength, and coordination through both passive and active movement training.",
        technology: "Fourier Intelligence® CycloMotus™ Active–Passive Trainer, offering smart, adaptive training for upper and lower limb rehabilitation.",
        indications: [
          "Stroke and neurological rehabilitation",
          "Spinal cord injuries",
          "Post-surgical recovery",
          "Muscle weakness and deconditioning",
          "Geriatric rehabilitation",
          "Patients with limited mobility or bedridden conditions",
        ],
        benefits: [
          "Enhances blood circulation and reduces stiffness",
          "Improves muscle strength and coordination",
          "Enables early mobilization in weak or immobile patients",
          "Supports both passive (assisted) and active exercise modes",
          "Promotes functional recovery and endurance",
          "Intelligent system adapts to patient performance",
        ],
      },
      {
        title: "AR-Based Strength & Functional Training (AROLEAP X)",
        intro: "An advanced, smart resistance training system that combines Augmented Reality (AR) with strength and functional rehabilitation, providing interactive guided exercises with real-time feedback.",
        technology: "AROLEAP X Smart Resistance & AR Training System, integrating motion tracking, adaptive resistance, and interactive visual feedback.",
        indications: [
          "Neurological rehabilitation (stroke, brain injury)",
          "Orthopaedic and post-surgical recovery",
          "Muscle weakness and deconditioning",
          "Sports injury rehabilitation and performance training",
          "Geriatric strengthening and balance training",
          "Functional and movement re-education",
        ],
        benefits: [
          "Improves muscle strength and endurance",
          "Enhances coordination, balance, and control",
          "Provides real-time feedback for correct movement",
          "Engaging, game-based training improves motivation",
          "Adaptive resistance tailored to patient ability",
          "Bridges the gap between therapy and functional fitness",
        ],
      },
    ],
  },
  "occupational-therapy": {
    slug: "/occupational-therapy-in-perinthalmanna",
    title: "Occupational Therapy",
    description: "Restoring abilities, strengthening confidence, and supporting growth through specialized occupational therapy programs.",
    h1: "Occupational Therapy in Perinthalmanna",
    introBody: "<p>Lifeway Rehabilitation and Child Development Centre offers personalized occupational therapy to help children and adults develop better movement, coordination, sensory processing, hand function, and everyday independence. Our therapists work with individuals experiencing developmental delays, autism, sensory difficulties, neurological conditions, stroke-related challenges, hand weakness, and other functional limitations. Therapy is tailored to each person's abilities and goals, with practical activities that support participation at home, school, work, and in the community.</p><p>Our rehabilitation facilities include advanced robotic hand therapy with the RehabRelive Active Glove, interactive ROPods training, ADL practice, Bobath-based rehabilitation, hand function exercises, shoulder mobility training, and dedicated sensory therapy spaces. These approaches help make rehabilitation more engaging and functional while supporting progress in fine motor skills, coordination, balance, cognitive abilities, and daily activities. Serving families across Perinthalmanna and the wider Malappuram region, Lifeway provides a comprehensive environment for meaningful, goal-focused rehabilitation.</p>",
    metaTitle: "Occupational Therapy In Perinthalmanna | Lifeway",
    metaDescription: "Get personalized Occupational Therapy In Perinthalmanna at Lifeway. Support daily skills, motor development, sensory needs, and independence with expert care.",
    keywords: [
      "Occupational Therapy malappuram",
      "Occupational Therapy Clinic Perinthalmanna",
      "Best Occupational Therapist in Perinthalmanna",
      "Pediatric Occupational Therapy",
      "sensory integration therapy",
      "neuro hand rehabilitation",
      "hand robotics",
      "stroke occupational therapy",
      "autism",
    ],
    items: [
      {
        title: "Robotic Hand Rehabilitation (RehabRelive Active Glove)",
        intro: "A technology-assisted therapy designed to improve hand function, strength, and fine motor skills through assisted and active movement training.",
        technology: "RehabRelive Active Glove System, an intelligent rehabilitation device for precise, repetitive, and task-oriented hand training.",
        indications: [
          "Stroke and neurological rehabilitation",
          "Hand weakness and reduced coordination",
          "Spinal cord injuries",
          "Post-surgical hand recovery",
          "Nerve injuries affecting hand function",
          "Impaired fine motor skills",
        ],
        benefits: [
          "Improves hand movement and coordination",
          "Enhances fine motor skills and functional use of hand",
          "Supports neuroplasticity and motor recovery",
          "Provides repetitive and controlled movement training",
          "Enables early rehabilitation even in weak patients",
          "Promotes faster and more effective recovery",
        ],
      },
      {
        title: "Interactive Reaction & Cognitive Training (ROPods)",
        intro: "An interactive training system designed to improve reaction time, coordination, balance, and cognitive function through engaging, task-based exercises.",
        technology: "ROPods Interactive Training System, providing light-based, sensor-driven exercises for functional and cognitive rehabilitation.",
        indications: [
          "Neurological rehabilitation (stroke, brain injury)",
          "Balance and coordination deficits",
          "Sports performance and agility training",
          "Cognitive and reaction time training",
          "Geriatric rehabilitation and fall prevention",
          "Paediatric developmental training",
        ],
        benefits: [
          "Improves reaction time and hand-eye coordination",
          "Enhances balance, agility, and motor control",
          "Supports cognitive function and focus",
          "Increases patient engagement and motivation",
          "Suitable for all age groups and rehab levels",
          "Makes therapy interactive and goal-oriented",
        ],
      },
      {
        title: "ADL Training Room (Activities of Daily Living)",
        intro: "A specialized setup designed to help individuals relearn and practice everyday activities in a safe, structured environment.",
        purpose: [
          "Personal care activities (dressing, grooming, hygiene)",
          "Feeding and kitchen-related tasks",
          "Bed mobility and transfers",
          "Functional mobility and daily routines",
          "Task-oriented rehabilitation for real-life activities",
        ],
        indications: [
          "Stroke and neurological rehabilitation",
          "Post-surgical recovery",
          "Orthopaedic and mobility limitations",
          "Geriatric rehabilitation",
          "Developmental and functional delays",
        ],
        benefits: [
          "Promotes independence in daily life",
          "Improves functional skills and confidence",
          "Bridges the gap between therapy and real-life activities",
          "Enhances safety and awareness during daily tasks",
          "Supports faster return to home and community living",
        ],
      },
      {
        title: "Bobath Therapy Table",
        intro: "Specially designed for neurorehabilitation, providing a safe and stable surface for assessment, positioning, and hands-on therapeutic techniques.",
        purpose: [
          "Neurodevelopmental (Bobath) therapy techniques",
          "Guided movement and postural control training",
          "Bed mobility and transfer training",
          "Balance and coordination exercises",
          "Functional task-oriented rehabilitation",
        ],
        indications: [
          "Stroke and neurological disorders",
          "Cerebral palsy and developmental conditions",
          "Brain and spinal cord injuries",
          "Muscle tone abnormalities (spasticity/flaccidity)",
          "Post-surgical neuro rehabilitation",
        ],
        benefits: [
          "Improves motor control and movement patterns",
          "Enhances balance, posture, and coordination",
          "Supports safe and effective therapist handling",
          "Promotes functional independence",
          "Essential for early-stage and advanced neuro rehab",
        ],
      },
      {
        title: "Mobility Training (Motorized Wheelchair Support)",
        intro: "Helps individuals with mobility limitations achieve safe and independent movement, focused on wheelchair handling skills, navigation, and confidence.",
        technology: "Ostrich Motorized Wheelchair, designed for safe, smooth, and controlled mobility training.",
        purpose: [
          "Indoor and outdoor wheelchair mobility training",
          "Safe navigation and obstacle management",
          "Transfers and positioning techniques",
          "Functional independence in daily activities",
          "Community mobility and confidence building",
        ],
        indications: [
          "Spinal cord injuries",
          "Neurological conditions affecting mobility",
          "Severe weakness or mobility limitations",
          "Post-surgical or long-term rehabilitation",
          "Geriatric patients requiring assisted mobility",
        ],
        benefits: [
          "Promotes independence and confidence",
          "Improves safe mobility and navigation skills",
          "Enhances participation in daily and social activities",
          "Reduces dependence on caregivers",
          "Supports functional and community reintegration",
        ],
      },
      {
        title: "Hand Function Rehabilitation Table",
        intro: "A dedicated setup designed to improve hand strength, coordination, and fine motor skills through structured, task-oriented activities.",
        purpose: [
          "Fine motor skill training",
          "Hand-eye coordination exercises",
          "Grip strength and dexterity training",
          "Task-oriented functional activities",
          "Bilateral hand coordination",
        ],
        indications: [
          "Stroke and neurological rehabilitation",
          "Hand weakness and reduced coordination",
          "Nerve injuries affecting hand function",
          "Post-surgical hand recovery",
          "Developmental and fine motor delays",
          "Reduced hand function in orthopaedic conditions",
        ],
        benefits: [
          "Improves hand strength and control",
          "Enhances fine motor skills and precision",
          "Promotes functional use of hand in daily activities",
          "Supports recovery of coordination and dexterity",
          "Builds confidence in performing tasks independently",
        ],
      },
      {
        title: "Shoulder Wheel & Pulley Therapy",
        intro: "A simple yet effective rehabilitation method used to improve shoulder mobility, flexibility, and strength through controlled, repetitive movements.",
        purpose: [
          "Shoulder range of motion exercises",
          "Assisted and active movement training",
          "Stretching and flexibility improvement",
          "Joint mobility and functional movement",
        ],
        indications: [
          "Frozen shoulder (adhesive capsulitis)",
          "Shoulder stiffness and restricted movement",
          "Post-surgical shoulder rehabilitation",
          "Rotator cuff injuries",
          "Painful shoulder conditions",
          "Neurological and orthopaedic conditions affecting the shoulder",
        ],
        benefits: [
          "Improves shoulder mobility and flexibility",
          "Reduces stiffness and pain",
          "Supports gradual strengthening",
          "Enables safe, controlled movement",
          "Promotes functional use of the upper limb",
        ],
      },
      {
        title: "Sensory Park",
        intro: "A specially designed therapeutic space that provides structured sensory experiences to support development, regulation, and functional skills through play-based activities.",
        purpose: [
          "Sensory processing and integration training",
          "Balance and vestibular stimulation",
          "Proprioceptive input and body awareness",
          "Coordination and motor planning activities",
          "Play-based functional skill development",
        ],
        indications: [
          "Autism Spectrum Disorder (ASD)",
          "Attention and behavioural challenges",
          "Sensory processing difficulties",
          "Developmental delays",
          "Learning and coordination difficulties",
          "Neurological conditions",
        ],
        benefits: [
          "Improves sensory regulation and responsiveness",
          "Enhances balance, coordination, and motor skills",
          "Supports attention, behaviour, and participation",
          "Promotes functional independence through play",
          "Provides a safe, engaging, and therapeutic environment",
        ],
      },
      {
        title: "Sensory Modulation Room (Dark Room Therapy)",
        intro: "A controlled therapeutic environment designed to provide calming and focused sensory experiences, helping individuals regulate sensory input and improve attention.",
        purpose: [
          "Visual and sensory stimulation in a controlled setting",
          "Sensory regulation and calming techniques",
          "Attention and focus enhancement",
          "Behavioural and emotional regulation",
          "Individualized sensory integration activities",
        ],
        indications: [
          "Autism Spectrum Disorder (ASD)",
          "Sensory processing difficulties",
          "Attention and behavioural challenges",
          "Anxiety and emotional regulation issues",
          "Developmental delays",
          "Neurological conditions",
        ],
        benefits: [
          "Promotes calmness and sensory regulation",
          "Improves attention and concentration",
          "Helps manage behavioural challenges",
          "Provides a low-stimulation, safe environment",
          "Supports individualized therapy needs",
        ],
      },
    ],
  },
  "speech-therapy": {
    slug: "/speech-therapy-perinthalmanna",
    title: "Speech Therapy",
    description: "Comprehensive speech, language, and swallowing therapy services using evidence-based techniques and advanced equipment.",
    h1: "Swallow Therapy and Advanced Speech Rehabilitation",
    introBody: "<p>Lifeway Rehabilitation and Child Development Centre provides personalized Speech Therapy in Perinthalmanna for children and adults who need support with speech, language, communication, voice, or swallowing. Our therapy plans are tailored to each person’s needs, whether it involves speech delay, articulation difficulties, autism-related communication challenges, language disorders, fluency problems, or speech difficulties following neurological conditions. As a Speech Therapy Centre in Malappuram, Lifeway combines evidence-based techniques, interactive activities, and individualized therapy to help clients communicate more clearly and confidently in everyday life.</p><p>Our experienced team also provides support for adults with conditions such as stroke-related speech difficulties, dysarthria, and cognitive-communication problems. If you are looking for a speech therapist near you in Perinthalmanna, Lifeway offers structured assessments and goal-focused therapy in a supportive environment. We also provide specialized swallow therapy, including VitalStim® Plus NMES where clinically appropriate, to support individuals experiencing dysphagia and swallowing difficulties.</p>",
    metaTitle: "Speech Therapy Perinthalmanna | Lifeway Rehabilitation Centre",
    metaDescription: "Get professional Speech Therapy in Perinthalmanna at Lifeway Rehabilitation Centre. Support speech, language, communication and swallowing needs with personalized therapy.",
    keywords: [
      "Speech Therapy Perinthalmanna",
      "Speech Therapist malappuram",
      "Speech Therapy Centre malappuram",
      "Best Speech Therapist in Perinthalmanna",
      "Speech Therapy Near Me",
      "best swallow therapy",
      "vital stim therapy",
      "adult speech therapy",
      "language",
    ],
    items: [
      {
        title: "Speech & Language Therapy",
        intro: "Supports children and adults in improving communication, speech clarity, and swallowing function through evidence-based techniques and personalized care.",
        focus: [
          "Speech clarity and articulation therapy",
          "Language development and communication skills",
          "Fluency and voice therapy",
          "Cognitive-communication training",
          "Swallowing therapy (dysphagia management)",
        ],
        approach: [
          "Interactive online speech therapy programs",
          "Advanced tools for dysarthria and motor speech disorders",
          "Structured, individualized therapy plans",
          "Multidisciplinary collaboration for holistic care",
        ],
        indications: [
          "Speech delay and language disorders in children",
          "Autism Spectrum Disorder (ASD)",
          "ADHD and communication challenges",
          "Dysarthria and motor speech disorders",
          "Stroke and neurological conditions",
          "Swallowing difficulties (dysphagia)",
        ],
        benefits: [
          "Improves speech clarity and communication skills",
          "Enhances language development and social interaction",
          "Supports recovery in neurological speech disorders",
          "Improves swallowing safety and efficiency",
          "Engaging, technology-assisted therapy for better outcomes",
        ],
      },
      {
        title: "Swallow Therapy (VitalStim® Plus NMES)",
        intro: "An advanced, non-invasive treatment designed to improve swallowing function in individuals with dysphagia using targeted neuromuscular electrical stimulation.",
        technology: "VitalStim® Plus NMES System, providing precise electrical stimulation to enhance swallowing muscle function and coordination.",
        indications: [
          "Dysphagia (swallowing difficulties)",
          "Stroke-related swallowing disorders",
          "Neurological conditions affecting swallowing",
          "Post-surgical swallowing impairment",
          "Geriatric swallowing difficulties",
        ],
        benefits: [
          "Improves swallowing safety and efficiency",
          "Strengthens muscles involved in swallowing",
          "Enhances coordination of swallowing function",
          "Reduces risk of aspiration and complications",
          "Non-invasive and clinically proven therapy",
        ],
      },
    ],
  },
  "special-education": {
    slug: "/special-education-classroom",
    title: "Special Education",
    description: "Tailored special education programs to support children with diverse learning needs.",
    h1: "Supporting Every Child With the Right Learning Environment",
    introBody: "<p>At Lifeway Rehabilitation and Child Development Centre, we believe every child has the ability to learn, grow, communicate, and become more independent when provided with the right support. Our Special Education Classroom in Perinthalmanna provides a structured, supportive, and child-friendly learning environment for children who need additional educational and developmental assistance.</p><p>Our approach focuses on the individual needs, strengths, abilities, and learning pace of every child. Instead of expecting every child to learn in the same way, we adapt learning activities and educational strategies to make learning more meaningful and comfortable.</p><p>Located in Perinthalmanna, Malappuram, Lifeway brings education, therapy, developmental support, and family guidance together under one roof.</p>",
    metaTitle: "Special Education Classroom in Perinthalmanna | Lifeway",
    metaDescription: "Special Education Classroom in Perinthalmanna offering individualized learning support, group therapy, school readiness, and assistance for children with learning difficulties.",
    keywords: [
      "Special Education Classroom",
      "individual special education",
      "group therapy",
      "school readiness group",
      "special classroom",
      "learning difficulty",
    ],
    items: [
      {
        title: "Special Education Classroom",
        intro: "A structured learning environment designed to support children with diverse learning needs through individualized education plans and tailored teaching strategies.",
        focus: [
          "Individualized learning programs (IEP-based)",
          "Academic skill development (reading, writing, numeracy)",
          "Attention and classroom behaviour management",
          "Cognitive and learning skill enhancement",
          "School readiness and functional learning",
        ],
        indications: [
          "Learning disabilities",
          "Attention difficulties (ADHD)",
          "Developmental delays",
          "Autism Spectrum Disorder (ASD)",
          "Academic challenges and slow learning",
        ],
        benefits: [
          "Improves academic performance and understanding",
          "Enhances attention and classroom behaviour",
          "Builds confidence and independence in learning",
          "Supports school readiness and integration",
          "Provides a structured and supportive learning environment",
        ],
      },
      {
        title: "Individual Special Education Sessions (One-to-One)",
        intro: "Personalized support tailored to each child's unique learning needs through individualized teaching strategies and focused attention.",
        focus: [
          "Individualized Education Plan (IEP)-based teaching",
          "Reading, writing, and numeracy skills",
          "Attention and concentration training",
          "Behavioural and learning support",
          "Concept building and cognitive development",
        ],
        indications: [
          "Learning disabilities",
          "Attention difficulties (ADHD)",
          "Autism Spectrum Disorder (ASD)",
          "Developmental delays",
          "Academic difficulties and slow learning",
        ],
        benefits: [
          "Personalized attention and targeted learning",
          "Improves academic understanding and performance",
          "Enhances focus and learning confidence",
          "Allows learning at an individual pace",
          "Supports better school integration and outcomes",
        ],
      },
    ],
  },
  "clinical-psychology": {
    slug: "/clinical-psychology-centre-malappuram",
    title: "Clinical Psychology",
    description: "Comprehensive psychological care for children and adults, including behavioural support, counselling, and neuropsychological rehabilitation.",
    h1: "Clinical Psychology Centre Malappuram for Personalised Psychological Support",
    introBody: "<p>Lifeway Rehabilitation and Child Development Centre is a Clinical Psychology Centre Malappuram offering personalised psychological assessment, consultation, and therapeutic support for children, adolescents, adults, and families. Our approach focuses on understanding each person’s emotional, behavioural, cognitive, and developmental needs before planning suitable interventions.</p><p>At our Psychology Clinic Perinthalmanna, a qualified clinical psychologist provides professional guidance for concerns such as anxiety, stress, emotional difficulties, behavioural concerns, attention and concentration problems, learning difficulties, and developmental challenges. Through Clinical Psychology Perinthalmanna services, individuals and families receive confidential, supportive, and practical guidance based on their specific needs.</p>",
    metaTitle: "Clinical Psychology Centre Malappuram | Lifeway",
    metaDescription: "Looking for a Clinical Psychology Centre in Malappuram? Lifeway offers professional clinical psychology consultation and behavioural therapy with personalized support.",
    keywords: [
      "Clinical Psychology Perinthalmanna",
      "Clinical Psychology Centre malappuram",
      "Psychology Clinic Perinthalmanna",
      "Clinical Psychologist Consultation",
      "Psychology Clinic",
      "behavioural therapy",
    ],
    items: [
      {
        title: "Special Education Classroom",
        intro: "A structured learning environment designed to support children with diverse learning needs through individualized education plans and tailored teaching strategies.",
        focus: [
          "Individualized learning programs (IEP-based)",
          "Academic skill development (reading, writing, numeracy)",
          "Attention and classroom behaviour management",
          "Cognitive and learning skill enhancement",
          "School readiness and functional learning",
        ],
        indications: [
          "Learning disabilities",
          "Attention difficulties (ADHD)",
          "Developmental delays",
          "Autism Spectrum Disorder (ASD)",
          "Academic challenges and slow learning",
        ],
        benefits: [
          "Improves academic performance and understanding",
          "Enhances attention and classroom behaviour",
          "Builds confidence and independence in learning",
          "Supports school readiness and integration",
          "Provides a structured and supportive learning environment",
        ],
      },
      {
        title: "Individual Special Education Sessions (One-to-One)",
        intro: "Personalized support tailored to each child's unique learning needs through individualized teaching strategies and focused attention.",
        focus: [
          "Individualized Education Plan (IEP)-based teaching",
          "Reading, writing, and numeracy skills",
          "Attention and concentration training",
          "Behavioural and learning support",
          "Concept building and cognitive development",
        ],
        indications: [
          "Learning disabilities",
          "Attention difficulties (ADHD)",
          "Autism Spectrum Disorder (ASD)",
          "Developmental delays",
          "Academic difficulties and slow learning",
        ],
        benefits: [
          "Personalized attention and targeted learning",
          "Improves academic understanding and performance",
          "Enhances focus and learning confidence",
          "Allows learning at an individual pace",
          "Supports better school integration and outcomes",
        ],
      },
    ],
  },
  "convenient-care": {
    slug: "convenient-care",
    title: "Convenient Care Options",
    description: "Flexible care designed to fit your lifestyle—wherever and however you need it.",
    items: [
      {
        title: "In-Patient Rehabilitation Facility",
        intro: "Lifeway In-Patient Rehabilitation Care — comprehensive care, continuous support. Our facility provides structured, intensive care for individuals requiring close monitoring and dedicated therapy in a supportive, healing environment.",
        benefits: [
          "24/7 monitored rehabilitation care",
          "Intensive, goal-oriented therapy programs",
          "Multidisciplinary care (Physio, OT, Speech, Psychology)",
          "Post-surgical and neurological recovery support",
          "Comfortable, fully equipped rooms for safe and supportive recovery",
        ],
      },
      {
        title: "Pickup & Drop Service",
        intro: "Safe, reliable transportation for your care. We provide convenient pickup and drop services to ensure easy access to your therapy sessions.",
        benefits: [
          "Safe and assisted transportation",
          "Door-to-door pickup and drop",
          "Suitable for all age groups",
          "Reliable and timely service",
        ],
      },
      {
        title: "Online Therapy Services",
        intro: "Expert care, wherever you are. Access professional rehabilitation and therapy services from the comfort of your home, with personalized online sessions for individuals of all ages.",
        benefits: [
          "Live one-on-one therapy sessions",
          "Flexible scheduling",
          "Multidisciplinary care",
          "Guidance, follow-ups, and home programs",
        ],
      },
    ],
  },
  "in-patient-rehabilitation": {
    slug: "in-patient-rehabilitation",
    title: "In-Patient Rehabilitation Facility",
    description: "Comprehensive care, continuous support — structured, intensive rehabilitation in a healing environment.",
    items: [
      {
        title: "In-Patient Rehabilitation Facility",
        intro: "Lifeway In-Patient Rehabilitation Care provides structured, intensive care for individuals requiring close monitoring and dedicated therapy in a supportive, healing environment.",
        image: inpatientImg,
        benefits: [
          "24/7 monitored rehabilitation care",
          "Intensive, goal-oriented therapy programs",
          "Multidisciplinary care (Physio, OT, Speech, Psychology)",
          "Post-surgical and neurological recovery support",
          "Comfortable, fully equipped rooms for safe and supportive recovery",
        ],
      },
    ],
  },
  "pickup-drop": {
    slug: "pickup-drop",
    title: "Pickup & Drop Service",
    description: "Safe, reliable transportation for your therapy and care.",
    items: [
      {
        title: "Pickup & Drop Service",
        intro: "We provide convenient pickup and drop services to ensure easy access to your therapy sessions for individuals of all ages.",
        image: pickupImg,
        benefits: [
          "Safe and assisted transportation",
          "Door-to-door pickup and drop",
          "Suitable for all age groups",
          "Reliable and timely service",
        ],
      },
    ],
  },
  "online-therapy": {
    slug: "online-therapy",
    title: "Online Therapy Services",
    description: "Expert rehabilitation and therapy services, accessible from the comfort of your home.",
    items: [
      {
        title: "Online Therapy Services",
        intro: "Access professional rehabilitation and therapy services from the comfort of your home, with personalized online sessions for individuals of all ages.",
        image: onlineImg,
        benefits: [
          "Live one-on-one therapy sessions",
          "Flexible scheduling",
          "Multidisciplinary care",
          "Guidance, follow-ups, and home programs",
        ],
      },
    ],
  },
};

/** Canonical URL path for a service (root-level SEO slug or /services/:slug) */
export const getServicePath = (service: ServiceDetail): string =>
  service.slug.startsWith("/") ? service.slug : `/services/${service.slug}`;

/** Canonical path by data key, e.g. getServicePathByKey("physiotherapy") */
export const getServicePathByKey = (key: string): string => {
  const service = serviceDetails[key];
  return service ? getServicePath(service) : "/services";
};

/** Find a service by data key, slug (with or without leading "/") or full path */
export const findService = (value: string | undefined): ServiceDetail | undefined => {
  if (!value) return undefined;
  const clean = value.replace(/\/+$/, "").replace(/^\/services\//, "").replace(/^\//, "");
  if (serviceDetails[clean]) return serviceDetails[clean];
  return Object.values(serviceDetails).find((s) => s.slug.replace(/^\//, "") === clean);
};

/** Services that live at root-level SEO URLs */
export const rootLevelServicePaths: string[] = Object.values(serviceDetails)
  .filter((s) => s.slug.startsWith("/"))
  .map((s) => s.slug);
