let allMenus = [];
let selectedTag = '전체';

// 카테고리별 배경 클래스
const categoryClass = {
  '한식': '한식',
  '중식': '중식',
  '일식': '일식',
  '양식': '양식',
};

function getCategoryClass(tags) {
  for (const tag of ['한식', '중식', '일식', '양식']) {
    if (tags.includes(tag)) return tag;
  }
  return 'default';
}

async function loadMenus() {
  try {
    const res = await fetch('menus.json');
    allMenus = await res.json();
  } catch (e) {
    console.error('메뉴 로드 실패:', e);
  }
}

function getRandomMenus(count = 3) {
  const filtered =
    selectedTag === '전체'
      ? allMenus
      : allMenus.filter((m) => m.tags.includes(selectedTag));

  if (filtered.length === 0) return [];
  if (filtered.length <= count) return [...filtered].sort(() => Math.random() - 0.5);

  const shuffled = [...filtered].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

function renderCards(menus) {
  const container = document.getElementById('menuCards');

  if (menus.length === 0) {
    container.innerHTML = '<p style="text-align:center;color:#888;grid-column:1/-1;">해당 카테고리에 메뉴가 없어요 😢</p>';
    return;
  }

  container.innerHTML = menus
    .map((menu) => {
      const catClass = getCategoryClass(menu.tags);
      const imageHtml = menu.image
        ? `<img src="${menu.image}" alt="${menu.name}" loading="lazy" />`
        : `<div class="card-emoji ${catClass}">${menu.emoji}</div>`;

      const tagsHtml = menu.tags
        .map((tag) => `<span class="tag">${tag}</span>`)
        .join('');

      return `
        <div class="menu-card">
          <div class="card-image">${imageHtml}</div>
          <div class="card-body">
            <h3 class="card-name">${menu.name}</h3>
            <div class="card-tags">${tagsHtml}</div>
          </div>
        </div>
      `;
    })
    .join('');
}

function recommend() {
  const menus = getRandomMenus(3);
  renderCards(menus);

  const results = document.getElementById('results');
  results.classList.add('visible');
  results.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// 필터 버튼
document.querySelectorAll('.filter-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    selectedTag = btn.dataset.tag;
  });
});

document.getElementById('recommendBtn').addEventListener('click', recommend);
document.getElementById('againBtn').addEventListener('click', recommend);

loadMenus();
