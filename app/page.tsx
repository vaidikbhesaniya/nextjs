import Image from 'next/image'
import Link from 'next/link'
export default function Home() {
  return (
    <main className="bg-[green] flex min-h-screen flex-col p-24">
<h1>hellow world
</h1> 
<Link href="/about">Go to about page</Link>

    </main>
  )
}
