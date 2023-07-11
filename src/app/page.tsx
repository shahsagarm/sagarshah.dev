import Image from 'next/image';
import { MapPinIcon, Github, Twitter, Figma, Mail } from 'lucide-react';

import SagarHeadshot from '/public/images/sagar-headshot.jpg';
import SagarFullPose from '/public/images/sagar-full-pose.png';
import Typography from '@/components/general/typography';
import IconButton from '@/components/general/icon-button';
import Tag from '@/components/data-display/tag';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="w-full bg-gray-0 py-12 md:py-20 2xl:py-32">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 bg-gray-0 px-4 md:flex-row md:px-8">
          {/* Image */}
          <div className="flex flex-grow items-center justify-center md:order-last md:justify-end">
            <div className="relative h-[328px] w-[258px] md:h-[368px] md:w-[298px]">
              <Image
                src={SagarHeadshot}
                alt="Headshot of Sagar"
                className="absolute z-10 h-[296px] w-[226px] border-[8px] border-gray-0 md:h-[336px] md:w-[266px]"
                style={{ objectFit: 'cover' }}
              ></Image>
              <div className="absolute left-12 top-12 h-[280px] w-[210px] bg-gray-200 md:h-[320px] md:w-[250px]"></div>
            </div>
          </div>

          {/* Content */}
          <div className="flex max-w-3xl flex-grow flex-col justify-center gap-6 md:order-first md:items-start md:justify-center md:gap-8 2xl:gap-12">
            <div className="flex flex-col gap-2">
              <Typography variant="h1">
                Hi, I&apos;m Sagar{' '}
                <span className="inline-block animate-waving-hand">👋</span>
              </Typography>
              <Typography>
                I&apos;m a full stack developer (React.js & Node.js) with a
                focus on creating (and occasionally designing) exceptional
                digital experiences that are fast, accessible, visually
                appealing, and responsive. Even though I have been creating web
                applications for over 7 years, I still love it as if it was
                something new.
              </Typography>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <MapPinIcon className="stroke-gray-600" />
                <Typography>Ahmedabad, India</Typography>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center">
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
                  </span>
                </div>
                <Typography>Available for new projects</Typography>
              </div>
            </div>
            <div className="flex gap-1">
              <IconButton>
                <Github />
              </IconButton>
              <IconButton>
                <Twitter />
              </IconButton>
              <IconButton>
                <Figma />
              </IconButton>
              <IconButton>
                <Mail />
              </IconButton>
            </div>
          </div>
        </div>
      </div>

      {/* About Me Section */}
      <div className="w-full bg-gray-50 py-12 md:py-20 2xl:py-32">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-4 md:px-8">
          <div className="self-center">
            <Tag label="About me" />
          </div>

          <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
            {/* Image */}
            <div className="flex justify-center md:order-first md:justify-end">
              <div className="relative h-[540px] w-[444px]">
                <Image
                  src={SagarFullPose}
                  alt="Fullpose of Sagar"
                  className="absolute right-0 top-0 z-10 h-[488px] w-[392px] border-[8px] border-gray-50"
                  style={{ objectFit: 'cover' }}
                ></Image>
                <div className="absolute bottom-0 h-[480px] w-[384px] bg-gray-200"></div>
              </div>
            </div>

            {/* Content */}
            <div className="flex max-w-xl flex-col gap-6">
              <Typography variant="h3">
                Curious about me? Here you have it:
              </Typography>
              <Typography>
                I&apos;m a passionate, self-proclaimed designer who specializes
                in full stack development (React.js & Node.js). I am very
                enthusiastic about bringing the technical and visual aspects of
                digital products to life. User experience, pixel perfect design,
                and writing clear, readable, highly performant code matters to
                me.
              </Typography>
              <Typography>
                I began my journey as a web developer in 2015, and since then,
                I&apos;ve continued to grow and evolve as a developer, taking on
                new challenges and learning the latest technologies along the
                way. Now, in my thirties, 7 years after starting my web
                development journey, I&apos;m building cutting-edge web
                applications using modern technologies such as Next.js,
                TypeScript, Nestjs, Tailwindcss, Supabase and much more.
              </Typography>
              <Typography>
                I am very much a progressive thinker and enjoy working on
                products end to end, from ideation all the way to development.
              </Typography>
              <Typography>
                When I&apos;m not in full-on developer mode, you can find me
                hovering around on twitter or on indie hacker, witnessing the
                journey of early startups or enjoying some free time. You can
                follow me on Twitter where I share tech-related bites and build
                in public, or you can follow me on GitHub.
              </Typography>
              <Typography>Finally, some quick bits about me.</Typography>
              <div className="flex gap-6">
                <ul className="flex list-inside list-disc flex-col gap-2">
                  <li>B.E. in Computer Engineering</li>
                  <li>Full time freelancer</li>
                </ul>
                <ul className="flex list-inside list-disc flex-col gap-2">
                  <li>Avid learner</li>
                  <li>Future indie hacker</li>
                </ul>
              </div>
              <Typography>
                One last thing, I&apos;m available for freelance work, so feel
                free to reach out and say hello! I promise I don&apos;t bite 😉
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
