import PropTypes from "prop-types";
import Anchor from "@ui/anchor";
import { v4 as uuidv4 } from 'uuid';

const SubMenu = ({ menu }) => (
    <ul className="submenu">
        {menu.map((nav) => (
            <li key={`${uuidv4()}${nav.id}`}>
                <Anchor
                    path={nav.path}
                    className={nav.isLive ? "live-expo" : ""}
                >
                    {nav.text}
                    {nav?.icon && <i className={`feather ${nav.icon}`} />}
                </Anchor>
            </li>
        ))}
    </ul>
);

SubMenu.propTypes = {
    menu: PropTypes.arrayOf(PropTypes.shape({})),
};

export default SubMenu;
