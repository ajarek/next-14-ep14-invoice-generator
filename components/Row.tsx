'use client'
import {saveStorage} from '@/lib/localStorage'
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


const Row = () => {
  
  const [nr, setNr] = useState<string>()
  const [name, setName] = useState<string>()
  const [quantity, setQuantity] = useState<string>()
  const [price, setPrice] = useState<string>()
  const [vat, setVat] = useState<string>()
  let rowPrice = Number((Number(quantity) * Number(price) * (1 + Number(vat) / 100)).toFixed(2) )

  const handleAdd=()=>{
    const row={nr,name,quantity,price,vat,rowPrice}
    if(rowPrice!==0&&nr&&name&&quantity&&price){
      saveStorage(row,'ItemRows')  
      alert('dodano pozycję o nazwie '+ name )       
      setNr('')
      setName('')
      setQuantity('')
      setPrice('')
      setVat('')
     
    }
    else{alert('wypełnij wszystkie pola')}
    
  }

  return (
    <>
      <TableCell>
        <Input
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setNr(event.target.value)
          }
          value={nr}
        />
      </TableCell>
      <TableCell>
        <Input
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setName(event.target.value)
          }
          value={name}
          required
        />
      </TableCell>
      <TableCell>
        <Input
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setQuantity(event.target.value)
          }
          value={quantity}
        />
      </TableCell>
      <TableCell>
        <Input
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setPrice(event.target.value)
          }
          value={price}
        />
      </TableCell>

      <TableCell>
        <Select  onValueChange={(event) => setVat(event)}>
          <SelectTrigger className='w-[150px]'>
            <SelectValue placeholder='Wybierz VAT' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='23'>23%</SelectItem>
            <SelectItem value='8'>8%</SelectItem>
            <SelectItem value='5'>5%</SelectItem>
            <SelectItem value='0'>0%</SelectItem>
          </SelectContent>
        </Select>
      </TableCell>

      <TableCell>{rowPrice}</TableCell>
      <TableCell>
        <Button onClick={handleAdd}>Dodaj</Button>
      </TableCell>
    </>
  )
}

export default Row
