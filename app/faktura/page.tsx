import ClientData from '@/components/ClientData'
import ItemsData from '@/components/ItemsData'

const Faktura = () => {
  return (
    <div className='flex flex-col h-full   py-8 px-20'>
      <ClientData />
      <ItemsData />
    </div>
  )
}

export default Faktura
