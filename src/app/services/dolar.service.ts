import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Dolar } from "../models/dolar";

@Injectable({
  providedIn: "root"
})
export class DolarService {

  private url = 'https://economia.awesomeapi.com.br/last/USD';

  constructor(private httpCliente: HttpClient) { }

  getDolar(): Observable<Dolar> {
    return this.httpCliente.get<Dolar>(this.url);
  }
}