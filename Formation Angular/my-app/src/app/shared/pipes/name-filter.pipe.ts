import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name : 'nameFilter'
})
export class NameFilterPipe implements PipeTransform {
  transform(users:Array<any>, filter:string) {
    const regex = new RegExp(`${filter}`, 'i');
    return filter ? users.filter(user => user.name.match(regex)) : users;
  }
}
