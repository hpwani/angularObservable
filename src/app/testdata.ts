import { InMemoryDbService } from 'angular-in-memory-web-api';

export class TestData implements InMemoryDbService {
  createDb() {
    const bookDetails = [
      {id: 100, name: 'Hemant', category: 'UI Developer'},
      {id: 101, name: 'Raj', category: 'Java Developer'},
      {id: 102, name: 'Pranit', category: 'DB Developer'},
    ];
    return {books: bookDetails};
  }
}
