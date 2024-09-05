var maxArea = function(height) {

    let cmaxArea = 0;
    let currentArea =0 ;

    let j = height.length-1;
    let i = 0;

    while(i !== j){

        if(height[i] <= height[j]){           
             currentArea = height[i] * (j - i);
              if(currentArea  > cmaxArea ) cmaxArea = currentArea;
              i++;
        }

        else{
            currentArea = height[j] * (j-i);
             if(currentArea  > cmaxArea ) cmaxArea = currentArea;
             j--;

        }
    }

    return cmaxArea;    
};

let result = maxArea([1,8,6,2,5,4,8,3,7]);

console.log(result);