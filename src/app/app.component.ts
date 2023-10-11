import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>My todo App</h1>
  <!-- Create Element -->
  <div *ngIf="!isUpdateFormActive">
  <input  #inputEl [(ngModel)]="work" type="text">
  <button (click)="save()" >Save</button>
  </div>
    <!-- Create Element -->
    <br>
    <!-- Update Element -->
    <div *ngIf="isUpdateFormActive">
      <input type="text" [(ngModel)]="updateWork">
      <button (click)="update()" >Update</button>
      <button (click)="cancel()">Cancel</button>
    </div>
    <!-- Update Element -->
   
  <!-- <input (keyup.enter)="save()" #inputEl [(ngModel)]="work" type="text"> ile enter tuşuna bastığımızda save metodunu çalıştırabiliyoruz -->
  <hr>
  <ul>
    <li *ngFor="let t of todos ; index as i">
      <!-- index as i yada let i = index şeklinde kullanılabiliyor -->
      {{t}}
      <button *ngIf="!isUpdateFormActive" (click)="get(i)">Update</button>
      <button *ngIf="!isUpdateFormActive" (click)="removeByIndex(i)">Remove</button>
      
    </li>
  </ul>

  `
})
export class AppComponent {
  // @ViewChild("inputEl") element : ElementRef<HTMLInputElement>| undefined ;
  //Yukarıdaki kodda viewchild dekoratörü DOM'da ilk eşleştiği öğeyi temsil etmektedir.
  work : string = "";
  updateWork : string = "";
  updateIndex :number = 0 ;
  isUpdateFormActive : boolean = false ; 
  todos : string[] = [];

  save(){
    this.todos.push(this.work);
    this.work = "";
    // this.element?.nativeElement.focus();
    
  }
  removeByIndex(index:number){
    this.todos.splice(index,1);
  }
 
    get(index:number){
      this.updateWork = this.todos[index];
      this.updateIndex = index ;
      this.isUpdateFormActive = true ; 
    }
    cancel(){
      this.isUpdateFormActive = false;
    }
    update(){
      this.todos[this.updateIndex] = this.updateWork;
      this.updateWork = "";
      this.isUpdateFormActive = false ; 
    }
 
}
