import { Project, NavItem, Member } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Projects', href: '#work' },
  { label: 'Who we are', href: '#collective' },
  { label: 'Contact', href: '#contact' },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Dream of Others',
    hostedBy: 'Leipzig City Council, Np3',
    description: 'Aiar collective and Federico Murgia presents Dreams of Others: a live, brain-controlled multisensory experience. The audience accompanies a sleeping performer in her descent toward dreams, entering a dreamscape modulated in real-time by the brain activity of the dreamer, measured live with electroencephalography. As the sleeping performer dives into her memory through the medium of sleep and dreams, different stages of her sleep are offered to the audience to experience as a combination of brain-modulated multi-sensory impressions.',
    year: '2023',
    imageUrl: '/assets/img/dod_small.gif',
    size: 'large',
    videoUrl: 'https://www.youtube.com/watch?v=Ge_RsdAvaOA&ab_channel=aiar',
    videoButtonText: 'Watch Documentary'
  },
  {
    id: '2',
    title: 'Evolving Music System',
    hostedBy: 'Diverse Intelligence Summer Institute',
    description: 'Yongbom and Harin recently attended the Diverse Intelligence Summer Institute in St Andrews, Scotland. During their time there under the scottish summer sun, they developed a prototype of an evolving music system using MaxMSP. A system in which it searches the timbre space along a dimension across each generation, where the selection pressure is introduced by the listener\'s brain state.',
    year: '2022',
    imageUrl: '/assets/img/geneic-algorithm.gif',
    size: 'small',
    videoUrl: 'https://youtu.be/bru3k88P7-k'
  },
  {
    id: '3',
    title: 'Co-Shape',
    hostedBy: 'Kulturnhalle Leipzig',
    description: "On 7th of July 2022, the aiar collective presented an interactive electroencephalogram-sound installation and performance at the Kulturnhalle Leipzig. Arriving audiences entered a soundscape that is modulated by the performer's state of mind. At the same time, the audiences' physical motion was tracked in real-time and represented on a large wall, also altering the soundscapes according to the captured movement density in the room. As the audience interacts with the audio scene, their presence and movements affected the internal state of the performer, creating a generative composition that merges sound, space, and meditative states.",
    year: '2022',
    imageUrl: '/assets/img/kultonhalle_poster_new_poster.jpg',
    size: 'small',
    videoUrl: 'https://youtu.be/MA7DizcPu_c',
    videoButtonText: 'Watch Video'
  },
  {
    id: '4',
    title: 'Think, Sync, Sink',
    hostedBy: 'Self-Initiated',
    description: "Think, Sync, Sink is a piece for cello, piano and EEG. 24 electrodes are used to monitor the various mental states of the performers and accordingly modulate their instrument's sound. Synchrony of brain waves between the two performers also change the reverberation and distortion of the combined sound signal.",
    year: '2022',
    imageUrl: '/assets/img/think_sync_sink_small.gif',
    size: 'large',
    videoUrl: 'https://youtu.be/qn_FZrT1TqI',
    videoButtonText: 'Watch Video'
  },
  {
    id: '5',
    title: 'Cellogram',
    hostedBy: 'Self-Initiated',
    description: 'Cellogram is a piece for cello and EEG, in which brain imaging and sound production are integrated through OpenVibe and Ableton, with a custom Max MSP patch. The timbral qualities of cello sound are modulated by mapping 12 brain signals recorded from different regions of the brain.',
    year: '2022',
    imageUrl: '/assets/img/cellogram_small.gif',
    size: 'small',
    videoUrl: 'https://youtu.be/B2mXgu1bbRU',
    videoButtonText: 'Watch Video'
  }
];

export const MEMBERS: Member[] = [
  {
    name: 'Yongbom Lee',
    role: 'composer/sound artist',
    imageUrl: '/assets/img/Yongbom.jpg',
    bio: "Yongbom Lee, born in Seoul in 1987, is a composer known for his distorted lyricism, visionary soundscape, and blending of genres and styles. He has a diverse range of compositions, including instrumental concert music, electronic, film, and theatre music. Lee's work combines analogue and digital elements, signal and noise, and traditional and experimental approaches. He aims to create music that transcends boundaries and incorporates influences from other disciplines to expand the scope of sound art. He was a stipendiary composer at the International Ensemble Modern Academy (IEMA) 2017/18 in Frankfurt and a fellow artist at the Diverse Intelligences Summer Institute 2022 in Scotland, UK. In 2023, Yongbom Lee has been chosen as a recipient of the \"Auslandsstipendium bei der BKM\" as a composer. He will embark on a residency at the Cité Internationale des Arts in Paris.",
    website: 'https://www.yongbomlee.com/'
  },
  {
    name: 'Alessandro Braga',
    role: 'auditory neuroscientist',
    imageUrl: '/assets/img/Ale.jpg',
    bio: 'Alessandro Braga is an artist and doctor in auditory neuroscience, dedicated to merging the scientific understanding of brain activity with the musical arts. He is currently working on affective computing, the AI-automated recognition of emotion from physiological data at the Research in Hearing Health and Assistive Devices Lab of ETS Montreal. By obtaining his doctorate at the Max Planck Institute for Human Cognitive and Brain Sciences, he has built a robust foundation in auditory neuroscience. He combines this knowledge with extensive involvement in interdisciplinary projects such as interactive EEG installations for musical and multimedia arts venues including WISP and ZIMMT in Leipzig and NP3 in Gröningen.',
    website: 'https://drive.google.com/file/d/1ef6Esgda14zb3b-jACLOR0HRKovNAJzG/view?usp=sharing'
  },
  {
    name: 'Harin Lee',
    role: 'cognitive scientist, music producer',
    imageUrl: '/assets/img/Harin.jpg',
    bio: "Harin Lee is a music producer and a PhD candidate at the Max Planck Institute for Human Cognitive and Brain Sciences. He studies the cross-cultural and inter-individual differences in perception of music using large-scale data-driven approaches combined with machine learning. He completed his bachelor's degree in Popular Music and master's degree in Music, Mind, and Brain with distinction at Goldsmiths College, University of London.",
    website: 'https://www.harinlee.info'
  },
  {
    name: 'Federico Murgia',
    role: 'multidisciplinary artist',
    imageUrl: '/assets/img/Fede.jpg',
    bio: "Federico Murgia (1989) is an Italian multidisciplinary artist who lives and works in Haarlem/Amsterdam. Murgia's background in graphics and drawing has expanded towards more immersive and hybrid practices, exploring the intangible correlations between sonic, luminous and other elements at the edge of the human perceptual envelope. Both in his sculptural and graphical productions, as well as in his site-specific installations and performances, Murgia is particularly interested in evoking unusual and ancestral sensations, triggering sensorial experiences on the verge of transcendence.",
    website: 'https://federicomurgia.com/'
  }
];