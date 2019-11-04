import {Person , functions} from "./oostuff.js";
import { exportAllDeclaration, argumentPlaceholder } from "@babel/types";

// 1. Write the statusbar
// 2.
// 3.retur 2
// 4. a + b

test("larrytest ", () => {
  console.log("hello world");
  functions.helloWorld();
});

test(' Call name', () => {
    const L = new Person ("Larry", 5);
    expect(L.getName()).toEqual("Larry")
    const d = new Person ("Dean", 23);
    expect(d.getName()).toEqual("Dean", 23);
    const L = new Age (3);
    expect(L.getAge()).toEqual(23);

 
    
});



