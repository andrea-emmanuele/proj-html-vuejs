new Vue({
    el: "#application",
    data: {
        structure: "",
        scrollYTargets: [],
        scrolling: false,
        getItems (item) {
            switch (item.type) {
                case "brand": return item.brandName;
                case "link": return `<a href="${item.href}">${item.text}</a>`;
                case "button": return `<button class="${item.class}">${item.text}</button>`;
                case "icons":
                    let content = "";
                    item.socials.forEach(social => {
                        content += `<a href="${social.href}"><i class="${social.prefix} ${social.class}"></i></a>`;
                    });
                    return content;
                case "icon": return `<i class="${item.class}"></i>`;
                case "icon-text": return `<i class="${item.class}"></i> 
                                     <p>${item.text}</p>`;
                case "icon-heading": return `<div class="icon-heading">
                                                <i class="${item.class}"></i> 
                                                 <h${item.strongness}>${item.headingText}</h${item.strongness}>
                                            </div>
                                            <p>${item.paragraphText}</p>`;
                case "h": return `<h${item.strongness}>${item.text}</h${item.strongness}>`;
                case "paragraph": return `<p>${item.text}</p>`;
                case "span": return `<span class="${item.class}">${item.text}</span>`;
                case "list": let listItems = "";
                                item.list.forEach(itemList => {
                                    listItems += `<li class="${itemList.class}">${itemList.text}</li>`;
                                });
                                listItems = `<ul>${listItems}</ul>`;
                                return listItems ;
                case "input": return `<input type="${item.inputType}" placeholder="${item.placeholder}">`;
                case "textarea": return `<textarea placeholder="${item.placeholder}"></textarea>`;
                case "select":  let options = "";
                                item.options.forEach(option => {
                                    options += `<option>${option}</option>`;
                                });
                                return `<div class="select-container"><select>${options}</select></div>`;
            }
        }
    },
    methods: {
        loadStructure() {
            let _self = this;

            fetch("http://localhost:63342/proj-html-vuejs/assets/json/structure.json")
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    _self.structure = data;
                });
        },
        scrollEvents() {
            this.mainHeaderPosition();

            let footer = document.querySelector("footer");
            let scrollUp = document.querySelector("#scroll-up");

            if (window.scrollY > (footer.offsetTop - footer.offsetHeight))
                this.showScrollUp(scrollUp);
            else
                this.hideScrollUp(scrollUp);
        },
        mainHeaderPosition() {
            let mainHeader = document.querySelector("header > section#inner-main");
            let mainHeaderColor = getComputedStyle(document.documentElement).getPropertyValue("--header-inner-top-color");
            let mainHeaderHeight = getComputedStyle(document.documentElement).getPropertyValue("--header-inner-main-height");
            let topHeaderHeight = getComputedStyle(document.documentElement).getPropertyValue("--header-inner-top-height");

            this.scrollYTargets.push(parseInt(mainHeaderHeight));
            this.scrollYTargets.push(parseInt(topHeaderHeight));

            if (window.scrollY >= this.scrollYTargets[0]) {
                mainHeader.style.position = "fixed";
                mainHeader.style.animation = "bouncedown 300ms ease-in-out forwards";
                mainHeader.style.background = mainHeaderColor;
                this.scrolling = true;
            }
            else if (this.scrolling && window.scrollY < this.scrollYTargets[1]) {
                mainHeader.style.position = "absolute";
                mainHeader.style.animation = "movetostartposition 300ms linear forwards";
                mainHeader.style.background = "transparent";
                this.scrolling = false;
            }
        },
        hideScrollUp(scrollUp) {
            scrollUp.style.display = "none";
        },
        showScrollUp(scrollUp) {
            scrollUp.style.display = "block";
            scrollUp.style.animation = "showScrollUp 500ms ease-in";
        },
        scrollUp() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    },
    created() {
        this.loadStructure();
        window.addEventListener("scroll", this.scrollEvents);
    }
});