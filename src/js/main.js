"use strict";
console.log(`Hello! Nice to see you here👋. If you like my work, feel free to contact me: oriana.koziorynska@gmail.com`);

const cards = document.querySelector('.githubRepos__list');

fetch('https://api.github.com/users/OrianaKJ/repos')
  .then(resp => resp.json())
  .then(resp => {
    const repos = resp;
    for (const repo of repos) {
      const { description, homepage, html_url, name } = repo;
      cards.innerHTML += `<li class="project">
            <article class="project__content">
              <img src="../assets/img/githubblack.svg" alt="" class="project__icon">
              <h4 class="project__title">${name}</h4>
              ${description ? ` <p class="project__description">${description}</p>` : 'No description😒'}
            </article>

            <footer class="project__footer">
              <article class="project__footer-links">
              ${homepage ? `<a class="project__link project__link--demo" href="${homepage}" target="_blank" rel="nofollow noreferrer" title="Demo: ${name}.">Demo</a>` : ''}
                <a class="project__link project__link--github" href="${html_url}" target="_blank" rel="nofollow noreferrer" title="Source code: ${name}">GitHub</a>
              </article>
            </footer>
          </li>`;
    }

  })
  .catch(err => {
    console.log(err);
  })