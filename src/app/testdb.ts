import { InMemoryDbService } from 'angular-in-memory-web-api';

export class TestDb implements InMemoryDbService {
  createDb() {
    const empDetails = [
      {id: 101, name: 'Hemant', position: 'UI Developer'},
      {id: 102, name: 'Raj', position: 'Java Developer'},
      {id: 103, name: 'Kunal', position: 'Python Developer'},
    ];
    const bookDetails = [
      {id: 100, name: 'Angular 2', category: 'Web Technology', writer: 'Jon'},
    ];
    return {emp: empDetails, books: bookDetails}
  }
}
