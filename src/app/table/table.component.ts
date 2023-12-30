import { Component } from '@angular/core';

import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  Users = [
    {
      hash: '1',

      Name: 'احمد محمود',
      image: '../../assets/images/first.png',

      ticketNo: 'C-101',
      Price: '40$',
      Cinema: '.....سينما مصر , مول العرب , برج الأطنان , سرايا القبة ',
      PeopleNo: '1',
      buyTimes: 'مرة واحدة',
      Ticket: 'pdf.تذكرة رقم 45.',
    },
    {
      hash: '2',
      image: '../../assets/images/Second.jpg',
      Name: 'محمد الغريب ',
      ticketNo: 'C-102',
      Price: '30$',
      Cinema: '.....سينما مصر , مول العرب , برج الأطنان , سرايا القبة ',
      PeopleNo: '1',
      buyTimes: 'مرة واحدة',
      Ticket: 'pdf.تذكرة رقم 45.',
    },
    {
      hash: '3',
      image: '../../assets/images/third.jpg',
      Name: 'محمد الغريب ',
      ticketNo: 'C-102',
      Price: '45$',
      Cinema: '.....سينما مصر , مول العرب , برج الأطنان , سرايا القبة ',
      PeopleNo: '1',
      buyTimes: 'مرة واحدة',
      Ticket: 'pdf.تذكرة رقم 45.',
    },
    {
      hash: '4',
      image: '../../assets/images/forth.png',

      Name: 'محمد الغريب ',
      ticketNo: 'C-103',
      Price: '54$',
      Cinema: '.....سينما مصر , مول العرب , برج الأطنان , سرايا القبة ',
      PeopleNo: '1',
      buyTimes: 'مرة واحدة',
      Ticket: 'pdf.تذكرة رقم 45.',
    },
  ];
}
