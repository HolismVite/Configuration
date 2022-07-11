import {
    List,
    Text,
} from '@List';
import UpsertEntityConfigItem from './Upsert';
import ConfigType from '../ConfigType/Filter';
import ConfigTypeIcon from '../ConfigType/Icon';

const filters = <>
    <Text
        column='ConfigItemName'
        placeholder='Config name'
    />
    <ConfigType />
</>

const headers = <>
    <th>Name</th>
    <th>Type</th>
</>

const row = (entity) => {
    return <>
        <td>{entity.configItemName}</td>
        <td>
            <ConfigTypeIcon
                type={entity.configTypeId}
            />
        </td>
    </>
}

const EntityConfigItems = ({ isSuperAdmin }) => {

    return <List
        title="Entity Type Configs"
        entityType='EntityTypeConfig'
        filters={filters}
        headers={headers}
        row={row}
        create={isSuperAdmin && UpsertEntityConfigItem}
        hasDelete={isSuperAdmin}
    />
}

export default EntityConfigItems;