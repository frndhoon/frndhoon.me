export interface Project {
  title: string;
  description: string;
  tech: string[];
  status: '완료' | '진행중' | '계획중';
}

export const projects: Project[] = [
  {
    title: '포트폴리오 웹사이트',
    description: 'Astro, TypeScript, Tailwind CSS를 사용한 개인 포트폴리오',
    tech: ['Astro', 'TypeScript', 'Tailwind CSS'],
    status: '완료',
  },
  {
    title: 'React 컴포넌트 라이브러리',
    description: '재사용 가능한 React 컴포넌트들의 모음',
    tech: ['React', 'TypeScript', 'Storybook'],
    status: '진행중',
  },
  {
    title: 'Next.js 블로그',
    description: 'MDX 기반의 개인 개발 블로그',
    tech: ['Next.js', 'MDX', 'Prisma'],
    status: '계획중',
  },
];

// 모든 프로젝트에서 사용된 기술 스택을 추출하는 함수
export const getAllTechnologies = (): string[] => {
  const allTech = projects.flatMap((project) => project.tech);
  return [...new Set(allTech)].sort();
};

// 기술을 카테고리별로 분류하는 함수 (선택적으로 사용 가능)
export const getTechByCategory = () => {
  const allTech = getAllTechnologies();

  const frontendTech = allTech.filter((tech) =>
    [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'Tailwind CSS',
      'Styled Components',
      'Astro',
      'Svelte',
    ].includes(tech),
  );

  const otherTech = allTech.filter((tech) => !frontendTech.includes(tech));

  return {
    frontend: frontendTech,
    others: otherTech,
  };
};
