import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InvoiceListComponent } from "./invoices/invoice-list/invoice-list.component";
import { EditInvoiceFormComponent } from "./invoices/edit-invoice-form/edit-invoice-form.component";
import { NewInvoiceFormComponent } from "./invoices/new-invoice-form/new-invoice-form.component";
import { InvoiceDetailsComponent } from "./invoices/invoice-details/invoice-details.component";
import { HeaderComponent } from "./shared/header/header.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InvoiceListComponent, EditInvoiceFormComponent, NewInvoiceFormComponent, InvoiceDetailsComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'invoice-app';
}
