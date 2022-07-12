import {
    List,
    Text,
} from '@List';
import { EntityTypeFilter } from 'Entities'
import UpsertEntityConfigItem from './Upsert';
import ConfigType from '../ConfigType/Filter';
import ConfigTypeIcon from '../ConfigType/Icon';

const filters = <>
    <EntityTypeFilter />
    <ConfigType />
    <Text
        column='ConfigItemName'
        placeholder='Config name'
    />
</>

const headers = <>
    <th>Entity Type</th>
    <th>Name</th>
    <th>Type</th>
</>

const row = (entity) => {
    return <>
        <td>{entity.entityTypeName}</td>
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
        title="Entity Config Items"
        entityType='EntityConfigItem'
        filters={filters}
        headers={headers}
        row={row}
        create={isSuperAdmin && UpsertEntityConfigItem}
        hasDelete={isSuperAdmin}
    />
}

export default EntityConfigItems;