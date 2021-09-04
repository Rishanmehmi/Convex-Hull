
    var str = ["(0,1)","(0,2)","(1,2)","(1,3)","(2,1)","(2,2)","(2,3)","(2,4)","(2,5)","(3,1)","(3,2)","(3,4)","(3,6)","(4,2)","(4,3)","(4,4)","(4,6)","(5,1)","(5,4)","(6,1)","(6,6)"];
  
    var xaxis =[];
    var yaxis =[];
    var strpoint = [];
    var cordinates =[];
    function getString()
    {
        var classiX = document.getElementById("StriX").value;
        var classiY = document.getElementById("StarY").value;
        xaxis[0]=classiX;
        yaxis[0]=classiY;
        var temp = ("("+xaxis+","+yaxis+")");
        strpoint.push(temp);
        document.getElementById("stringtillnow").value = strpoint;
        return strpoint;
    }
    
    function ConvexHullCoordinates()
    {
     var str = strpoint;   
     str.sort();
     var P = str.length;
     var i,j;
     var Z=[];
     var x = [];
     var final=[];
     for(i=0;i<P;i++)
     {
         Z[i]=[i];
     }
    
     for(i=0;i<P;i++)
     {
         for(j=0;j<P;j++)
         {
             if(i==str[j][1])
             {
                 Z[i].push(str[j]);
             }
            
         }
     }
      
     for(i=0;i<P;i++)
     {
         
         if(Z[i].length>1)
         {
           x.push(Z[i]);              
         }
     }
     for(i=0;i<x.length;i++)
     {
         if((x[i][0]==i)&& x[i].length>2)
         {
            final.push(x[i][1]);
            final.push(x[i][x[i].length-1]);
         }
         if((x[i][0]==i)&& x[i].length==2)
         {
             final.push(x[i][1]);
         }
     }
     var noOfPoints = final.length;
     console.log(noOfPoints);
     console.log(final);
     document.getElementById("co-ordinates").value = final;
     document.getElementById("noofpoints").value = final.length;
     }
