export default function bubblesort(array){
    if(array.lengtht<=1)return array;
    const anime=[];
    helper(array,array.length,anime)
    return anime;
}

function helper(arr,n,anime){
    let i,j;
    for(i=0;i<n;i++){
        for(j=0;j<n-i-1;j++){
            anime.push([j,j+1,"comp"]);
            if(arr[j]>arr[j+1]){
                anime.push([[j,arr[j]],[j+1,arr[j+1]],"swap"]);
                
                let t= arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=t;

            }
            anime.push([j,j+1,"none"]);
        }
        anime.push([j,j+1,"sorted"]);
    }
}
