new Vue({
    el: "#application",
    data: {
        header: {
            top: {
                innerLeft: {
                    items: [{
                        text: "Lorem ipsum dolor sit amet.",
                        class: "time",
                        type: "icon-text"
                    }]
                },
                innerRight: {
                    items: [{
                        text: "+1 333 3333-3333",
                        class: "phone",
                        type: "icon-text"
                    },
                    {
                        text: "hello@example.com",
                        class: "message",
                        type: "icon-text"
                    },
                    {
                        socials: [{
                            prefix: "fab",
                            class: "facebook",
                            href: "#"
                        },
                        {
                            prefix: "fab",
                            class: "twitter",
                            href: "#"
                        },
                        {
                            prefix: "fab",
                            class: "linkedin",
                            href: "#"
                        }],
                        type: "icons"
                    }],
                }
            },
            main: {
                brandName: "<span>nex</span>gen",
                navigationItems: [{
                    text: "home",
                    type: "link",
                    href: "#"
                     },
                    {
                        text: "about",
                        type: "link",
                        href: "#"
                    },
                    {
                        text: "services",
                        type: "link",
                        href: "#"
                    },
                    {
                        text: "pricing",
                        type: "link",
                        href: "#"
                    },
                    {
                        text: "blog",
                        type: "link",
                        href: "#"
                    },
                    {
                        text: "get in touch",
                        type: "button",
                        class: "primary"
                    }]
            },
            jumbo: {
                items: [{
                    text: "Lead~ <span class=\"wrapper\">Customer</span>",
                    type: "h",
                    strongness: "1"
                },
                {
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi ea est eum incidunt necessitatibus odit officia praesentium quae, tempore vero.",
                    type: "paragraph"
                }],
                actions: [{
                    text: "get in touch",
                    type: "button",
                    class: "primary"
                },
                {
                    text: "read more",
                    type: "button",
                    class: "secondary"
                }]
            }
        },
        main: {
            advantages: {
                cards: [{
                    items: [{
                        class: "users circled",
                        type: "icon"
                    },
                    {
                        text: "Lorem ipsum.",
                        type: "h",
                        strongness: "2"
                    },
                    {
                        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate iure molestiae molestias nesciunt quos velit.",
                        type: "paragraph"
                    }]
                },
                {
                    items: [{
                        class: "chart circled",
                        type: "icon"
                    },
                    {
                        text: "Lorem ipsum.",
                        type: "h",
                        strongness: "2"
                    },
                    {
                        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate iure molestiae molestias nesciunt quos velit.",
                        type: "paragraph"
                    }]
                },
                {
                    items: [{
                        class: "tachometer circled",
                        type: "icon"
                    },
                    {
                        text: "Lorem ipsum.",
                        type: "h",
                        strongness: "2"
                    },
                    {
                        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate iure molestiae molestias nesciunt quos velit.",
                        type: "paragraph"
                    }]
                }]
            },
            about: {
                items: [{
                    text: "about the network",
                    type: "span",
                    class: "primary"
                },
                {
                    text: "<span class='wrapper'>The</span>Company",
                    type: "h",
                    strongness: "1"
                },
                {
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid expedita ipsa nostrum velit. Eveniet, similique!",
                    type: "paragraph"
                },
                {
                    innerContainer: {
                        iconHeadings: [{
                            headingText: "Lorem",
                            type: "icon-heading",
                            strongness: "2",
                            class: "medal",
                            paragraphText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                        },
                        {
                            headingText: "Lorem",
                            type: "icon-heading",
                            strongness: "2",
                            class: "lock",
                            paragraphText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                        },
                        {
                            headingText: "Lorem",
                            type: "icon-heading",
                            strongness: "2",
                            class: "edit",
                            paragraphText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                        },
                        {
                            headingText: "Lorem",
                            type: "icon-heading",
                            strongness: "2",
                            class: "graduation",
                            paragraphText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                        }]
                    }
                }]
            },
            services: {
                items: [{
                    text: "our business areas",
                    type: "span",
                    class: "primary"
                },
                {
                    text: "Excellence in <span class='wrapper'>Services</span>",
                    type: "h",
                    strongness: "1"
                }],
                itemsGroup: [{
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam deleniti, dolore dolorem ea, ex exercitationem explicabo incidunt ipsum itaque iure iusto molestiae obcaecati optio porro quae quas soluta veritatis.",
                    type: "paragraph"
                },
                {
                    text: "see all",
                    type: "button",
                    class: "secondary"
                }],
                cards: [{
                    items: [{
                        class: "network",
                        type: "icon"
                    },
                    {
                        text: "Lorem ipsum.",
                        type: "h",
                        strongness: "2"
                    },
                    {
                        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate iure molestiae molestias nesciunt quos velit.",
                        type: "paragraph"
                    },
                        {
                            text: "read more",
                            type: "button",
                            class: "secondary"
                        }]
                },
                {
                    items: [{
                        class: "briefcase",
                        type: "icon"
                    },
                        {
                            text: "Lorem ipsum.",
                            type: "h",
                            strongness: "2"
                        },
                        {
                            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate iure molestiae molestias nesciunt quos velit.",
                            type: "paragraph"
                        },
                        {
                            text: "read more",
                            type: "button",
                            class: "secondary"
                        }]
                },
                {
                    items: [{
                        class: "analytics",
                        type: "icon"
                    },
                    {
                        text: "Lorem ipsum.",
                        type: "h",
                        strongness: "2"
                    },
                    {
                        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate iure molestiae molestias nesciunt quos velit.",
                        type: "paragraph"
                    },
                    {
                        text: "read more",
                        type: "button",
                        class: "secondary"
                    }]
                },
                {
                    items: [{
                        class: "airplane",
                        type: "icon"
                    },
                        {
                            text: "Lorem ipsum.",
                            type: "h",
                            strongness: "2"
                        },
                        {
                            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate iure molestiae molestias nesciunt quos velit.",
                            type: "paragraph"
                        },
                        {
                            text: "read more",
                            type: "button",
                            class: "secondary"
                        }]
                },
                {
                    items: [{
                        class: "globe",
                        type: "icon"
                    },
                        {
                            text: "Lorem ipsum.",
                            type: "h",
                            strongness: "2"
                        },
                        {
                            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate iure molestiae molestias nesciunt quos velit.",
                            type: "paragraph"
                        },
                        {
                            text: "read more",
                            type: "button",
                            class: "secondary"
                        }]
                },
                {
                    items: [{
                        class: "folder",
                        type: "icon"
                    },
                        {
                            text: "Lorem ipsum.",
                            type: "h",
                            strongness: "2"
                        },
                        {
                            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate iure molestiae molestias nesciunt quos velit.",
                            type: "paragraph"
                        },
                        {
                            text: "read more",
                            type: "button",
                            class: "secondary"
                        }]
                }]
            },
            plans: {
                items: [{
                    text: "monthly plans",
                    type: "span",
                    class: "primary"
                    },
                    {
                        text: "<span class='wrapper'>Pricing</span>Table",
                        type: "h",
                        strongness: "1"
                    },
                    {
                        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur distinctio dolorem dolorum error esse fuga ipsum quaerat quo repudiandae voluptatibus!",
                        type: "paragraph"
                    }],
                cards: [{
                    items: [{
                        class: "rocket",
                        type: "icon"
                    },
                    {
                        text: "Lorem ipsum.",
                        type: "h",
                        strongness: "2"
                    },
                    {
                        text: "$490/mo",
                        type: "span",
                        class: "price"
                    },
                    {
                        list: [{
                            text: "Lorem ipsum.",
                            class: "checked"
                        },
                        {
                            text: "Lorem ipsum.",
                            class: "checked"
                        },
                        {
                            text: "Lorem ipsum.",
                            class: "unchecked"
                        },
                        {
                            text: "Lorem ipsum.",
                            class: "unchecked"
                        },
                        {
                            text: "Lorem ipsum.",
                            class: "unchecked"
                        }],
                        type: "list"
                    }]
                },
                {
                    items: [{
                        class: "briefcase",
                        type: "icon"
                    },
                    {
                        text: "Lorem ipsum.",
                        type: "h",
                        strongness: "2"
                    },
                    {
                        text: "$890/mo",
                        type: "span",
                        class: "price"
                    },
                    {
                        list: [{
                            text: "Lorem ipsum.",
                            class: "checked"
                        },
                        {
                            text: "Lorem ipsum.",
                            class: "checked"
                        },
                        {
                            text: "Lorem ipsum.",
                            class: "checked"
                        },
                        {
                            text: "Lorem ipsum.",
                            class: "unchecked"
                        },
                        {
                            text: "Lorem ipsum.",
                            class: "unchecked"
                        }],
                        type: "list"
                    }],
                    class: "most-popular"
                },
                {
                    items: [{
                        class: "gem",
                        type: "icon"
                    },
                    {
                        text: "Lorem ipsum.",
                        type: "h",
                        strongness: "2"
                    },
                    {
                        text: "$1390/mo",
                        type: "span",
                        class: "price"
                    },
                    {
                        list: [{
                            text: "Lorem ipsum.",
                            class: "checked"
                        },
                        {
                            text: "Lorem ipsum.",
                            class: "checked"
                        },
                        {
                            text: "Lorem ipsum.",
                            class: "checked"
                        },
                        {
                            text: "Lorem ipsum.",
                            class: "checked"
                        },
                        {
                            text: "Lorem ipsum.",
                            class: "checked"
                        }],
                        type: "list"
                    }]
                }]
            }
        },
        scrollYTarget: 102,
        getItems (item) {
            console.log(item.type);
            switch (item.type) {
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
            }
        }
    },
    methods: {
        fixMainHeaderToTop() {
            let mainHeader = document.querySelector("header > section#inner-main");
            let mainHeaderColor = getComputedStyle(document.documentElement).getPropertyValue("--header-inner-top-color");

            if (window.scrollY >= this.scrollYTarget) {
                mainHeader.style.top = "0";
                mainHeader.style.background = mainHeaderColor;
            }
            else if (window.scrollY < this.scrollYTarget) {
                mainHeader.style.top = "unset";
                mainHeader.style.background = "unset";
            }
        }
    },
    created() {
        window.addEventListener("scroll", this.fixMainHeaderToTop);
    }
});