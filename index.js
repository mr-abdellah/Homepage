const accountsContainer = document.querySelector('.accountsContainer');

const createAccount = ({name,src,alt,description,link}) => {
    return `
        <div class="account">
            <img src="${src}" alt="${alt}">
            <h3>${name}</h3>
            <h4 class="description">${description}</h4>
            <a class="discover" target="_blank" href="${link}">Discover</a>
        </div>
    `;
}

const accountsInfo = [
    {
        name: 'Github',
        src : './img/github.gif',
        alt: `Github logo`,
        description: 'this is my github account, here you can find my projects',
        link: 'https://github.com/mr-abdellah',
    },
    {
        name: 'LinkedIn',
        src : './img/linkedin.gif',
        alt: `LinkedIn logo`,
        description: 'this is my LinkedIn account, here you can find more informations about me',
        link: 'https://www.linkedin.com/in/belkaidus/',
    },
    {
        name: 'Tiktok',
        src : './img/tiktok.gif',
        alt: `Tiktok logo`,
        description: 'this is my tiktok account, here you can find more content',
        link: 'https://github.com/mr-abdellah',
    },
];

const showAccounts = accountsInfo.map(acc => createAccount(acc)).join('');
accountsContainer.innerHTML= showAccounts;
