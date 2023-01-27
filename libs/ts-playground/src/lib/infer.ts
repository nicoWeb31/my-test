//infer only use with ternary extends test  ///create type from other type
//simple example 
// https://www.youtube.com/watch?v=hLZXJTm7TEk&t=620s

//extract type from array
type UnpackArrayType<T> = T extends (infer R)[] ? R : never;
type t1 = UnpackArrayType<string[]>; 


const toto: t1 = 'toto' 

const func = (c: boolean) => {
    return 333
}

type funcResult = ReturnType<typeof func>
type funct2 = typeof func extends (...args: any) => infer R ? R : never

type args = typeof func extends (...args: infer R) => any ? R : never