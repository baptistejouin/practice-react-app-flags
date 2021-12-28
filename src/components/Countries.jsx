import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';

const Countries = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [rangeValue, setRangeValue] = useState(20);
	const [selectedRadio, setSelectedRadio] = useState('');
	const radios = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

	useEffect(() => {
		setLoading(true);
		axios
			.get('https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags')
			.then((res) => setData(res.data))
			.then(setLoading(false))
			.catch((error) => {
				setError(error);
				console.log(error);
			});

		return () => {
			// cleanup
		};
	}, []);

	return (
		<div className="countries">
			<div className="countries__sort">
				<div style={{ width: '2rem' }}>{rangeValue}</div>
				<input type="range" min="1" max="250" value={rangeValue} onChange={(e) => setRangeValue(e.target.value)} />
				<ul>
					{radios.map((radio) => {
						return (
							<li key={radio}>
								<label htmlFor={'radio-' + radio}>{radio}</label>
								<input type="radio" value={radio} id={'radio-' + radio} checked={radio === selectedRadio} onChange={(e) => setSelectedRadio(e.target.value)} />
							</li>
						);
					})}
				</ul>
				{selectedRadio && <input className="btn" type="button" value="Annuler la recherche" onClick={() => setSelectedRadio('')}></input>}
			</div>
			{loading && <p>Chargement...</p>}
			{error && <p>Une erreur est survenue.</p>}
			<ul className="countries__list">
				{data
					.filter((country) => country.region.includes(selectedRadio))
					.sort((a, b) => b.population - a.population)
					.filter((country, index) => index < rangeValue)
					.map((country) => (
						<Card country={country} key={country.name.common} />
					))}
			</ul>
		</div>
	);
};

export default Countries;
