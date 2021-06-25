import Head from 'next/head'
import Channel from '@/components/Channel'
import Sidebar from '@/components/Sidebar'

export default function Home() {
  return (
    <>
      <Head>
        <title>Chat Group</title>
        <meta name="description" content="Chat group app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div className="font-sans flex text-extralight-gray">
    <Sidebar />
    <Channel />
    </div>
    </>
  )
}
