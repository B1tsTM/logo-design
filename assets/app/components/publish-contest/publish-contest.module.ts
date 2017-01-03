import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { AppModule } from '../../app.module';

import { InputTextModule } from 'primeng/primeng';
import { MaterialModule } from '@angular/material';
import { SimpleNotificationsModule } from 'angular2-notifications';

import { PublishContestDashboardComponent } from './publish-contest-dashboard/publish-contest-dashboard.component';
import { BusinessCardComponent, LogoComponent, LogoAndBusinessCardComponent } from './logo-and-business-cards/index';
import { AbBannerComponent, AndroidAppComponent, BlogDesignComponent,
         FacebookDesignComponent, FlashBannerComponent, FrontPageComponent,
         IconDesignComponent, IosAppComponent, MobileAppComponent,
         TwitterDesignComponent, WebsiteHeaderComponent, WebsiteRedesignComponent,
         WordpressThemeComponent, YoutubeChannelComponent, OtherWebAndAppDesignComponent } from './web-and-app-design/index';
import { AbDesignComponent, BillboardComponent, BookletComponent,
         CarAdComponent, EmailDesignComponent, FoodMenuComponent,
         LeafletComponent, OtherBusinessOrAdvertisingComponent, PostcardComponent,
         PowerPointDesignComponent, MicrosoftWordDesignComponent, ResumeDesignComponent } from './business-and-advertising/index';
import { HaberDasheryDesignComponent, CapDesignComponent, MerchandiseDesignComponent,
         MugDesignComponent, OtherClothingOrMerchandiseComponent,
         SweatShirtDesignComponent, TShirtDesignComponent } from './clothing-and-merchandise/index';
import { CdCoverDesignComponent, IllustrationDesignComponent, KidsIllustrationDesignComponent,
         OtherArtOrIllustrationDesignComponent, TattooDesignComponent, ThreeDDesignComponent,
         StickerDesignComponent } from './art-and-illustration/index';
import { AnniversaryInvitationDesignComponent, BirthdayInvitationDesignComponent, 
         ChildChristeningInvitationDesignComponent, InvitationCardDesignComponent,
         MarriageInvitationDesignComponent, OtherInvitationDesignComponent } from './invitations-design/index';
import { CosmeticsProductsLabelOrPackagingDesignComponent, DrinkLabelDesignComponent,
         FoodProductsLabelOrPackagingDesignComponent, OtherProductsLabelOrPackagingDesignComponent } from './packaging-and-label/index';
import { BookCoverDesignComponent, EBookCoverDesignComponent, MagazineCoverDesignComponent } from './books-and-magazines/index';
import { OtherDesignsComponent } from './other-designs/other-designs.component';
import { SharedModule } from '../shared/shared.module';


import { publishContestRouting } from './publish-contest.routing';

@NgModule({
  imports: [
    CommonModule, InputTextModule, ReactiveFormsModule, FormsModule,
    publishContestRouting, SimpleNotificationsModule, MaterialModule.forRoot(),
    SharedModule
  ],
  declarations: [
    PublishContestDashboardComponent, BusinessCardComponent, LogoComponent, LogoAndBusinessCardComponent,
    AbBannerComponent, AndroidAppComponent, BlogDesignComponent,
    FacebookDesignComponent, FlashBannerComponent, FrontPageComponent,
    IconDesignComponent, IosAppComponent, MobileAppComponent,
    TwitterDesignComponent, WebsiteHeaderComponent, WebsiteRedesignComponent,
    WordpressThemeComponent, YoutubeChannelComponent, OtherWebAndAppDesignComponent,
    AbDesignComponent, BillboardComponent, BookletComponent,
    CarAdComponent, EmailDesignComponent, FoodMenuComponent,
    LeafletComponent, OtherBusinessOrAdvertisingComponent, PostcardComponent,
    PowerPointDesignComponent, MicrosoftWordDesignComponent, ResumeDesignComponent,
    HaberDasheryDesignComponent, CapDesignComponent, MerchandiseDesignComponent,
    MugDesignComponent, OtherClothingOrMerchandiseComponent,
    SweatShirtDesignComponent, TShirtDesignComponent, CdCoverDesignComponent,
    IllustrationDesignComponent, KidsIllustrationDesignComponent, OtherArtOrIllustrationDesignComponent,
    TattooDesignComponent, ThreeDDesignComponent, StickerDesignComponent,
    AnniversaryInvitationDesignComponent, BirthdayInvitationDesignComponent, ChildChristeningInvitationDesignComponent,
    InvitationCardDesignComponent, MarriageInvitationDesignComponent, OtherInvitationDesignComponent,
    CosmeticsProductsLabelOrPackagingDesignComponent, DrinkLabelDesignComponent,
    FoodProductsLabelOrPackagingDesignComponent, OtherProductsLabelOrPackagingDesignComponent,
    BookCoverDesignComponent, EBookCoverDesignComponent, MagazineCoverDesignComponent,
    OtherDesignsComponent
  ]
})

export class PublishContestModule {

}