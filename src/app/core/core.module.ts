import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";

import { HeroesService } from "./services/heroes.service";
import { CharactersService } from "./services/characters.service";
import { MarvelInterceptor } from "./interceptors/marvel.interceptor";
import { MarvelService } from "./services/marvel.service";
import { PowersService } from "./services/powers.service";
import { GroupsService } from './services/groups.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [
    CharactersService,
    GroupsService,
    HeroesService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MarvelInterceptor,
      multi: true
    },
    MarvelService,
    PowersService,
  ]
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: []
    };
  }

}
