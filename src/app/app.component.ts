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
  softBook: Book[];
  constructor(private bookservices: BookService) {}
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.getSoftBook();
  }

  getSoftBook() {
    this.bookservices.getBookFromStore().subscribe(books => this.softBook = books);
  }
}
