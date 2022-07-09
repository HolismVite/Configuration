import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import {
    List,
    ListAction,
    Text,
} from '@List'

const listActions = <>
    <ListAction
        title='Manage'
        icon={DisplaySettingsIcon}

    />
</>

const filters = <>
    <Text
        column='EntityGuid'
        placeholder='Entity Guid'
    />
</>

const headers = <>
    <th>Config</th>
    <th>Value</th>
</>

const row = (item) => {
    return <>
        <td>{item.configItemKey}</td>
        <td>{item.currentValue}</td>
    </>
}

const EntityConfigs = () => {
    return <List
        title='Entity Configs'
        entityType='EntityConfig'
        listActions={listActions}
        filters={filters}
        headers={headers}
        row={row}
    />
}

export default EntityConfigs