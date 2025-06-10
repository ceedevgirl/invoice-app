import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, map } from 'rxjs';
import { Address, Invoice, InvoiceItem } from '../model/invoice';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  private dataUrl = 'assets/data/data.json';
  private storageKey = 'invoices';
  private invoices: Invoice[] = [];

  constructor(private http: HttpClient) {}

  getInvoices(): Observable<Invoice[]> {
    const stored = localStorage.getItem(this.storageKey);
    if (stored) {
      this.invoices = JSON.parse(stored);
      return of(this.invoices);
    } else {
      return this.http.get<Invoice[]>(this.dataUrl).pipe(
        map((data) => {
          this.invoices = data;
          this.saveToStorage();
          return this.invoices;
        })
      );
    }
  }

  getInvoiceById(id: string): Observable<Invoice | undefined> {
    return this.getInvoices().pipe(
      map(invoices => invoices.find(inv => inv.id === id))
    );
  }

  addInvoice(newInvoice: Invoice): Observable<boolean> {
    this.invoices.push(newInvoice);
    this.saveToStorage();
    return of(true);
  }

  updateInvoice(updated: Invoice): Observable<boolean> {
    const index = this.invoices.findIndex(inv => inv.id === updated.id);
    if (index !== -1) {
      this.invoices[index] = updated;
      this.saveToStorage();
      return of(true);
    }
    return of(false);
  }

  deleteInvoice(id: string): Observable<boolean> {
    const index = this.invoices.findIndex(inv => inv.id === id);
    if (index !== -1) {
      this.invoices.splice(index, 1);
      this.saveToStorage();
      return of(true);
    }
    return of(false);
  }

  private saveToStorage(): void {
    localStorage.setItem(this.storageKey, JSON.stringify(this.invoices));
  }
}
