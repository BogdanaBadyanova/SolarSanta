import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { InputGroupModule } from 'primeng/inputgroup';
import { ChipsModule } from 'primeng/chips';
import { FormsModule } from '@angular/forms';
import { ClipboardModule } from '@angular/cdk/clipboard';

@Component({
  selector: 'ss-share-link',
  standalone: true,
  imports: [
    OverlayPanelModule,
    InputGroupModule,
    InputGroupAddonModule,
    ButtonModule,
    InputTextModule,
    ChipsModule,
    FormsModule,
    ClipboardModule,
  ],
  templateUrl: './share-link.component.html',
  styleUrl: './share-link.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShareLinkComponent {
  public shareLink = input<string>();
  public addParticipant = output<string>();
  public participantEmail: string;
}
