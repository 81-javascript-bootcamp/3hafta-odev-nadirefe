const petsModule = (function () {
    const _data = [
        {
            image: "https://pet-uploads.adoptapet.com/1/6/b/406528149.jpg",
            name: "Sam",
            type: "Golden Retriever/St. Bernard Mix",
            sound: "bark",
            soundText: "Bark - type b"
        },
        {
            image: "https://pet-uploads.adoptapet.com/0/f/3/462356648.jpg",
            name: "Mellie",
            type: "Domestic Shorthair",
            sound: "meow",
            soundText: "Meow - type m"
        },
        {
            image: "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/dog_cool_summer_slideshow/1800x1200_dog_cool_summer_other.jpg",
            name: "Rex",
            type: "Boston Terrier",
            sound: "bark",
            soundText: "Bark - type b"
        },
        {
            image: "https://www.thesprucepets.com/thmb/-64ZsblV3KSKAdIXzv96bo9DKvw=/2121x1414/filters:fill(auto,1)/GettyImages-1140917170-727bc42801da47c4ace4eb34940d2120.jpg",
            name: "Fluffy",
            type: "Turkish Angora",
            sound: "meow",
            soundText: "Meow - type m"
        }
    ];
    const $tbodyEl = document.querySelector("tbody");
    const $buttons = document.querySelectorAll("button");

    const getButtons = function () {
        return document.querySelectorAll("button");
    }

    const createPetElement = function (pet) {
        return "<tr class='pet-row'><td><img class='pet-image' src='" + pet.image + "' /></td><td>" + pet.name + "</td><td>" + pet.type + "</td><td><button data-sound='" + pet.sound + "'>" + pet.soundText + "</button></td></tr></div>"
    };

    const addToTable = function (content) {
        $tbodyEl.innerHTML += content;
    }

    const putPetsInHtml = function () {
        for (let i = 0; i < _data.length; i++) {
            addToTable(createPetElement(_data[i]));
        }
    }

    const pressKey = function () {
        document.addEventListener('keypress', function (event) {
            if (event.key === "b") {
                const soundElement = document.getElementById("bark");
                soundElement.play();
            }
            if (event.key === "m") {
                const soundElement = document.getElementById("meow");
                soundElement.play();
            }
        })
    }

    const clickRow = function () {
        const rowList = document.querySelectorAll('.pet-row')
        rowList.forEach(row => {
            row.addEventListener('click', function (e) {
                row.style.backgroundColor = 'cyan'
                const mainImage = document.querySelector('.main-image');
                mainImage.src = row.querySelector('.pet-image').src
            })
            row.querySelector('button').addEventListener('click', function (e) {
                e.stopPropagation();
            })
        })
    }

    const bindEvents = function () {
        const buttons = getButtons();
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener("click", function (event) {
                const soundId = this.dataset.sound;
                const soundElement = document.getElementById(soundId);
                if (soundElement) {
                    soundElement.play();
                }
            });
        }
    }

    const init = function () {
        putPetsInHtml();
        bindEvents();
        pressKey();
        clickRow();
    }

    return {
        init: init
    }
})();