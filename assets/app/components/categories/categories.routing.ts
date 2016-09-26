import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { CategoriesComponent } from './categories.component';
import { CategoriesDashboardComponent } from './categories-dashboard/categories-dashboard.component';
import { BusinessCardComponent, LogoComponent, LogoAndBusinessCardComponent } from './logo-and-business-cards/index';
import { AdBannerComponent, AndroidAppComponent, BlogDesignComponent,
         FacebookDesignComponent, FlashBannerComponent, FrontPageComponent,
         IconDesignComponent, IosAppComponent, MobileAppComponent,
         TwitterDesignComponent, WebsiteHeaderComponent, WebsiteRedesignComponent,
         WordpressThemeComponent, YoutubeChannelComponent, OtherWebAndAppDesignComponent } from './web-and-app-design/index';
import { AdDesignComponent, BillboardComponent, BookletComponent,
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


const categoriesRoutes: Routes = [
  {
    path: 'kategorijos',
    component: CategoriesComponent,
    children: [
      // Logotipai, Verslo korteles
      { path: 'verslo-korteles-dizainas', component: BusinessCardComponent },
      { path: 'logotipo-dizainas', component: LogoComponent },
      { path: 'logotipo-ir-verslo-korteles-dizainas', component: LogoAndBusinessCardComponent },
      // Web dizainas
      { path: 'reklamines-juostos-dizainas', component: AdBannerComponent },
      { path: 'puslapio-antrastes-dizainas', component: WebsiteHeaderComponent },
      { path: 'tinklarascio-dizainas', component: BlogDesignComponent },
      { path: 'esamo-dizaino-keitimas', component: WebsiteRedesignComponent },
      { path: 'youtube-kanalo-dizainas', component: YoutubeChannelComponent },
      { path: 'twitter-paskyros-dizainas', component: TwitterDesignComponent },
      { path: 'wordpress-temos-dizainas', component: WordpressThemeComponent },
      { path: 'ios-aplikacijos-dizainas', component: IosAppComponent },
      { path: 'android-aplikacijos-dizainas', component: AndroidAppComponent },
      { path: 'mobilios-aplikacijos-dizainas', component: MobileAppComponent },
      { path: 'ikonu-dizainas', component: IconDesignComponent }, // +mygtukai
      { path: 'pagrindinio-puslapio-dizainas', component: FrontPageComponent },
      { path: 'facebook-virselio-dizainas', component: FacebookDesignComponent },
      { path: 'flash-reklamos-dizainas', component: FlashBannerComponent },
      { path: 'kitas-puslapio-ar-aplikacijos-dizainas', component: OtherWebAndAppDesignComponent },
      // Verslas, Reklama
      { path: 'reklamos-dizainas', component: AdDesignComponent }, // Billboard, booth banner
      { path: 'brosiuros-dizainas', component: BookletComponent }, // 3 tabs / both sides
      { path: 'skelbimu-lentos-skelbimo-dizainas', component: BillboardComponent },
      { path: 'reklamines-masinos-dizainas', component: CarAdComponent },
      { path: 'skrajutes-dizainas', component: LeafletComponent },
      { path: 'atvirutes-dizainas', component: PostcardComponent }, // LT vertimas? Laiškų dizainas?
      { path: 'el-pasto-pranesimo-dizainas', component: EmailDesignComponent }, // Email dizainas, naujienlaiskiai
      { path: 'meniu-dizainas', component: FoodMenuComponent },
      { path: 'powerpoint-prezentacijos-dizainas', component: PowerPointDesignComponent },
      { path: 'reziume-dizainas', component: ResumeDesignComponent },
      { path: 'microsoft-word-dokumento-dizainas', component: MicrosoftWordDesignComponent },
      { path: 'kitas-verslo-ar-reklamos-dizainas', component: OtherBusinessOrAdvertisingComponent },
      // Drabužiai, galanterija
    //{ path: 'puodeliu-dizainas', component: MugDesignComponent },
      { path: 'kepures-dizainas', component: CapDesignComponent },
      { path: 'marskineliu-dizainas', component: TShirtDesignComponent },
      { path: 'megztiniu-dizainas', component: SweatShirtDesignComponent }, // +hoodies?
      { path: 'galanterijos-dizainas', component: HaberDasheryDesignComponent }, //galanterija   
      { path: 'kitu-drabuziu-dizainas', component: OtherClothingOrMerchandiseComponent },
      // Art & ilustration
      { path: '3d-dizainas', component: ThreeDDesignComponent },
      { path: 'cd-virselio-dizainas', component: CdCoverDesignComponent },
      { path: 'vaikisku-iliustraciju-dizainas', component: KidsIllustrationDesignComponent },
      { path: 'iliustraciju-dizainas', component: IllustrationDesignComponent },
      { path: 'tatuiruotes-dizainas', component: TattooDesignComponent },
      { path: 'lipduku-dizainas', component: StickerDesignComponent },
      { path: 'kitas-meno-dizainas', component: OtherArtOrIllustrationDesignComponent },
      // Pakvietimai
      { path: 'vestuviu-pakvietimo-dizainas', component: MarriageInvitationDesignComponent },
      { path: 'vaiko-krikstynu-pakvietimo-dizainas', component: ChildChristeningInvitationDesignComponent },
      { path: 'pakvietimo-korteles-dizainas', component: InvitationCardDesignComponent },
      { path: 'jubiliejaus-pakvietimo-dizainas', component: AnniversaryInvitationDesignComponent },
      { path: 'gimtadienio-pakvietimo-dizainas', component: BirthdayInvitationDesignComponent },
      { path: 'kitos-progos-pakvietimo-dizainas', component: OtherInvitationDesignComponent },
      // Packaging & label 
      { path: 'gerimu-dizainas', component: DrinkLabelDesignComponent },
      { path: 'maisto-produktu-dizainas', component: FoodProductsLabelOrPackagingDesignComponent },
      { path: 'kosmetikos-priemoniu-dizainas', component: CosmeticsProductsLabelOrPackagingDesignComponent },
      { path: 'kitu-prekiu-dizainas', component: OtherProductsLabelOrPackagingDesignComponent },
      // Knygos ir Zurnalai
      { path: 'knygos-virselio-dizainas', component: BookCoverDesignComponent },
      { path: 'e-knygos-dizainas', component: EBookCoverDesignComponent },
      { path: 'zurnalo-virselio-dizainas', component: MagazineCoverDesignComponent },
      // Other...
      { path: 'kitas-dizainas', component: OtherDesignsComponent },
      { path: '', component: CategoriesDashboardComponent },
    ]
  }
];

export const categoriesRouting: ModuleWithProviders = RouterModule.forChild(categoriesRoutes);