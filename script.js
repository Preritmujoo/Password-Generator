class passWord{
    // This method generate password using num (password length : provided by the user) and characters (depends upon type of password)
    generatePassword(num, characters){
        let password = ''
        for(let i = 0; i < num; i++){
            password += characters[Math.floor(Math.random() * characters.length)]
        }

        return password
    }

    // Calling generatePassword() to return specific type of password
    strongPass(num){
        return this.generatePassword(num, "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890")
    }    

    weakPass(num){
        return this.generatePassword(num, "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ")
    }

    superStrongPass(num){
        return this.generatePassword(num, "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()-_+|/?.,>")
    }

    // In this method we randomly select one value from our funny password array
    funnyPass(){
        let passwords = ["admin", "incorrect", "password", "qwerty", "homie", "jatt", "king", "queen", "prince", "princess", "handpump", "sweets", "tractor", "grass", "coffee", "teacher", "professor", "dashboard", "speed", "computer", "keyboard", "mouse", "monitor", "laptop", "desktop", "mobile", "phone", "charger", "earphones", "headphones", "speaker", "bluetooth", "wifi", "internet", "network", "server", "client", "database", "table", "row", "column", "query", "insert", "update", "delete", "select", "where", "from", "join", "inner", "outer", "left", "right", "full", "natural", "cross", "self", "union", "intersect", "except", "group", "having", "order", "escape", "discription", "limit", "offset", "fetch", "next", "first", "last", "summation", "average", "minimum", "maximum", "count", "distinct", "case", "when", "then", "else", "ending", "between", "like", "unlike", "similar", "platform", "true", "false", "unknown", "anything", "some", "exists", "unique", "primary", "foreign", "constraint", "check", "default", "index", "cluster", "hash", "bloom", "filter", "editing", "domain", "materialized", "function", "procedure", "trigger", "event", "listen", "notify", "rule", "policy", "role", "user", "login", "logout", "session", "transaction", "commit", "rollback", "savepoint", "isolation", "level", "serializable", "repeatable", "committed", "uncommitted", "write", "dirty", "read", "snapshot", "concurrency", "control"];
        
        return passwords[Math.floor(Math.random() * passwords.length)];
    }
}

// We use input variable to store password length
let input = ''

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
function strong(){
    if(input === ''){
        input = document.getElementById("passLength").value || 8
    }
    let password = new passWord().strongPass(input);
    generateHTML(password, 'strong()')
}

function weak(){
    if(input === ''){
        input = document.getElementById("passLength").value || 8
    }
    let password = new passWord().weakPass(input);
    generateHTML(password, 'weak()')
}

function superStrong(){
    if(input === ''){
        input = document.getElementById("passLength").value || 8
    }
    let password = new passWord().superStrongPass(input);
    generateHTML(password, 'superStrong()')
}

function funny(){
    if(input === ''){
        input = document.getElementById("passLength").value || 8
    }
    let password = new passWord().funnyPass(input);
    generateHTML(password, 'funny()')
}

document.getElementById("reloadButton").addEventListener('click', ()=>{
    window.location.reload(); // It will reload the page
})

// This function is for changing the theme of the page
function dark_mode(){
    let theme = document.getElementById("theme")

    if(theme.getAttribute("href") ==="style1.css"){
        theme.href = "style2.css"
    }
    else{
        theme.href = "style1.css"
    }
}