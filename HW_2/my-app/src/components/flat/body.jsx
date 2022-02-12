import { useState } from 'react';
import React from 'react';
import { 	
	apartments,
	comfort,
	budget 
} from '../../../src/data-flat.jsx';

const FlatCategory = ({ title, children }) => {
	const [visible, setVisibility] = useState(true);
	
	const handleClick = () => {
		setVisibility((prevState) => !prevState);
	}
	return (
		<li>
			<h3>
				<button onClick={handleClick}>{title}</button>
			</h3>
			<div hidden={!visible}>
				{children}
			</div>
		</li>
	)
}

const Flats = ({ categories }) => {
	return (
		<div>
			{categories.map(({ title, text }) => 
      <FlatCategory key={title} title={title} text={text}/>)}
		</div>
	)
};

export default class BodyFlat extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { title } = this.props;
    return (
      <>
      <header>
					<h2>{title}</h2>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="react">
          Rent a flat. But first learn React)
          </a>
			</header>
      <Flats categories={
					[
						apartments,
            comfort,
            budget
					]
				}/>
      </>
    );
  }
}
