/* 
  Merges two arrays of object by key. Only returns cells that have data in both
  arrays.
*/

export default function(arr1, arr2, key = "id") {
  const mergeArr = [];
  arr1.forEach(ele1 => {
    arr2.forEach(ele2 => {
      if (ele1[key] === ele2[key]) {
        mergeArr.push({ ...ele1, ...ele2 });
      }
    });
  });
  return mergeArr;
}
