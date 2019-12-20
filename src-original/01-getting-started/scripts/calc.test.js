import calcFunctions from './calc'
import { exportAllDeclaration } from '@babel/types';

test("Mo test ", () => {
    expect(calcFunctions.helloWorld()).toEqual("Hello world from here!")
});


