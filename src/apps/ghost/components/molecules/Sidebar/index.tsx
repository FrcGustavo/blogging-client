import { FC } from 'react';
import { CSSSidebarContainer, CSSSidebar } from './styles';

type SidebarProps = {
  openMobile: boolean;
  onMobileNavClose: () => void;
};

const Sidebar: FC<SidebarProps> = ({ openMobile, onMobileNavClose }) => {
  const handleMobileNavClose = (_event: Event) => {
    _event.stopPropagation();
    onMobileNavClose();
  };

  return (
    <CSSSidebarContainer openMobile={openMobile} onClick={handleMobileNavClose}>
      <CSSSidebar onClick={(_event: Event) => _event.stopPropagation()}>
        <button>HOLLAA</button>
      </CSSSidebar>
    </CSSSidebarContainer>
  );
};

export default Sidebar;
