export default function selectionsort(arr){
    if(arr.length<=1)return arr;
    const anime=[];
    helper(arr,arr.length,anime);
    return anime;
}

function helper(arr,n,anime){

    let i,j,min_idx;

    for(i=0;i<n;i++){
        min_idx=i;
        for(j=i+1;j<n;j++){
            anime.push([min_idx,j,"comp"]);
            if(arr[j]<arr[min_idx]){
                anime.push([min_idx,-1,"none"]);
                min_idx=j;
            }
            anime.push([j,-1,"none"]);
        }
        anime.push([[min_idx,arr[min_idx]],[i,arr[i]],"swap"]);
        let t=arr[i];
        arr[i]=arr[min_idx];
        arr[min_idx]=t;
        anime.push([min_idx,i,"none"]);
        anime.push([i,0,"sorted"]);


    }
}