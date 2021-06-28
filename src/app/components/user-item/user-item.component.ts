import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { User } from '../../models';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserItemComponent {
  @Input() user!: User;
}
