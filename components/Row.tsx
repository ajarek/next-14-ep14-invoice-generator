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
  return (
    
    
    <>
      
        <TableCell><Input/></TableCell>
        <TableCell><Input/></TableCell>
        <TableCell><Input/></TableCell>
        <TableCell><Input/></TableCell>
        <TableCell><Input/></TableCell>
        <TableCell>250.00</TableCell>
        <TableCell><Button>Usuń</Button></TableCell>
     
        </>
  
  
  )
}

export default Row
