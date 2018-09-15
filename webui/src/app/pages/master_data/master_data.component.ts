import { Component, OnInit,TemplateRef, ViewChild } from '@angular/core';
import { OrderService } from '../../services/api/order.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup , FormControl,Validators} from '@angular/forms';
import 'rxjs/add/operator/switchMap';

@Component({
	selector: 's-master-pg',
	templateUrl: './master_data.component.html',
    styleUrls: [ './master_data.scss'],
})

export class MasterDataComponent implements OnInit {


    constructor(

    ) {


    }

    ngOnInit(): void {


        this.getData();

    }

    getData(){

    }



}
