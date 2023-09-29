import {resetUser} from '@/Redux/User/User';
import {MainRoutes, navigationData} from '@/environment';
import {useDispatch} from 'react-redux';
import {Link, useLocation} from 'react-router-dom';
import {ReactSVG} from 'react-svg';
import LogOutSvg from '@assets/power.svg';

export function SidePanelNavigation() {
  const pathname = useLocation().pathname;
  const dispatch = useDispatch();

  const onLogOutClick = () => {
    dispatch(resetUser());
  };

  return (
    <div className="side-panel__navigation">
      <ul className="side-panel__list">
        {navigationData.map(el => (
          <li key={el.text}>
            <Link to={el.route} className="side-panel__link">
              {pathname === el.route && <div className="side-panel__active" />}
              <ReactSVG
                src={el.img}
                className={`side-panel___svg 
                    ${pathname === el.route && 'side-panel___svg--active'}`}
              />
              <p
                className={`side-panel__text ${
                  pathname === el.route && 'side-panel___text--active'
                }`}>
                {el.text}
              </p>
            </Link>
          </li>
        ))}
      </ul>
      <Link
        to={MainRoutes.SignIn}
        onClick={onLogOutClick}
        className="side-panel__link side-panel__link--margin-top">
        <ReactSVG src={LogOutSvg} className="side-panel___svg " />
        <p className="side-panel__text">Log out</p>
      </Link>
    </div>
  );
}
