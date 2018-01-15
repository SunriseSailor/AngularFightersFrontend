import {AfterViewInit, Component, OnInit} from '@angular/core';
import { FireBrigade } from '../../../entities/fireBrigade';
import { FireBrigadeService } from '../feuerwehr.service';
import { ActivatedRoute, Router } from '@angular/router';
import { createClient, GoogleMapsClient} from '@google/maps';
import {} from '@types/googlemaps';
declare var google: any;

@Component({
  selector: 'feuerwehr-detail',
  templateUrl: './feuerwehr-detail.component.html',
  styleUrls: ['./feuerwehr-detail.component.scss']
})

export class FeuerwehrDetailComponent implements OnInit, AfterViewInit {

    id: string;
    fireBrigade: FireBrigade;
    errors: string;


    constructor(private fireBrigadeService: FireBrigadeService,
                private route: ActivatedRoute,
                private router: Router,
                ) { }

    deleteDetail(): void {
        this.fireBrigadeService.deleteFireBrigade(this.fireBrigade.id.toString()).subscribe(
            (ok) => {
                console.log('Successfully deleted Fire Brigade ' + this.fireBrigade.id);
                this.router.navigate(['/feuerwehr']);
            },
            (errResp) => {
                console.error('Error deleting Fire Brigade', errResp);
            }

        );

    }


    myMap() {
        var map = new google.maps.Map(document.getElementById('googleMap'), {
            zoom: 16,
            center: google.maps.LatLng(-34.397, 150.644)
        });
        let geocoder = new google.maps.Geocoder();
        this.geocodeAddress(geocoder, map);
    }

    geocodeAddress(geocoder, resultsMap) {
        var address =  this.fireBrigade.streetName+", " +this.fireBrigade.postTown;
        geocoder.geocode({'address': address}, function(results, status) {
            if (status === 'OK') {
                resultsMap.setCenter(results[0].geometry.location);
                var marker = new google.maps.Marker({
                    map: resultsMap,
                    position: results[0].geometry.location
                });
            } else {
                alert('Geocode was not successful for the following reason: ' + status);
            }
        });
    }

    ngOnInit() {
        this.route.params.subscribe(
            params => {
                this.id = params['id'];
                this.fireBrigadeService.findById(this.id).subscribe(
                    fireBrigade => {
                        this.fireBrigade = fireBrigade;
                        this.errors = '';
                    },
                    err => {
                        this.errors = 'Fehler beim Laden';
                    }
                );
            }
        );
    }
    ngAfterViewInit() {
        setTimeout(() => this.myMap(),2000)
    }

}
