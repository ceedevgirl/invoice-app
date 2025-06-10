import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { InvoiceService } from '../../services/invoice.service';
import { Invoice } from '../../model/invoice';

@Component({
  selector: 'app-invoice-details',
  imports: [CommonModule],
  templateUrl: './invoice-details.component.html',
  styleUrls: ['./invoice-details.component.scss']
})
export class InvoiceDetailsComponent implements OnInit {
  invoice!: Invoice;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private invoiceService: InvoiceService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.invoiceService.getInvoiceById(id).subscribe((data: Invoice | undefined) => {
        if (data) {
          this.invoice = data;
        } else {
          this.router.navigate(['/invoices']); // redirect if not found
        }
      });
    }
  }

  goBack(): void {
    this.router.navigate(['/invoices']);
  }

  editInvoice(): void {
    this.router.navigate(['/invoices', this.invoice.id, 'edit']);
  }

  deleteInvoice(): void {
    this.invoiceService.deleteInvoice(this.invoice.id).subscribe(() => {
      this.router.navigate(['/invoices']);
    });
  }

  markAsPaid(): void {
    if (this.invoice.status === 'paid') return;

    const updated: Invoice = {
      ...this.invoice,
      status: 'paid' as 'paid'
    };

    this.invoiceService.updateInvoice(updated).subscribe(() => {
      this.invoice.status = 'paid';
    });
  }
}
