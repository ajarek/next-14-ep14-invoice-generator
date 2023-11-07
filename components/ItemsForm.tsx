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


export const ItemsForm = ()=>{
  const [row, setRow]=useState([<Row key={Math.floor(Math.random()*1000)}/>])
  return (
    <div>
      <Button onClick={()=>setRow([...row,<Row key={Math.floor(Math.random()*1000)}/>])}>dodaj</Button>
      <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead className="w-[100px]">Nr</TableHead>
        <TableHead>Nazwa </TableHead>
        <TableHead>Ilość</TableHead>
        <TableHead>Cena</TableHead>
        <TableHead>Vat</TableHead>
        <TableHead>Razem</TableHead>
        <TableHead>Usuń</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
    {row.map((el,index)=>{
          return(
            <TableRow key={index}>{el}</TableRow>
          )
        })}
        </TableBody>
    </Table>
     
        
      
    </div>
  )
}


