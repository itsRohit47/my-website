<template>
    <div>
        <br>
        <div class="grid-container">
            <div class="my-img">
                <img src="../icons/profile.jpg"  alt="">
            </div>
            <div class="my-vid">
                <h1>Meet Me</h1><br>
                <p>Welcome my friend, my name is Rohit Bajaj and i was born in a very beatutiful state of india called Punjab. I completed my high school education from india and recenty came to Australia to pursue rest of my studies. Among numerous options, i chose <strong> Information Technology </strong> because i feel that it is the driving factor of majority of bussineses nowadays. I commenced my bachelor's degree in IT at Deakin University in 2020 through online to on-campus pathway because of coronavirus situation worldwide. </p> <br> <p>I have respect for all the components of IT but networking and cloud computing is the one i want to build my career in, because first, i feel there are more opportunities in this area in terms of personal growth, second, working in an organisation where i get the chance to configure network devices and troubleshoot networks and provide secure enviornments for everyone will be an exciting job for now.</p> <br> <p>As a part of university i have explored plenty of areas in IT such as cybe-security, data science, databases, programming, web application development, cloud computing, design thinking and so on. Among everything, i felt the importance of computer networking as it is the foundation of most of the components of IT, Therefore, this year i have choosen my <strong>majors in networking and cloud computing</strong>, this will give me opprtunity to study specificly about it and help me build skills required of entry level networking roles. But personally, i feel it is not enough to just have a basic understanding of anything, having deep insights is really important for me, therefore i am self-studying for the <strong> Cisco Certified Network Associate (CCNA)  exam and Microsoft Azure Fundamentals (AZ-900) </strong> exam on my own time and my aim is to ace these exams towards the end of the year (2022). </p> <br> <p> Note - add some more please...</p>
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
