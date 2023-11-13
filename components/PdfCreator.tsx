'use client'
import React from 'react'
import { jsPDF } from 'jspdf'
import 'jspdf-autotable'
import { Button } from '@/components/ui/button'

type AppProps = {
  company: string
  invoiceNumber: string
  address: string
  nipExhibitor: string
  invoiceDate: string
  name: string
  nipCustomer: string
  invoiceItemsTableData: string
  allPrice: string
  customerAddress: string
}

const PdfCreator = ({
  company,
  invoiceNumber,
  address,
  nipExhibitor,
  invoiceDate,
  name,
  customerAddress,
  nipCustomer,
  invoiceItemsTableData,
  allPrice,
}: AppProps) => {
  const print = () => {
    const doc = new jsPDF({
      orientation: 'p', //portrait,landscape
      unit: 'mm',
      format: 'a4',
    })

    doc.setFont('Roboto-Regular', 'normal')
    doc.setFontSize(16)
    doc.text(`Wystawiono dnia: ${invoiceDate}`, 130, 10)
    doc.text(`Faktura VAT Nr: ${invoiceNumber}`, 80, 30)
    doc.text(`Sprzedawca:${company}`, 10, 50)
    doc.text(`Adres:${address}`, 10, 55)
    doc.text(`Nip:${nipExhibitor}`, 10, 60)
    doc.text(`Odbiorca:${name}`, 120, 70)
    doc.text(`Adres:${customerAddress}`, 120, 75)
    doc.text(`Nip:${nipCustomer}`, 120, 80)
    doc.text(`Do zaplaty:${allPrice.toFixed(2)}`, 140, 180)

    const columns = ['Nr', 'Nazwa', 'Ilosc', 'Cena', 'Stawka Vat', 'Razem']

    // Define rows
    const rows = invoiceItemsTableData.map(
      (item: {
        nr: string
        name: string
        quantity: string
        price: string
        vat: string
        rowPrice: string
      }) => [
        item.nr,
        item.name,
        item.quantity,
        item.price,
        item.vat,
        item.rowPrice,
      ]
    )

    // Create the table using jspdf-autotable
    doc.autoTable(columns, rows, {
      startY: 100,
      theme: 'striped', //'grid','plain'
      styles: {
        fontSize: 10,
        cellWidth: 'wrap',
        cellPadding: 2,
      },
      columnStyles: {
        0: { cellWidth: 30 },
        1: { cellWidth: 40 },
        2: { cellWidth: 20 },
        3: { cellWidth: 20 },
        4: { cellWidth: 30 },
        5: { cellWidth: 30 },
      },
      margin: { left: 20, right: 20 },
    })

    doc.save('Faktura.pdf')
  }

  return <Button onClick={print}>Utwórz PDF</Button>
}

export default PdfCreator
