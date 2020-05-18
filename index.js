

var bid="";

  $(".Kit").click(function () {
     bid=this.id;
   playSound(bid);

  });

  $("body").keypress(function (event) {
     bid=event.key;
 switch (bid) {
   case  "a":
     playSound("btn1");
     break;
     case  "b":
       playSound("btn2");
       break;
       case "d":
         playSound("btn3");
         break;
         case  "j":
           playSound("btn4");
           break;
           case  "n":
             playSound("btn5");
             break;
             case  "o":
               playSound("btn6");
               break;
               case  "w":
                 playSound("btn7");
                 break;

   default:

 }




  });














function playSound(name) {

  switch (name) {
    case "btn1":
      var audio = new Audio("sound/crash.mp3");
      audio.play();
      break;
      case "btn2":
        var audio = new Audio("sound/kick-bass.mp3");
        audio.play();
        break;
        case "btn3":
          var audio = new Audio("sound/snare.mp3");
          audio.play();
          break;
          case "btn4":
            var audio = new Audio("sound/tom-1.mp3");
            audio.play();
            break;
            case "btn5":
              var audio = new Audio("sound/tom-2.mp3");
              audio.play();
              break;
              case "btn6":
                var audio = new Audio("sound/tom-3.mp3");
                audio.play();
                break;
                case "btn7":
                  var audio = new Audio("sound/tom-4.mp3");
                  audio.play();
               break;


  }

}
