import Card from "./Card";

const Menu = ({menu}) => {
    return ( 
        <ul className="timeline m-auto">
            <li className="flex items-center mb-4">
                <div className="timeline-box">
                    <Card hit={menu[0]} title="Breakfast" />
                </div>
                
            </li>
            <li className="flex items-center mb-4">
                <div className="timeline-box">
                    <Card hit={menu[1]} title="Lunch" />
                </div>
                
            </li>
            <li className="flex items-center">
                <div className="timeline-box">
                    <Card hit={menu[2]} title="Dinner" />
                </div>
              
            </li>
        </ul>
    );
}
 
export default Menu;
