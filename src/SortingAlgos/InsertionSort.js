export default function insertionsort(array){
    const anime=[];
    if(array.length<=1)return array;
    helper(array,array.length,anime);
    return anime;
}

function helper(arr,n,anime){
    let i,j,x;

    for(i=1;i<n;i++){
         x=arr[i];
        j=i-1;

        while( j>=0 && arr[j]>arr[j+1]){
            anime.push([j+1,j,"comp"]);
            anime.push([[j+1,arr[j+1]],[j,arr[j]],"swap"]);
            anime.push([j+1,j,"none"]);
            let t= arr[j+1];
            arr[j+1]=arr[j];
            arr[j]=t;
            j--;
        }
        anime.push([j+1,j,"none"]);
        arr[j+1]=x;
    }
    for(let l=0;l<n && i===n ;l++){
        anime.push([l,0,"sorted"]);
    }
}