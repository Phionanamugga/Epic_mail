/*var reply_btn = document.getElementById("reply");
reply_btn.addEventListener('click',function(e){
    e.target.setAttribute('style','display:none');
    document.getElementById("comment-dropdown").setAttribute('style','display:block');
});

var send_btn = document.getElementById("send");
send_btn.addEventListener('click',function(e){
    e.target.setAttribute('style','display:none');
    document.getElementById("textareatwo").setAttribute('style','display:none');
    document.getElementById("reply").setAttribute('style','display:block');
});

var reply2_btn = document.getElementById("reply2");
reply2_btn.addEventListener('click',function(e){
    e.target.setAttribute('style','display:none');
    document.getElementById("comment-dropdown2").setAttribute('style','display:block');
});

var send2_btn = document.getElementById("send2");
send2_btn.addEventListener('click',function(e){
    e.target.setAttribute('style','display:none');
    document.getElementById("textareatwo2").setAttribute('style','display:none');
    document.getElementById("reply2").setAttribute('style','display:block');
});

var reply3_btn = document.getElementById("reply3");
reply3_btn.addEventListener('click',function(e){
    e.target.setAttribute('style','display:none');
    document.getElementById("comment-dropdown3").setAttribute('style','display:block');
});

var send3_btn = document.getElementById("send3");
send3_btn.addEventListener('click',function(e){
    e.target.setAttribute('style','display:none');
    document.getElementById("textareatwo3").setAttribute('style','display:none');
    document.getElementById("reply3").setAttribute('style','display:block');
});

var reply4_btn = document.getElementById("reply4");
reply4_btn.addEventListener('click',function(e){
    e.target.setAttribute('style','display:none');
    document.getElementById("comment-dropdown4").setAttribute('style','display:block');
});

var send4_btn = document.getElementById("send4");
send4_btn.addEventListener('click',function(e){
    e.target.setAttribute('style','display:none');
    document.getElementById("textareatwo4").setAttribute('style','display:none');
    document.getElementById("reply4").setAttribute('style','display:block');
});


var reply5_btn = document.getElementById("reply5");
reply5_btn.addEventListener('click',function(e){
    e.target.setAttribute('style','display:none');
    document.getElementById("comment-dropdown5").setAttribute('style','display:block');
});

var send5_btn = document.getElementById("send5");
send5_btn.addEventListener('click',function(e){
    e.target.setAttribute('style','display:none');
    document.getElementById("textareatwo5").setAttribute('style','display:none');
    document.getElementById("reply5").setAttribute('style','display:block');
});

var reply6_btn = document.getElementById("reply6");
reply6_btn.addEventListener('click',function(e){
    e.target.setAttribute('style','display:none');
    document.getElementById("comment-dropdown6").setAttribute('style','display:block');
});

var send6_btn = document.getElementById("send6");
send6_btn.addEventListener('click',function(e){
    e.target.setAttribute('style','display:none');
    document.getElementById("textareatwo6").setAttribute('style','display:none');
    document.getElementById("reply6").setAttribute('style','display:block');
});
*/


function openReplyWindow() {
    document.getElementById("myReply").style.display = "block";
  }
  
function closeReplyWindow() {
    document.getElementById("myReply").style.display = "none";
  }

function deleteMessage() {
    alert("Message has been deleted!");
    //hides chat window on delete
    document.getElementById("myReply").style.display = "none";
  }

//var message ="You can add or change profile pic";
function profilePic(){
    // document.getElementById("profilepic").alert = (message);
    alert("You can add or change profile pic");
    

}

var msg;
function search_field(){
    document.getElementById("Search");
    if(msg == "");
    return( "No input!");

}

function retractMessage() {
    alert("Message has been retracted!");
  }