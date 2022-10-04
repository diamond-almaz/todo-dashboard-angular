import { Pipe, PipeTransform } from '@angular/core';
import { ITasks, TaskStatus } from '../model/task';

@Pipe({
  name: 'keys'
})
export class KeysPipe implements PipeTransform {

  transform(value: ITasks): TaskStatus[] {
    return Object.keys(value) as TaskStatus[];
}


}
