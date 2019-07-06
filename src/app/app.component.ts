import { EmployeeService } from './employee.service';
import { Observable } from 'rxjs/internal/Observable';
import { BookService } from './book.service';
import { Component } from '@angular/core';
import { Book } from './book';
import 'rxjs/add/operator/map';
import { Emp } from './emp';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Observable';
  softBook: Book[];
  // softBook: Observable<Book[]>; /* Observable with async pipe and ngFor */
  // softBook: Observable<Book>; /* Observable with async pipe and ngIf */
  // softBook: Observable<string>; /* Observable Map */
  // softBook: string; /* Observable Map with subscribe */
  empInfo: Emp[];
  datasaved = false;
  bookForm: FormGroup;
  allbook: Observable<Book[]>;
  bookidToUpdate = null;

  constructor(private formbuilder: FormBuilder,
              private bookservices: BookService,
              private empservice: EmployeeService) {}
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.bookForm = this.formbuilder.group({
      name: ['', [Validators.required]],
      category: ['', [Validators.required]],
      writer: ['', [Validators.required]]
    });
    this.getSoftBook();
    this.getEmpInfo();
  }

  booktoEdit(bookid: string) {
    this.bookservices.getbookbyid(bookid).subscribe(book => {
      this.bookidToUpdate = bookid;
      this.bookForm.controls['name'].setValue(book.name);
      this.bookForm.controls['category'].setValue(book.category);
      this.bookForm.controls['writer'].setValue(book.writer);
    });
  }

  onSubmit() {
    this.datasaved = false;
    let book = this.bookForm.value;
    this.createbooks(book);
    this.bookForm.reset();
  }
  createbooks(book: Book) {
    if(this.bookidToUpdate == null) {
      this.bookservices.createBook(book).subscribe(book => {
        this.datasaved = true;
        this.getSoftBook();
        this.bookidToUpdate = null;
      });
    } else {
      book.id = this.bookidToUpdate;
      this.bookservices.updatebook(book).subscribe(book => {
        this.datasaved = true;
        this.getSoftBook();
        this.bookidToUpdate = null;
      })
    }

  }

  bookDelete(bookid: string) {
    this.bookservices.deleteBook(bookid).subscribe(book => {
      this.getSoftBook();
    });
  }

  getSoftBook() {
    this.allbook = this.bookservices.getBookFromStore();
  }

  getEmpInfo() {
    this.empservice.getEmployeeDetails().subscribe(employees => this.empInfo = employees);
  }

  // getSoftBook() {
  //   this.bookservices.getBookFromStore().subscribe(books => this.softBook = books);
  // }

  /* Observable with async pipe and ngFor and map */
  // getSoftBook() {
  //   this.softBook = this.bookservices.getBookFromStore(100).map(book => 'Name: ' + book.name);
  // }

  /* Observable Map with subscribe */
  // getSoftBook() {
  //   this.bookservices.getBookFromStore(100).map(book => 'Name: ' + book.name).subscribe(name => {
  //     this.softBook = name;
  //   });
  // }
}
