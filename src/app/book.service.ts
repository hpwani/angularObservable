import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs/internal/Observable';
import { Observable, of } from 'rxjs';
import { Book } from './book';
// import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  bookUrl = '/api/books';

  constructor(private http: HttpClient) { }

  // getBookFromStore(): Observable<Book[]> {
  //   return this.http.get<Book[]>(this.bookUrl);
  // }

  /* Observable with async pipe and ngIf */
  getBookFromStore(id: number): Observable<Book> {
    return this.http.get<Book>(this.bookUrl + '/' + id);
  }
}
