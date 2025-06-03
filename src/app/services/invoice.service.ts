import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Invoice } from '../models/invoice.types';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  private dataUrl = 'assets/data/data.json'

  constructor(private http: HttpClient) { }
   getInvoices(): Observable<Invoice[]> {
    return this.http.get<Invoice[]>(this.dataUrl);
  }

  // Add methods later:
  // getInvoiceById(id: string) { ... }
  // addInvoice(invoice: Invoice) { ... }
  // updateInvoice(invoice: Invoice) { ... }
  // deleteInvoice(id: string) { ... }

}
