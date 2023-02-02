

<script>
    
    let clicks = 0;
    
    let background_color
    function clicked() {
        clicks+= 0.1;
    }
    if (clicks >10){
        background_color = rgb(0,0,0)
    }
</script>



<main class:bakgrund={clicks>10}>
    <h1>öron clicker</h1>



    <button class="clicker" on:click={clicked}  id={clicks>2 ? clicks > 5 ? clicks>10 ? "mycket": "five": "true": "false"}>
        skaffa öron
    </button>
    du har såhär många öron: {Math.round(clicks * 10) / 10}
</main>

{#if clicks>10}
    <audio autoplay>
        <source src="ajdå.mp3" type="audio/mpeg">   
    </audio>
{/if}

<style> 

    main{}
    .clicker{
        background-image: url(katt.jpg);
        width: 400px; height: 300px;
        background-size: 100% 100%;
    }

    #true{
        background-image: url(katt2.png);

    }

    #five{

        background-image: url(katt3.png);
        background-size: 150% 100%;
        background-position: center;

    }
    #mycket{

        background-image: url(läbbi.jpg)
        
        

    }

    .bakgrund {
        background-image: url(läbbi.jpg);
        background-size: cover;
        height: 100vh;
    }
    
button{
    font-size: 30px
}
main{
    font-size: 30px;
}

</style>