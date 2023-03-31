import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

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
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        this.miValidador
      ])
    }, [])
  }

  miValidador(control: AbstractControl) {
    if (control.value === 'mariogiron') {
      return { 'mivalidador': true }
    };
    return null
  }

  getData(): void {
    //console.log(this.searchForm.value);
    //quiero enviarselo al padre a home. OUTPUT
    this.nombreEmitido.emit(this.searchForm.value.name)

  }
}
