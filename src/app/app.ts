import { Component, signal, WritableSignal, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './interfaces/user.interfaces';
import { UserCard } from "./components/user-card/user-card";
import { Controls } from "./components/controls/controls";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserCard, Controls],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('directorio');

  // user: User = {
  //   id: 1,
  //   name: "Leane Grahan",
  //   username: "LeGra",
  //   email: "legra@gmail.com",
  //   image: "" 
  // }

  // Colección de usuarios
  users: WritableSignal<User[]> = signal([
    {
      id: 1,
      name: "Homero Simpson",
      username: "HomeroSim",
      email: "homer@gmail.com",
      image: "https://img.icons8.com/plasticine/1200/homer-simpson.jpg"
    },
    {
      id: 2,
      name: "Marge Simpson",
      username: "MargeSim",
      email: "marge@gmail.com",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmzQmq3gLnQsvrvvGDnYerJs_hPDmLZ0mWIiDNuL_ZXw&s=10"
    },
    {
      id: 3,
      name: "Bart Simpson",
      username: "BartSim",
      email: "bart@gmail.com",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHt1D1d-1YEsxmfcXdUr6LewnnzfGOO1GUOSoizXKsOQ&s=10"
    },
    {
      id: 4,
      name: "Lisa Simpson",
      username: "LisaSim",
      email: "lisa@gmail.com",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGhWBIMzuroPRlDXhmyzyl7-ze-lIZCcZpSmXFjgXg2A&s=100"
    },
    {
      id: 5,
      name: "Maggie Simpson",
      username: "MaggieSim",
      email: "maggie@gmail.com",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROeDMzMyOnNPWIQWUtrcNJ_gO7P6ulFydtsLhEku4X6g&s=10"
    },
    {
      id: 6,
      name: "Abraham Simpson",
      username: "AbeSim",
      email: "abraham@gmail.com",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2ufWoyakctVYHt8y03yN_QyiGGOz6G9ZwzUTAVLxBhw&s=10"
    },
    {
      id: 7,
      name: "Santa's Little Helper",
      username: "SantasHelper",
      email: "santashelper@gmail.com",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz5H8NAfz0RlSltyqH5nqtzvvv9C5h7jwPeLiRL4HRfQ&s=10"
    }
  ])

  orderById():void {
    this.users.update(users => users.sort((a, b) => a.id - b.id));
  }

  orderByName():void {
    this.users.update(users => users.sort((a, b) => a.name.localeCompare(b.name)));
  }

  reverse():void {
    this.users.update(users => users.reverse());
  }

  // computed() significa derivar un valor a patir de otra señal
  userCount = computed(() => this.users().length);

  deleteUser(id: number): void {
    this.users.update(users =>
      users.filter(user => user.id !== id)
    );
  }
}
