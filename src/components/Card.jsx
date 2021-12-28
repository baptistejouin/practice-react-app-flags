const Card = (props) => {
	const { country } = props;
	const numberFormat = (x) => {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
	};
	return (
		<li className="card">
			<img src={country.flags.svg} alt={'drapeau de ' + country.name.common} />
			<div className="card__container">
				<ul>
					<li>Nom : {country.name.common}</li>
					<li>Région : {country.region}</li>
					<li>Capitale : {country.capital}</li>
					<li>Population : {numberFormat(country.population)}</li>
				</ul>
			</div>
		</li>
	);
};

export default Card;
