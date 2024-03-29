class Project {
    constructor(id, title, description, imgLinks) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.imgLinks = imgLinks;
    }

    getId() {
        return this.id;
    }

    getTitle() {
        return this.title;
    }

    getDescription() {
        return this.description;
    }

    getImgLinks() {
        return this.imgLinks;
    }
}


function setModalContent(content_id)
{
    const cle1Project = new Project(0,"Internet of Things (CLE1: IoT)",
        "My first CMGT project.<br>  I worked with my team mates to make a small robot.",
        ["img/robot-week-0.jpg", "img/robot-week-1.png"]);
    const cle2Project = new Project(1,"Web Applications (CLE2: Web)",
        "My second CMGT project.<br>  I ended up making a DJ reservation system.",
        ["img/rv_sys_1.PNG", "img/rv_sys_2.PNG", "img/rv_sys_3.PNG"]);
    const cle3Project = new Project(2,"Mobile Devices (CLE3: Mobile)",
        "<h1>My third CMGT project.</h1><br>  I worked with a team to make a prototype Hospital Finder for" +
        "the hard of hearing. <br> This was a <b>particularly</b> difficult project as I had to do quite a bit of research" +
        "as well as learn how to make a WebApi and use <b>javascript</b> for various aspects of the project.<br><i>Somehow this was more complicated than working" +
        "on a Unity Game and making custom systems.</i>",
        ["img/NGT_Pic_0.PNG", "img/NGT_Pic_1.PNG", "img/NGT_Pic_2.PNG" , "img/NGT_Pic_3.PNG"]);
    const cle4Project = new Project(0,"Melodies of Mystery (CLE4:Games) ",
        "A short and sweet vertical slice of a detective game made using Excalibur.js<br> It was difficult due to lack of engine documentation but, me and my group made a nice little game regardless.<br>" +
        "Next time I would like to remake the game in a different engine and have a little more than two weeks time.<br>" +
        "Try the game out! : <a href='https://zaidprojectsdev.github.io/HA_Agent_CLE4/'>Melodies of Mystery",
        ["img/game_1.png", "img/game_2.png", "img/game_3.png", "img/game_4.png"]);
    const whoAmIProject = new Project(2,"About  Me : ",
        "<h1>Hi! I'm Zaid.</h1> <br> I'm an aspiring game developer and currently a student at <i>Hogeschool Rotterdam. </i><br> " +
        "<b>My likes are</b> : <br> " +
        "<li>Needlessly complicated code</li><br>"+"<li>Underrated Games</li><br>"+"<li>Xbox Series<i>(Silly name is silly)</i></li><br> "+"<li>Sega stuff too...</li><br>  ",
        []);

    let modal = document.querySelector('.modal');
    let modalTitle = document.getElementById('modal-title');
    let modalDescription= document.getElementById('modal-description');
    let modalFlexboxGallery = document.querySelector('.flexbox-gallery');
    console.log(content_id)
    switch (content_id)
    {
        case '1':
            modalTitle.innerHTML = cle1Project.getTitle();
            modalDescription.innerHTML = cle1Project.getDescription();
            generateData(cle1Project.getImgLinks(),modalFlexboxGallery);
            break;
        case '2':
            modalTitle.innerHTML = cle2Project.getTitle();
            modalDescription.innerHTML = cle2Project.getDescription();
            generateData(cle2Project.getImgLinks(),modalFlexboxGallery);
            break;
        case '3':
            modalTitle.innerHTML = cle3Project.getTitle();
            modalDescription.innerHTML = cle3Project.getDescription();
            generateData(cle3Project.getImgLinks(),modalFlexboxGallery);
            break;
        case '0':
            modalTitle.innerHTML = cle4Project.getTitle();
            modalDescription.innerHTML = cle4Project.getDescription();
            generateData(cle4Project.getImgLinks(),modalFlexboxGallery);
            break;
        case '5':
            modalTitle.innerHTML = whoAmIProject.getTitle();
            modalDescription.innerHTML = whoAmIProject.getDescription();
            generateData(whoAmIProject.getImgLinks(),modalFlexboxGallery);
            break;

    }



}
function generateData(imgLinks, imgContainer)
{
    for (let i = 0; i < imgLinks.length; i++) {
        const imgElement = document.createElement('img');
        imgElement.src = imgLinks[i];

        imgContainer.appendChild(imgElement);

    }
}