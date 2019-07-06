import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  bookUrl = '/api/books';

  constructor(private http: HttpClient) { }

  getBookFromStore(): Observable<Book[]> {
    return this.http.get<Book[]>(this.bookUrl);
  }

  createBook(book: Book): Observable<Book> {
    const httpheaders = new HttpHeaders()
    .set('content-type', 'application/Json');
    const options = {
      headers: httpheaders
    };
    return this.http.post<Book>(this.bookUrl, book, options);
  }

  getbookbyid(bookid: string) {
    return this.http.get<Book>(this.bookUrl + "/" + bookid);
  }

  updatebook(book: Book): Observable<number> {
    const httpheaders = new HttpHeaders()
    .set('content-type', 'application/Json');
    const options = {
      headers: httpheaders
    };
    return this.http.put<number>(this.bookUrl + "/" + book.id, book, options);
  }

  deleteBook(bookid: string): Observable<number> {
    const httpheaders = new HttpHeaders()
    .set('content-type', 'application/Json');
    const options = {
      headers: httpheaders
    };
    return this.http.delete<number>(this.bookUrl + "/" + bookid);
  }

  /* Observable with async pipe and ngIf */
  // getBookFromStore(id: number): Observable<Book> {
  //   return this.http.get<Book>(this.bookUrl + '/' + id);
  // }
}
