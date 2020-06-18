
        //Move Forwared
        var time=500;
        var F=0;
        var M=40
        function MoveForwarded(){
            document.getElementById('movingWord').innerHTML='Moving Forward';
            F+=M;
            var ro=document.getElementById("robot");
            ro.style.top='';
            ro.style.bottom=(F)+"px";
            setTimeout(function(){
                F-=M;
                var ro=document.getElementById("robot");
                ro.style.bottom=(F)+"px";
                document.getElementById('movingWord').innerHTML='';
            },time);
          
        }
        

        //Move Left
        var L=0;
        function MoveLeft(){
           document.getElementById('movingWord').innerHTML='Moving Left';
            L+=M;
            var ro=document.getElementById("robot");
            ro.style.left='';
            ro.style.right=(L)+"px";
            setTimeout(function(){
                L-=M;
                var ro=document.getElementById("robot");
                ro.style.right=(L)+"px";
                document.getElementById('movingWord').innerHTML='';
            },time);
            
        }

        //Move Right
        var R=0;
        function MoveRight(){
            R+=M;
            document.getElementById('movingWord').innerHTML='Moving Right';
            var ro=document.getElementById("robot");
            ro.style.left=(R)+"px";
            setTimeout(function(){
                R-=M;
                var ro=document.getElementById("robot");
                ro.style.left=(R)+"px";
                document.getElementById('movingWord').innerHTML='';
            },time);
        }

        //Move Back
        var B=0;
        function MoveBack(){
            B+=M;
            document.getElementById('movingWord').innerHTML='Moving Back';
            var ro=document.getElementById("robot");
            ro.style.top=(B)+"px";
            setTimeout(function(){
                B-=M;
                var ro=document.getElementById("robot");
                ro.style.top=(B)+"px";
                document.getElementById('movingWord').innerHTML='';
            },time);
        }

        function Stop(){
            B+=M;
            document.getElementById('movingWord').innerHTML='Robot Stopped';
            setTimeout(function(){
                document.getElementById('movingWord').innerHTML='Press the button to control the robot';
            },time);
        }
