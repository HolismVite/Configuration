import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import NumbersIcon from '@mui/icons-material/Numbers';
import AbcIcon from '@mui/icons-material/Abc';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import CircleIcon from '@mui/icons-material/Circle';
import WorkspacesIcon from '@mui/icons-material/Workspaces';

import {
    Enum,
    HolismIcon,
    List,
    Text,
    ValueWithTitle,
} from '@List'
import UpsertConfigItem from './Upsert'

const filters = <>
    <Text
        column='Key'
    />
    <Text
        column='Name'
    />
    <Enum
        column='ConfigTypeId'
        placeholder='Config Type'
        entityType='ConfigType'
    />
</>

const headers = <>
    <th superAdmin>Key</th>
    <th>Name</th>
    <th>Type</th>
</>

const row = (item) => {

    let icon
    switch (item.typeKey.toLowerCase()) {
        case 'text':
            icon = AbcIcon
            break
        case 'naturalnumber':
        case 'integer':
        case 'realnumber':
            icon = NumbersIcon
            break
        case 'boolean':
        case 'nullableboolean':
            icon = ToggleOffIcon
            break
        case 'color':
            icon = ColorLensIcon
            break
        case 'singlechoice':
            icon = CircleIcon
            break
        case 'multiplechoice':
            icon = WorkspacesIcon
            break
        default:
            break
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
                    <ValueWithTitle
                        value={<HolismIcon icon={icon} />}
                        title={item.typeKey}
                    />
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
        filters={filters}
        headers={headers}
        row={row}
        hasDelete={isSuperAdmin}
        hasEdit={isSuperAdmin}
        create={isSuperAdmin && UpsertConfigItem}
    />
}

export default ConfigItems