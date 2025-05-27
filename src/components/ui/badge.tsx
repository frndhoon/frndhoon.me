import type { Project } from '@/data/projects';

export const Badge = ({ children }: { children: React.ReactNode }) => {
  const getStatusColor = (status: Project['status']) => {
    switch (status) {
      case '완료':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case '진행중':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case '계획중':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
    }
  };

  return (
    <span
      className={`inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-sm text-gray-800 dark:bg-gray-800 dark:text-gray-100 ${getStatusColor(children as Project['status'])}`}
    >
      {children}
    </span>
  );
};
