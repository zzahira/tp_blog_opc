import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-poste',
  templateUrl: './item-poste.component.html',
  styleUrls: ['./item-poste.component.css']
})
export class ItemPosteComponent implements OnInit {
  @Input() title: string;
  @Input()  created_at: string;
   @Input()  content: string;
   
   cpt_like:int=0;
    cpt_dislike:int=0;
  constructor() { }

  ngOnInit() {
  }
  getClass()
  {
	  if(this.cpt_like>=this.cpt_dislike)
	  {
		   return "alert alert-success";
	  }
	  else
	  {
		 return "alert alert-danger";  
	  }
  }
  
  Addlike()
  {
	   console.log(this.cpt_like);
	 return this.cpt_like++;
  }
   Adddislike()
  {
	  console.log(this.cpt_dislike);
	 return this.cpt_dislike++;
	 
  }

}
