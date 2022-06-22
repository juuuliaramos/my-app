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
	const [moviesDataFilter, setMoviesDataFilter] = useState();
	const [moviesGenre, setMoviesGenre] = useState();

	const baseURL =
		'https://api.themoviedb.org/3/movie/popular?api_key=e271b3e6d4c635865580d551d032131c';
	const baseURLFilter = `https://api.themoviedb.org/3/discover/movie?api_key=e271b3e6d4c635865580d551d032131c&include_adult=false&with_genres=${moviesGenre}`;

	useEffect(() => {
		let datas;
		Axios.get(baseURL).then((res) => {
			datas = res.data;
			setMoviesData(datas);
		});

		let datasFilter;
		Axios.get(baseURLFilter).then((res) => {
			datasFilter = res.data;
			setMoviesDataFilter(datasFilter);
		});
	}, [moviesData, moviesDataFilter]);

	const handleFilter = (key) => {
		console.log('moviesDataFilter', moviesDataFilter);
		switch (key) {
			case 0: {
				//Action
				setMoviesGenre('28');
				return;
			}
			case 1: {
				//Adventure
				setMoviesGenre('12');
				return;
			}
			case 2: {
				//Animation
				setMoviesGenre('16');
				return;
			}
			case 3: {
				//Comedy
				setMoviesGenre('35');
				return;
			}
			case 4: {
				//Crime
				setMoviesGenre('80');
				return;
			}
			case 5: {
				//Documentary
				setMoviesGenre('99');
				return;
			}
			case 6: {
				//Drama
				setMoviesGenre('18');
				return;
			}
			case 7: {
				//Family
				setMoviesGenre('10751');
				return;
			}
			case 8: {
				//Fantasy
				setMoviesGenre('14');
				return;
			}
			case 9: {
				//History
				setMoviesGenre('36');
				return;
			}
			case 10: {
				//Horror
				setMoviesGenre('27');
				return;
			}
			case 11: {
				//Music
				setMoviesGenre('10402');
				return;
			}
			case 12: {
				//Mystery
				setMoviesGenre('9648');
				return;
			}
			case 13: {
				//Romance
				setMoviesGenre('10749');
				return;
			}
			case 14: {
				//Science Fiction
				setMoviesGenre('878');
				return;
			}
			case 15: {
				//TV Movie
				setMoviesGenre('10770');
				return;
			}
			case 16: {
				//Thriller
				setMoviesGenre('53');
				return;
			}
			case 17: {
				//War
				setMoviesGenre('10752');
				return;
			}
			case 18: {
				//Western
				setMoviesGenre('37');
				return;
			}

			default: {
				return <> </>;
			}
		}
	};

	if (!moviesData) return null;

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
						<ButtonType onClick={() => handleFilter(key)} key={key}>
							{type}
						</ButtonType>
					))}
				</MovieTypeSection>
			</Highlight>

			<Body>
				<MoviesSection data-testid='moviesSection'>
					{moviesDataFilter
						? moviesDataFilter.results.map((element, key) => {
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
						  })
						: moviesData.results.map((element, key) => {
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
