import { cn } from '@cs-magic/shadcn/lib/utils';
import Image, { ImageProps } from 'next/image';

interface CoverImageProps {
  src: string;
  alt: string;
}

export default function CoverImage({ src, alt, className, ...props }: ImageProps) {
  return (
    <div className="relative w-full h-64">
      <Image src={src} alt={alt} layout="fill" objectFit="cover" className={cn("rounded-lg", className)} {...props} />
    </div>
  );
}
