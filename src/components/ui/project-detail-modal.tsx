import { useEffect } from 'react';

import type { Project } from '@/data/projects';

interface ProjectDetailModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectDetailModal = ({
  project,
  isOpen,
  onClose,
}: ProjectDetailModalProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

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
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* Modal */}
      <div className="relative z-10 m-4 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-lg bg-white shadow-xl dark:bg-gray-900">
        <div className="p-6">
          {/* Header */}
          <div className="mb-4 flex items-start justify-between">
            <div className="flex-1">
              <h2 className="text-heading mb-2 text-2xl font-bold">
                {project.title}
              </h2>
              <span
                className={`inline-block rounded px-3 py-1 text-sm ${getStatusColor(project.status)}`}
              >
                {project.status}
              </span>
            </div>
            <button
              onClick={onClose}
              className="ml-4 text-gray-400 transition-colors hover:text-gray-600 dark:hover:text-gray-200"
              aria-label="닫기"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-heading mb-2 font-semibold">프로젝트 소개</h3>
              <p className="text-second leading-relaxed">
                {project.description}
              </p>
            </div>

            <div>
              <h3 className="text-heading mb-3 font-semibold">사용 기술</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* 추후 확장 가능한 섹션들 */}
            <div>
              <h3 className="text-heading mb-2 font-semibold">주요 기능</h3>
              <p className="text-second">
                이 부분은 추후 프로젝트 데이터에 features 필드를 추가하여 확장할
                수 있습니다.
              </p>
            </div>

            <div>
              <h3 className="text-heading mb-2 font-semibold">학습 내용</h3>
              <p className="text-second">
                이 부분은 추후 프로젝트 데이터에 learnings 필드를 추가하여
                확장할 수 있습니다.
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 border-t border-gray-200 pt-6 dark:border-gray-700">
            <div className="flex gap-3">
              <button
                onClick={onClose}
                className="rounded-md bg-gray-200 px-4 py-2 text-gray-800 transition-colors hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
