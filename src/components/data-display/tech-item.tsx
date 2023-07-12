'use client';

import Image from 'next/image';

import { TechItem } from '@/lib/types';
import Typography from '@/components/general/typography';
import { useTheme } from 'next-themes';

type TechItemProps = {
  technology: TechItem;
};

const TechItem = ({ technology }: TechItemProps) => {
  const { theme } = useTheme();

  return (
    <div className="flex flex-col items-center gap-2">
      <Image
        src={
          theme === 'dark'
            ? technology.darkModeLogo || technology.logo
            : technology.logo
        }
        alt={technology.label}
        className="cursor-pointer transition-all duration-150 ease-in hover:scale-125"
      />
      <Typography variant="body1">{technology.label}</Typography>
    </div>
  );
};

export default TechItem;
