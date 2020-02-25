function sent_message() {
    alert("Message has been sent!");
  }

function drop() {
    document.getElementById("comment-dropdown").style.display = "block";
  }

function closeReplyWindow() {
    document.getElementById("comment-dropdown").style.display = "none";
  }

function deleteMessage() {
    alert("Message has been deleted!");
    //hides chat window on delete
    document.getElementById("comment-dropdown").style.display = "none";
  }
