import mergeByKey from "./mergeByKey";

test("Should merge arrays", () => {
  const arr1 = [{ id: 2, name: "name" }];
  const arr2 = [{ id: 2, count: 5 }];
  expect(mergeByKey(arr1, arr2)).toEqual([{ id: 2, name: "name", count: 5 }]);
});

test("Should not merge all cells", () => {
  const arr1 = [{ id: 2, name: "name2" }, { id: 1, name: "name1" }];
  const arr2 = [{ id: 1, count: 12 }];
  expect(mergeByKey(arr1, arr2)).toEqual([{ id: 1, name: "name1", count: 12 }]);
});
