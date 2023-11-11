'use client'

import React from 'react'
import { fetchStorage } from '@/lib/localStorage'
import Link from 'next/link'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
const ItemsData = () => {
  const items = fetchStorage('ItemRows')
  const allPrice = items.reduce((acc: any, item: { rowPrice: number }) => acc + item.rowPrice, 0)
  const nettoAllPrice =items.reduce((acc: number, item: { price: number; quantity: number }) => acc + item.price*item.quantity, 0)
  const vatAllPrice = allPrice-nettoAllPrice

  return (
    <>
      {items ? (
        <div className=' px-6 border-muted border-2  rounded-lg relative'>
          <Table>
            <TableCaption className='border text-right py-2'>
               <span className='mr-8'>
              Do zapłaty:

              </span>
               Netto
              <span className='text-xl mx-2'>{(nettoAllPrice).toFixed(2)} </span>
              VAT
              <span className='text-xl mx-2'>{(vatAllPrice).toFixed(2)} </span>
              Brutto
              <span className='text-xl ml-2'>{allPrice.toFixed(2)} PLN</span>
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className='w-[100px]'>Nr</TableHead>
                <TableHead>Nazwa </TableHead>
                <TableHead>Ilość</TableHead>
                <TableHead>Cena PLN</TableHead>
                <TableHead>Stawka Vat</TableHead>
                <TableHead>Razem</TableHead>
                <TableHead>Akcja</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {items.map((el: { nr: string ; name: string ; quantity: string ; price: string ;vat:string; rowPrice: number }) => (
                <TableRow key={el.nr}>
                  <TableCell>{el.nr}</TableCell>
                  <TableCell>{el.name}</TableCell>
                  <TableCell>{el.quantity}</TableCell>
                  <TableCell>{(+el.price).toFixed(2)}</TableCell>
                  <TableCell>{el.vat}%</TableCell>
                  <TableCell>{el.rowPrice.toFixed(2)}</TableCell>
                  <TableCell>{'❌'}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : (
        <div className='flex flex-col items-center gap-4'>
          <p className=' text-2xl text-red-500'>Brak danych!</p>
          <Link
            href={'/'}
            className=' text-xl bg-violet-700 px-4 py-2 rounded-sm hover:bg-violet-500'
          >
            Wprowadź Dane
          </Link>
        </div>
      )}
    </>
  )
}

export default ItemsData