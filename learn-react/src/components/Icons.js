import icon1 from '../images/icon1.png';
import icon2 from '../images/icon2.png';
import icon3 from '../images/icon3.png';
import icon4 from '../images/icon4.png';


const Icons = () => {
    return ( 
        <div className="icons">
            <div className="iconBlock">
                <img className="icon" src={icon1}/>
                <h3>Declarative</h3>
                <p>React makes it painless to create interactive UIs</p>
            </div>
            <div className="iconBlock">
                <img className="icon" src={icon2}/>
                <h3>Components</h3>
                <p>Build encapsulated compinents that manage their state</p>
            </div>
            <div className="iconBlock">
                <img className="icon" src={icon3}/>
                <h3>Single-Way</h3>
                <p>A set of immutable values are passed to the components</p>
            </div>
            <div className="iconBlock">
                <img className="icon" src={icon4}/>
                <h3>JSX</h3>
                <p>Statically-typed, designed to run on modern browsers</p>
            </div>
        </div>
    );
}
 
export default Icons;