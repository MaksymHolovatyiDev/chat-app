import './SidePanel.styles.css';
import {SidePanelNavigation} from '../SidePanelNavigation/SidePanelNavigation';
import {SidePanelUser} from '../SidePanleUser/SidePanelUser';

export function SidePanel() {
  return (
    <div className="side-panel">
      <SidePanelUser />
      <SidePanelNavigation />
    </div>
  );
}
