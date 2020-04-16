const white = "#FFFFFF"
const black = "#000000"
const gray = "#F8F8F9"
const green = "#78FFBE"
const purple = "#CFA6FF"

const themeLight = {
	background: gray,
	body: black,
	highlight: purple,
}

const themeDark = {
	background: black,
	body: white,
	highlight: green,
}

const theme = (mode) => (mode === "light" ? themeLight : themeDark)

export default theme
