import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ToastrService } from 'ngx-toastr';
import { tap } from 'rxjs/operators';
import { GameFormComponent } from 'src/app/game/game-form/game-form.component';
import { GameService } from 'src/app/game/state/game.service';

@UntilDestroy()
@Component({
  selector: 'app-game-submission',
  templateUrl: './game-submission.component.html',
  styleUrls: ['./game-submission.component.scss'],
})
export class GameSubmissionComponent implements OnInit, AfterViewInit {
  gameSubmissionForm: UntypedFormGroup;

  @ViewChild('gameForm') gameForm: GameFormComponent;

  constructor(
    private router: Router,
    private gameService: GameService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.gameSubmissionForm = new UntypedFormGroup({});
  }

  ngAfterViewInit(): void {
    this.gameSubmissionForm.addControl('gameData', this.gameForm.gameForm);
  }

  onSubmit(gameFormData): void {
    this.gameService
      .submitGame(gameFormData.gameData)
      .pipe(
        tap((successful) => {
          if (successful) {
            this.router.navigateByUrl('/game');
            this.toastrService.success('New game added');
          } else {
            this.toastrService.error('Error adding game');
          }
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }
}
