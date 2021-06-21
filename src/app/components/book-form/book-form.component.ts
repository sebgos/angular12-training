import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss'],
})
export class BookFormComponent implements OnInit {
  public genres = ['Adventure', 'Detective', 'Romance', 'Sci-Fi'];
  public bookForm = this.formBuilder.group({
    name: ['Fiasco', Validators.required],
    author: 'Stanisław Lem',
    year: '1986',
    genre: 'Sci-Fi',
    notes: this.formBuilder.array([
      'was nominated for the Arthur C. Clarke Award.',
      'was written on order from S. Fischer Verlag',
    ]),
  });

  get notes() {
    return this.bookForm.get('notes') as FormArray;
  }

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  addNote() {
    this.notes.push(this.formBuilder.control(''));
  }
}
