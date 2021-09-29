const data = [
    {
        "title": "Work",
        "timeframes": {
            "daily": {
                "current": 5,
                "previous": 7
            },
            "weekly": {
                "current": 32,
                "previous": 36
            },
            "monthly": {
                "current": 103,
                "previous": 128
            }
        }
    },
    {
        "title": "Play",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 2
            },
            "weekly": {
                "current": 10,
                "previous": 8
            },
            "monthly": {
                "current": 23,
                "previous": 29
            }
        }
    },
    {
        "title": "Study",
        "timeframes": {
            "daily": {
                "current": 0,
                "previous": 1
            },
            "weekly": {
                "current": 4,
                "previous": 7
            },
            "monthly": {
                "current": 13,
                "previous": 19
            }
        }
    },
    {
        "title": "Exercise",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 1
            },
            "weekly": {
                "current": 4,
                "previous": 5
            },
            "monthly": {
                "current": 11,
                "previous": 18
            }
        }
    },
    {
        "title": "Social",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 3
            },
            "weekly": {
                "current": 5,
                "previous": 10
            },
            "monthly": {
                "current": 21,
                "previous": 23
            }
        }
    },
    {
        "title": "Self Care",
        "timeframes": {
            "daily": {
                "current": 0,
                "previous": 1
            },
            "weekly": {
                "current": 2,
                "previous": 2
            },
            "monthly": {
                "current": 7,
                "previous": 11
            }
        }
    }
]


let active = 'weekly'

const daily = document.querySelector("#daily")
daily.addEventListener('click', dailyFunction);
function dailyFunction(event) {
    var right = document.getElementsByClassName("right")[0].children;


    daily.classList.add('active');

    if (active === 'weekly') weekly.classList.remove('active')
    else if (active === 'monthly') monthly.classList.remove('active')

    active = 'daily'

    for (let i = 0; i < 6; i++) {
        right[i].children[1].children[0].children[1].children[0].textContent = data[i].timeframes.daily.current + "hrs"
        right[i].children[1].children[0].children[1].children[1].textContent = "Yesterday - " + data[i].timeframes.daily.previous + "hrs"
    }
}



const weekly = document.querySelector("#weekly");
weekly.addEventListener("click", weeeklyFunction);
function weeeklyFunction() {
    var right = document.getElementsByClassName("right")[0].children;

    weekly.classList.add('active')

    if (active === 'daily') daily.classList.remove('active')
    else if (active === 'monthly') monthly.classList.remove('active')

    active = 'weekly'

    for (let i = 0; i < 6; i++) {
        right[i].children[1].children[0].children[1].children[0].textContent = data[i].timeframes.weekly.current + "hrs"
        right[i].children[1].children[0].children[1].children[1].textContent = "Last week - " + data[i].timeframes.weekly.previous + "hrs"
    }
}

do {
    var right = document.getElementsByClassName("right")[0].children;

    for (let i = 0; i < 6; i++) {
        right[i].children[1].children[0].children[1].children[0].textContent = data[i].timeframes.weekly.current + "hrs"
        right[i].children[1].children[0].children[1].children[1].textContent = "Last week - " + data[i].timeframes.weekly.previous + "hrs"
    }

    weekly.classList.add('active')

} while (0)



const monthly = document.querySelector("#monthly");
monthly.addEventListener("click", monthlyFunction);
function monthlyFunction() {
    var right = document.getElementsByClassName("right")[0].children;

    monthly.classList.add('active')

    if (active === 'daily') daily.classList.remove('active')
    else if (active === 'weekly') weekly.classList.remove('active')

    active = 'monthly'

    for (let i = 0; i < 6; i++) {
        right[i].children[1].children[0].children[1].children[0].textContent = data[i].timeframes.monthly.current + "hrs"
        right[i].children[1].children[0].children[1].children[1].textContent = "Last month - " + data[i].timeframes.monthly.previous + "hrs"
    }
}


