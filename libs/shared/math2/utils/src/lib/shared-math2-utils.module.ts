import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MATH_CONFIG_TOKEN } from './math.config.token';
import { Math2Service } from './math2.service';

@NgModule({
  imports: [CommonModule],
  providers: [Math2Service],
})
export class SharedMath2UtilsModule {
  public static forTest(
    mathConf: number
  ): ModuleWithProviders<SharedMath2UtilsModule> {
    return {
      ngModule: SharedMath2UtilsModule,
      providers: [
        {
          provide: MATH_CONFIG_TOKEN,
          useValue: mathConf,
        },
      ],
    };
  }
}
