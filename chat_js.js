var wish = 0;

function Post()
{
    var input = document.getElementById("ChatInput").value;
    var topic = document.getElementById("Chat1");
    var Comment1 = document.getElementById("Chat2");
    var Comment2 = document.getElementById("Chat3");


    if(wish == 0 && input != "")
    {
        topic.innerHTML = "Wish 1 : "+input;
        document.getElementById("ChatInput").value = "";
        wish++;
    }
    else if(wish == 1 && input != "")
    {
        Comment1.innerHTML = "Wish 2 : "+input;
        document.getElementById("ChatInput").value = "";
        wish++;
    }
    else if(wish == 2 && input != "")
    {
        Comment2.innerHTML = "Wish 3 : "+input;
        document.getElementById("ChatInput").value = "";
        wish++;
    }
    else if(input != "")
    {
        alert("Please click 'Clear' button and try again.");
    }
}

function Clear()
{
    document.getElementById("ChatInput").value = "";
    document.getElementById("Chat1").innerHTML = "";
    document.getElementById("Chat2").innerHTML = "";
    document.getElementById("Chat3").innerHTML = "";
    wish = 0;
}