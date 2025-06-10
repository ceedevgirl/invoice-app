import { Routes } from '@angular/router';
import { EditInvoiceFormComponent } from './invoicesComponents/edit-invoice-form/edit-invoice-form.component';
import { InvoiceDetailsComponent } from './invoicesComponents/invoice-details/invoice-details.component';
import { InvoiceListComponent } from './invoicesComponents/invoice-list/invoice-list.component';
import { NewInvoiceFormComponent } from './invoicesComponents/new-invoice-form/new-invoice-form.component';

export const routes: Routes = [
    { path: 'invoices', component: InvoiceListComponent },
  { path: 'invoices/:id', component: InvoiceDetailsComponent },
  { path: 'invoices/new', component: NewInvoiceFormComponent },
  { path: 'invoices/:id/edit', component: EditInvoiceFormComponent },
  { path: '', redirectTo: '/invoices', pathMatch: 'full' }
];
