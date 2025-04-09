class passWord {
    // Utility function to shuffle string
    shuffle(str) {
        return str.split('').sort(() => 0.5 - Math.random()).join('');
    }

    strongPass(num) {
        if(num < 4) num = 4; // minimum 4 for all rules to be applied
        const lower = "abcdefghijklmnopqrstuvwxyz";
        const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const nums = "1234567890";
        const special = "@#$%";

        let password = [
            lower[Math.floor(Math.random() * lower.length)],
            upper[Math.floor(Math.random() * upper.length)],
            nums[Math.floor(Math.random() * nums.length)],
            special[Math.floor(Math.random() * special.length)]
        ];

        let allChars = lower + upper + nums + special;
        for(let i = 4; i < num; i++) {
            password.push(allChars[Math.floor(Math.random() * allChars.length)]);
        }

        return this.shuffle(password.join(''));
    }

    weakPass(num) {
        if(num < 2) num = 2;

        const lower = "abcdefghijklmnopqrstuvwxyz";
        const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        
        let password = [
            lower[Math.floor(Math.random() * lower.length)],
            upper[Math.floor(Math.random() * upper.length)]
        ];

        let allChars = lower + upper;
        for(let i = 2; i < num; i++){
            password.push(allChars[Math.floor(Math.random() * allChars.length)]);
        }

        return this.shuffle(password.join(''));
    }

    superStrongPass(num) {
        if(num < 5) num = 5;

            const lower = "abcdefghijklmnopqrstuvwxyz";
            const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            const nums = "1234567890";
            const special = "!@#$%^&*()-_+|/?.,>";
            const extraSpecial = "~`{}[]:;'<=>^";

            // Ensure one character from each group is included
            let password = [
                lower[Math.floor(Math.random() * lower.length)],
                upper[Math.floor(Math.random() * upper.length)],
                nums[Math.floor(Math.random() * nums.length)],
                special[Math.floor(Math.random() * special.length)],
                extraSpecial[Math.floor(Math.random() * extraSpecial.length)],
            ];

            // Combine all characters for remaining generation
            let allChars = lower + upper + nums + special + extraSpecial;

            for(let i = 5; i < num; i++) {
                password.push(allChars[Math.floor(Math.random() * allChars.length)]);
            }

            return this.shuffle(password.join(''));
        }

    funnyPass() {
        let passwords = ['ILoveChoco@123', 'MonkeyBanana$', 'LetMeInPlz', 'ILiveInMatrix#', '404BrainNotFound', 'CtrlAltEscape', 'IAmBatman007', '404brains', 'rickrolled', 'angrycookie88', 'yoloswag420', 'sleepytiger007', 'toothpaste99', 'spaghetti007', 'overcookedrice', 'snoringduck77', 'bouncinghamster33', 'dancingpenguin69', 'hal9000rules', 'n00bslayer', 'boomboomboom', 'pikapikachu', 'potatoboss', 'james007', 'ghostkeyboard', 'passw0rdlol']
        return passwords[Math.floor(Math.random() * passwords.length)];
    }
}


// We use input variable to store password length
let input = ''
let selectedType = ""

// This function is for the Copy button
function copyFunc(){
    let passValue = document.getElementById("passSpan").innerText
    navigator.clipboard.writeText(passValue); // This is used to copy text
    
    let button = document.getElementById("copyButton")
    setTimeout(() => {
        button.className = "copyText"
        button.innerHTML = "Copied!"
    }, 20);
    // Setting timer for copied popup and copy button
    setTimeout(() => {
        button.innerHTML = `<button id="copyButton" onclick=copyFunc()>Copy</button>`
    }, 500);
}

// It is used for generating new content for showing generated password (a template in short)
function generateHTML(password, action){
    let s = document.getElementById("passwordArea");

    s.innerHTML = `<div id="passwordArea">
    <p>Your password is: <span id="passSpan">${password}</span> 
    <span id="copyButton"><button onclick=copyFunc()>Copy</button></span> </p 
    <p>Didn't like it? Then</p>
    <button id="generateButton" onclick=${action}>Generate Again</button>
    </div>`;
}

// Several functions for generating different types of passwords
function generateStrong() {
    if(input === ''){
        input = document.getElementById("passLength").value || 8;
        localStorage.setItem("passwordLength", input);
    }
    let password = new passWord().strongPass(input);
    generateHTML(password, 'generateStrong()');
}

function strong(){
    if (selectedType === "strong") return; // do nothing if already selected

    selectedType = "strong";
    generateStrong();
}

function generateWeak(){
    if(input === ''){
        input = document.getElementById("passLength").value || 8
        localStorage.setItem("passwordLength", input)
    }
    let password = new passWord().weakPass(input);
    generateHTML(password, 'generateWeak()')
}

function weak(){
    if (selectedType === "weak") return; // do nothing if already selected

    selectedType = "weak";
    generateWeak();
}

function generateSuperStrong(){
    if(input === ''){
        input = document.getElementById("passLength").value || 8
        localStorage.setItem("passwordLength", input)
    }
    let password = new passWord().superStrongPass(input);
    generateHTML(password, 'generateSuperStrong()')
}

function superStrong(){
    if (selectedType === "superStrong") return; // do nothing if already selected

    selectedType = "superStrong";
    generateSuperStrong();
}

function generateFunny(){
    if(input === ''){
        input = document.getElementById("passLength").value || 8
        localStorage.setItem("passwordLength", input)
    }
    let password = new passWord().funnyPass(input);
    generateHTML(password, 'generateFunny()')
}

function funny(){
    if (selectedType === "funny") return; // do nothing if already selected

    selectedType = "funny";
    generateFunny()
}

document.getElementById("reloadButton").addEventListener('click', ()=>{
    window.location.reload(); // It will reload the page
})

document.addEventListener('keypress', (e) => {
    if(e.key === 'Enter'){
        strong(); // Making a default password type as strong password
    }
})

// This function is for changing the theme of the page
function dark_mode(){
    let theme = document.getElementById("theme")

    if(theme.getAttribute("href") ==="style1.css"){
        theme.href = "style2.css"
        localStorage.setItem("theme", "dark")
    }
    else{
        theme.href = "style1.css"
        localStorage.setItem("theme", "light")
    }
}

// For saving the theme in local storage
function loadTheme(){
    let theme = document.getElementById("theme")
    let setTheme = localStorage.getItem("theme");
    let passLength = localStorage.getItem("passwordLength")


    // passInput = passLength
    if(setTheme === "dark"){
        theme.href = "style2.css";
    }
    else{
        theme.href = "style1.css";
    }

    if(passLength){
        document.getElementById("passLength").value = passLength
    }
}

window.onload = () => {
    loadTheme();
    selectedType = ""
}