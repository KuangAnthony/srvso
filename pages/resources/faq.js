import Head from 'next/head';

export default function FAQ() {
  return (
    <>
      <Head>
        <title>FAQ — SRVSO</title>
      </Head>
      <div className="mb-12">
        <h2 className="mb-4">FAQ</h2>
        <p className="text-lg">
          This is a document containing questions that we often get.
        </p>
      </div>
      <div className="flex flex-col w-full overflow-hidden h-[800px]">
        <iframe
          title="SRVSO FAQ"
          src="/documents/srvso-faq.pdf"
          allowFullScreen="true"
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          className="flex-grow"
        />
      </div>
    </>
  );
}