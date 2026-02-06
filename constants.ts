import { Project, NavItem, Member } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Projects', href: '#work' },
  { label: 'Who we are', href: '#collective' },
  { label: 'Contact', href: '#contact' },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Brain Storm',
    hostedBy: '8th Annual Conference on Cognitive Computational Neuroscience',
    description: 'The aiar collective teamed up with Egregore (Basile Aether) to perform at the 8th Annual Conference on Cognitive Computational Neuroscience. The performance was a real-time audiovisual experience that mapped brain activity using light and sound. The arrangement of lights and speakers directly corresponded to the standard EEG electrode map. Each light-speaker pair was connected to a specific electrode position on the scalp, creating a physical map of the brain’s surface.',
    year: '2025',
    imageUrl: '/assets/img/CCN.png',
    size: 'small',
    keywords: ['NEUROSCIENCE', 'CONFERENCE', 'AUDIO-VISUAL']
  },
  {
    id: '2',
    title: 'At Berghain with Egregore',
    hostedBy: 'Berghain',
    description: "The aiar collective teamed up with Egregore (Basile Aether) to perform at the legendary techno club Berghain for the Terenor Records party. The performance integrated Egregore's general tempo and oscillations of brain activity to control the rates of melodic pulses, while different mind states were characterized to mix in different fragments of sounds, creating a neural-driven electronic music experience.",
    year: '2025',
    imageUrl: '/assets/img/berghain_egregore.jpeg',
    size: 'small',
    keywords: ['TECHNO', 'ELECTRONIC MUSIC', 'TEMPO-ALTERATION']
  },
  {
    id: '3',
    title: 'Impromptu for Piano, Light and Brain',
    hostedBy: 'Cité Internationale des Arts, Paris',
    description: "During an open studio at Yongbom's residency at the Cité Internationale des Arts, the collective created an interactive performance experience using EEG signals to control Arduino machines that struck strings of an opened piano. Dynamic lighting responded to these interactions, creating a three-way dialogue between neural activity, mechanical sound production, and luminous environments.",
    year: '2024',
    imageUrl: '/assets/img/cite_internationale.png',
    size: 'small',
    keywords: ['PIANO', 'MECHANICAL', 'ARDUINO']
  },
  {
    id: '4',
    title: 'Dream of Others Installation',
    hostedBy: 'NP3, Groningen',
    description: "Building on the live performance of Dream of Others, the collective created an installation piece exhibited at the contemporary experimental art space NP3 in Groningen. Video recordings from the performance played on loop with a surveillance aesthetic, while brain signals that drove the entire installation were graphically visualized and interacted with a three-dimensional model of the brain on a larger screen. A standalone light display visible from the street reproduced the recorded signals in real time through different configurations of lights. Members of the public had the opportunity, by appointment, to wear the EEG helmet and interact directly with the feedback systems used for the performance and installation.",
    year: '2024',
    imageUrl: '/assets/img/DoO_Np3.gif',
    size: 'large',
    keywords: ['EXHIBITION', 'INTERACTIVE', 'PUBLIC']
  },
  {
    id: '5',
    title: 'Dream of Others',
    hostedBy: 'Leipzig City Council',
    description: "The aiar collective translated a person's dream into a live, brain-controlled multisensory experience. The arriving audience accompanied a sleeping performer in her descent toward dreams, entering a dreamscape modulated in real-time by the brain activity of the dreamer, measured live with EEG. As the sleeping performer dove into her memory through the medium of sleep and dreams, different stages of her sleep were offered to the audience to experience as a combination of brain-modulated multi-sensory impressions.",
    year: '2023',
    imageUrl: '/assets/img/dod_small.gif',
    size: 'large',
    videoUrl: 'https://www.youtube.com/watch?v=Ge_RsdAvaOA&ab_channel=aiar',
    videoButtonText: 'Watch Documentary',
    keywords: ['IMMERSIVE ENVIRONMENTS', 'PERFORMANCES', 'DREAMS'],
    featured: true
  },
  {
    id: '6',
    title: 'Evolving Music System',
    hostedBy: 'Diverse Intelligence Summer Institute',
    description: 'Yongbom and Harin attended the Diverse Intelligence Summer Institute in St Andrews, Scotland, where they developed a prototype of an evolving music system using MaxMSP. The system searched the timbre space along a dimension across each generation, with selection pressure introduced by the listener\'s brain state, creating a co-evolutionary relationship between neural activity and sonic landscape.',
    year: '2022',
    imageUrl: '/assets/img/geneic-algorithm.gif',
    size: 'small',
    videoUrl: 'https://youtu.be/bru3k88P7-k',
    keywords: ['RESEARCH', 'SYSTEM', 'MUSIC']
  },
  {
    id: '7',
    title: 'Co-Shape',
    hostedBy: 'Kulturnhalle Leipzig',
    description: "The aiar collective presented an interactive EEG sound installation and performance at the Kulturnhalle Leipzig. Arriving audiences entered a soundscape modulated by the performer's state of mind, while their physical motion was tracked in real-time and represented on a large wall. As the audience interacted with the audio scene, their presence and movements affected the internal state of the performer, creating a generative composition that merged sound, space, and meditative states. The unfolding of the musical piece was determined neither by the performer, nor by the composer, nor by the audience—instead shaped by the intertwined relationship among them.",
    year: '2022',
    imageUrl: '/assets/img/kultonhalle_poster_new_poster.jpg',
    size: 'small',
    videoUrl: 'https://youtu.be/MA7DizcPu_c',
    videoButtonText: 'Watch Video',
    keywords: ['MOVEMENT', 'CO-CREATION', 'DANCE']
  },
  {
    id: '8',
    title: 'Think, Sync, Sink',
    hostedBy: 'Self-Initiated',
    description: "Think, Sync, Sink was the collective's first attempt at measuring multiple brain synchronies. Using two EEG systems on a pianist and a cellist, the synchrony between the brain waves of the two performers altered the sonic experience. As the two performers transcended further into synchronizing with each other, the deeper the reverberation became, while misalignment induced more distorted noise into the sound signal, creating a sonic representation of neural coupling.",
    year: '2022',
    imageUrl: '/assets/img/think_sync_sink_small.gif',
    size: 'large',
    videoUrl: 'https://youtu.be/qn_FZrT1TqI',
    videoButtonText: 'Watch Video',
    keywords: ['HYPERSCANNING', 'SYNCHRONY', 'DUO'],
    featured: true
  },
  {
    id: '9',
    title: 'Cellogram',
    hostedBy: 'Self-Initiated',
    description: 'Cellogram was the collective\'s first attempt at merging EEG with music, creating a system that integrated brain activities into sound using OpenVibe and Ableton with a custom Max MSP patch. The twelve activities coming from each electrode signal were used to amplify or reduce specific harmonics played through a single note by a cellist, creating a direct translation of neural activity into acoustic texture.',
    year: '2022',
    imageUrl: '/assets/img/cellogram.png',  
    size: 'small',
    videoUrl: 'https://youtu.be/B2mXgu1bbRU',
    videoButtonText: 'Watch Video',
    keywords: ['HARMONICS', 'CELLO', 'MODULATION']
  }
];

export const FEATURED_PROJECTS = PROJECTS.filter(p => p.featured);
export const ALL_PROJECTS = PROJECTS;

export const MEMBERS: Member[] = [
  {
    name: 'Yongbom Lee',
    role: 'composer/sound artist',
    imageUrl: '/assets/img/Yongbom.jpg',
    bio: "Yongbom is a Leipzig-based Korean composer and artist working between music, neuroscience, and visual art. Using bio-signals such as EEG and fNIRS, electroacoustics, and embodied performance, he creates soundscapes and audiovisual installations that reshape listening through analog/digital and intuitive/algorithmic \"topological\" transformations. His music has been commissioned and performed by Ensemble Modern, ZDF/ARTE, ORF, and Ensemble Recherche, and awarded the Ö1 Talentebörse Composition Award, the City of Vienna Promotion Award, and a scholarship at Cité Internationale des Arts Paris. He studied at Yonsei University and University of Music and Performing Arts Vienna, was an IEMA stipendiary, and lectures at University of Music and Theatre Leipzig.",
    website: 'https://www.yongbomlee.com/'
  },
  {
    name: 'Alessandro Braga',
    role: 'neuroscientist',
    imageUrl: '/assets/img/Ale.jpg',
    bio: 'Alessandro is a neuroscientist specializing in enactivism, embodiment, and predictive processing. He views scientific tools in artistic performance as vital for exploring our collective experience. Following PhD work on audition at the Max Planck Institute and research on emotion recognition in Montreal, he actively bridges the gap between the lab and the stage. Currently a Scientific Consultant at NIRx and a member of the AIAR collective, Alessandro focuses on fNIRS neuroimaging and artistic brain-computer interfaces. He collaborates with artists and philosophers to democratize technology, seeking to dissolve the artificial borders between art and science.'
  },
  {
    name: 'Harin Lee',
    role: 'cognitive scientist',
    imageUrl: '/assets/img/Harin.jpg',
    bio: "Harin is a multidisciplinary researcher combining big data analysis with cross-cultural experiments. Currently as a Junior Research Fellow at the University of Cambridge, his research focuses on the psychological foundations of music cognition, the characteristics and evolutionary patterns of music globally, and how one's aesthetic taste is shaped by environment. Harin's work spans field experiments with Tsimané villagers in the Bolivian Amazon to developing online paradigms investigating cultural evolution in artificial worlds.",
    website: 'https://www.harinlee.info'
  },
  {
    name: 'Federico Murgia',
    role: 'multidisciplinary artist',
    imageUrl: '/assets/img/Fede.jpg',
    bio: "Federico is an Italian multidisciplinary artist who lives and works in Amsterdam. He received a BA of Graphic Arts at Accademia delle Belle Arti in Bologna, and a MFA in Interactive Media and Environments at the FMI in Groningen. His practice has evolved toward immersive and hybrid works exploring the interplay between sound, light, and other intangible elements at the edges of human perception. Working across disciplines, he collaborates with scientists, designers, and musicians to translate complex phenomena into visceral experiences through custom-built technologies. His work has been exhibited across Europe in museums, public art exhibitions, festivals, galleries, independent venues, and art fairs.",
    website: 'https://federicomurgia.com/'
  }
];