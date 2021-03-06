import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Address } from 'src/app/shared/interfaces/address.interface';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css'],
})
export class AddressFormComponent implements OnInit {
  constructor(private fb: FormBuilder) {
    this.initForm();
  }

  ngOnInit(): void {}

  public detailForm: FormGroup;
  @Output() postOrderEventEmitter: EventEmitter<Address> = new EventEmitter();

  private initForm() {
    this.detailForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      street: ['', Validators.required],
      zipCode: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(5),
          Validators.pattern('[0-9]*'),
        ]),
      ],
      city: ['', Validators.required],
      country: ['Deutschland', Validators.required],
    });
  }

  /**
   * Verschickt die Eingaben des Adressformulars mit Hilfe
   * eines EventEmitter<Address>-Objekts.
   */
  public postOrder() {
    this.postOrderEventEmitter.emit(this.detailForm.getRawValue());
  }
}
