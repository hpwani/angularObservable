import { Observable } from 'rxjs/internal/Observable';
import { BookService } from './book.service';
import { Component } from '@angular/core';
import { Book } from './book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Observable';
  // softBook: Book[];
  // softBook: Observable<Book[]>; /* Observable with async pipe and ngFor */
  softBook: Observable<Book>; /* Observable with async pipe and ngIf */
  constructor(private bookservices: BookService) {}
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.getSoftBook();
  }

  // getSoftBook() {
  //   this.bookservices.getBookFromStore().subscribe(books => this.softBook = books);
  // }

  /* Observable with async pipe and ngFor */
  getSoftBook() {
    this.softBook = this.bookservices.getBookFromStore(101);
  }
}
