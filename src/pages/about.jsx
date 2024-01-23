import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import portraitImage from '@/images/about.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        target="_blank"
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Kaleb Swartz</title>
        <meta
          name="description"
          content="I’m Kaleb Swartz, a Software Engineer"
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Hi! I’m Kaleb Swartz
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I’ve been curious about the world for as long as I can remember.
                Thoughts like, &quot;Why am I here?&quot;, &quot;What am I here
                for?&quot;, &quot;I can&apos;t believe I&apos;m here at
                all!&quot; have lingered in my mind since I was a kid.
              </p>
              <p>
                Using and discovering technology only increased my curiosity -
                I&apos;ll never forget the first time I played Mario Cart on the
                Gamecube - it felt as if real magic had entered the world. It
                wasn&apos;t until I started programming that I got a glimpse
                behind the curtain and discovered how such mesmerizing digital
                experiences come to be. While in some sense it may have taken
                away a bit of the wonder, it moreso enhanced it. It allowed me
                to partake in the process - to create things that others may
                perceive as magic.
              </p>
              <p>
                I love developing software for its unique blend of creative
                thinking and logical reasoning. I&apos;m not sure this
                combination of attributes can be found in many other
                disciplines. I, as a developer, get to create beautiful things
                out of nothing and in turn image the God who created me. I get
                to use tools and a blank canvas to line-by-line create whatever
                could be imagined.
              </p>
              <p>
                I&apos;m grateful to have stumbled upon this career. I
                can&apos;t think of another I would rather pursue. My goal is to
                continue to learn, grow, and create wonderful offerings that
                help re-enchant the world and make it a better place.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="https://www.github.com/kalebswartz7/"
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/kalebswartz7/"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:kalebswartz7@gmail.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                kalebswartz7@gmail.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
