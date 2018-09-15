import { Component, OnInit,TemplateRef, ViewChild } from '@angular/core';
import { OrderService } from '../../services/api/order.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup , FormControl,Validators} from '@angular/forms';
import 'rxjs/add/operator/switchMap';

@Component({
	selector: 's-entrygen-pg',
	templateUrl: './entry_generation.component.html',
    styleUrls: [ './entry_generation.scss'],
})

export class EntryGenerationComponent implements OnInit {


    constructor(

    ) {


    }

    ngOnInit(): void {


        this.getData();

    }

    getData(){

    }



}
