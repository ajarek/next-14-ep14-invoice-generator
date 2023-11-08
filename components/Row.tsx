'use client'

import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const Row = () => {
  const [nr,setNr]=useState<string>()
  const [name,setName]=useState<string>()
  const [quantity,setQuantity]=useState<string>()
  const [price,setPrice]=useState<string>()
  const [vat,setVat]=useState<string>()

  const dataRow={nr,name,quantity,price,vat}
 

  const rowPrice= Number(quantity)*Number(price)*(1+Number(vat)/100)||0
  
  return (
    
    
    <>
      
        <TableCell><Input onChange={(event: React.ChangeEvent<HTMLInputElement>)=>setNr(event.target.value)}/></TableCell>
        <TableCell><Input onChange={(event: React.ChangeEvent<HTMLInputElement>)=>setName(event.target.value)}/></TableCell>
        <TableCell><Input onChange={(event: React.ChangeEvent<HTMLInputElement>)=>setQuantity(event.target.value)}/></TableCell>
        <TableCell><Input onChange={(event: React.ChangeEvent<HTMLInputElement>)=>setPrice(event.target.value)}/></TableCell>
        <TableCell><Input onChange={(event: React.ChangeEvent<HTMLInputElement>)=>setVat(event.target.value)}/></TableCell>
        <TableCell>{rowPrice.toFixed(2)}</TableCell>
        <TableCell><Button>Usuń</Button></TableCell>
        <TableCell><Button className='bg-transparent hover:bg-transparent'><Input type='checkbox' className='w-[30px] h-[30px] ' /></Button></TableCell>
     
        </>
  
  
  )
}

export default Row
