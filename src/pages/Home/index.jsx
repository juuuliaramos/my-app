import Header from '../../components/Header';
import {
	Highlight,
	Title,
	FilterText,
	ButtonType,
	MovieTypeSection
} from './style';

function Home() {
	const movieType = [
		'Ação',
		'Aventura',
		'Animação',
		'Comédia',
		'Crime',
		'Documentário',
		'Drama',
		'Família',
		'Fantasia',
		'História',
		'Terror',
		'Música',
		'Mistério',
		'Romance',
		'Ficção científica',
		'Cinema TV',
		'Thriller',
		'Guerra',
		'Faroeste'
	];

	const handleButton = () => {
		console.log('funciona');
	};

	return (
		<>
			<Header />
			<Highlight>
				<Title>
					Milhões de filmes, séries e pessoas para descobrir. Explore já.
				</Title>
				<MovieTypeSection>
					<FilterText>Filtre por:</FilterText>
					{movieType?.map((type, key) => (
						<ButtonType onClick={handleButton} key={key}>
							{type}
						</ButtonType>
					))}
				</MovieTypeSection>
			</Highlight>
		</>
	);
}

export default Home;
