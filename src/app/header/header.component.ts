import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // @Output() featureSelected = new EventEmitter<string>();
  
  constructor(private route : ActivatedRoute,private router : Router, private dataStorageService : DataStorageService){}

  ngOnInit(): void {
  }

  onSaveData(){
      this.dataStorageService.storeRecipes(); 
  }
  onFetchData(){
    this.dataStorageService.fetchRecipes();
  }

  // child emitting feature
  // onSelect(feature : string){
  //   this.featureSelected.emit(feature);
  // }

  onLoadRecipes(){
    this.router.navigate(['/recipes']);
  }
  onLoadShopList(){
    this.router.navigate(['/shoppinglist'])
  }
}
