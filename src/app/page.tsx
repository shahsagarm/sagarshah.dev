import Image from 'next/image';
import { MapPin } from 'lucide-react';

import { EXPERIENCES, PROJECTS, TECHNOLOGIES, TESTIMONIALS } from '@/lib/data';
import SagarHeadshot from '/public/images/sagar-headshot.jpg';
import SagarFullPose from '/public/images/sagar-full-pose.jpg';
import Typography from '@/components/general/typography';
import Tag from '@/components/data-display/tag';
import Container from '@/components/layout/container';
import TechDetails from '@/components/data-display/tech-details';
import ExperienceDetails from '@/components/data-display/experience-details';
import SocialIcons from '@/components/data-display/social-icons';
import ProjectDetails from '@/components/data-display/project-details';
import TestimonialDetails from '@/components/data-display/testimonial-details';
import ContactSection from '@/app/sections/contact';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Container id="hero">
        <div className="flex flex-col gap-12 md:flex-row">
          {/* Image */}
          <div className="flex items-center justify-center md:order-last md:flex-grow md:justify-end">
            <div className="relative h-[300px] w-[280px] md:h-[360px] md:w-[320px]">
              <Image
                src={SagarHeadshot}
                alt="Headshot of Sagar"
                className="absolute z-10 h-[280px] w-[240px] border-8 border-gray-0 max-md:left-5 md:left-0 md:top-0 md:h-[320px] md:w-[280px]"
                style={{ objectFit: 'cover' }}
              ></Image>
              <div className="absolute h-[280px] w-[280px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:right-0 md:h-[320px] md:w-[280px]"></div>
            </div>
          </div>

          {/* Content */}
          <div className="flex max-w-3xl flex-grow flex-col justify-center gap-8 md:order-first md:items-start md:justify-center 2xl:gap-12">
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
                <MapPin className="stroke-gray-600" />
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
            <SocialIcons />
          </div>
        </div>
      </Container>

      {/* About Me Section */}
      <Container className="bg-gray-50" id="about">
        <div className="self-center">
          <Tag label="About me" />
        </div>

        <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
          {/* Image */}
          <div className="flex justify-center md:order-first md:justify-end">
            <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
              <Image
                src={SagarFullPose}
                alt="Fullpose of Sagar"
                className="absolute z-10 h-[360px] w-[280px] border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"
                style={{ objectFit: 'cover' }}
              ></Image>
              <div className="absolute h-[360px] w-[320px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"></div>
            </div>
          </div>

          {/* Content */}
          <div className="flex max-w-xl flex-col gap-6">
            <Typography variant="h3">
              Curious about me? Here you have it:
            </Typography>
            <Typography>
              I&apos;m a passionate, self-proclaimed designer who specializes in
              full stack development (React.js & Node.js). I am very
              enthusiastic about bringing the technical and visual aspects of
              digital products to life. User experience, pixel perfect design,
              and writing clear, readable, highly performant code matters to me.
            </Typography>
            <Typography>
              I began my journey as a web developer in 2015, and since then,
              I&apos;ve continued to grow and evolve as a developer, taking on
              new challenges and learning the latest technologies along the way.
              Now, in my early thirties, 7 years after starting my web
              development journey, I&apos;m building cutting-edge web
              applications using modern technologies such as Next.js,
              TypeScript, Nestjs, Tailwindcss, Supabase and much more.
            </Typography>
            <Typography>
              I am very much a progressive thinker and enjoy working on products
              end to end, from ideation all the way to development.
            </Typography>
            <Typography>
              When I&apos;m not in full-on developer mode, you can find me
              hovering around on twitter or on indie hacker, witnessing the
              journey of early startups or enjoying some free time. You can
              follow me on Twitter where I share tech-related bites and build in
              public, or you can follow me on GitHub.
            </Typography>
            <Typography>Finally, some quick bits about me.</Typography>
            <div className="flex flex-col gap-2 md:flex-row md:gap-6">
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
      </Container>

      {/* Skills Section */}
      <Container>
        <div className="flex flex-col items-center gap-4">
          <div className="self-center">
            <Tag label="Skills" />
          </div>
          <Typography variant="subtitle" className="max-w-xl text-center">
            The skills, tools and technologies I am really good at:
          </Typography>
        </div>

        <div className="grid grid-cols-3 gap-y-4 md:grid-cols-6 md:gap-y-8 lg:grid-cols-8 lg:gap-y-12">
          {TECHNOLOGIES.map((technology, index) => (
            <TechDetails {...technology} key={index} />
          ))}
        </div>
      </Container>

      {/* Experience Section */}
      <Container className="bg-gray-50">
        <div className="flex flex-col items-center gap-4">
          <div className="self-center">
            <Tag label="Experience" />
          </div>
          <Typography variant="subtitle" className="max-w-xl text-center">
            Here is a quick summary of my most recent experiences:
          </Typography>
        </div>

        {EXPERIENCES?.map((experience, index) => (
          <ExperienceDetails {...experience} key={index} />
        ))}
      </Container>

      {/* Work Section */}
      <Container id="work">
        <div className="flex flex-col items-center gap-4">
          <div className="self-center">
            <Tag label="Work" />
          </div>
          <Typography variant="subtitle" className="max-w-xl text-center">
            Some of the noteworthy projects I have built:
          </Typography>
        </div>

        {PROJECTS?.map((project, index) => (
          <ProjectDetails
            key={index}
            {...project}
            layoutType={index % 2 === 0 ? 'default' : 'reverse'}
          />
        ))}
      </Container>

      {/* Testimonials Section */}
      <Container id="testimonials" className="bg-gray-50">
        <div className="flex flex-col items-center gap-4">
          <div className="self-center">
            <Tag label="Testimonials" />
          </div>
          <Typography variant="subtitle" className="max-w-xl text-center">
            Nice things people have said about me:
          </Typography>
        </div>

        <div className="flex gap-12 max-md:flex-col md:max-lg:flex-wrap">
          {TESTIMONIALS?.map((testimonial, index) => (
            <TestimonialDetails key={index} {...testimonial} />
          ))}
        </div>
      </Container>

      {/* Contact Section */}
      <ContactSection />
    </>
  );
}
