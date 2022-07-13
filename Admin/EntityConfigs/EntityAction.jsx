import SettingsIcon from '@mui/icons-material/Settings';
import { EntityAction } from '@List'
import ManageEntityConfigs from './Manage';

const EntityConfigsAction = ({ props }) => <EntityAction
    {...props}
    title='Configure Items'
    icon={SettingsIcon}
    dialog={ManageEntityConfigs}
/>

export default EntityConfigsAction