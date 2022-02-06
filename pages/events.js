import Head from 'next/head';
import Link from 'next/link';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@components/Tabs';
import { FcIdea } from 'react-icons/fc';

export default function Events() {
  return (
    <>
      <Head>
        <title>Events — SRVSO</title>
      </Head>
      <div className="mb-12">
        <h2 className="mb-4">Events</h2>
        <p className="text-lg">
          The Theory and Build Events for the 2022 competition.
        </p>
      </div>
      <Tabs defaultValue="theory">
        <TabsList>
          <TabsTrigger value="theory">Theory Events</TabsTrigger>
          <TabsTrigger value="build">Build Events</TabsTrigger>
        </TabsList>
        <TabsContent value="theory">
          <ul className="text-xl">
            <li className="flex items-center justify-between my-8">
              <p>Word Problem Wizardry</p>
              <Link href="/resources/theory-event-resources">
                <a>
                  <FcIdea className="w-7 h-7" />
                </a>
              </Link>
            </li>
            <li className="flex items-center justify-between my-8">
              <p>A Broader World</p>
              <Link href="/resources/theory-event-resources">
                <a>
                  <FcIdea className="w-7 h-7" />
                </a>
              </Link>
            </li>
            <li className="flex items-center justify-between my-8">
              <p>Don't Bug Me</p>
              <Link href="/resources/theory-event-resources">
                <a>
                  <FcIdea className="w-7 h-7" />
                </a>
              </Link>
            </li>
          </ul>
        </TabsContent>
        <TabsContent value="build">
          <ul className="text-xl">
            <li className="flex items-center justify-between my-8">
              <p>Barge Building</p>
              <Link href="/resources/theory-event-resources">
                <a>
                  <FcIdea className="w-7 h-7" />
                </a>
              </Link>
            </li>
            <li className="flex items-center justify-between my-8">
              <p>Can Race</p>
              <Link href="/resources/theory-event-resources">
                <a>
                  <FcIdea className="w-7 h-7" />
                </a>
              </Link>
            </li>
            <li className="flex items-center justify-between my-8">
              <p>Popsicle Stick Bridge</p>
              <Link href="/resources/theory-event-resources">
                <a>
                  <FcIdea className="w-7 h-7" />
                </a>
              </Link>
            </li>
          </ul>
        </TabsContent>
      </Tabs>
    </>
  );
}
