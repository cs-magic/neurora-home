import Image from 'next/image';

interface CoverImageProps {
  src: string;
  alt: string;
}

export default function CoverImage({ src, alt }: CoverImageProps) {
  return (
    <div className="relative w-full h-64">
      <Image src={src} alt={alt} layout="fill" objectFit="cover" className="rounded-lg" />
    </div>
  );
}