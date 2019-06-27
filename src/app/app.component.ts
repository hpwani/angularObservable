import { Observable } from 'rxjs/internal/Observable';
import { BookService } from './book.service';
import { Component } from '@angular/core';
import { Book } from './book';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Observable';
  // softBook: Book[];
  // softBook: Observable<Book[]>; /* Observable with async pipe and ngFor */
  // softBook: Observable<Book>; /* Observable with async pipe and ngIf */
  // softBook: Observable<string>; /* Observable Map */
  softBook: string; /* Observable Map with subscribe */
  constructor(private bookservices: BookService) {}
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.getSoftBook();
  }

  // getSoftBook() {
  //   this.bookservices.getBookFromStore().subscribe(books => this.softBook = books);
  // }

  /* Observable with async pipe and ngFor and map */
  // getSoftBook() {
  //   this.softBook = this.bookservices.getBookFromStore(100).map(book => 'Name: ' + book.name);
  // }

  /* Observable Map with subscribe */
  getSoftBook() {
    this.bookservices.getBookFromStore(100).map(book => 'Name: ' + book.name).subscribe(name => {
      this.softBook = name;
    });
  }
}
