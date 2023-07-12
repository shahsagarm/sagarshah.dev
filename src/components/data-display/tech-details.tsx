'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import { TechDetails } from '@/lib/types';
import Typography from '@/components/general/typography';
import { useTheme } from 'next-themes';
import Link from '../navigation/link';

type TechDetailsProps = {
  technology: TechDetails;
};

const TechDetails = ({ technology }: TechDetailsProps) => {
  // Ref :: https://github.com/pacocoursey/next-themes#avoid-hydration-mismatch
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <Link noCustomization href={technology.url} externalLink>
        <Image
          src={
            theme === 'dark'
              ? technology.darkModeLogo || technology.logo
              : technology.logo
          }
          alt={technology.label}
          className="cursor-pointer transition-all duration-150 ease-in hover:scale-125"
        />
      </Link>
      <Typography variant="body1">{technology.label}</Typography>
    </div>
  );
};

export default TechDetails;
