import { getReadmeContent, getRepository } from '@/lib/github';
import { generateCoverImage } from '@/lib/midjourney';
import CoverImage from '@/components/CoverImage';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import { FaCodeBranch, FaEye, FaStar } from 'react-icons/fa';
import Link from 'next/link';


interface RepoPageProps {
  params: {
    owner: string;
    repo: string;
  };
}

export default async function RepoPage({ params:{owner,repo} }: RepoPageProps) {
  console.log(owner,repo)
  try{
    const repository = await getRepository(owner, repo);
    const readmeContent = await getReadmeContent(owner, repo);

    // Extract cover image from README or use Midjourney to generate
    const coverImage = extractCoverImageFromReadme(readmeContent) || await generateCoverImage(repository.name);

    return (
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-gradient-to-br from-indigo-100 to-purple-100 shadow-2xl rounded-3xl overflow-hidden">
          <div className="relative">
            <CoverImage src={coverImage} alt={`${repository.name} cover`} className="w-full h-80 object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
              <div className="p-8 text-white">
                <h1 className="text-4xl font-bold mb-2">{repository.name}</h1>
                <p className="text-xl text-gray-200">{repository.description}</p>
              </div>
            </div>
          </div>
          
          <div className="p-8">
            <Link href={`/repos/${owner}`}>
            <div className="flex items-center space-x-6 mb-8">
              <img src={repository.owner.avatar_url} alt={repository.owner.login} className="w-16 h-16 rounded-full border-4 border-white shadow-lg" />
              <div>
                <span className="text-2xl font-semibold text-gray-800">{repository.owner.login}</span>
                <p className="text-gray-600">Repository Owner</p>
              </div>
            </div>
            </Link>

            <div className="flex flex-wrap gap-6 mb-8">
              <a
                href={repository.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View on GitHub
              </a>
              {repository.homepage && (
                <a
                  href={repository.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gradient-to-r from-pink-500 to-orange-500 text-white rounded-full hover:from-pink-600 hover:to-orange-600 transition-all duration-300 flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                  Visit Website
                </a>
              )}
            </div>
            
            <div className="flex space-x-8 mb-8 text-gray-700">
              <div className="flex items-center">
                <FaStar className="w-6 h-6 text-yellow-500 mr-2" />
                <span>{repository.stargazers_count} Stars</span>
              </div>
              <div className="flex items-center">
                <FaCodeBranch className="w-6 h-6 text-green-500 mr-2" />
                <span>{repository.forks_count} Forks</span>
              </div>
              <div className="flex items-center">
                <FaEye className="w-6 h-6 text-blue-500 mr-2" />
                <span>{repository.watchers_count} Watchers</span>
              </div>
            </div>
            
            <div className="prose max-w-none bg-white p-8 rounded-2xl shadow-inner">
              {readmeContent ? (
                  <MarkdownRenderer content={readmeContent} />
              ) : (
                <p className="text-gray-500 italic">No README found for this repository.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error fetching repository data:', error);
    return <div className="text-center text-2xl text-red-600 mt-12">Error loading repository data</div>;
  }
}

// 辅助函数：从 README 中提取封面图
function extractCoverImageFromReadme(readmeContent: string | null): string | null {
  if (!readmeContent) return null;
  
  // 简单的图片 URL 提取逻辑，可以根据需要进行调整
  const match = readmeContent.match(/!\[.*?\]\((.*?)\)/);
  return match ? match[1] : null;
}
