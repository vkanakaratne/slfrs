import { Component, OnInit,TemplateRef, ViewChild } from '@angular/core';
import { OrderService } from '../../services/api/order.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup , FormControl,Validators} from '@angular/forms';
import 'rxjs/add/operator/switchMap';

@Component({
	selector: 's-reportgen-pg',
	templateUrl: './generate_reports.component.html',
    styleUrls: [ './generate_reports.scss'],
})

export class GenerateReportsComponent implements OnInit {


    constructor(

    ) {


    }

    ngOnInit(): void {


        this.getData();

    }

    getData(){

    }



}
