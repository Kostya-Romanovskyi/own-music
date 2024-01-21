import styled from '@emotion/styled'

export const HiddenButton = styled.button`
	display: none;

	@media screen and (max-width: 768px) {
		font-family: 'Poppins', sans-serif;

		display: block;

		border: none;

		background-color: transparent;
		z-index: 20;
	}
`

export const GridWrapper = styled.div`
	display: grid;

	@media screen and (min-width: 768px) {
		grid-template-columns: 1fr 2fr;
	}
`
