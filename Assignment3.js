let isPrime,sum=0;
        for(let i=2; i<30; i++)
        {
            isPrime = 1;
            for(let j=2; j<=i/2 ;j++)
            {
                if(i%j==0)
                {
                    isPrime = 0;
                    break;
                }
            }
            if(isPrime==1)
            {
                sum += i;
            }
        }
        console.log(sum);