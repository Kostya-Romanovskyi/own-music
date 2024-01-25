import { css, Global } from '@emotion/react'

// Общие стили для тем
const globalStyles = css`
	body {
		margin: 0;
		padding: 0;
		font-family: 'Arial', sans-serif;
		transition: background-color 0.3s, color 0.3s;
	}
`

// Компонент для переключения темы
const ThemeSwitch = ({ toggleTheme }) => (
	<div
		css={css`
			position: fixed;
			top: 10px;
			right: 10px;
			cursor: pointer;
			font-size: 16px;
			color: #00ffcc; /* неоновый цвет */
			text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
		`}
		onClick={toggleTheme}
	>
		Toggle Theme
	</div>
)

// Стили для светлой темы
const lightTheme = {
	body: '#f0f0f0', // светло-серый фон
	text: '#333',
	inputBackground: '#fff',
	inputText: '#333',
}

// Стили для темной темы
const darkTheme = {
	body: '#111', // темно-серый фон
	text: '#fff',
	inputBackground: '#333',
	inputText: '#fff',
}

// Компонент для обертки контента с учетом текущей темы
const ThemedContainer = ({ children, theme }) => (
	<div
		css={css`
			background-color: ${theme.body};
			color: ${theme.text};
			padding: 20px;
			border-radius: 8px;
			margin: 20px;
			box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
		`}
	>
		{children}
	</div>
)

// Стили для инпута
const Input = ({ theme }) => (
	<input
		css={css`
			padding: 8px;
			margin-bottom: 10px;
			background-color: ${theme.inputBackground};
			color: ${theme.inputText};
			border: 1px solid #ccc;
			border-radius: 4px;
			transition: background-color 0.3s, color 0.3s;
		`}
	/>
)

export { Global, globalStyles, lightTheme, darkTheme, ThemedContainer, Input, ThemeSwitch }
