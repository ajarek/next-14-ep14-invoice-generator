'use client'

import React from 'react'
import { fetchStorage } from '@/lib/localStorage'
import Link from 'next/link'

const ClientData = () => {
  const client = fetchStorage('Client')

  return (
    <div className='mb-8'>
       {client?
    <>
    <p className='text-right'>Wystawiono dnia: <span className=''>{client.invoiceDate}</span></p>
    <h1 className='text-center text-2xl m-8 '>Faktura VAT Nr <span>{client.invoiceNumber}</span></h1>
    <div className='flex items-start justify-between'>
     
    <div>
    <p>Sprzedawca: <span className=' text-xl'>{client?.company}</span></p>
    <p>Adres: <span className=' text-xl'>{client?.address}</span></p>
    <p>Nip: <span className=' text-xl'>{client?.nipExhibitor}</span></p>
    </div>
    <div>
    <p>Odbiorca: <span className=' text-xl'>{client?.name}</span></p>
    <p>Adres: <span className=' text-xl'>{client?.customerAddress}</span></p>
    <p>Nip: <span className=' text-xl'>{client?.nipCustomer}</span></p>
    </div>
    </div>
    </>
    :
    <div className='flex flex-col items-center gap-4'>
    <p className=' text-2xl text-red-500'>Brak danych!</p>
    <Link href={'/'} className=' text-xl bg-violet-700 px-4 py-2 rounded-sm hover:bg-violet-500'>Wprowadź Dane</Link>
    </div>
    }
    </div>
  )
}

export default ClientData