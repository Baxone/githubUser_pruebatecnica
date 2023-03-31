import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  searchForm: FormGroup
  @Output() nombreEmitido: EventEmitter<string>;

  constructor() {
    this.nombreEmitido = new EventEmitter();
    this.searchForm = new FormGroup({
      name: new FormControl('', [])
    }, [])
  }

  getData(): void {
    //console.log(this.searchForm.value);
    //quiero enviarselo al padre a home. OUTPUT
    this.nombreEmitido.emit(this.searchForm.value.name)

  }
}
