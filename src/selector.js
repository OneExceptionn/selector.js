// YOUR CODE HERE
// function $(cssSelector) {
//     this.elements = [];
//     if (cssSelector[0] === '.') {
//         let classArray = Array.from(document.getElementsByClassName(cssSelector.slice(1)));
//         classArray.forEach(element => this.elements.push(element))
//     } else if (cssSelector[0] === '#') {
//         let idElement = (document.getElementById(cssSelector.slice(1)));
//         this.elements.push(idElement);
//     } else {
//         let tagArray = Array.from(document.getElementsByTagName(cssSelector));
//         tagArray.forEach(element => this.elements.push(element))
//     }
// }

class $ {
    constructor (cssSelector) {
        this.elements = []
        if (cssSelector[0] === '.') {
            let classArray = Array.from(document.getElementsByClassName(cssSelector.slice(1)));
            classArray.forEach(element => this.elements.push(element))
        } else if (cssSelector[0] === '#') {
            let idElement = (document.getElementById(cssSelector.slice(1)));
            this.elements.push(idElement);
        } else {
            let tagArray = Array.from(document.getElementsByTagName(cssSelector));
            tagArray.forEach(element => this.elements.push(element))
        }
    }

    hide () {
        this.elements.forEach(element => element.style.display = 'none')
    }

    show () {
        this.elements.forEach(element => element.style.display = 'inherit')
    }

    addClassName (name) {
        this.elements.forEach(element => element.classList = name)
    }

    removeClassName (name) {
        this.elements.forEach(element => element.classList.remove(name))
    }

    text(str) {
        this.elements.forEach(element => element.innerText = str)
    }

    addChild(tag) {
        this.elements.forEach(element => element.innerHTML = `<${tag}></${tag}>`)
    }

}