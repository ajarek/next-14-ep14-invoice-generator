'use client'
import React, { useEffect } from 'react'
import { fetchStorage } from '@/lib/localStorage'
const Faktura = () => {
  const client = fetchStorage('Client')
  return <div className="flex flex-col h-full   py-8 px-20">
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
  </div>
}

export default Faktura
