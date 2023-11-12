'use client'
import React from 'react'
import { jsPDF } from "jspdf";
import { Button } from '@/components/ui/button';

const PdfCreator = ({company, invoiceNumber,address, nipExhibitor, invoiceDate, name, customerAddress,nipCustomer}) => {
 const print=()=>{
  const doc = new jsPDF({
    orientation: 'p',//portrait,landscape
    unit: "mm",
    format: "a4"
  });
  
  

  doc.setFont('Roboto-Regular', 'normal');
  doc.setFontSize(16);
  doc.text(`Wystawiono dnia: ${invoiceDate}`,130, 10);
  doc.text(`Faktura VAT Nr: ${invoiceNumber}`, 80, 30);
  doc.text(`Sprzedawca:${company}`, 10, 50);
  doc.text(`Adres:${address}`, 10, 55);
  doc.text(`Nip:${nipExhibitor}`, 10, 60);
  doc.text(`Odbiorca:${name}`, 120, 70);
  doc.text(`Adres:${customerAddress}`, 120, 75);
  doc.text(`Nip:${nipCustomer}`, 120, 80);

  doc.save("Faktura.pdf");
 }
  
  return (
    
     <Button  onClick={print}>Utwórz PDF</Button>
    
  )
}

export default PdfCreator