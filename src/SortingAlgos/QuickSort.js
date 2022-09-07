export default function quicksort(arr) {
  if (arr.length <= 1) return arr;
  const anime = [];
  helper(arr, 0, arr.length - 1, anime);
  return anime;
}

function helper(arr, l, h, anime) {
  if (l > h) return;
  let k = partition(arr, l, h, anime);
  helper(arr, l, k - 1, anime);
  helper(arr, k + 1, h, anime);
}

function partition(arr, l, h, anime) {
  let i = l - 1;
  let pivot = arr[h];
  anime.push([h, -1, "pivot"]);
  let j;
  for (j = l; j < h; j++) {
    anime.push([j, 0, "comp"]);
    if (arr[j] < pivot) {
      i++;
      anime.push([[i, arr[i]], [j, arr[j]], "swap"]);
      let t = arr[j];
      arr[j] = arr[i];
      arr[i] = t;
      anime.push([j, i, "none"]);
    }
    anime.push([j, -1, "none"]);
  }
  anime.push([[i + 1, arr[i + 1]], [h, arr[h]], "swap"]);
  anime.push([i + 1, h], "none");
  anime.push([i + 1, -1, "sorted"]);
  let x = arr[i + 1];
  arr[i + 1] = arr[h];
  arr[h] = x;
  return i + 1;
}
