const postsPerPage = 2;
const book = document.getElementById('book');
const posts = Array.from(book.querySelectorAll('.post'));
let current = 0;

// clear book & create pages
book.innerHTML = '';
const pages = [];

// extract the first post as the title page
const titlePost = posts.shift();
const titlePage = document.createElement('div');
titlePage.classList.add('page', 'active');
const titleWrapper = document.createElement('div');
titleWrapper.classList.add('title-page');
titleWrapper.appendChild(titlePost);
titlePage.appendChild(titleWrapper);
pages.push(titlePage);
book.appendChild(titlePage);

// now create spread
for (let i = 0; i < posts.length; i += postsPerPage) {
  const page = document.createElement('div');
  page.classList.add('page');

  const left = document.createElement('div');
  left.classList.add('left-page');

  const right = document.createElement('div');
  right.classList.add('right-page');

  if (posts[i]) left.appendChild(posts[i]);
  if (posts[i + 1]) right.appendChild(posts[i + 1]);

  page.appendChild(left);
  page.appendChild(right);
  pages.push(page);
  book.appendChild(page);
}

// only show first page initially
pages.forEach((p, i) => {
  if (i !== 0) p.classList.remove('active');
});

// navigation
document.getElementById('next').addEventListener('click', () => {
  pages[current].classList.remove('active');
  current = (current + 1) % pages.length;
  pages[current].classList.add('active');
});

document.getElementById('prev').addEventListener('click', () => {
  pages[current].classList.remove('active');
  current = (current - 1 + pages.length) % pages.length;
  pages[current].classList.add('active');
});
