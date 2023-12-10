import { useNavigate, useLocation } from "react-router-dom";
import "../styles/Stock.css";

function Stock({stock}) {

    const data = useLocation();
    let navigate = useNavigate();
    stock = data.state.stock;

    return (
		<section className="stock">
			<h2>{stock.symbol} : {stock.name} <button onClick={() => navigate("/stocks/")}>Return</button></h2>
            <p>Currency: {stock.currency}</p>
            <p>Stock Exchange: {stock.stockExchange}</p>
		</section>
	);
}

export default Stock;