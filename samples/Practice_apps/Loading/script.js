/*
 * Javascript for the progress bar
 * @author - Yane
 */

$(document).ready(function() {  
  
    var pBar = $('.progress-bar');
    var spark = $('.loader-spark');
    var firework = $('.firework');
    var lTitleVal = $('.loading-title-val');
    var lTitleWait = $('.loading-title-wait');
    var mainContainer = $('.main-container')
    var loadMax = pBar.attr('max');  
    var loadValue = pBar.val();
    var sparStartPos = spark.position().left;
    var pBarWidth = $('.progress-bar').width();
    var pBarStep = pBarWidth/loadMax;
    
    // A function to update the progress bar and spark values
    // retruns 'loaded' when it's done
    var loadingUpdate = function ( val ){
      
      addValue = pBar.val(val);
      spark.css( 'left', (sparStartPos + val*pBarStep) + 'px' );
      lTitleVal.text( val+'%' );
      
      if ( val == loadMax ){
        spark.hide();
        lTitleWait.text( 'Loaded! Launching it!' );
        launchIt();
        return 'loaded';
      }else{
        return 'loading';
      }
      
    }
    
    // An action to take after it's loaded
    var launchIt = function (){
      spriteAnimation( firework, 40, 30, 0, 9, false, function(){
        spriteAnimation( firework, 40, 30, 9, 18, true, false);
        firework.delay(300).animate({top:"-200px"}, 1000, function(){
          mainContainer.fadeTo(100,0.4).fadeTo(100,0.9).fadeTo(100,0.4).fadeTo(100,0.9).fadeOut(300);
        });
      });
    }
    
    
    // Function for the sprite animation
    var spriteAnimation = function ( el, 
                                     spriteWidth, 
                                     spriteAnimFrame, 
                                     frameStart, 
                                     frameCount,
                                     loop,
                                     fallback ){
      
      var frame = frameStart;
      
      var animateSprite = function(){
        
        frame ++;

        $( el ).css('background-position','-'+(frame*spriteWidth)+'px 0');

        if ( frame < frameCount ) {
          setTimeout(function() {
            animateSprite( );
          }, spriteAnimFrame);
        }else{
          if ( loop ){
            frame = frameStart;
            animateSprite( );
          }else{
            if( fallback ){
              try {
                fallback();
              }
              catch(err) {

              }
            }
          }
        }
        
      }
      
      animateSprite();

    }
    
    // simuating loading in order to show how it works, since we have actually
    // nothing to load currently
    
    var simulateLoading = function(){
      
      var timeInterval = (1000/loadMax)*5; 

      var loading = function() {  
          loadValue += 1;  

          if (loadingUpdate(loadValue) == 'loaded') {  
              clearInterval(animateProgress);                      
          }  
      };  

      var animateProgress = setInterval(function() {  
          loading();  
      }, timeInterval);
      
    }
    
    spriteAnimation( spark, 15, 30, 0, 10, true, false );
    
    simulateLoading();
    
});