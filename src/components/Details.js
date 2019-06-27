import React from 'react';

const Details = (props) => {
	if(props.hog.name){
		const {name, specialty, greased, weight, medal} = props.hog;
		return(
			<div>
				<h3>{name}</h3>
				<p>Specialty: {specialty}</p>
				<p>{greased ? "Greasy" : "Not Greasy"}</p>
				<p>Weight: {weight}</p>
				<p>Medal: {medal}</p>
			</div>
		);
	}else{
		return <div/>
	}
}

export default Details;
