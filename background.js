const EMOJIS = [
  "😀", "😎", "🔥", "⭐", "🎉", "🚀", "💡", "🎯", "🎨", "🎵",
  "🌈", "🌟", "💎", "🏆", "🎲", "🧩", "🔮", "🌸", "🍀", "🐱",
  "🐶", "🦊", "🦄", "🐝", "🦋", "🐙", "🌻", "🍕", "☕", "🧪",
  "📚", "✏️", "🔧", "🎸", "🏠", "⚡", "🌍", "💜", "🧡", "💚",
  "🫐", "🍇", "🍒", "🥑", "🌶️", "🍩", "🧁", "🎂", "🍭", "🫧",
];

function getRandomEmoji() {
  return EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
}

chrome.tabGroups.onCreated.addListener((group) => {
  if (!group.title) {
    chrome.tabGroups.update(group.id, { title: getRandomEmoji() });
  }
});
