export interface VideoWork {
  title: string;
  description: string;
  category: string;
  href: string;
  thumbnail: string;
  duration: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export const videoWorks: VideoWork[] = [
  {
    title: '브랜드 모션 그래픽',
    description: '기업 브랜딩을 위한 모션 그래픽 및 로고 애니메이션',
    category: '모션 그래픽',
    href: '/video/motion-graphics',
    thumbnail: '/images/motion-graphics-thumb.jpg',
    duration: '0:30',
  },
  {
    title: '상업 광고 영상',
    description: '제품 홍보를 위한 상업 광고 영상 편집',
    category: '광고 편집',
    href: '/video/commercial-edits',
    thumbnail: '/images/commercial-thumb.jpg',
    duration: '1:00',
  },
  {
    title: '유튜브 콘텐츠 편집',
    description: '크리에이터 채널을 위한 유튜브 영상 편집',
    category: '콘텐츠 편집',
    href: '/video/youtube-edits',
    thumbnail: '/images/youtube-thumb.jpg',
    duration: '10:24',
  },
  {
    title: '뮤직비디오 편집',
    description: '인디 아티스트 뮤직비디오 편집 및 컬러 그레이딩',
    category: '뮤직비디오',
    href: '/video/music-video',
    thumbnail: '/images/music-video-thumb.jpg',
    duration: '3:42',
  },
];

export const skills: SkillGroup[] = [
  {
    category: '편집 소프트웨어',
    items: [
      'After Effects',
      'Premiere Pro',
      'Final Cut Pro',
      'DaVinci Resolve',
    ],
  },
  {
    category: '모션 그래픽',
    items: [
      '2D Animation',
      'Typography',
      'Logo Animation',
      'Kinetic Typography',
    ],
  },
  {
    category: '후반 작업',
    items: ['Color Grading', 'Sound Design', 'VFX', 'Compositing'],
  },
  {
    category: '기타',
    items: ['Cinema 4D', 'Blender', 'Photoshop', 'Illustrator'],
  },
];
