import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import 'rxjs/Rx';

@Injectable()
export class OrdersService {

  constructor(private httpClient: HttpClient) {}

  handleError(error: any) {
    const errorMsg = error.message || ' There was was a problem with service.We couldn\'t perform your operation!';
    // console.error(errorMsg);
    // throw an application level error
    return Observable.throw(errorMsg);
  }

  orders() {
    const url = environment.serviceUrl + 'orders';
    return this.httpClient.get(url)
      .map(
        (res: Response) => {
          return res;
        }
      )
      .catch(this.handleError);
  }

}
