import { inject, Injectable } from '@angular/core';
import { MATH_CONFIG_TOKEN } from './math.config.token';

@Injectable({
  providedIn: 'root'
})
export class Math2Service {
  mathConf = inject(MATH_CONFIG_TOKEN)



  log() {
    console.log('math2v',this.mathConf )
  }

}
