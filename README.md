# Выполнение практического задания

## Задача
Переведите свой проект, выполненный в модуле Webpack, на TypeScript.

## Изменения
0. Обновлён конфиг для webpack:
```javascript
module.exports = {
	...остальной код
	entry: "./index.ts",
	resolve: {
    	extensions: [".tsx", ".ts", ".jsx", ".js"],
  	},
	 module: {
		rules: [
			...остальной код
		{
			test: /\.[tj]sx?$/,
			use: "ts-loader",
			exclude: /node_modules/,
		},
    ],
  },
}
```

1. Создан `interface` для корректной работы с `data`-атрибутами у `html`-элементов:
```typescript
interface SoundButton extends HTMLButtonElement {
  dataset: {
    sound: string;
    bg: string;
    icon: string;
  };
}
```

2. Обозначены типы для ключевых элементов приложения в момент инициализации приложения:
```typescript
  let currentAudio: HTMLAudioElement | null = null;
  let isPlaying = false;
  let currentSound: string | null = null;
  let volume = 0.5;
```

3. Протипизированы функции, принимающие хотя бы один аргумент:
	3.1. `playAudio(sound: string)`
	```typescript
	function playAudio(sound: string) {
		currentAudio = new Audio(`assets/sounds/${sound}.mp3`);
		currentAudio.volume = volume;
		currentAudio.loop = true;
		currentAudio.play();
		isPlaying = true;
	}
	```
	3.2. `setActiveButton(activeButton: SoundButton)`
	```typescript
	function setActiveButton(activeButton: SoundButton) {
    soundButtons.forEach((btn) => {
      btn.classList.remove("active");
    });
    activeButton.classList.add("active");
  	}
	```

### Используемые технологии:
- HTML, SCSS;
- TypeScript;
- Webpack;
- EsLint.
