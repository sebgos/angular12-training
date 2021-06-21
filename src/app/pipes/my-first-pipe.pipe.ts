import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myFirstPipe'
})
export class MyFirstPipePipe implements PipeTransform {

  transform(value: string, active: boolean = true): string {
    let password ='';
    if (active){
      password = value.replace(/./g, '*');
    } else {
      password = value;
    }
    return password;
  }

}
