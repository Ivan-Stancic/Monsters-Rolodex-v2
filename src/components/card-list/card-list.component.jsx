import Card from "../card/car.component";
import './card-list.styles.css';

const CardList = ({ monsters }) => (
    <div className="card-list">
        {monsters.map(monster => {

            return (
                <Card monster={monster} />
            )
        })}
    </div>
);


export default CardList;