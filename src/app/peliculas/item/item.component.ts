import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input()title!:string;
  @Output()selectedMovie:EventEmitter<string>= new EventEmitter<string>();

  constructor() { 
    this.selectedMovie.emit('');
    
  }

  ngOnInit(): void {
  }
  sendTitle(event:Event){
    this.selectedMovie.emit(this.title)
  }

}
