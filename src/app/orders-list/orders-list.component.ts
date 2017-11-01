import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css'],
  providers: [OrdersService]

})
export class OrdersListComponent implements OnInit {
  orders: any;
  constructor(private ordersService: OrdersService) { }

  ngOnInit() {
    this.fetchOrders();
  }

  fetchOrders() {
    return this.ordersService.orders().subscribe(
        (res) => {
          this.orders = res;
          console.log(this.orders);
        }
    );
  }

}
