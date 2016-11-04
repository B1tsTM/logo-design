import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import 'moment/min/locales';

@Pipe({
   name: 'localDateFromNow'
})
export class LocalDateFromNowPipe implements PipeTransform {
   transform(date: any, args?: any): any {
     moment.locale('lt-lt');
     let d = new Date(date)
     return moment(d).calendar()

   }
}