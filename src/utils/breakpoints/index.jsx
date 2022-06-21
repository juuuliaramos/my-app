import { useLayoutEffect, useState } from 'react';
import { mq as mediaQueries } from './breakpoints';

export default function useMedia(mq) {
	const [matched, setMatched] = useState(false);
	const mediaQuery = `(min-width: ${mediaQueries[mq]})`;

	useLayoutEffect(() => {
		let hydrated = true;
		const mediaQueryList = window.matchMedia(mediaQuery);

		const onChange = () => {
			if (!hydrated) {
				return;
			}
			setMatched(mediaQueryList.matches);
		};

		mediaQueryList.addEventListener('change', onChange);
		setMatched(mediaQueryList.matches);

		return () => {
			hydrated = false;
			mediaQueryList.removeEventListener('change', onChange);
		};
	}, [mediaQuery]);

	return matched;
}
