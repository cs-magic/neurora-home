import { Octokit } from '@octokit/rest';
import RepoList from './RepoList';

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

async function getRepos(owner: string) {
  const { data } = await octokit.repos.listForUser({ username: owner, sort: 'updated', per_page: 100 });
  return data.map(repo => ({
    ...repo,        
    stargazers_count: repo.stargazers_count ?? 0,
    forks_count: repo.forks_count ?? 0,
    updated_at: repo.updated_at ?? new Date().toISOString()
  }));
}

export default async function OwnerReposPage({ params }: { params: { owner: string } }) {
  const repos = await getRepos(params.owner);

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Repositories for {params.owner}</h1>
      <RepoList repos={repos} owner={params.owner} />
    </div>
  );
}
