export const specialties = [
  { id: 1, name: 'Cardiology', desc: 'Comprehensive heart care with advanced diagnostics and interventional procedures.', icon: 'heart', image: 'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=800&h=600&fit=crop' },
  { id: 2, name: 'Neurology', desc: 'Expert neurological care for brain, spine, and nervous system conditions.', icon: 'brain', image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&h=600&fit=crop' },
  { id: 3, name: 'Orthopedics', desc: 'Advanced musculoskeletal care and joint replacement solutions.', icon: 'bone', image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=800&h=600&fit=crop' },
  { id: 4, name: 'Oncology', desc: 'Comprehensive cancer care with personalized treatment protocols.', icon: 'oncology', image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&h=600&fit=crop' },
  { id: 5, name: "Pediatrics", desc: 'Specialized medical care for infants, children, and adolescents.', icon: 'child', image: 'https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=800&h=600&fit=crop' },
  { id: 6, name: "Women's Health", desc: 'Complete women\'s healthcare from wellness to advanced gynecological care.', icon: 'women', image: 'https://images.unsplash.com/photo-1512678080530-7760d81faba6?w=800&h=600&fit=crop' },
  { id: 7, name: 'Gastroenterology', desc: 'Expert digestive health care and advanced endoscopic procedures.', icon: 'stomach', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop' },
  { id: 8, name: 'Dermatology', desc: 'Advanced skin care and cosmetic dermatology treatments.', icon: 'skin', image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&h=600&fit=crop' },
  { id: 9, name: 'Emergency Medicine', desc: 'Round-the-clock emergency care with rapid response teams.', icon: 'emergency', image: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=800&h=600&fit=crop' },
];

export const doctors = [
  {
    id: 1, name: 'Dr. Alex Morgan', specialty: 'Cardiology', experience: '18 years',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=750&fit=crop&crop=face',
    qualifications: 'MD, FACC — Harvard Medical School',
    expertise: ['Interventional Cardiology', 'Heart Failure Management', 'Cardiac Imaging', 'Preventive Cardiology'],
    availability: ['Mon', 'Tue', 'Wed', 'Fri'],
    desc: 'Leading interventional cardiologist with expertise in complex coronary interventions.'
  },
  {
    id: 2, name: 'Dr. Sophia Reed', specialty: 'Neurology', experience: '15 years',
    image: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=600&h=750&fit=crop&crop=face',
    qualifications: 'MD, PhD — Johns Hopkins University',
    expertise: ['Stroke Treatment', 'Neurodegenerative Diseases', 'Epilepsy', 'Neuromodulation'],
    availability: ['Mon', 'Wed', 'Thu'],
    desc: 'Distinguished neurologist specializing in stroke and neurodegenerative disorders.'
  },
  {
    id: 3, name: 'Dr. Daniel Carter', specialty: 'Orthopedics', experience: '20 years',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&h=750&fit=crop&crop=face',
    qualifications: 'MD, FAAOS — Mayo Clinic',
    expertise: ['Joint Replacement', 'Sports Medicine', 'Spine Surgery', 'Minimally Invasive Surgery'],
    availability: ['Tue', 'Thu', 'Fri'],
    desc: 'Renowned orthopedic surgeon with extensive experience in joint reconstruction.'
  },
  {
    id: 4, name: 'Dr. Emma Wilson', specialty: 'Oncology', experience: '14 years',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=750&fit=crop&crop=face',
    qualifications: 'MD, MSc — Stanford University',
    expertise: ['Precision Oncology', 'Immunotherapy', 'Breast Cancer', 'Clinical Trials'],
    availability: ['Mon', 'Tue', 'Thu'],
    desc: 'Compassionate oncologist dedicated to personalized cancer treatment strategies.'
  },
  {
    id: 5, name: 'Dr. James Park', specialty: 'Pediatrics', experience: '12 years',
    image: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=600&h=750&fit=crop&crop=face',
    qualifications: 'MD, FAAP — Columbia University',
    expertise: ['Neonatal Care', 'Developmental Pediatrics', 'Child Wellness', 'Pediatric Cardiology'],
    availability: ['Mon', 'Wed', 'Fri'],
    desc: 'Warm and experienced pediatrician committed to children\'s health and development.'
  },
  {
    id: 6, name: 'Dr. Olivia Chen', specialty: "Women's Health", experience: '16 years',
    image: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=600&h=750&fit=crop&crop=face',
    qualifications: 'MD, FACOG — Yale School of Medicine',
    expertise: ['Maternal-Fetal Medicine', 'Minimally Invasive Surgery', 'Reproductive Health', 'High-Risk Pregnancy'],
    availability: ['Tue', 'Wed', 'Thu'],
    desc: 'Expert gynecologist and maternal-fetal medicine specialist.'
  },
  {
    id: 7, name: 'Dr. Marcus Hayes', specialty: 'Gastroenterology', experience: '13 years',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=600&h=750&fit=crop&crop=face',
    qualifications: 'MD, AGAF — UCSF Medical Center',
    expertise: ['Advanced Endoscopy', 'IBD Management', 'Liver Disease', 'Motility Disorders'],
    availability: ['Mon', 'Thu', 'Fri'],
    desc: 'Skilled gastroenterologist with expertise in advanced endoscopic techniques.'
  },
  {
    id: 8, name: 'Dr. Isabella Torres', specialty: 'Dermatology', experience: '11 years',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&h=750&fit=crop&crop=face',
    qualifications: 'MD — NYU Langone Health',
    expertise: ['Cosmetic Dermatology', 'Skin Cancer Screening', 'Dermal Fillers', 'Laser Treatments'],
    availability: ['Wed', 'Thu', 'Fri'],
    desc: 'Board-certified dermatologist specializing in medical and cosmetic dermatology.'
  },
];

export const testimonials = [
  {
    id: 1, name: 'Margaret Chen', treatment: 'Cardiac Surgery', location: 'New York, NY',
    review: 'The care I received at VITALIS was nothing short of extraordinary. From my initial consultation through recovery, every member of the team demonstrated genuine expertise and compassion. I felt truly cared for.',
    rating: 5
  },
  {
    id: 2, name: 'Robert Williams', treatment: 'Orthopedic Treatment', location: 'Boston, MA',
    review: 'After years of knee pain, the orthopedic team at VITALIS gave me my life back. The surgical precision and post-operative care were world-class. I was walking again within weeks.',
    rating: 5
  },
  {
    id: 3, name: 'Sarah Mitchell', treatment: 'Oncology Care', location: 'Chicago, IL',
    review: 'During the most challenging time of my life, VITALIS provided not just medical excellence but genuine human warmth. Dr. Wilson and her team made me feel like I was their only patient.',
    rating: 5
  },
  {
    id: 4, name: 'David Nakamura', treatment: 'Neurology', location: 'San Francisco, CA',
    review: 'The neurological team\'s expertise is remarkable. They took the time to explain every aspect of my treatment and made sure I was comfortable throughout. Truly patient-centered care.',
    rating: 5
  },
];

export const healthInsights = [
  {
    id: 1, category: 'Heart Health',
    title: 'Understanding Your Heart: A Guide to Cardiovascular Wellness',
    desc: 'Learn about the latest advances in heart disease prevention and how lifestyle changes can protect your cardiovascular health.',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&h=400&fit=crop'
  },
  {
    id: 2, category: 'Preventive Care',
    title: 'The Importance of Annual Health Screenings',
    desc: 'Regular health check-ups can detect conditions early when treatment is most effective. Know what screenings you need.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop'
  },
  {
    id: 3, category: 'Mental Wellness',
    title: 'Mind-Body Connection: Mental Health in Modern Medicine',
    desc: 'Explore how mental health impacts physical wellbeing and the integrative approaches available at VITALIS.',
    image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&h=400&fit=crop'
  },
  {
    id: 4, category: 'Nutrition',
    title: 'Medical Nutrition: Eating for Optimal Health',
    desc: 'Our nutrition experts share evidence-based dietary guidelines for maintaining health and managing chronic conditions.',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=400&fit=crop'
  },
  {
    id: 5, category: "Women's Health",
    title: "Women's Wellness: Beyond the Basics",
    desc: 'Comprehensive guide to preventive care, screenings, and wellness strategies for women at every life stage.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=400&fit=crop'
  },
  {
    id: 6, category: 'Family Health',
    title: 'Keeping Your Family Healthy: A Year-Round Guide',
    desc: 'Practical health tips for every member of your family, from childhood vaccinations to senior wellness.',
    image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600&h=400&fit=crop'
  },
];

export const facilities = [
  { id: 1, name: 'Modern Patient Rooms', image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop' },
  { id: 2, name: 'Advanced Operating Rooms', image: 'https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?w=800&h=600&fit=crop' },
  { id: 3, name: 'Diagnostic Laboratory', image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&h=600&fit=crop' },
  { id: 4, name: 'Private Suites', image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&h=600&fit=crop' },
  { id: 5, name: 'Wellness Center', image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&h=600&fit=crop' },
  { id: 6, name: 'Reception Area', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop' },
  { id: 7, name: 'Research Center', image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&h=600&fit=crop' },
];
