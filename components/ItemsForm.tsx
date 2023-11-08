'use client'

import React, { useState } from 'react'

import { Button } from '@/components/ui/button'
import Row from '@/components/Row'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


export const ItemsForm = () => {
  const [row, setRow] = useState([<Row key={Math.floor(Math.random() * 1000)} />])
  return (
    <div className='p-12 flex flex-col'>
      <Button className='mb-4 self-end bg-green-500  hover:bg-green-400 mx-4' onClick={() => setRow([...row, <Row key={Math.floor(Math.random() * 1000)} />])}>Dodaj</Button>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Nr</TableHead>
            <TableHead>Nazwa </TableHead>
            <TableHead>Ilość</TableHead>
            <TableHead>Cena</TableHead>
            <TableHead>Stawka Vat</TableHead>
            <TableHead>Razem</TableHead>
            <TableHead>Usuń</TableHead>
            <TableHead>Zatwierdź</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {row.map((el, index) => {
            return (
              <TableRow key={index}>{el}</TableRow>
            )
          })}
        </TableBody>
      </Table>



    </div>
  )
}


