let a=Number(prompt("Enter the number of elements in array :"));
        const arr=[];
        for(let i=0;i<a;i++){
            arr[i]=Number(prompt('Enter the elements:'));
        }
        console.log('Array Elements are: '+arr);
        
        function biggestNumber(arr,a){
            let max=arr[0];
            for(let j=1;j<a;j++){
                if(arr[j]>max)
                    max=arr[j];
                }
            return max;
        }
        console.log('The Biggest Number is :'+biggestNumber(arr,a));