<script>
    let clicks = 0;
    function clicked() {
        clicks+= 1;
        console.log(clicks);
    }
</script>



<main>
    <h1>clicker</h1>



    <button on:click={clicked}>
        click me {clicks}
    </button>
    du har clicka såhär mycke: {clicks}
</main>
