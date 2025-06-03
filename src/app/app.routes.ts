import { Routes } from '@angular/router';
import { EditInvoiceFormComponent } from './invoices/edit-invoice-form/edit-invoice-form.component';
import { InvoiceDetailsComponent } from './invoices/invoice-details/invoice-details.component';
import { InvoiceListComponent } from './invoices/invoice-list/invoice-list.component';
import { NewInvoiceFormComponent } from './invoices/new-invoice-form/new-invoice-form.component';

export const routes: Routes = [
     { path: '', redirectTo: '/invoices', pathMatch: 'full' },
  { path: 'invoices', component: InvoiceListComponent },
  { path: 'invoices/new', component: NewInvoiceFormComponent },
  { path: 'invoices/:id', component: InvoiceDetailsComponent },
  { path: 'invoices/:id/edit', component: EditInvoiceFormComponent },
  { path: '**', redirectTo: '/invoices' }
];
