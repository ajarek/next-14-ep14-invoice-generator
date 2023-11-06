import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { ClientForm } from '@/components/ClientForm'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-4">
     <ClientForm/>
    </main>
  )
}
