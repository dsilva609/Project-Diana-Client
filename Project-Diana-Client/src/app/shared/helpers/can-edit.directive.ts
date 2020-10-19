import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { UserQuery } from 'src/app/user/state/user.query';

@Directive({
  selector: '[canEdit]',
})
export class CanEditDirective {
  constructor(
    private userQuery: UserQuery,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  @Input()
  set canEdit(userId: string) {
    const { id } = this.userQuery.getValue();

    if (id === userId) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
