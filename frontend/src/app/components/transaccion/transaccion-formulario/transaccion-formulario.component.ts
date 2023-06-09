import { Component, OnInit } from '@angular/core';
import { Transaccion } from 'src/app/models/transaccion';
import { TransaccionService } from 'src/app/services/transaccion.service';

@Component({
  selector: 'app-transaccion-formulario',
  templateUrl: './transaccion-formulario.component.html',
  styleUrls: ['./transaccion-formulario.component.css']
})
export class TransaccionFormularioComponent implements OnInit {
  selectedCurrencies: Array<string> = [];
  allCurrencies!: Array<any>;
  convertedCurrency!: number;
  conversionTable: Array<Array<string>> = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];

  amount!: number;
  from!: string;
  to!: string;
  emailClient!:string;
  transaccionAgregada!:string;

  constructor(private transaccionService: TransaccionService) { }

  ngOnInit(): void {
    this.getCurrencies();
  }
  getCurrencies() {
    this.transaccionService.getCurrencyCodes().subscribe(
      result => {
        this.selectedCurrencies.push(result[0].symbol); //USD 0
        this.selectedCurrencies.push(result[4].symbol); //ARS 1
        this.selectedCurrencies.push(result[47].symbol); //EUR 2
        this.allCurrencies = result;
        this.loadTable();
      },
      error => {
        console.log("error: " + error)
      }
    )
  }
  loadTable() {
    this.transaccionService.getConversion(this.selectedCurrencies[0], this.selectedCurrencies[1], 1).subscribe(
      resultado => {
        this.conversionTable[0][1] = resultado.result.convertedAmount;
        this.conversionTable[1][0] = resultado.result.convertedAmount;
        this.transaccionService.getConversion(this.selectedCurrencies[0], this.selectedCurrencies[2], 1).subscribe(
          resultado => {
            this.conversionTable[0][2] = resultado.result.convertedAmount;
            this.conversionTable[2][0] = resultado.result.convertedAmount;
            this.transaccionService.getConversion(this.selectedCurrencies[1], this.selectedCurrencies[2], 1).subscribe(
              resultado => {
                this.conversionTable[1][2] = resultado.result.convertedAmount;
                this.conversionTable[2][1] = resultado.result.convertedAmount;
              },
              error => { console.log("error: " + error) }
            )
          },
          error => { console.log("error: " + error) }
        )
      },
      error => { console.log("error: " + error) }
    )
  }

  convertCurrency() {
    this.transaccionService.getConversion(this.from, this.to, this.amount).subscribe(
      resultado => {
        this.convertedCurrency = resultado.result.convertedAmount;
        let nuevaTransaccion: Transaccion = new Transaccion();
        nuevaTransaccion.monedaOrigen = resultado.result.from;
        nuevaTransaccion.monedaDestino = resultado.result.to;
        nuevaTransaccion.cantidadOrigen = resultado.result.amountToConvert;
        nuevaTransaccion.cantidadDestino = resultado.result.convertedAmount;
        nuevaTransaccion.emailCliente = this.emailClient;
        nuevaTransaccion.tasaConversion = resultado.result.convertedAmount / resultado.result.amountToConvert;
        this.transaccionService.getConversion2(nuevaTransaccion).subscribe(
          resultado => {
            this.transaccionAgregada = resultado.msg;

          },
          error => {
            console.log("error: " + error)
          }
        )
      },
      error => {
        console.log("error: " + error)
      }
    )
  }
}
