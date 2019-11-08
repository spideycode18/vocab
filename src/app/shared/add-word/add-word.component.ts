import { Component, OnInit } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import { CategoryService } from 'src/app/core/services/category.service';
import { WordService } from 'src/app/core/services/word.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'add-word',
  templateUrl: './add-word.component.html',
  styleUrls: ['./add-word.component.scss']
})
export class AddWordComponent implements OnInit {
  public isNewCat: boolean = false;
  public categories: any = [];
  public newCat: string = "";
  public word: any = {category: '', text: ''};

  constructor(public library: FaIconLibrary,
              private catService: CategoryService,
              private wordService: WordService,
              private authService: AuthService,
              private userService: UserService
    ) {
    library.addIcons(faTrash, faPlus);
  }

  showNewCat() {
    this.isNewCat = true;
  }
  
  hideNewCat() {
    this.isNewCat = false;
  }
  
  addNewCat() {
    this.isNewCat = true;
    this.catService.add({name: this.newCat}).then(idCat => {
      this.word.category = idCat.key;
      this.hideNewCat();
      this.newCat = "";
    });
  }

  save(f: any) {
    let curWord = {name: f.text};
    this.wordService.add(f.category, curWord).then(
      () => this.word.text = ''
    );
  }

  ngOnInit() {
    this.authService.user$.subscribe(user => {
      if(user) {
        this.userService.isExist(user.uid).subscribe(
          result => {
            if(result) {
              this.catService.getAll().subscribe(
                cats => this.categories = [...cats]
              );
            } else {
              this.userService.createRecord(user.uid);
            }
          }
        )    
      }  
    });        
  }
}
