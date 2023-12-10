import { Link } from "react-router-dom";
import "../styles/Dashboard.css";

function Dashboard( {stocks} ) {

    return (
		<section className="stocks">
			{stocks && stocks.map((stock) => {
				const { name, symbol, price, exchange } = stock;
				
                return (
					<Link 
						key={symbol}
                        state={{stock: stock}}
						to={"/stocks/" + symbol}>
						<h2>
							{symbol}: {name}
						</h2>
					</Link>
				);
			})}
		</section>
	);
}

export default Dashboard;