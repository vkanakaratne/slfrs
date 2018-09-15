import { Component, OnInit,TemplateRef, ViewChild } from '@angular/core';
import { OrderService } from '../../services/api/order.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup , FormControl,Validators} from '@angular/forms';
import 'rxjs/add/operator/switchMap';

@Component({
	selector: 's-validation-pg',
	templateUrl: './validation.component.html',
    styleUrls: [ './validation.scss'],
})

export class ValidationComponent implements OnInit {


    constructor(

    ) {


    }

    ngOnInit(): void {


        this.getData();

    }

    getData(){

    }



}
