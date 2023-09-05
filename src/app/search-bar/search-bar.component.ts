import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  @Output() submitted = new EventEmitter<string>();
  term: any = '';

  constructor(){}

  ngOnInit(){}

  onFormSubmit( event: any ){
    event.preventDefault();
    this.submitted.emit( this.term );

  }
}
