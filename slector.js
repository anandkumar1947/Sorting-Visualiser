
$(document).ready(()=>{

    $('#contact').click(()=>{
        alert("For contact: ananddkg99.9@gmail.com");
    });
    $('#project').click(()=>{
        alert("Till now this is the only project");
    });
    

    $('#barmenu').hover(()=>{
        $('#b50').click(()=>{
            document.getElementById("count").innerHTML = "Bar Count:  50  &nbsp <span class=\"arrow\">&#x25BC;</span>";
            bars=50;
            init();
        });
        $('#b75').click(()=>{
            document.getElementById("count").innerHTML = "Bar Count:  75  &nbsp <span class=\"arrow\">&#x25BC;</span>";
            bars=75;
            init();
        });
        $('#b100').click(()=>{
            document.getElementById("count").innerHTML = "Bar Count:  100  &nbsp <span class=\"arrow\">&#x25BC;</span>";
            bars=100;
            init();
        });
        $('#b125').click(()=>{
            document.getElementById("count").innerHTML = "Bar Count:  125  &nbsp <span class=\"arrow\">&#x25BC;</span>";
            bars=125;
            init();
        });
        $('#b150').click(()=>{
            document.getElementById("count").innerHTML = "Bar Count:  150  &nbsp <span class=\"arrow\">&#x25BC;</span>";
            bars=150;
            init();
        });
    });

    $('#speed').hover(()=>{
        $('#s1').click(()=>{
            document.getElementById("speed").innerHTML = "Speed:  0.5 X &nbsp<span class=\"arrow\">&#x25BC;</span>";
            speed=40;
        });
        $('#s2').click(()=>{
            document.getElementById("speed").innerHTML = "Speed:  0.75 X &nbsp<span class=\"arrow\">&#x25BC;</span>";
            speed=30;
        });
        $('#s3').click(()=>{
            document.getElementById("speed").innerHTML = "Speed:  1 X &nbsp<span class=\"arrow\">&#x25BC;</span>";
            speed=20;
        });
        $('#s4').click(()=>{
            document.getElementById("speed").innerHTML = "Speed:  1.5 X &nbsp<span class=\"arrow\">&#x25BC;</span>";
            speed=10;
        });
        $('#s5').click(()=>{
            document.getElementById("speed").innerHTML = "Speed:  2 X &nbsp<span class=\"arrow\">&#x25BC;</span>";
            speed=5;
        });
    });


    $('#start').click(()=>{
        run();
    });

    $('#algomenu').hover(()=>{
        $('#a1').click(()=>{
            document.getElementById("algorithm").value = "bubble";
            document.getElementById("algorithm").innerHTML = "Bubble Sort &nbsp<span class=\"arrow\">&#x25BC;</span>";
        });
        $('#a2').click(()=>{
            document.getElementById("algorithm").value = "insertion";
            document.getElementById("algorithm").innerHTML = "Insertion Sort &nbsp<span class=\"arrow\">&#x25BC;</span>";
        });
        $('#a3').click(()=>{
            document.getElementById("algorithm").value = "selection";
            document.getElementById("algorithm").innerHTML = "Selection  Sort &nbsp<span class=\"arrow\">&#x25BC;</span>";
        });
        $('#a4').click(()=>{
            document.getElementById("algorithm").value = "merge";
            document.getElementById("algorithm").innerHTML = "Merge Sort &nbsp<span class=\"arrow\">&#x25BC;</span>";
        });
        $('#a5').click(()=>{
            document.getElementById("algorithm").value = "quick";
            document.getElementById("algorithm").innerHTML = "Quick Sort &nbsp<span class=\"arrow\">&#x25BC;</span>";
        });
    });

    $('#generate').click(()=>{
        init();
    });

});