import { Component, OnInit } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'add-word',
  templateUrl: './add-word.component.html',
  styleUrls: ['./add-word.component.scss']
})
export class AddWordComponent implements OnInit {
  public isNewCat: boolean = false;


  constructor(public library: FaIconLibrary) {
    library.addIcons(faTrash);
  }

  addNewCat() {
    this.isNewCat = true;
  }

  removeNewCat() {
    this.isNewCat = false;
  }

  ngOnInit() {
  }

}
