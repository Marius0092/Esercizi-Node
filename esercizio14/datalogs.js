// Challenge 1

const surprisingFact = "The bumblebee bat is the world's smallest mammal";

console.log("Surprising Fact:", surprisingFact);
console.warn({ surprisingFact })

// Challenge 2:

const familyTree = [
    {
        name: "Person 1",
        children: [
            {
                name: "Person 2",
                children: [
                    {
                        name: "Person 3",
                        children: [
                            {
                                name: "Person 4",
                            },
                        ],
                    },
                ],
            },
        ],
    },
];


console.dir(familyTree, {depth: null});
console.log(JSON.stringify(familyTree, null, 2));


// Challenge 3:

function importantTask() {
    console.count("counter");
}

importantTask();
importantTask();
importantTask();
importantTask();
console.countReset("counter")
importantTask();
importantTask();
