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
                    type: "h1"
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
        getItems (item) {
            switch (item.type) {
                case "icon-text": return `<i class="${item.class}"></i> 
                                     <p>${item.text}</p>`;
                case "link": return `<a href="${item.href}">${item.text}</a>`;
                case "button": return `<button class="${item.class}">${item.text}</button>`;
                case "icons":
                    let content = "";
                    item.socials.forEach(social => {
                        content += `<a href="${social.href}"><i class="${social.prefix} ${social.class}"></i></a>`;
                    });
                    return content;
                case "h1": return `<h1>${item.text}</h1>`;
                case "paragraph": return `<p>${item.text}</p>`;
            }
        }
    }
});