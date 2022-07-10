import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import NumbersIcon from '@mui/icons-material/Numbers';

import {
    List,
    Text,
    ValueWithTitle,
    HolismIcon,
} from '@List'
import UpsertConfigItem from './Upsert'

const headers = <>
    <th superAdmin>Key</th>
    <th>Name</th>
    <th>Type</th>
</>

const row = (item) => {

    let icon
    switch (item.typeKey.toLowerCase()) {
        case 'boolean':
            icon = ToggleOffIcon
            break;
        default:
            break;
    }
    
    return <>

        <td superAdmin>{item.key}</td>
        <td>
            <ValueWithTitle
                value={item.name}
                title={item.description}
            />
        </td>
        <td>
            {
                icon
                ?
                <HolismIcon icon={icon} />
                :
                item.typeKey
            }
        </td>
    </>
}

const ConfigItems = ({ isSuperAdmin }) => {
    return <List
        title='Config Items'
        entityType='ConfigItem'
        headers={headers}
        row={row}
        create={isSuperAdmin && UpsertConfigItem}
    />
}

export default ConfigItems