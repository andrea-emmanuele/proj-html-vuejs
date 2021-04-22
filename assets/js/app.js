new Vue({
    el: "#application",
    data: {
        header: {
            top: {
                innerLeft: {
                    items: [{
                        text: "Lorem ipsum dolor sit amet.",
                        class: "time",
                        type: "text"
                    }]
                },
                innerRight: {
                    items: [{
                        text: "+1 333 3333-3333",
                        class: "phone",
                        type: "text"
                    },
                    {
                        text: "hello@example.com",
                        class: "message",
                        type: "text"
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
                        type: "button"
                    }]
            }
        },
        getItems (item) {
            switch (item.type) {
                case "text": return `<i class="${item.class}"></i> 
                                     <p>${item.text}</p>`;
                case "link": return `<a href="${item.href}">${item.text}</a>`;
                case "button": return `<button>${item.text}</button>`;
                case "icons":
                    let content = "";
                    item.socials.forEach(social => {
                        content += `<a href="${social.href}"><i class="${social.prefix} ${social.class}"></i></a>`;
                    });
                    return content;
            }
        }
    }
});