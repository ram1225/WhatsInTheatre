import { TrendingmoviesService } from './../services/trendingmovies/trendingmovies.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { LoadingController, Slides, Slide } from '@ionic/angular';
import { TrendingMovie } from '../models/interfaces';
import { NetworkinfoProvider } from '../services/networkinfo/networkinfo';
import { UtilityService } from '../utils/utility.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  slideOpts = {
    effect: 'flip',
    pager: true,
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 2000,
    }
  };

  private loading;
  private TrendingMovies: TrendingMovie[];
  private lazyloadFlag = {};
  private TrendingMoviesTitle = 'TRENDING MOVIES';
  private TrendingTV = 'TRENDING TV SHOWS';
  private options = ['All', 'Movie', 'Tv', 'Person'];
  private selectedValue;

  constructor(private trendingMovies: TrendingmoviesService, public loadingController: LoadingController,
    private networkService: NetworkinfoProvider, private utilityService: UtilityService) { }

  ngOnInit() {
    // if (!this.networkService.isAppOnline()) {
    //   this.utilityService.presentAlert('Alert','Network is off!', 'Please turn on internet to use the app.',true);
    //  } else {
    this.selectedValue = this.options[0];

    this.presentLoading().then(() => {
      this.trendingMovies.fetchAndParseTrendingMovies().then(
        (data) => {
          data.forEach((ele, index, arr) => {
            this.lazyloadFlag[index] = false;
          });
          this.TrendingMovies = data;

          this.stopLoading();
        }
      ).catch(() => {
        this.stopLoading();
      });
    });
    //  }
  }

  stopLoading() {
    if (this.loading) {
      this.loading.dismiss();
    }
  }

  ionImgDidLoad(index){
    this.lazyloadFlag[index] = true;
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Fetching data...',
      duration: 5000
    });
    return await this.loading.present();
  }

  slidesDidLoad(slides: Slides) {
    // slides.startAutoplay();
  }

  selectOptionChanged() {
    console.log(this.selectedValue);
  }

}
