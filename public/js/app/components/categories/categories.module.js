"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var categories_dashboard_component_1 = require('./categories-dashboard/categories-dashboard.component');
var index_1 = require('./logo-and-business-cards/index');
var index_2 = require('./web-and-app-design/index');
var index_3 = require('./business-and-advertising/index');
var index_4 = require('./clothing-and-merchandise/index');
var index_5 = require('./art-and-illustration/index');
var index_6 = require('./invitations-design/index');
var index_7 = require('./packaging-and-label/index');
var index_8 = require('./books-and-magazines/index');
var other_designs_component_1 = require('./other-designs/other-designs.component');
var categories_routing_1 = require('./categories.routing');
var CategoriesModule = (function () {
    function CategoriesModule() {
    }
    CategoriesModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                categories_routing_1.categoriesRouting
            ],
            declarations: [
                categories_dashboard_component_1.CategoriesDashboardComponent, index_1.BusinessCardComponent, index_1.LogoComponent, index_1.LogoAndBusinessCardComponent,
                index_2.AdBannerComponent, index_2.AndroidAppComponent, index_2.BlogDesignComponent,
                index_2.FacebookDesignComponent, index_2.FlashBannerComponent, index_2.FrontPageComponent,
                index_2.IconDesignComponent, index_2.IosAppComponent, index_2.MobileAppComponent,
                index_2.TwitterDesignComponent, index_2.WebsiteHeaderComponent, index_2.WebsiteRedesignComponent,
                index_2.WordpressThemeComponent, index_2.YoutubeChannelComponent, index_2.OtherWebAndAppDesignComponent,
                index_3.AdDesignComponent, index_3.BillboardComponent, index_3.BookletComponent,
                index_3.CarAdComponent, index_3.EmailDesignComponent, index_3.FoodMenuComponent,
                index_3.LeafletComponent, index_3.OtherBusinessOrAdvertisingComponent, index_3.PostcardComponent,
                index_3.PowerPointDesignComponent, index_3.MicrosoftWordDesignComponent, index_3.ResumeDesignComponent,
                index_4.HaberDasheryDesignComponent, index_4.CapDesignComponent, index_4.MerchandiseDesignComponent,
                index_4.MugDesignComponent, index_4.OtherClothingOrMerchandiseComponent,
                index_4.SweatShirtDesignComponent, index_4.TShirtDesignComponent, index_5.CdCoverDesignComponent,
                index_5.IllustrationDesignComponent, index_5.KidsIllustrationDesignComponent, index_5.OtherArtOrIllustrationDesignComponent,
                index_5.TattooDesignComponent, index_5.ThreeDDesignComponent, index_5.StickerDesignComponent,
                index_6.AnniversaryInvitationDesignComponent, index_6.BirthdayInvitationDesignComponent, index_6.ChildChristeningInvitationDesignComponent,
                index_6.InvitationCardDesignComponent, index_6.MarriageInvitationDesignComponent, index_6.OtherInvitationDesignComponent,
                index_7.CosmeticsProductsLabelOrPackagingDesignComponent, index_7.DrinkLabelDesignComponent,
                index_7.FoodProductsLabelOrPackagingDesignComponent, index_7.OtherProductsLabelOrPackagingDesignComponent,
                index_8.BookCoverDesignComponent, index_8.EBookCoverDesignComponent, index_8.MagazineCoverDesignComponent,
                other_designs_component_1.OtherDesignsComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], CategoriesModule);
    return CategoriesModule;
}());
exports.CategoriesModule = CategoriesModule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY2F0ZWdvcmllcy9jYXRlZ29yaWVzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBRS9DLCtDQUE2Qyx1REFBdUQsQ0FBQyxDQUFBO0FBQ3JHLHNCQUFtRixpQ0FBaUMsQ0FBQyxDQUFBO0FBQ3JILHNCQUlnRyw0QkFBNEIsQ0FBQyxDQUFBO0FBQzdILHNCQUcrRixrQ0FBa0MsQ0FBQyxDQUFBO0FBQ2xJLHNCQUVpRSxrQ0FBa0MsQ0FBQyxDQUFBO0FBQ3BHLHNCQUV1Qyw4QkFBOEIsQ0FBQyxDQUFBO0FBQ3RFLHNCQUVrRiw0QkFBNEIsQ0FBQyxDQUFBO0FBQy9HLHNCQUMwRyw2QkFBNkIsQ0FBQyxDQUFBO0FBQ3hJLHNCQUFrRyw2QkFBNkIsQ0FBQyxDQUFBO0FBQ2hJLHdDQUFzQyx5Q0FBeUMsQ0FBQyxDQUFBO0FBR2hGLG1DQUFrQyxzQkFBc0IsQ0FBQyxDQUFBO0FBZ0N6RDtJQUFBO0lBRUEsQ0FBQztJQWhDRDtRQUFDLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCxxQkFBWTtnQkFDWixzQ0FBaUI7YUFDbEI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1osNkRBQTRCLEVBQUUsNkJBQXFCLEVBQUUscUJBQWEsRUFBRSxvQ0FBNEI7Z0JBQ2hHLHlCQUFpQixFQUFFLDJCQUFtQixFQUFFLDJCQUFtQjtnQkFDM0QsK0JBQXVCLEVBQUUsNEJBQW9CLEVBQUUsMEJBQWtCO2dCQUNqRSwyQkFBbUIsRUFBRSx1QkFBZSxFQUFFLDBCQUFrQjtnQkFDeEQsOEJBQXNCLEVBQUUsOEJBQXNCLEVBQUUsZ0NBQXdCO2dCQUN4RSwrQkFBdUIsRUFBRSwrQkFBdUIsRUFBRSxxQ0FBNkI7Z0JBQy9FLHlCQUFpQixFQUFFLDBCQUFrQixFQUFFLHdCQUFnQjtnQkFDdkQsc0JBQWMsRUFBRSw0QkFBb0IsRUFBRSx5QkFBaUI7Z0JBQ3ZELHdCQUFnQixFQUFFLDJDQUFtQyxFQUFFLHlCQUFpQjtnQkFDeEUsaUNBQXlCLEVBQUUsb0NBQTRCLEVBQUUsNkJBQXFCO2dCQUM5RSxtQ0FBMkIsRUFBRSwwQkFBa0IsRUFBRSxrQ0FBMEI7Z0JBQzNFLDBCQUFrQixFQUFFLDJDQUFtQztnQkFDdkQsaUNBQXlCLEVBQUUsNkJBQXFCLEVBQUUsOEJBQXNCO2dCQUN4RSxtQ0FBMkIsRUFBRSx1Q0FBK0IsRUFBRSw2Q0FBcUM7Z0JBQ25HLDZCQUFxQixFQUFFLDZCQUFxQixFQUFFLDhCQUFzQjtnQkFDcEUsNENBQW9DLEVBQUUseUNBQWlDLEVBQUUsaURBQXlDO2dCQUNsSCxxQ0FBNkIsRUFBRSx5Q0FBaUMsRUFBRSxzQ0FBOEI7Z0JBQ2hHLHdEQUFnRCxFQUFFLGlDQUF5QjtnQkFDM0UsbURBQTJDLEVBQUUsb0RBQTRDO2dCQUN6RixnQ0FBd0IsRUFBRSxpQ0FBeUIsRUFBRSxvQ0FBNEI7Z0JBQ2pGLCtDQUFxQjthQUN0QjtTQUNGLENBQUM7O3dCQUFBO0lBSUYsdUJBQUM7QUFBRCxDQUZBLEFBRUMsSUFBQTtBQUZZLHdCQUFnQixtQkFFNUIsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2NhdGVnb3JpZXMvY2F0ZWdvcmllcy5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgQ2F0ZWdvcmllc0Rhc2hib2FyZENvbXBvbmVudCB9IGZyb20gJy4vY2F0ZWdvcmllcy1kYXNoYm9hcmQvY2F0ZWdvcmllcy1kYXNoYm9hcmQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQnVzaW5lc3NDYXJkQ29tcG9uZW50LCBMb2dvQ29tcG9uZW50LCBMb2dvQW5kQnVzaW5lc3NDYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9sb2dvLWFuZC1idXNpbmVzcy1jYXJkcy9pbmRleCc7XHJcbmltcG9ydCB7IEFkQmFubmVyQ29tcG9uZW50LCBBbmRyb2lkQXBwQ29tcG9uZW50LCBCbG9nRGVzaWduQ29tcG9uZW50LFxyXG4gICAgICAgICBGYWNlYm9va0Rlc2lnbkNvbXBvbmVudCwgRmxhc2hCYW5uZXJDb21wb25lbnQsIEZyb250UGFnZUNvbXBvbmVudCxcclxuICAgICAgICAgSWNvbkRlc2lnbkNvbXBvbmVudCwgSW9zQXBwQ29tcG9uZW50LCBNb2JpbGVBcHBDb21wb25lbnQsXHJcbiAgICAgICAgIFR3aXR0ZXJEZXNpZ25Db21wb25lbnQsIFdlYnNpdGVIZWFkZXJDb21wb25lbnQsIFdlYnNpdGVSZWRlc2lnbkNvbXBvbmVudCxcclxuICAgICAgICAgV29yZHByZXNzVGhlbWVDb21wb25lbnQsIFlvdXR1YmVDaGFubmVsQ29tcG9uZW50LCBPdGhlcldlYkFuZEFwcERlc2lnbkNvbXBvbmVudCB9IGZyb20gJy4vd2ViLWFuZC1hcHAtZGVzaWduL2luZGV4JztcclxuaW1wb3J0IHsgQWREZXNpZ25Db21wb25lbnQsIEJpbGxib2FyZENvbXBvbmVudCwgQm9va2xldENvbXBvbmVudCxcclxuICAgICAgICAgQ2FyQWRDb21wb25lbnQsIEVtYWlsRGVzaWduQ29tcG9uZW50LCBGb29kTWVudUNvbXBvbmVudCxcclxuICAgICAgICAgTGVhZmxldENvbXBvbmVudCwgT3RoZXJCdXNpbmVzc09yQWR2ZXJ0aXNpbmdDb21wb25lbnQsIFBvc3RjYXJkQ29tcG9uZW50LFxyXG4gICAgICAgICBQb3dlclBvaW50RGVzaWduQ29tcG9uZW50LCBNaWNyb3NvZnRXb3JkRGVzaWduQ29tcG9uZW50LCBSZXN1bWVEZXNpZ25Db21wb25lbnQgfSBmcm9tICcuL2J1c2luZXNzLWFuZC1hZHZlcnRpc2luZy9pbmRleCc7XHJcbmltcG9ydCB7IEhhYmVyRGFzaGVyeURlc2lnbkNvbXBvbmVudCwgQ2FwRGVzaWduQ29tcG9uZW50LCBNZXJjaGFuZGlzZURlc2lnbkNvbXBvbmVudCxcclxuICAgICAgICAgTXVnRGVzaWduQ29tcG9uZW50LCBPdGhlckNsb3RoaW5nT3JNZXJjaGFuZGlzZUNvbXBvbmVudCxcclxuICAgICAgICAgU3dlYXRTaGlydERlc2lnbkNvbXBvbmVudCwgVFNoaXJ0RGVzaWduQ29tcG9uZW50IH0gZnJvbSAnLi9jbG90aGluZy1hbmQtbWVyY2hhbmRpc2UvaW5kZXgnO1xyXG5pbXBvcnQgeyBDZENvdmVyRGVzaWduQ29tcG9uZW50LCBJbGx1c3RyYXRpb25EZXNpZ25Db21wb25lbnQsIEtpZHNJbGx1c3RyYXRpb25EZXNpZ25Db21wb25lbnQsXHJcbiAgICAgICAgIE90aGVyQXJ0T3JJbGx1c3RyYXRpb25EZXNpZ25Db21wb25lbnQsIFRhdHRvb0Rlc2lnbkNvbXBvbmVudCwgVGhyZWVERGVzaWduQ29tcG9uZW50LFxyXG4gICAgICAgICBTdGlja2VyRGVzaWduQ29tcG9uZW50IH0gZnJvbSAnLi9hcnQtYW5kLWlsbHVzdHJhdGlvbi9pbmRleCc7XHJcbmltcG9ydCB7IEFubml2ZXJzYXJ5SW52aXRhdGlvbkRlc2lnbkNvbXBvbmVudCwgQmlydGhkYXlJbnZpdGF0aW9uRGVzaWduQ29tcG9uZW50LCBcclxuICAgICAgICAgQ2hpbGRDaHJpc3RlbmluZ0ludml0YXRpb25EZXNpZ25Db21wb25lbnQsIEludml0YXRpb25DYXJkRGVzaWduQ29tcG9uZW50LFxyXG4gICAgICAgICBNYXJyaWFnZUludml0YXRpb25EZXNpZ25Db21wb25lbnQsIE90aGVySW52aXRhdGlvbkRlc2lnbkNvbXBvbmVudCB9IGZyb20gJy4vaW52aXRhdGlvbnMtZGVzaWduL2luZGV4JztcclxuaW1wb3J0IHsgQ29zbWV0aWNzUHJvZHVjdHNMYWJlbE9yUGFja2FnaW5nRGVzaWduQ29tcG9uZW50LCBEcmlua0xhYmVsRGVzaWduQ29tcG9uZW50LFxyXG4gICAgICAgICBGb29kUHJvZHVjdHNMYWJlbE9yUGFja2FnaW5nRGVzaWduQ29tcG9uZW50LCBPdGhlclByb2R1Y3RzTGFiZWxPclBhY2thZ2luZ0Rlc2lnbkNvbXBvbmVudCB9IGZyb20gJy4vcGFja2FnaW5nLWFuZC1sYWJlbC9pbmRleCc7XHJcbmltcG9ydCB7IEJvb2tDb3ZlckRlc2lnbkNvbXBvbmVudCwgRUJvb2tDb3ZlckRlc2lnbkNvbXBvbmVudCwgTWFnYXppbmVDb3ZlckRlc2lnbkNvbXBvbmVudCB9IGZyb20gJy4vYm9va3MtYW5kLW1hZ2F6aW5lcy9pbmRleCc7XHJcbmltcG9ydCB7IE90aGVyRGVzaWduc0NvbXBvbmVudCB9IGZyb20gJy4vb3RoZXItZGVzaWducy9vdGhlci1kZXNpZ25zLmNvbXBvbmVudCc7XHJcblxyXG5cclxuaW1wb3J0IHsgY2F0ZWdvcmllc1JvdXRpbmcgfSBmcm9tICcuL2NhdGVnb3JpZXMucm91dGluZyc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIGNhdGVnb3JpZXNSb3V0aW5nXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIENhdGVnb3JpZXNEYXNoYm9hcmRDb21wb25lbnQsIEJ1c2luZXNzQ2FyZENvbXBvbmVudCwgTG9nb0NvbXBvbmVudCwgTG9nb0FuZEJ1c2luZXNzQ2FyZENvbXBvbmVudCxcclxuICAgIEFkQmFubmVyQ29tcG9uZW50LCBBbmRyb2lkQXBwQ29tcG9uZW50LCBCbG9nRGVzaWduQ29tcG9uZW50LFxyXG4gICAgRmFjZWJvb2tEZXNpZ25Db21wb25lbnQsIEZsYXNoQmFubmVyQ29tcG9uZW50LCBGcm9udFBhZ2VDb21wb25lbnQsXHJcbiAgICBJY29uRGVzaWduQ29tcG9uZW50LCBJb3NBcHBDb21wb25lbnQsIE1vYmlsZUFwcENvbXBvbmVudCxcclxuICAgIFR3aXR0ZXJEZXNpZ25Db21wb25lbnQsIFdlYnNpdGVIZWFkZXJDb21wb25lbnQsIFdlYnNpdGVSZWRlc2lnbkNvbXBvbmVudCxcclxuICAgIFdvcmRwcmVzc1RoZW1lQ29tcG9uZW50LCBZb3V0dWJlQ2hhbm5lbENvbXBvbmVudCwgT3RoZXJXZWJBbmRBcHBEZXNpZ25Db21wb25lbnQsXHJcbiAgICBBZERlc2lnbkNvbXBvbmVudCwgQmlsbGJvYXJkQ29tcG9uZW50LCBCb29rbGV0Q29tcG9uZW50LFxyXG4gICAgQ2FyQWRDb21wb25lbnQsIEVtYWlsRGVzaWduQ29tcG9uZW50LCBGb29kTWVudUNvbXBvbmVudCxcclxuICAgIExlYWZsZXRDb21wb25lbnQsIE90aGVyQnVzaW5lc3NPckFkdmVydGlzaW5nQ29tcG9uZW50LCBQb3N0Y2FyZENvbXBvbmVudCxcclxuICAgIFBvd2VyUG9pbnREZXNpZ25Db21wb25lbnQsIE1pY3Jvc29mdFdvcmREZXNpZ25Db21wb25lbnQsIFJlc3VtZURlc2lnbkNvbXBvbmVudCxcclxuICAgIEhhYmVyRGFzaGVyeURlc2lnbkNvbXBvbmVudCwgQ2FwRGVzaWduQ29tcG9uZW50LCBNZXJjaGFuZGlzZURlc2lnbkNvbXBvbmVudCxcclxuICAgIE11Z0Rlc2lnbkNvbXBvbmVudCwgT3RoZXJDbG90aGluZ09yTWVyY2hhbmRpc2VDb21wb25lbnQsXHJcbiAgICBTd2VhdFNoaXJ0RGVzaWduQ29tcG9uZW50LCBUU2hpcnREZXNpZ25Db21wb25lbnQsIENkQ292ZXJEZXNpZ25Db21wb25lbnQsXHJcbiAgICBJbGx1c3RyYXRpb25EZXNpZ25Db21wb25lbnQsIEtpZHNJbGx1c3RyYXRpb25EZXNpZ25Db21wb25lbnQsIE90aGVyQXJ0T3JJbGx1c3RyYXRpb25EZXNpZ25Db21wb25lbnQsXHJcbiAgICBUYXR0b29EZXNpZ25Db21wb25lbnQsIFRocmVlRERlc2lnbkNvbXBvbmVudCwgU3RpY2tlckRlc2lnbkNvbXBvbmVudCxcclxuICAgIEFubml2ZXJzYXJ5SW52aXRhdGlvbkRlc2lnbkNvbXBvbmVudCwgQmlydGhkYXlJbnZpdGF0aW9uRGVzaWduQ29tcG9uZW50LCBDaGlsZENocmlzdGVuaW5nSW52aXRhdGlvbkRlc2lnbkNvbXBvbmVudCxcclxuICAgIEludml0YXRpb25DYXJkRGVzaWduQ29tcG9uZW50LCBNYXJyaWFnZUludml0YXRpb25EZXNpZ25Db21wb25lbnQsIE90aGVySW52aXRhdGlvbkRlc2lnbkNvbXBvbmVudCxcclxuICAgIENvc21ldGljc1Byb2R1Y3RzTGFiZWxPclBhY2thZ2luZ0Rlc2lnbkNvbXBvbmVudCwgRHJpbmtMYWJlbERlc2lnbkNvbXBvbmVudCxcclxuICAgIEZvb2RQcm9kdWN0c0xhYmVsT3JQYWNrYWdpbmdEZXNpZ25Db21wb25lbnQsIE90aGVyUHJvZHVjdHNMYWJlbE9yUGFja2FnaW5nRGVzaWduQ29tcG9uZW50LFxyXG4gICAgQm9va0NvdmVyRGVzaWduQ29tcG9uZW50LCBFQm9va0NvdmVyRGVzaWduQ29tcG9uZW50LCBNYWdhemluZUNvdmVyRGVzaWduQ29tcG9uZW50LFxyXG4gICAgT3RoZXJEZXNpZ25zQ29tcG9uZW50XHJcbiAgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENhdGVnb3JpZXNNb2R1bGUge1xyXG5cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
