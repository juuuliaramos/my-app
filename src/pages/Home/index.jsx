import Axios from 'axios';
import { useEffect, useState } from 'react';

import Header from '../../components/Header';
import {
	Highlight,
	Title,
	FilterText,
	ButtonType,
	MovieTypeSection,
	Body,
	MoviesSection,
	Movie,
	Image,
	MovieTitle,
	MovieDate
} from './style';

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

function Home() {
	const [moviesData, setMoviesData] = useState();

	const baseURL =
		'https://api.themoviedb.org/3/movie/popular?api_key=e271b3e6d4c635865580d551d032131c&language=en-US&page=1';

	useEffect(() => {
		let datas;
		Axios.get(baseURL).then((res) => {
			datas = res.data;
			setMoviesData(datas);
		});
	}, []);

	if (!moviesData) return null;

	console.log('moviesData.results[0].title', moviesData.results[0].title);
	console.log('moviesData.results>', moviesData.results);

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
						<ButtonType key={key}>{type}</ButtonType>
					))}
				</MovieTypeSection>
			</Highlight>

			<Body>
				<MoviesSection data-testid='moviesSection'>
					{moviesData.results.map((element, key) => {
						return (
							<Movie key={key}>
								<Image
									src={`https://image.tmdb.org/t/p/w500${element.poster_path}`}
									alt='ola'
								/>
								<MovieTitle>{element.title}</MovieTitle>
								<MovieDate>{element.release_date}</MovieDate>
							</Movie>
						);
					})}
				</MoviesSection>
			</Body>
		</>
	);
}

export default Home;
