interface TechStackProps {
  className?: string;
  technologies?: string[];
}

export const TechStack = ({
  className = '',
  technologies = [],
}: TechStackProps) => {
  // 기본 카테고리 매핑 (기술이 어떤 카테고리에 속하는지 정의)
  const categoryMapping: Record<string, string> = {
    React: 'Frontend',
    'Next.js': 'Frontend',
    TypeScript: 'Frontend',
    JavaScript: 'Frontend',
    'Tailwind CSS': 'Frontend',
    'Styled Components': 'Frontend',
    Astro: 'Frontend',
    Svelte: 'Frontend',
    MDX: 'Frontend',
    Storybook: 'Tools & Others',
    Prisma: 'Backend & Database',
    Git: 'Tools & Others',
    GitHub: 'Tools & Others',
    Vercel: 'Tools & Others',
    Netlify: 'Tools & Others',
    Figma: 'Tools & Others',
    'Adobe XD': 'Tools & Others',
    'VS Code': 'Tools & Others',
    Vim: 'Tools & Others',
  };

  // 기술들을 카테고리별로 분류
  const categorizedTech = technologies.reduce(
    (acc, tech) => {
      const category = categoryMapping[tech] || 'Others';
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(tech);
      return acc;
    },
    {} as Record<string, string[]>,
  );

  // 카테고리가 비어있으면 기본값 사용
  if (technologies.length === 0) {
    categorizedTech['Frontend'] = [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'Tailwind CSS',
      'Styled Components',
      'Astro',
      'Svelte',
    ];
    categorizedTech['Tools & Others'] = [
      'Git',
      'GitHub',
      'Vercel',
      'Netlify',
      'Figma',
      'Adobe XD',
      'VS Code',
      'Vim',
    ];
  }

  return (
    <section className={`mt-12 ${className}`}>
      <h2 className="text-heading mb-6 text-xl font-semibold">기술 스택</h2>

      <div className="grid gap-6 md:grid-cols-2">
        {Object.entries(categorizedTech).map(([category, techs]) => (
          <div key={category}>
            <h3 className="text-heading mb-3 font-medium">{category}</h3>
            <ul className="text-second space-y-2">
              {techs.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
