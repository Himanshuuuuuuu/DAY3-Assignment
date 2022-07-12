let a=Number(prompt("Enter the number of elements in array :"));
        const arr=[];
        for(let i=0;i<a;i++){
            arr[i]=Number(prompt('Enter the elements:'));
        }
        console.log('Array Elements are: '+arr);
        
        let avg,count=0,sum=0;
        let b = function(arr,a){
            for(let j=0;j<a;j++){
                if(arr[j]<0){
                    sum=sum+arr[j];
                    count++;
                }
            }
            avg=sum/count;
            return avg;
        }
        let values = b(arr,a);
        console.log(values);