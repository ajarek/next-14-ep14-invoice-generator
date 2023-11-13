import { ClientForm } from '@/components/ClientForm'
import { ItemsForm } from '@/components/ItemsForm'
export default function Home() {
  return (
    <main className='flex  flex-col items-center justify-start px-4'>
      <ClientForm />
      <ItemsForm />
    </main>
  )
}
