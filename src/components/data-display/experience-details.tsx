import Typography from '@/components/general/typography';
import ImageWrapper from '@/components/data-display/image-wrapper';
import Card from '@/components/layout/card';
import { ExperienceDetails as ExperienceDetailsProps } from '@/lib/types';

const dateFormatOptions: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'short',
};

const ExperienceDetails = ({
  logo,
  darkModeLogo,
  logoAlt,
  position,
  currentlyWorkHere,
  startDate,
  endDate,
  summary,
}: ExperienceDetailsProps) => {
  return (
    <Card className="mx-auto flex w-full max-w-4xl flex-col justify-between gap-4 p-8 md:flex-row md:gap-8">
      <div className="max-md:order-1 md:w-1/4">
        <ImageWrapper
          src={logo}
          srcForDarkMode={darkModeLogo}
          alt={logoAlt}
          className="max-w-[120px]"
        />
      </div>
      <div className="flex flex-col gap-4 max-md:order-3 md:w-2/4">
        <Typography variant="subtitle" className="font-semibold text-gray-900">
          {position}
        </Typography>
        <ul className="flex list-disc flex-col gap-2 md:gap-1">
          {summary?.map((sentence, index) => (
            <Typography component="li" key={index}>
              {sentence}
            </Typography>
          ))}
        </ul>
      </div>
      <div className="max-md:order-2 md:w-1/4">
        <Typography className="text-gray-700 md:text-right">
          {new Intl.DateTimeFormat('en-US', dateFormatOptions).format(
            startDate
          )}{' '}
          -{' '}
          {currentlyWorkHere
            ? 'Present'
            : endDate
            ? new Intl.DateTimeFormat('en-US', dateFormatOptions).format(
                endDate
              )
            : 'NA'}
        </Typography>
      </div>
    </Card>
  );
};

export default ExperienceDetails;
