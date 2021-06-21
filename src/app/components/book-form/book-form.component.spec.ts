import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { BookFormComponent } from './book-form.component';

describe('BookFormComponent', () => {
  let component: BookFormComponent;
  let fixture: ComponentFixture<BookFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [BookFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update book name in the component', () => {
    const input: HTMLInputElement =
      fixture.nativeElement.querySelector("input[name='name'");
    input.value = 'Solaris';
    input.dispatchEvent(new Event('input')); // tell Angular
    expect(component.bookForm.controls.name.value).toEqual('Solaris');
  });

  it('should update book name input field', () => {
    component.bookForm.controls.name.setValue('Solaris');

    fixture.detectChanges();
    const input = fixture.nativeElement.querySelector("input[name='name'");

    expect(input.value).toBe('Solaris');
  });
});
