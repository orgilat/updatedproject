// RENAME THIS FILE TO MAIN JS!!!

let Body;
let LoginPage;
let HomePage;
let RightIcons;
let RightIcons2;
let homepageContant;
let SocioManage;
let socioSurveyItself;
let socioEventManagement;
let socioCreate;
let potentialAssessment;
let potentialTable;

window.addEventListener('load', () => {
    
    loadElements();
    enter();
    var currentDate = new Date();
        document.getElementById('last-update-time').textContent = currentDate.toLocaleString('he-IL');
        
        // עדכון תאריך ושעה בלחיצה על כפתור
        document.getElementById('update-button').addEventListener('click', function() {
            var updatedDate = new Date();
            document.getElementById('last-update-time').textContent = updatedDate.toLocaleString('he-IL');
        });
});

const loadElements = () => {
    LoginPage = document.getElementById("loginPage-main");
    HomePage = document.getElementById("home-page");
    RightIcons = document.getElementById("rightside-icons");
    RightIcons2 = document.getElementById("rightside-icons2");
    homepageContant = document.getElementById("home-page-contant");
    SocioManage = document.getElementById("Sociometric-managment");
    socioSurveyItself = document.getElementById("socio-survey-creation");
    socioEventManagement = document.getElementById("Socio-event-managment");
    socioCreate = document.getElementById("socio-survey-creation-area");
    potentialAssessment = document.getElementById("socio-survey-potential-assessment");
    potentialTable = document.getElementById("float-potential-table");
    Body = document.getElementById("body");
    Body.style.backgroundColor = "rgb(248, 250, 252)";
}

const enter = () => {
    document.getElementById("enter-btn").addEventListener("click", () => {
        LoginPage.style.display = "none";
        HomePage.style.display = "block";
        // RightIcons.style.display = "none";
        // homepageContant.style.display = "none";
        // socioSurveyItself.style.display = "none";
        socioDepEnt();
    });
}

const socioDepEnt = () => {
    document.getElementById("socio-enter-btn").addEventListener("click", () => {
        homepageContant.style.display = "none";
        SocioManage.style.display = "block";
        document.getElementById("crumbs").innerText = "דף הבית  >>  ניהול סוציומטרי"
        SocioMngEvent();
    });
}

const SocioMngEvent = () => {
    document.getElementById("btn-next-events").addEventListener("click", () => {
        HomePage.style.display = "none";
        socioEventManagement.style.display = "block";
        RightIcons.style.display = "flex";
        SurveySelf();
    })
}

const SurveySelf = () => {
   document.getElementById("new-event-btn").addEventListener("click", () => {
        socioEventManagement.style.display = "none";
        socioSurveyItself.style.display = "block";
        RightIcons2.style.display = "flex";
        PotAss();
   }) 
}

const PotAss = () => {
    document.getElementById("event-stage-label2").addEventListener("click", () => {
        potentialAssessment.style.display = "block";
        socioCreate.style.display = "none";

        // מאזין לכפתור btn-potential
        document.getElementById("btn-potential").addEventListener("click", () => {
            potentialTable.style.display = "block"; // מציג את הטבלה

       

            // מאזין לכפתור סגירת הטבלה
            document.getElementById("close-table-button").addEventListener("click", () => {
                potentialTable.style.display = "none"; // סגירת הטבלה
            });
        });
    });
};




// כשמתקבל קליק על כפתור "הצג פוטנציאל"



