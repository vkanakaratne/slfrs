import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent  }       from './home.component';

import { LoginComponent        }   from './pages/login/login.component';
import { LogoutComponent       }   from './pages/logout/logout.component';
import { DashboardComponent    }   from './pages/dashboard/dashboard.component';
import { ProductStatsComponent }   from './pages/product_stats/product_stats.component';
import { OrderStatsComponent   }   from './pages/order_stats/order_stats.component';
import { ProductsComponent     }   from './pages/products/products.component';
import { CustomersComponent    }   from './pages/customers/customers.component';
import { OrdersComponent       }   from './pages/orders/orders.component';
import { OrderDetailsComponent }   from './pages/order_details/order_details.component';
import { EmployeesComponent    }   from './pages/employees/employees.component';
import { MasterDataComponent    }   from './pages/master_data/master_data.component';
import { FileUploadComponent    }   from './pages/file_upload/file_upload.component';
import { ValidationComponent    }   from './pages/validation/validation.component';
import { GenerateReportsComponent    }   from './pages/generate_reports/generate_reports.component';
import { OldReportsComponent    }   from './pages/old_reports/old_reports.component';
import { EntryGenerationComponent    }   from './pages/entry_generation/entry_generation.component';



import { AuthGuard } from './services/auth_guard.service';
import { PageNotFoundComponent }  from './pages/404/page-not-found.component';

export const routes: Routes = [
  //Important: The sequence of path is important as the router go over then in sequential manner
  { path: '', redirectTo: '/home/newreport/master', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    canActivate:[AuthGuard],
    children:[  // Children paths are appended to the parent path
        { path: '', redirectTo: '/home/newreport/master', pathMatch: 'full', data:[{selectedHeaderItemIndex:1, selectedSubNavItemIndex:-1}] },  // Default path (if no deep path is specified for home component like webui/home then it will by default show ProductsComponent )
        {
            path     : 'newreport',
            component: DashboardComponent,
            data     : [{selectedHeaderItemIndex:0, selectedSubNavItemIndex:-1}],
            children :[
                { path: ''        , redirectTo: '/home/newreport/master', pathMatch: 'full'},
                { path: 'master'   , component: MasterDataComponent  , data:[{selectedHeaderItemIndex:0, selectedSubNavItemIndex:0}]  },
                { path: 'upload'   , component: FileUploadComponent  , data:[{selectedHeaderItemIndex:0, selectedSubNavItemIndex:1}]  },
                { path: 'validate'   , component: ValidationComponent  , data:[{selectedHeaderItemIndex:0, selectedSubNavItemIndex:2}]  },
                { path: 'generatereports'   , component: GenerateReportsComponent  , data:[{selectedHeaderItemIndex:0, selectedSubNavItemIndex:3}]  }
            ]
        },
        { path:'oldreports'    , component: OldReportsComponent      , data:[{selectedHeaderItemIndex:1, selectedSubNavItemIndex:-1}]  },
        { path:'entrygeneration', component: EntryGenerationComponent, data:[{selectedHeaderItemIndex:1, selectedSubNavItemIndex:-1}]  },
    ]
  },
  { path: 'login' , component: LoginComponent       , data:[{selectedHeaderItemIndex:-1, selectedSubNavItemIndex:-1}] },
  { path: 'logout', component: LogoutComponent      , data:[{selectedHeaderItemIndex:-1, selectedSubNavItemIndex:-1}] },
  { path: '**'    , component: PageNotFoundComponent, data:[{selectedHeaderItemIndex:-1, selectedSubNavItemIndex:-1}] }

];
@NgModule({
  imports: [ RouterModule.forRoot(routes, {useHash:true} )],
  exports: [ RouterModule ],
  declarations:[PageNotFoundComponent]
})
export class AppRoutingModule {}
