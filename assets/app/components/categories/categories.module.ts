import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/primeng';
import { MaterialModule } from '@angular/material';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload/ng2-file-upload';

import { CategoriesDashboardComponent } from './categories-dashboard/categories-dashboard.component';
import { BusinessCardComponent, LogoComponent, LogoAndBusinessCardComponent } from './logo-and-business-cards/index';
import { AbBannerComponent, AndroidAppComponent, BlogDesignComponent,
         FacebookDesignComponent, FlashBannerComponent, FrontPageComponent,
         IconDesignComponent, IosAppComponent, MobileAppComponent,
         TwitterDesignComponent, WebsiteHeaderComponent, WebsiteRedesignComponent,
         WordpressThemeComponent, YoutubeChannelComponent, OtherWebAndAppDesignComponent } from './web-and-app-design/index';
import { AbDesignComponent, BillboardComponent, BookletComponent,
         CarAdComponent, EmailDesignComponent, FoodMenuComponent,
         LeafletComponent, OtherBusinessOrAdvertisingComponent, PostcardComponent,
         PowerPointDesignComponent, MicrosoftWordDesignComponent, ResumeDesignComponent,
         FileUploadComponent } from './business-and-advertising/index';
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
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';


import { categoriesRouting } from './categories.routing';

@NgModule({
  imports: [
    CommonModule, InputTextModule, ReactiveFormsModule,
    categoriesRouting, MaterialModule.forRoot(), Ng2Bs3ModalModule
  ],
  declarations: [
    CategoriesDashboardComponent, BusinessCardComponent, LogoComponent, LogoAndBusinessCardComponent,
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
    OtherDesignsComponent, FileSelectDirective, FileDropDirective, FileUploadComponent
  ]
})

export class CategoriesModule {

}