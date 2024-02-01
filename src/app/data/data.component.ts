import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  content: string = "";
  author: string = "";
  errorMessage: string = "";

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.fetchQuote()
      .then(quote => {
        this.content = quote.content;
        this.author = quote.author;
      })
      .catch(error => {
        this.errorMessage = 'Error fetching quote. Please try again later.';
        console.error('Error fetching quote:', error);
      });

    const myarray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    //Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.

    let compact = _.compact(myarray);
    console.log(compact);

    //Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements
    let chunks = _.chunk(myarray, 2);
    console.log(chunks);

    //Creates a slice of array with n elements dropped from the beginning.
    let drop = _.drop(myarray, 2);
    console.log(drop);

    var users = [
      { 'user': 'barney', 'age': 36, 'active': true },
      { 'user': 'fred', 'age': 40, 'active': false }
    ];

    _.filter(users, function (o) { return !o.active; });
    // => objects for ['fred']

    // The `_.matches` iteratee shorthand.
    _.filter(users, { 'age': 36, 'active': true });
    // => objects for ['barney']

    // The `_.matchesProperty` iteratee shorthand.
    _.filter(users, ['active', false]);
    // => objects for ['fred']

    // The `_.property` iteratee shorthand.
    _.filter(users, 'active');
    // => objects for ['barney']

    console.log(_.upperCase('--foo-bar'));
    // => 'FOO BAR'

    console.log(_.upperCase('fooBar'));

    console.log(_.upperCase('__foo_bar__'));

    if (!Array.prototype.find) {
      Array.prototype.find = function <T>(callback: (value: T, index: number, array: T[]) => boolean): T | undefined {

        for (let i = 0; i < this.length; i++) {

          if (callback(this[i], i, this)) {

            return this[i];
          }
        }

        return undefined;
      };
    }

    // Example usage:
    const arr: number[] = [5, 12, 8, 130, 44];
    const found = arr.find(element => element > 10);
    console.log(found); // Output: 12

  }
}
