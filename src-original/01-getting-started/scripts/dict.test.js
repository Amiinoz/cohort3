test("Mo test ", () => {
  expect(dictFunctions.helloWorld()).toEqual("Hello world from here!");
});
const fakeObjArr = [{ fname: "Rob", lname: "Loban", balance: 2500 }];
expect(dictFunctions.balanceGreater(fakeObjArr)).toEqual([2500]);

// ______
test("Searching Provinces in findProvinceSearch", () => {
  expect(dictFunctions.findProvinceSearch("ab")).toBe("Alberta");
  expect(dictFunctions.findProvinceSearch("bc")).toBe("British Columbia");
  expect(dictFunctions.findProvinceSearch("mb")).toBe("Manitoba");
  expect(dictFunctions.findProvinceSearch("nb")).toBe("New Brunswick");
  expect(dictFunctions.findProvinceSearch("nl")).toBe(
    "Newfoundland and Labrador"
  );
  expect(dictFunctions.findProvinceSearch("ns")).toBe("Nova Scotia");
  expect(dictFunctions.findProvinceSearch("nt")).toBe("Northwest Territories");
  expect(dictFunctions.findProvinceSearch("nu")).toBe("Nunavut");
  expect(dictFunctions.findProvinceSearch("on")).toBe("Ontario");
  expect(dictFunctions.findProvinceSearch("pe")).toBe("Prince Edward Island");
  expect(dictFunctions.findProvinceSearch("qc")).toBe("Quebec");
  expect(dictFunctions.findProvinceSearch("sk")).toBe("Saskatchewan");
  expect(dictFunctions.findProvinceSearch("yt")).toBe("Yukon");
  expect(dictFunctions.findProvinceSearch("ot")).toBe("Invalid Province Code");
});
