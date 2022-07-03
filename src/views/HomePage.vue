<template>
    <div>
        <br>
        <div class="grid-container">
            <div class="my-img">
                <img src="../icons/profile.jpg"  alt="">
            </div>
            <div class="my-vid">
                <h1>Meet Me</h1><br>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis autem doloremque fugiat neque aperiam eos enim earum adipisci harum perferendis. A voluptatem suscipit ad? Iure nihil esse impedit enim, obcaecati ipsa blanditiis fuga nisi, qui cupiditate beatae ea? Unde vel quas, rerum doloremque alias perferendis. Sed aspernatur molestiae nam consectetur quam quo dicta iusto quod eligendi vitae error ullam praesentium aliquam sit voluptates non totam doloremque minima, fuga eius. Consequuntur delectus blanditiis voluptatum quod unde nisi in et amet adipisci, deleniti dolore odio ipsam rerum dignissimos at voluptates tempore eos obcaecati id laboriosam libero excepturi voluptas? Ipsam soluta quaerat atque.</p>            
            </div>
        </div>
    </div> 
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');


.grid-container{
    display: grid;
    /* border: 1px solid black ; */
    grid-template-columns: 1fr 1fr;
}

.my-img{
    display: flex;
    /* align-items: center; */
    justify-content: space-around;
    /* border: 1px solid black; */
}

img{
    box-shadow: 1px 3px 11px 2px rgba(0,0,0,0.2);
    display: block;
    max-width: 100%;
    /* width: 300px; */
    border-radius: 20px;
}

h1{
    font-family: 'Varela Round', sans-serif;
}
</style>
