import { Octokit } from "@octokit/rest";

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

export async function getRepository(owner: string, repo: string) {
  const { data } = await octokit.repos.get({ owner, repo });
  return data;
}

export async function getReadmeContent(owner: string, repo: string) {
  try {
    const { data } = await octokit.repos.getReadme({ owner, repo });
    return Buffer.from(data.content, 'base64').toString('utf-8');
  } catch (error) {
    console.error("Error fetching README:", error);
    return null;
  }
}
