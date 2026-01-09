import { Component } from '@angular/core';
import { Customer18Service } from '../customer18-service';

@Component({
  selector: 'app-customer18',
  standalone: false,
  templateUrl: './customer18.html',
  styleUrl: './customer18.css',
})
export class Customer18 {
  customerTypes: any[] = [];
  
  constructor(private customer18Service: Customer18Service) {
    console.log('Customer18 component initialized');
    this.customer18Service.getAllCustomers().subscribe({
      next: (data) => {
        console.log('Customer data received:', data);
        this.customerTypes = data;
        console.log('Customer types array:', this.customerTypes);
      },
      error: (err) => {
        console.error('Error fetching customers:', err);
      }
    });
  }
}
