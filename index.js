
  var download = require('./download');
var exec = require('child_process').exec;

var num_dir= 0;



  download([0,951], function(status){
       if(status){
        
            exec('osmfilter /tmp/951.osc --keep="@user=Rub21 or "@user=busdoc" or @user=ediyes or @user=samely" -o=process-951.osm', 
                function(error, stdout, stderr) {
                console.log('stdout: ', stdout);
                console.log('stderr: ', stderr);
                if (error !== null) {
                    console.log('exec error: ', error);

                }
                    
            }

            );
       }

    })
        


        




