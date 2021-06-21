import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { UserFormComponent } from './user-form.component';

describe('UserFormComponent', () => {
  let component: UserFormComponent;
  let fixture: ComponentFixture<UserFormComponent>;

  function createComponent() {
    fixture = TestBed.createComponent(UserFormComponent);
    component = fixture.componentInstance;
    return fixture.whenStable().then(() => {
      fixture.detectChanges();
    });
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [UserFormComponent],
    }).compileComponents();
  });

  beforeEach(async () => {
    await createComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update the name in the component', fakeAsync(() => {
    const input: HTMLInputElement =
      fixture.nativeElement.querySelector('input#name');
    input.value = 'Michael';
    input.dispatchEvent(new Event('input')); // tell Angular
    expect(component.user.name).toEqual('Michael');
  }));

  it('should update the name input field', fakeAsync(() => {
    component.user.name = 'John';

    fixture.detectChanges();
    tick();
    const input = fixture.nativeElement.querySelector('input#name');

    expect(input.value).toBe('John');
  }));
});
