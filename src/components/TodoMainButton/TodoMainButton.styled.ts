import styled from '@emotion/styled'

export const StyledButton = styled.button`
	display: flex;
	align-items: center;

	margin: 0 auto;

	padding: 5px 10px;

	border: 1px solid #48319d;
	border-radius: 5px;

	color: ${({ theme }) => theme.color};
	background-color: ${({ theme }) => theme.background};

	transition: background-color 300ms;
`
