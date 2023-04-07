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
    const cle1Project = new Project(0,"CLE1 : Internet of Things",
        "My first CMGT project.<br>  I worked with my team mates to make a small robot.",
        ["img/robot-week-0.jpg", "img/robot-week-1.png"]);
    const cle2Project = new Project(1,"CLE2 : Web Applications",
        "My second CMGT project.<br>  I ended up making a DJ reservation system.",
        ["img/rv_sys_1.png", "img/rv_sys_2.png", "img/rv_sys_3.png"]);
    const cle3Project = new Project(2,"CLE3 : Mobile",
        "<h1>My third CMGT project.</h1><br>  I worked with a team to make a prototype Hospital Finder for" +
        "the hard of hearing. <br> This was a <b>particularly</b> difficult project as I had to do quite a bit of research" +
        "as well as learn how to make a WebApi and use <b>javascript</b> for various aspects of the project.<br><i>Somehow this was more complicated than working" +
        "on a Unity Game and making custom systems.</i>",
        ["img/NGT_Pic_0.png", "img/NGT_Pic_1.png", "img/NGT_Pic_2.png" , "img/NGT_Pic_3.png"]);
    const cle4Project = new Project(2,"CLE4 : Games ",
        "Coming Soon...",
        []);
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