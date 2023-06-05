'use client';
import Image from 'next/image';
import { useState } from 'react';
import { cn } from './utils/cn';

export type Image = { imageSrc: string; caption: string; username: string };

export const BlurImage = ({ image }: { image: Image }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="group cursor-pointer">
      <div className="aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-9 overflow-hidden rounded-lg bg-gray-200">
        <Image
          src={image.imageSrc}
          alt={image.caption}
          fill
          style={{ objectFit: 'cover' }}
          className={cn(
            'group-hover:opacity-75 duration-300 ',
            isLoading
              ? 'grayscale blur-2xl scale-110'
              : 'grayscale-0 blur-0 scale-100'
          )}
          onLoadingComplete={() => setIsLoading(false)}
        />
      </div>
      <p className="mt-4 text-lg font-medium text-gray-900">
        @{image.username}
      </p>
      <p className="mt-1 text-md text-gray-700">{image.caption}</p>
    </div>
  );
};
