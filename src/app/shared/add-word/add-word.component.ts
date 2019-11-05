import { Component, OnInit } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import { CategoryService } from 'src/app/core/services/category.service';

@Component({
  selector: 'add-word',
  templateUrl: './add-word.component.html',
  styleUrls: ['./add-word.component.scss']
})
export class AddWordComponent implements OnInit {
  public isNewCat: boolean = false;
  public categories$: any;


  constructor(public library: FaIconLibrary,
              private category: CategoryService
    ) {
    library.addIcons(faTrash, faPlus);
    this.categories$ = category.getAll();
  }

  showNewCat() {
    this.isNewCat = true;
  }
  
  hideNewCat() {
    this.isNewCat = false;
  }
  
  addNewCat() {
    this.isNewCat = true;
    this.category.add({})
  }
  ngOnInit() {
  }

}
