import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceService } from '../../services/invoice.service';
import { RouterLink } from '@angular/router';
import { Invoice } from '../../model/invoice';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-invoice-list',
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.scss']
})
export class InvoiceListComponent implements OnInit {
  invoices: Invoice[] = [];
 filteredInvoices: Invoice[] = [];

filterOptions = {
    draft: false,
    pending: false,
    paid: false
  };

  showFilterOptions = false;

  constructor(private invoiceService: InvoiceService) {}

   ngOnInit(): void {
    this.invoiceService.getInvoices().subscribe((data: Invoice[]) => {
      this.invoices = data;
      this.filteredInvoices = [...data]; 
    });
  }

 
toggleFilterDropdown(): void {
  this.showFilterOptions = !this.showFilterOptions;
}

applyFilters(): void {
  const { draft, pending, paid } = this.filterOptions;

  if (!draft && !pending && !paid) {
    this.filteredInvoices = [...this.invoices]; // No filters: show all
    return;
  }

  this.filteredInvoices = this.invoices.filter(invoice =>
    (draft && invoice.status === 'draft') ||
    (pending && invoice.status === 'pending') ||
    (paid && invoice.status === 'paid')
  );
}

}
