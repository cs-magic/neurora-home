import Link from 'next/link';

interface ActionButtonsProps {
  githubUrl: string;
  websiteUrl?: string;
}

export default function ActionButtons({ githubUrl, websiteUrl }: ActionButtonsProps) {
  return (
    <div className="flex space-x-4 my-4">
      <Link href={githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
        View on GitHub
      </Link>
      {websiteUrl && (
        <Link href={websiteUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
          Visit Website
        </Link>
      )}
    </div>
  );
}
