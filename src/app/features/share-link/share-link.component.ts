import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SvgIconComponent } from 'angular-svg-icon';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';

@Component({
  selector: 'ss-share-link',
  standalone: true,
  imports: [InputTextModule, FormsModule, InputTextareaModule, SvgIconComponent],
  templateUrl: './share-link.component.html',
  styleUrl: './share-link.component.scss',
})
export class ShareLinkComponent {
  public link = 'qweqwasfdza/fasdfasdaf'
  public message = 'qweqwasfrewrew23423542352352323dza/fasdfasdaf'

  public sendLink() {
    console.log('123');

  }
}
