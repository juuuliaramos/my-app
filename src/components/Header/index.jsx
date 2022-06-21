import headerImage from '../Header/headerImage.svg';
import { HeaderWrapper, HeaderContent, Image } from './style';

function Header() {
	return (
		<HeaderWrapper data-testid='headerWrapper'>
			<HeaderContent data-testid='headerContent'>
				<Image src={headerImage} data-testid='image' />
			</HeaderContent>
		</HeaderWrapper>
	);
}
export default Header;
