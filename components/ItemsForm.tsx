'use client'

import React, { useState } from 'react'
import Row from '@/components/Row'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export const ItemsForm = () => {
  return (
    <div className=' px-6 border-muted border-2  rounded-lg relative'>
      <Table>
        <TableCaption>Dodaj Pozycję do Faktury</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className='w-[100px]'>Nr</TableHead>
            <TableHead>Nazwa </TableHead>
            <TableHead>Ilość</TableHead>
            <TableHead>Cena</TableHead>
            <TableHead>Stawka Vat</TableHead>
            <TableHead>Razem</TableHead>
            <TableHead>Akcja</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <Row />
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}
