import { Component, input, signal, WritableSignal, output } from '@angular/core';
import { User } from '../../interfaces/user.interfaces';

@Component({
  imports: [],
  selector: 'app-user-card',
  styleUrl: './user-card.css',
  templateUrl: './user-card.html',
})

export class UserCard {
  // user: WritableSignal<User> = signal({
  //   id: 1,
  //   name: "Lisa Simpson",
  //   username: "HomSim",
  //   email: "homero@gmail.com",
  //   image: "https://img.icons8.com/plasticine/1200/homer-simpson.jpg"
  // })

  user = input.required<User>();

  borrarUser = output<number>();

  borrarClick(): void {
    this.borrarUser.emit(this.user().id);
  }
  
}
