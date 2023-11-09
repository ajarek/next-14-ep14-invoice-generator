'use client'

import React, { useEffect, useState } from 'react'
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
} from '@/components/ui/table'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { saveStorage, deleteStorage } from '@/lib/localStorage'

const Row = () => {
  
  const [nr, setNr] = useState<string>()
  const [name, setName] = useState<string>()
  const [quantity, setQuantity] = useState<string>()
  const [price, setPrice] = useState<string>()
  const [vat, setVat] = useState<string>()
  let rowPrice = Number(quantity) * Number(price) * (1 + Number(vat) / 100) || 0



 
  useEffect(() => {
    const dataRow = { nr, name, quantity, price, vat, rowPrice }
    if (rowPrice !== 0) {
      saveStorage(dataRow, 'ArrayRow')
    }
  }, [rowPrice, name, nr, price, quantity, vat])

  return (
    <>
      <TableCell>
        <Input
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setNr(event.target.value)
          }
        />
      </TableCell>
      <TableCell>
        <Input
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setName(event.target.value)
          }
        />
      </TableCell>
      <TableCell>
        <Input
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setQuantity(event.target.value)
          }
        />
      </TableCell>
      <TableCell>
        <Input
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setPrice(event.target.value)
          }
        />
      </TableCell>

      <TableCell>
        <Select onValueChange={(event) => setVat(event)}>
          <SelectTrigger className='w-[150px]'>
            <SelectValue placeholder='Wybierz VAT' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='7'>7</SelectItem>
            <SelectItem value='23'>23</SelectItem>
            <SelectItem value='0'>0</SelectItem>
          </SelectContent>
        </Select>
      </TableCell>

      <TableCell>{rowPrice.toFixed(2)}</TableCell>
      <TableCell>
        <Button>Usuń</Button>
      </TableCell>
    </>
  )
}

export default Row
