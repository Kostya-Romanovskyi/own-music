import styled from '@emotion/styled'
import GlobalColors from '../../UI/GlobalColors'

export const SideBarList = styled.ul`
	display: none;

	list-style: none;

	padding: 0;
	margin: 0 10px;
	margin-top: 30px;

	max-width: 156px;

	border: 1px solid ${GlobalColors.black};
	border-radius: 10px;

	@media screen and (min-width: 768px) {
		display: block;
	}
`
