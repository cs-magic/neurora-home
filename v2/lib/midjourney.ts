"use server"

import OpenAI from 'openai';
import { HttpsProxyAgent } from 'https-proxy-agent';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  httpAgent: new HttpsProxyAgent('http://localhost:7890')
});

export async function generateCoverImage(repoName: string): Promise<string> {
  try {
    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: `Create an advertising image for a software repository named "${repoName}". The image should be modern, tech-themed, and suitable for a banner or cover image.`,
      n: 1,
      size: "1792x1024",
      
    });

    console.log(response);

    return response.data[0].url!;
  } catch (error) {
    console.error('Error generating cover image:', error);
    if (error instanceof Error && 'response' in error) {
      const apiError = error as { response?: { status?: number; data?: any } };
      console.log('Status:', apiError.response?.status);
      console.log('Data:', apiError.response?.data);
    }
    // Fallback to placeholder image if generation fails
    return `https://via.placeholder.com/1200x630.png?text=${encodeURIComponent(repoName)}`;
  }
}



