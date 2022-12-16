import { InjectionToken } from "@angular/core";


export interface myTest {
    mytest : string
}
export const someTest : myTest  = {
    mytest : 'ok'
} 

export const myToken = new InjectionToken<myTest>('some test toto')