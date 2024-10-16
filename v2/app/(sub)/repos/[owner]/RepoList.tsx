'use client';

import Link from 'next/link';
import { FaGithub, FaStar, FaCodeBranch } from 'react-icons/fa';
import Masonry from 'react-masonry-css';

interface Repo {
  id: number;
  name: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
}

interface RepoListProps {
  repos: Repo[];
  owner: string;
}

export default function RepoList({ repos, owner }: RepoListProps) {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="flex w-auto -ml-4"
      columnClassName="pl-4 bg-clip-padding"
    >
      {repos.map((repo) => (
        <Link href={`/repos/${owner}/${repo.name}`} key={repo.id} className="block mb-4">
          <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <FaGithub className="text-2xl mr-2 text-gray-700 dark:text-gray-300" />
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 truncate">{repo.name}</h2>
            </div>
            {repo.description && (
                <p className="text-gray-600 dark:text-gray-400 mb-4 h-20 overflow-hidden">{repo.description}</p>
            )}
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center">
                <FaStar className="text-yellow-400 mr-1" />
                <span className="font-medium dark:text-gray-300">{repo.stargazers_count}</span>
              </div>
              <div className="flex items-center">
                <FaCodeBranch className="text-gray-500 dark:text-gray-400 mr-1" />
                <span className="font-medium dark:text-gray-300">{repo.forks_count}</span>
              </div>
              <span className="text-gray-500 dark:text-gray-400">{new Date(repo.updated_at).toLocaleDateString()}</span>
            </div>
          </div>
        </Link>
      ))}
    </Masonry>
  );
}
