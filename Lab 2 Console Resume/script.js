let name = "Peter Sugg";
let career = "Full Stack Engineer";
let personalDescription = "I am a hard working individual";
let interests = ["Starwars", "Programming", "Battletech"];
let skillsArr = [
    skill1 = {
        skill: "Programming",
        cool: 1
    },
    skill2 = {
        skill: "IT Support",
        cool: 1
    },
    skill3 = {
        skill: "Customer Support",
        cool: 0
    },
    skill4 = {
        skill: "Tuba",
        cool: 1
    },
    skill5 = {
        skill: "Cooking",
        cool: 0
    }
];


function displayPosition(companyName, jobTitle, description) {
    return (" * " + jobTitle + " at " + companyName + " - " + description + ".");
};

function displaySkill(skillName, isCool) {
    if (isCool == true) {
        return (" * BAM: " + skillName);
    } else {
        return (" * " + skillName);
    };
};

function displayInterests() {
    for (x = 0; x != 3; x++) {
        console.log (" * " + interests[x]);
    };
};


console.log(name.toUpperCase());
console.log("Career: " + career);
console.log("Description: " + personalDescription);
console.log("My Interests: ");
displayInterests();
console.log("My Previous Experience:")
console.log(displayPosition("Hoover Library IT Department", "Technology Hub Attendant", "Worked with patrons to troubleshoot hardware and software problems"));
console.log(displayPosition("Birmingham Zoo", "Gift Shop Attendant", "Sold merch and helped customers"));
console.log(displayPosition("Champy's Fried Chicken", "Server", "Waited tables and helped customers with ordering food"));
console.log("My Skills:");

for (x = 0; x != 4; x++) {
    console.log(displaySkill(skillsArr[x].skill, skillsArr[x].cool));
};