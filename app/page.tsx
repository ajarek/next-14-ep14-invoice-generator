import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { ClientForm } from '@/components/ClientForm'
import { ItemsForm } from '@/components/ItemsForm'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start px-4">
     <ClientForm/>
     <ItemsForm/>
    </main>
  )
}
