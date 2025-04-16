import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TasksComponent } from "./projects/tasks/tasks/tasks.component";
import { ProductsComponent } from "./projects/products/products.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TasksComponent, ProductsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-course';
}
