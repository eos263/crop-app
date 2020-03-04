import {Component, OnInit} from '@angular/core';
import {Vendor} from '../../_models/vendor';
import {VendorService} from '../../_services/vendor.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-vendors',
    templateUrl: './vendors.component.html',
    styleUrls: ['./vendors.component.css']
})
export class VendorsComponent implements OnInit {

  vendors: Vendor[] = [];

    constructor(
        private router: Router,
        private vendorService: VendorService
    ) { }

    ngOnInit() {
        this.findAll();
    }

    onCreate() {
        this.router.navigate(['/create-vendor']).then();
    }

    findAll() {
        this.vendorService.findAll().subscribe((vendorsFromBackEnd: Vendor[]) => {
            this.vendors = vendorsFromBackEnd;
        });
    }
}
