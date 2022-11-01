<template>
    <div>
        <br>
        <div class="grid-container">
            <div class="my-img">
                <img src="../icons/profile.jpg"  alt="">
            </div>
            <div class="my-vid">
                <h1>Meet Me</h1><br>
				
				<h2> sample discription </h2>
				<br>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
        </div>
    </div> 
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');


.grid-container{
    display: grid;
    grid-template-columns: 1.5fr 2fr;
    column-gap: 50px;
    padding: 5px;
}

p{
    line-height: 1.8;
    text-align: justify;
}

img{
    box-shadow: 1px 3px 11px 2px rgba(0,0,0,0.2);
    display: block;
    max-width: 100%;
    border-radius: 20px;
}

.my-img{
    display: flex;
    align-items: center;
    justify-content: center;
}


h1{
    font-family: 'Varela Round', sans-serif;
}

@media (min-width: 500px) and (max-width: 1000px) {
.grid-container{
    display: grid;
    grid-template-rows: 0.5fr 1fr;
    row-gap: 60px;
    grid-template-columns: 1fr;
}}

@media (min-width: 200px) and (max-width: 500px) {
.grid-container{
    display: block;
    padding: 0px;
    margin: 0px;
}
.my-img{
    margin-bottom: 50px;
}}



</style>
