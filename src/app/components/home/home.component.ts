import { Component } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  arrUsers: User[] = [];

  constructor(private usersService: UsersService) {

  }

  /**
   * getUser
   * @param $event
   * User[]
   */
  async getUsers($event: string): Promise<void> {
    let name = $event;
    //tengo que pedir al servicio los datos de usuarios por el nombre recibido.
    try {
      let response = await this.usersService.getUsersByName(name);
      //this.arrUsers = response.items.slice(1, 11);
      this.arrUsers = response.items;
      console.log(this.arrUsers[0]);
    } catch (err) {
      console.log(err);
    }

  }

}
