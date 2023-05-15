import { Pipe, PipeTransform } from '@angular/core';
import {User} from "./user.model";

@Pipe({
  name: 'userFilter'
})

export class UserFilterPipe implements PipeTransform {

  transform(value: User[], input: string): User[] {
    return value.filter(user => ifSearchMatch(user, input));
  }

}


function ifSearchMatch(user: User, input: string) : boolean {
  return user.username.includes(input) || user.email.includes(input);
}
