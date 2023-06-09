import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  constructor(private router: Router ) { }

  ngOnInit(): void {
  }

  isProductActive(): boolean {
    const currentRoute = this.router.url;
    return currentRoute.includes('productolistado') || currentRoute.includes('productoformulario');
  }
  isTransactionActive(): boolean {
    const currentRoute = this.router.url;
    return currentRoute.includes('transaccionlistado') || currentRoute.includes('transaccionformulario');
  }
  isTicketActive(): boolean {
    const currentRoute = this.router.url;
    return currentRoute.includes('ticketlistado') || currentRoute.includes('ticketformulario');
  }
}
