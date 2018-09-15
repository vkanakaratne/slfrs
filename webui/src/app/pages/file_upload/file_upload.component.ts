import { Component, OnInit,TemplateRef, ViewChild } from '@angular/core';
import { OrderService } from '../../services/api/order.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup , FormControl,Validators} from '@angular/forms';
import 'rxjs/add/operator/switchMap';

@Component({
	selector: 's-fileupload-pg',
	templateUrl: './file_upload.component.html',
    styleUrls: [ './file_upload.scss'],
})

export class FileUploadComponent implements OnInit {


    constructor(

    ) {


    }

    ngOnInit(): void {


        this.getData();

    }

    getData(){

    }



}
