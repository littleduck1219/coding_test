function solution(s, n) {
          var answer = '';

          s = s.split("");
          const askii = s.map( a => a!=" " ? a.charCodeAt()+n : a.charCodeAt());
          for(i = 0 ; i<s.length; i++){
                    if( s[i].charCodeAt() <= 90){
                              if(askii[i]>90) askii[i] -= 26;
                    }
                    else {
                              if(askii[i]>122) askii[i] -= 26;
                    }
          }
          answer = askii.map( a => String.fromCharCode(a));

          return answer.join("");                 // ( •̀ ᴗ •́ )و
}