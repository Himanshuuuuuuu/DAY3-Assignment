let a=Number(prompt("Enter the number of elements in array :"));
        const arr=[];
        for(let i=0;i<a;i++){
            arr[i]=Number(prompt('Enter the elements:'));
        }
        console.log('Array Elements are: '+arr);
        let c=0;
        for(i=0;i<a;i++){
            if(arr[i]%2==0 && arr[i]%3==0){
                c=c+arr[i];
            }
        }
        console.log('Sum = '+ c);