import {
  BusinessInfo,
  ProgramItem,
  WhyChooseUsItem,
  DailyExperienceItem,
  GalleryImage,
} from '../types';

export const BUSINESS_INFO: BusinessInfo = {
  name: 'Little Saints Daycare & OSC',
  address: '9425 76 Ave NW',
  city: 'Edmonton',
  province: 'AB',
  postalCode: 'T6C 0J8',
  country: 'Canada',
  phone: '780-777-8047',
  formattedPhone: '(780) 777-8047',
  email: 'info.littlesaintsdaycare@gmail.com',
  hours: '7:00 AM – 6:00 PM',
  days: 'Monday to Friday',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=9425+76+Ave+NW+Edmonton+AB+T6C+0J8+Canada',
};

export const PROGRAMS_DATA: ProgramItem[] = [
  {
    id: 'daycare',
    title: 'Daycare',
    badge: 'Full & Part-Time',
    tagline: 'A warm, nurturing foundation for early growth',
    description:
      'A nurturing environment where children can learn, play, socialize, and develop through engaging daily activities and routines.',
    longDescription:
      'Our daycare program provides a safe and loving home away from home. We focus on fostering healthy emotional and cognitive growth through structured routines, interactive sensory activities, guided exploration, and gentle guidance that builds everyday confidence.',
    features: [
      'Nurturing & safe daily routines',
      'Encourages socialization & early communication',
      'Engaging indoor & sensory activities',
      'Daily quiet time & restful nap periods',
      'Balanced balance of group play & independent discovery',
    ],
    keyHighlights: [
      'Warm, attentive care throughout the day',
      'Creative arts, story circles & sensory stations',
      'Consistent morning-to-evening care schedule',
    ],
    image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=1000&q=80',
    imageAlt: 'Young children engaged in playful sensory and learning activities in a clean bright daycare setting',
  },
  {
    id: 'out-of-school-care',
    title: 'Out-of-School Care',
    badge: 'Before & After School',
    tagline: 'Reliable, engaging care before and after the school bell',
    description:
      'A safe and welcoming environment designed to support children before and after school.',
    longDescription:
      'Designed to give working parents complete peace of mind, our Out-of-School Care (OSC) program bridges the gap between home and school. Children can unwind, complete schoolwork, socialize with peers, and participate in recreational and creative activities in a secure, supportive setting.',
    features: [
      'Convenient early morning drop-off & afternoon pickup',
      'Dedicated quiet space for reading & homework',
      'Supervised indoor games & group recreational play',
      'Creative arts, crafts & problem-solving games',
      'Positive peer socialization & mentorship',
    ],
    keyHighlights: [
      'Smooth transition between home, school, and care',
      'Active recreation to burn off after-school energy',
      'Safe, welcoming community atmosphere',
    ],
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80',
    imageAlt: 'School-aged children collaborating on hands-on activities in a welcoming room',
  },
  {
    id: 'learning-through-play',
    title: 'Learning Through Play',
    badge: 'Play-Based Curriculum',
    tagline: 'Fostering curiosity, creativity, and lifelong joy in discovery',
    description:
      'Fun and engaging experiences that encourage creativity, curiosity, communication, problem-solving, and social development.',
    longDescription:
      'Play is the natural language of childhood. Our play-based philosophy creates thoughtfully arranged learning areas where children explore colors, shapes, nature, building, storytelling, and imaginative role-play at their own natural pace.',
    features: [
      'Promotes creative thinking & imagination',
      'Builds essential early problem-solving skills',
      'Strengthens fine & gross motor development',
      'Fosters natural curiosity & open exploration',
      'Encourages peer collaboration & sharing',
    ],
    keyHighlights: [
      'Interactive building blocks, puzzles & tactile materials',
      'Imaginative dramatic play & dress-up areas',
      'Story circles that spark language and self-expression',
    ],
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=80',
    imageAlt: 'Children happily building and learning together with wooden blocks and colorful shapes',
  },
];

export const WHY_CHOOSE_US_DATA: WhyChooseUsItem[] = [
  {
    id: 'safe-welcoming',
    title: 'Safe & Welcoming Environment',
    description:
      'A secure, clean, and lovingly maintained facility where every child feels protected, cherished, and right at home.',
    iconName: 'ShieldCheck',
    accentColor: 'blue',
  },
  {
    id: 'caring-atmosphere',
    title: 'Caring Atmosphere',
    description:
      'A warm, encouraging setting where kindness, empathy, and positive reinforcement guide every single interaction.',
    iconName: 'Heart',
    accentColor: 'emerald',
  },
  {
    id: 'engaging-activities',
    title: 'Engaging Activities',
    description:
      'A rich variety of hands-on arts, tactile crafts, music, story time, and guided discovery to keep young minds inspired.',
    iconName: 'Sparkles',
    accentColor: 'amber',
  },
  {
    id: 'learning-through-play',
    title: 'Learning Through Play',
    description:
      'Thoughtful play-based opportunities that nurture curiosity, early problem-solving, self-expression, and motor skills.',
    iconName: 'Smile',
    accentColor: 'teal',
  },
  {
    id: 'social-development',
    title: 'Social Development',
    description:
      'Meaningful peer interactions that help children practice sharing, active listening, teamwork, and building lasting friendships.',
    iconName: 'Users',
    accentColor: 'indigo',
  },
  {
    id: 'family-focused-care',
    title: 'Family-Focused Care',
    description:
      'Open communication, mutual trust, and attentive partnerships with parents to support each child’s unique journey.',
    iconName: 'Home',
    accentColor: 'rose',
  },
];

export const DAILY_EXPERIENCES: DailyExperienceItem[] = [
  {
    id: 'creative-activities',
    title: 'Creative Activities',
    subtitle: 'Imagination & Expression',
    description:
      'Children express their ideas and emotions through painting, drawing, modeling dough, paper crafts, and sensory textures.',
    details: [
      'Finger painting & watercolor exploration',
      'Collages, craft construction & sensory bins',
      'Encourages personal creativity and fine-motor dexterity',
    ],
    image: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Young child having fun painting with vibrant colors during art time',
    icon: 'Palette',
  },
  {
    id: 'indoor-play',
    title: 'Indoor Play',
    subtitle: 'Discovery & Wonder',
    description:
      'A welcoming classroom environment filled with age-appropriate toys, building blocks, puzzles, and imaginative play centers.',
    details: [
      'Block building and spatial construction sets',
      'Puzzles, sorting games, and memory challenges',
      'Dramatic play centers including kitchen and dress-up',
    ],
    image: 'https://images.unsplash.com/photo-1596464716127-f2a829822301?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Bright and organized indoor playroom with children engaged in educational games',
    icon: 'Boxes',
  },
  {
    id: 'outdoor-play',
    title: 'Outdoor Play',
    subtitle: 'Fresh Air & Movement',
    description:
      'Active outdoor sessions giving children space to run, play gross-motor games, enjoy fresh air, and appreciate the natural world.',
    details: [
      'Gross-motor coordination, running, and ball games',
      'Sandbox exploration and nature observation',
      'Healthy physical activity and active teamwork in the sun',
    ],
    image: 'https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Children happily enjoying supervised outdoor playtime on a sunny day',
    icon: 'Sun',
  },
  {
    id: 'story-time',
    title: 'Story Time',
    subtitle: 'Language & Wonder',
    description:
      'Cozy group reading circles that spark a lifelong love for books, expand vocabulary, and encourage listening comprehension.',
    details: [
      'Interactive picture books and rhyming stories',
      'Group discussions about story characters and morals',
      'Puppet shows and early phonemic awareness',
    ],
    image: 'https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Teacher and children sitting together enjoying an engaging storybook',
    icon: 'BookOpen',
  },
  {
    id: 'learning-activities',
    title: 'Learning Activities',
    subtitle: 'Curiosity & Discovery',
    description:
      'Guided explorations introducing early concepts such as numbers, colors, patterns, shapes, and science in hands-on ways.',
    details: [
      'Pattern identification and counting games',
      'Simple nature experiments and observation',
      'Early pre-literacy, letter sounds, and shape matching',
    ],
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Children participating in hands-on educational learning activities',
    icon: 'Lightbulb',
  },
  {
    id: 'social-activities',
    title: 'Social Activities',
    subtitle: 'Friendship & Teamwork',
    description:
      'Collaborative games and circle time that teach sharing, turn-taking, active listening, and celebrating each other’s successes.',
    details: [
      'Circle time sharing and greeting traditions',
      'Cooperative partner games and group music routines',
      'Empathy development and emotional expression',
    ],
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Children laughing and building social connections during group play',
    icon: 'Users2',
  },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 'gal-1',
    title: 'Creative Art & Painting',
    category: 'creative',
    categoryLabel: 'Creative & Art',
    src: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=1200&q=80',
    alt: 'Children exploring creative watercolor and finger painting on easels',
    description: 'Encouraging self-expression, color recognition, and fine motor skills through creative painting.',
  },
  {
    id: 'gal-2',
    title: 'Building & Spatial Play',
    category: 'play',
    categoryLabel: 'Play & Discovery',
    src: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=1200&q=80',
    alt: 'Children happily building complex structures with colorful blocks',
    description: 'Hands-on construction sets that teach balance, geometry, and team collaboration.',
  },
  {
    id: 'gal-3',
    title: 'Outdoor Play & Fresh Air',
    category: 'outdoor',
    categoryLabel: 'Outdoor Play',
    src: 'https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&w=1200&q=80',
    alt: 'Happy children enjoying active games in the outdoor play area',
    description: 'Active outdoor sessions designed to promote gross motor skills and healthy social interaction.',
  },
  {
    id: 'gal-4',
    title: 'Cozy Story & Reading Corner',
    category: 'learning',
    categoryLabel: 'Story & Learning',
    src: 'https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?auto=format&fit=crop&w=1200&q=80',
    alt: 'Children sitting comfortably in the reading circle listening to a story',
    description: 'Rich story sessions that build vocabulary, listening comprehension, and imagination.',
  },
  {
    id: 'gal-5',
    title: 'Bright Classroom Environment',
    category: 'play',
    categoryLabel: 'Play & Discovery',
    src: 'https://images.unsplash.com/photo-1596464716127-f2a829822301?auto=format&fit=crop&w=1200&q=80',
    alt: 'Bright, clean, and organized daycare classroom layout with interactive stations',
    description: 'A thoughtfully organized space structured into engaging learning and play zones.',
  },
  {
    id: 'gal-6',
    title: 'Hands-On Discovery & Puzzles',
    category: 'learning',
    categoryLabel: 'Story & Learning',
    src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80',
    alt: 'Children engaged in shape sorting, matching, and educational puzzles',
    description: 'Stimulating problem-solving games that nurture patience, logic, and cognitive skills.',
  },
  {
    id: 'gal-7',
    title: 'Social Bonding & Friendship',
    category: 'creative',
    categoryLabel: 'Creative & Art',
    src: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80',
    alt: 'Children collaborating and smiling during a group activity',
    description: 'Fostering lifelong communication, empathy, and social cooperation from an early age.',
  },
  {
    id: 'gal-8',
    title: 'School-Age Project Collaboration',
    category: 'learning',
    categoryLabel: 'Story & Learning',
    src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80',
    alt: 'Older children collaborating on creative science and arts projects in OSC',
    description: 'Supportive Out-of-School Care environment where school-aged children can thrive.',
  },
];

export const PARENT_TRUST_POINTS = [
  {
    title: 'Physical & Emotional Safety',
    description:
      'We maintain strict security, sanitized environments, and a gentle, supportive presence so children feel secure and loved.',
  },
  {
    title: 'Open & Transparent Communication',
    description:
      'We believe in active partnerships with parents, keeping you informed about your child’s daily experiences, achievements, and well-being.',
  },
  {
    title: 'Predictable & Calming Routines',
    description:
      'Consistent daily rhythms of play, learning, meals, and rest help children develop confidence, security, and independence.',
  },
  {
    title: 'Inclusive & Respectful Community',
    description:
      'Every child is celebrated for their unique personality, strengths, and background in a warm, non-judgmental environment.',
  },
];

export const QUICK_FAQS = [
  {
    question: 'Where is Little Saints Daycare & OSC located?',
    answer:
      'We are conveniently located at 9425 76 Ave NW, Edmonton, AB T6C 0J8, Canada.',
  },
  {
    question: 'What are your operating hours?',
    answer:
      'We are open Monday through Friday from 7:00 AM to 6:00 PM, supporting both standard daycare hours and before/after school care.',
  },
  {
    question: 'How can parents contact or schedule a tour?',
    answer:
      'You can call us directly at 780-777-8047, submit the contact form on this website, or request an on-site visit to explore our welcoming classrooms.',
  },
  {
    question: 'What programs do you offer?',
    answer:
      'We offer Daycare for early childhood development, Out-of-School Care (OSC) for school-aged children before and after school, and an engaging Learning Through Play curriculum.',
  },
];
