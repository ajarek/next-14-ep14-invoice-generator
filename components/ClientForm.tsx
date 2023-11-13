'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useEffect } from 'react'
import { saveStorageSingle } from '@/lib/localStorage'
const formSchema = z.object({
  company: z
    .string()
    .min(2, { message: 'Nazwa Firmy musi mieć co najmniej 2 znaki.' }),

  address: z
    .string()
    .min(2, { message: 'Adres Firmy musi mieć co najmniej 5 znaków.' }),
  name: z.string().min(5, { message: 'Adres Firmy musi mieć  10 znaków.' }),

  nipExhibitor: z
    .string()
    .min(10, { message: 'NIP Firmy musi mieć  10 znaków.' })
    .max(10, { message: 'NIP Firmy musi mieć  10 znaków.' }),
  nipCustomer: z
    .string()
    .min(10, { message: 'NIP Firmy musi mieć  10 znaków.' })
    .max(10, { message: 'NIP Firmy musi mieć  10 znaków.' }),
  customerAddress: z
    .string()
    .min(2, { message: 'Adres Firmy musi mieć co najmniej 5 znaków.' }),
  invoiceNumber: z
    .string()
    .min(2, { message: 'Adres Firmy musi mieć co najmniej 5 znaków.' }),
  invoiceDate: z.string(),
})

export function ClientForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    const newClient = {
      company: values.company,
      address: values.address,
      nipExhibitor: values.nipExhibitor,
      name: values.name,
      customerAddress: values.customerAddress,
      nipCustomer: values.nipCustomer,
      invoiceNumber: values.invoiceNumber,
      invoiceDate: values.invoiceDate,
    }
    saveStorageSingle(newClient, 'Client')
    alert('dodano klienta: ' + values.name)
  }

  useEffect(() => {
    if (form.formState.isSubmitSuccessful) {
      form.reset({
        company: '',
        address: '',
        nipExhibitor: '',
        name: '',
        customerAddress: '',
        nipCustomer: '',
        invoiceNumber: '',
        invoiceDate: '',
      })
    }
  }, [form, form.formState, form.reset])

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='w-full grid grid-cols-3 place-items-center space-y-4 my-6 border-muted border-2 p-4 rounded-lg relative '
      >
        <FormField
          control={form.control}
          name='company'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nazwa Wystawcy</FormLabel>
              <FormControl>
                <Input
                  placeholder='Coca-Cola'
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='address'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Adres Wystawcy</FormLabel>
              <FormControl>
                <Input
                  placeholder='Warszawa ul.Woronicza 7'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='nipExhibitor'
          render={({ field }) => (
            <FormItem>
              <FormLabel>NIP Wystawcy</FormLabel>
              <FormControl>
                <Input
                  placeholder='7311300941'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nazwa Klienta</FormLabel>
              <FormControl>
                <Input
                  placeholder='Bar Syrena'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='customerAddress'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Adres Klienta</FormLabel>
              <FormControl>
                <Input
                  placeholder='Kołobrzeg ul. Kotwiczna 7'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='nipCustomer'
          render={({ field }) => (
            <FormItem>
              <FormLabel>NIP Klienta</FormLabel>
              <FormControl>
                <Input
                  placeholder='6711300981'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='invoiceNumber'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Numer Faktury</FormLabel>
              <FormControl>
                <Input
                  placeholder='17/2023'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='invoiceDate'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Data Wystawienia</FormLabel>
              <FormControl>
                <Input
                  className='min-w-[212px]'
                  placeholder='17.10.2023'
                  type='date'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          className='absolute right-8 bottom-4'
          type='submit'
        >
          Zapisz
        </Button>
      </form>
    </Form>
  )
}
