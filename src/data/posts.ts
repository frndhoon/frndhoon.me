export interface Post {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  href: string;
  readTime: string;
}

export const posts: Post[] = [
  {
    title: '개발자로서의 첫 걸음',
    excerpt:
      '개발을 시작하게 된 계기와 지금까지의 여정을 돌아보며 앞으로의 목표에 대해 이야기합니다.',
    date: '2024-01-15',
    category: '회고',
    href: '/post/first-steps-as-developer',
    readTime: '5분',
  },
  {
    title: '효율적인 개발 환경 구축하기',
    excerpt:
      'VS Code 설정부터 터미널 커스터마이징까지, 개발 생산성을 높이는 환경 설정에 대해 공유합니다.',
    date: '2024-01-10',
    category: '개발',
    href: '/post/dev-environment-setup',
    readTime: '8분',
  },
  {
    title: '영상 편집 작업의 즐거움',
    excerpt:
      '영상 편집을 하면서 느끼는 창작의 즐거움과 기술적인 도전들에 대한 이야기입니다.',
    date: '2024-01-05',
    category: '영상',
    href: '/post/joy-of-video-editing',
    readTime: '4분',
  },
  {
    title: '2024년 새해 계획과 다짐',
    excerpt:
      '새해를 맞아 세운 계획들과 개인적인 목표, 그리고 이를 달성하기 위한 구체적인 방법들을 정리했습니다.',
    date: '2024-01-01',
    category: '일상',
    href: '/post/2024-resolutions',
    readTime: '6분',
  },
  {
    title: '최근 읽은 책들 - 개발 서적 리뷰',
    excerpt:
      '최근에 읽은 개발 관련 서적들에 대한 간단한 리뷰와 느낀점을 공유합니다.',
    date: '2023-12-28',
    category: '독서',
    href: '/post/recent-dev-books',
    readTime: '7분',
  },
];

export const categories = ['전체', '개발', '영상', '일상', '회고', '독서'];
