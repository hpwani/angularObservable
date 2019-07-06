import { InMemoryDbService } from 'angular-in-memory-web-api';

export class TestData implements InMemoryDbService {
  createDb() {
    const bookDetails = [
      {id: 100, name: 'Angular 2', category: 'Web Technology'},
      {id: 101, name: 'C++', category: 'Programming'},
      {id: 102, name: 'Java', category: 'Server Side'},
    ];
    return {books: bookDetails};
  }
}
