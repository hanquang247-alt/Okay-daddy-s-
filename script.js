const chapters = [
  { n: 1, title: "Khởi đầu", text: [
    "Nội dung Chap 1 sẽ được cập nhật tại đây.",
    "Bạn chỉ cần sửa phần nội dung trong file script.js, không cần sửa giao diện."
  ]},
  { n: 2, title: "Khoảnh khắc ngoài ý muốn", text: [
    "Nội dung Chap 2 sẽ được cập nhật tại đây."
  ]},
  { n: 3, title: "Chuyển đến nhà anh", text: [
    "Nội dung Chap 3 sẽ được cập nhật tại đây."
  ]},
  { n: 4, title: "Cùng em đến thư viện", text: [
    "Nội dung Chap 4 sẽ được cập nhật tại đây."
  ]},
  { n: 5, title: "Một ngày không bình thường", text: [
    "Nội dung Chap 5 sẽ được cập nhật tại đây."
  ]},
  { n: 6, title: "Đàn anh Lập Minh", text: [
    "Nội dung Chap 6 sẽ được cập nhật tại đây."
  ]},
  { n: 7, title: "Kẻ ngáng đường", text: [
    "Nội dung Chap 7 sẽ được cập nhật tại đây."
  ]},
  { n: 8, title: "Đêm hôm ấy", text: [
    "Nội dung Chap 8 sẽ được cập nhật tại đây."
  ]},
  { n: 9, title: "Sáng hôm sau", text: [
    "Nội dung Chap 9 sẽ được cập nhật tại đây."
  ]},
  { n: 10, title: "Tên gọi mới", text: [
    "Nội dung Chap 10 sẽ được cập nhật tại đây."
  ]},
  { n: 11, title: "Tiếp tục câu chuyện", text: [
    "Nội dung Chap 11 sẽ được cập nhật tại đây."
  ]}
];

function renderChapterList() {
  const list = document.getElementById("chapterList");
  if (!list) return;

  list.innerHTML = chapters.map(ch => `
    <a class="chapter" href="chap.html?chap=${ch.n}">
      <span class="chapter-no">CHAP ${String(ch.n).padStart(2,"0")}</span>
      <span class="chapter-title">${ch.title}</span>
      <span class="arrow">→</span>
    </a>
  `).join("");
}

function getChapterNumber() {
  const params = new URLSearchParams(window.location.search);
  const value = Number(params.get("chap"));
  return Number.isInteger(value) && value >= 1 ? value : 1;
}

function renderChapter() {
  const content = document.getElementById("chapterContent");
  if (!content) return;

  const number = getChapterNumber();
  const chapter = chapters.find(ch => ch.n === number) || chapters[0];

  document.title = `Chap ${chapter.n} | ${chapter.title}`;
  document.getElementById("chapterLabel").textContent =
    `CHAP ${String(chapter.n).padStart(2,"0")}`;
  document.getElementById("chapterTitle").textContent = chapter.title;

  content.innerHTML = chapter.text
    .map(paragraph => `<p>${paragraph}</p>`)
    .join("");

  const prev = document.getElementById("prevBtn");
  const next = document.getElementById("nextBtn");

  prev.disabled = chapter.n === 1;
  next.disabled = chapter.n === chapters.length;

  prev.onclick = () => {
    if (chapter.n > 1) {
      window.location.href = `chap.html?chap=${chapter.n - 1}`;
    }
  };

  next.onclick = () => {
    if (chapter.n < chapters.length) {
      window.location.href = `chap.html?chap=${chapter.n + 1}`;
    }
  };
}

renderChapterList();
renderChapter();
